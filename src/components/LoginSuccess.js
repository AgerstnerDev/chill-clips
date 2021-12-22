import React from "react";
import { Card, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function LoginSuccess() {
  return (
    <>
      <Card>
        <Card.Body>
          <Alert>Login Successful</Alert>
          <Link to="/">Home page</Link>
        </Card.Body>
      </Card>
    </>
  );
}
