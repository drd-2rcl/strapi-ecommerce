import React from 'react'
import { Button, Alert } from "reactstrap";
import Layout from "../components/Layout";


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
