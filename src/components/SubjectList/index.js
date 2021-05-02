import React from "react";

// Data
import subjects from "../../data";

//Components
import SubjectItem from "../SubjectItem";

// Styles
import { SubjectListContainer } from "./styles";

const SubjectList = () => {
  const subjectList = subjects.map((subject) => (
    <SubjectItem subject={subject} key={subject.id} />
  ));
  return <SubjectListContainer>{subjectList}</SubjectListContainer>;
};

export default SubjectList;
