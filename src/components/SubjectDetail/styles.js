import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 40px;
`;

export const StartContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 60%;
  margin: auto;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const Name = styled.h1`
  font-size: 45px;
  margin-bottom: 0;
`;

export const Teacher = styled.h1`
  font-size: 30px;
`;

export const SubjectImage = styled.img`
  width: 80%;
  height: 300px;
  border: solid 2px;
`;

export const ContainerPDF = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  justify-content: center;
  flex-wrap: wrap;
`;
