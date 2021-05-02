import React from "react";

// Styles
import { TitlePDF, LinkStyled } from "./styles";
import Button from "@material-ui/core/Button";

const PDFItem = ({ pdf }) => {
  return (
    <>
      <TitlePDF>{pdf.name}</TitlePDF>
      <LinkStyled
        style={{ alignSelf: "center" }}
        to={pdf.file}
        target="_blank"
        download
      >
        <Button
          style={{ width: "200px", height: "50px", alignSelf: "center" }}
          color="secondary"
        >
          Download
        </Button>
      </LinkStyled>
    </>
  );
};

export default PDFItem;
