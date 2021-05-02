import React from "react";
import { useParams } from "react-router";

// Data
import subjects from "../../data";

// Styles
import {
  Wrapper,
  StartContainer,
  SubjectImage,
  ContainerPDF,
  Name,
  Teacher,
} from "./styles";

// Components
import PDFList from "../PDFList";

const SubjectDetail = () => {
  const { subjectSlug } = useParams();

  const subject = subjects.find((subject) => subject.slug === subjectSlug);
  console.log(subject.pdfs);

  return (
    <Wrapper>
      <StartContainer>
        <Name>{subject.name}</Name>
        <Teacher>by: {subject.teacher}</Teacher>
        <SubjectImage src={subject.img} />
        <h1>{subject.name} Files:</h1>
        <ContainerPDF>
          <PDFList subject={subject} />
        </ContainerPDF>
      </StartContainer>
    </Wrapper>
  );
};

export default SubjectDetail;
