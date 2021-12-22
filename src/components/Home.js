import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Card>
        <Card.Body>
          <h1>chill-clips</h1>
          <Link to="/signup">Sign up</Link>
          <Link to="/Login">Login</Link>
        </Card.Body>
      </Card>
    </>
  );
}
