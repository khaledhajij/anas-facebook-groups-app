import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  categoriesDeleted,
  categoriesSelector,
  categoryCheckboxChecked,
} from "../../CategoriesSlice";
import { categorySelected, categoryUnselected } from "../../groupsSlice";
import { useToast } from "@chakra-ui/react";

const CategoriesTable = () => {
  const dispatch = useDispatch();
  const [expandedRows, setExpandedRows] = useState(null);
  const categories = useSelector(categoriesSelector);
  const rowExpansionTemplate = (data) => {
    return (
      <div className="p-3">
        <h5>Groups in {data.name}</h5>
        <DataTable value={data.groups}>
          <Column field="name" header="Name" sortable></Column>
          <Column field="members" header="Members" sortable></Column>
        </DataTable>
      </div>
    );
  };
  const handleCheck = (rowData) => {
    const selectedGroupsIds = rowData.groupsIds;
    console.log(rowData);
    console.log(selectedGroupsIds);
    dispatch(
      !rowData.selected
        ? categorySelected(selectedGroupsIds)
        : categoryUnselected(selectedGroupsIds)
    );
    dispatch(categoryCheckboxChecked(rowData));
  };
  return (
    <div className="categories-table">
      <div className="groups-categories-text-title">
        <h2>Groups categories</h2>
        <Button
          icon="pi pi-trash"
          disabled={!categories.length}
          className="p-button-rounded p-button-danger"
          onClick={() => dispatch(categoriesDeleted())}
        />
      </div>
      <DataTable
        header=""
        value={categories}
        onRowToggle={(e) => setExpandedRows(e.data)}
        expandedRows={expandedRows}
        rowExpansionTemplate={rowExpansionTemplate}
        dataKey="id"
      >
        <Column expander field="name" style={{ width: "10px" }} />
        <Column field="name" />
        <Column
          field="selected"
          body={(rowData) => {
            console.log(rowData);
            return (
              <Checkbox
                checked={rowData.selected}
                onChange={() => handleCheck(rowData)}
              />
            );
          }}
        />
      </DataTable>
    </div>
  );
};

export default CategoriesTable;
