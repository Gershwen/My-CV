import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Profilepic from "../Images/gershwen4.png";

function MyCard(props) {
  return (
    <div className="card-container">
      <Card style={{ width: "18rem"}}>
      <div className="img-container">
        <Card.Img style={{width: "10rem" }} variant="top" src={Profilepic} />
        </div>
        <Card.Body>
          <Card.Title>Gershwen McPherson</Card.Title>
          <Card.Title>Full Stack Web Developer</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Cape Town, South Africa</ListGroupItem>
          <ListGroupItem>
            <a href="mailto:gershwen@gmail.com">gershwen@gmail.com</a>
          </ListGroupItem>
          <ListGroupItem>
          <div className="icon-container">
            <a href="https://www.linkedin.com/in/gershwen-mcpherson/"><i class="fab fa-linkedin fa-2x"></i></a><a href="https://github.com/Gershwen"><i class="fab fa-github fa-2x"></i></a>
          </div>
          </ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Text>
            I built this page with React and styled with ReactBootstrap. To view
            the source code you may visit my github repo at https://github.com/Gershwen/My-CV.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MyCard;
