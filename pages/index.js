import React from 'react'
import { Button, Alert } from "reactstrap";
import Layout from "../components/layout";


export default () => {
  return (
    <Layout>
      <div>
        <Alert color= "primary">
        Whatsup!
        </Alert>
        &nbsp; <Button color="primary" />
      </div>
    </Layout>
  );
};
