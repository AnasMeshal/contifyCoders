import React from "react";

// Styles
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { StyledCard, Linking, StyledSubjectImage } from "./styles";

const SubjctItem = ({ subject }) => {
  return (
    <StyledCard>
      <Linking to={`subjects/${subject.slug}`}>
        <CardActionArea>
          <StyledSubjectImage src={subject.img} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {subject.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              This subject is being teached by {subject.teacher}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Linking>
    </StyledCard>
  );
};

export default SubjctItem;
