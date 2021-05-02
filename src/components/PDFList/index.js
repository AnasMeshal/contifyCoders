import React from "react";

// Components
import PDFItem from "../PDFItem";

const PDFList = ({ subject }) => {
  const list = subject.pdfs.map((pdf) => {
    return <PDFItem pdf={pdf} />;
  });

  return <>{list}</>;
};

export default PDFList;
