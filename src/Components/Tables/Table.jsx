import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Tag } from "primereact/tag";
import { Button } from "primereact/button";
import CheckboxInput from "../CheckboxInput";
import SelectedGroupsTable from "./SelectedGroupsTable";
import { useSelector } from "react-redux";
import { groupsSelector, selectedGroupsSelector } from "../../groupsSlice";
const Table = () => {
  const groups = useSelector(groupsSelector);
  const selectedGroups = useSelector(selectedGroupsSelector);
  const [visible, setVisible] = useState(false);

  const statusBodyTemplate = (product) => {
    return (
      <Tag value={product.inventoryStatus} severity="success">
        {product.members}
      </Tag>
    );
  };
  const DataTableHeader = () => {
    return (
      <div className="table-header">
        <p>Groups</p>
        <Button
          disabled={!selectedGroups.length}
          onClick={() => setVisible(true)}
        >
          Save selected groups as a category
        </Button>
      </div>
    );
  };

  return (
    <div className="table">
      <DataTable
        header={<DataTableHeader />}
        value={groups}
        size="normal"
        showGridlines
        stripedRows
        paginator
        rows={10}
        rowsPerPageOptions={[5, 10, 25, 50]}
        removableSort
        className="groups-table"
        resizableColumns
      >
        <Column
          body={(rowData) => (
            <CheckboxInput
              groups={groups}
              selectedGroups={selectedGroups}
              rowData={rowData}
              id={rowData.id}
            />
          )}
        ></Column>
        <Column
          filter
          resizeable
          filterPlaceholder="Search by name"
          sortable
          field="name"
          header="Name"
          style={{ width: "33%" }}
        ></Column>
        <Column
          filter
          resizeable
          filterPlaceholder="Search by id"
          field="id"
          header="Id"
        ></Column>
        <Column
          filter
          style={{ width: "100px" }}
          resizeable
          filterPlaceholder="Filter by members count"
          dataType="numeric"
          sortable
          field="members"
          header="Members"
          body={statusBodyTemplate}
          bodyClassName="text-center"
        ></Column>
      </DataTable>
      <SelectedGroupsTable visible={visible} setVisible={setVisible} />
    </div>
  );
};

export default Table;
