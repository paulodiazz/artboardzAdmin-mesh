import React from "react";
import Form from "../UI/Form";
import GeneralDescForm from "./GeneralDescForm";

const EditCollectionForm = () => {
  return (
    <Form Title={"Edit collection"}>
      <GeneralDescForm />
    </Form>
  );
};

export default EditCollectionForm;
