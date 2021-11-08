import React from 'react';
import ListGroup from "react-bootstrap/ListGroup";


function Skills(props) {
    
const skillsList = props.skills.map((skill)=> (
        <ListGroup.Item>
          <p>{skill}</p>
          </ListGroup.Item>
));

  return (
    <div>
      <h2 className="main-headings">Skills</h2>
      <ListGroup variant="flush">
      {skillsList} 
  </ListGroup>
    </div>
  );
}

export default Skills;
