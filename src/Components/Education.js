import React from 'react';
import ListGroup from "react-bootstrap/ListGroup";

function Education(props) {

  const listEducation = props.education.map((edu) => (
    <ListGroup.Item>
      <h3>{edu.course}</h3>
      <h4>{edu.institution}</h4>
      <p>{edu.period}</p>
    </ListGroup.Item>
  ));

  return (
    <div>
    <div className="heading-container">
      <h2 className="main-headings">education</h2>
      </div>
      <ListGroup variant="flush">{listEducation}</ListGroup>
    </div>
  );
}

export default Education;
