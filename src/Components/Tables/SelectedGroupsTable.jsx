import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Dialog } from "primereact/dialog";
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { selectedGroupsSelector } from "../../groupsSlice";
import { addCategory, categoriesSelector } from "../../CategoriesSlice";
import { useToast } from "@chakra-ui/react";

const SelectedGroupsTable = ({ visible, setVisible }) => {
  const dispatch = useDispatch();
  const selectedGroups = useSelector(selectedGroupsSelector);
  const [text, setText] = useState("");
  const categoryExists = useSelector(categoriesSelector).some(
    (category) => category.name === text.trim()
  );
  const toast = useToast();
  const handleAccept = () => {
    // Check if a category with the same name already exists

    if (categoryExists) {
      // Show a toast message if the category name already exists
      toast({
        title: "Error",
        description: "A category with the same name already exists",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    const category = {
      name: text,
      groupsIds: selectedGroups.map((group) => group.id),
      selected: false,
      id: nanoid(),
    };
    dispatch(addCategory({ category }));
    setVisible(false);
    toast({
      title: "Done",
      description: "Category added successfully",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };
  return (
    <div className="selected-groups-table">
      <Dialog
        header="Save selected groups as a category"
        visible={visible}
        onHide={() => setVisible(false)}
        modal
        style={{ width: "50vw" }}
        footer={
          <div>
            <Button
              label="Decline"
              icon="pi pi-times"
              onClick={() => setVisible(false)}
              className="p-button-danger"
            />
            <Button
              disabled={!text}
              className="p-button-success"
              label="Accept"
              icon="pi pi-check"
              onClick={() => handleAccept()}
            />
          </div>
        }
      >
        <div className="category-name">
          <span className="p-float-label">
            <InputText
              id="in"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <label htmlFor="in">Category name</label>
          </span>
        </div>
        <DataTable value={selectedGroups}>
          <Column field="name" header="Group name" />
          <Column field="members" header="Group members" />
        </DataTable>
      </Dialog>
    </div>
  );
};

export default SelectedGroupsTable;
