import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

function WorkExp(props) {
  const listWorkExp = props.workExp.map((item) => (
    <ListGroup.Item>
      <h3>{item.job_title}</h3>
      <h4>{item.company}</h4>
      <p>{item.period}</p>
      <p>{item.description}</p>
    </ListGroup.Item>
  ));

  return (
    <div>
      <div className="heading-container">
        <i class="far fa-building fa-2x"></i>
        <h2 className="main-headings">work experience</h2>
      </div>
      <ListGroup variant="flush">{listWorkExp}</ListGroup>
    </div>
  );
}

export default WorkExp;
