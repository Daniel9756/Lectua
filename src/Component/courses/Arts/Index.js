import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import Art from "./Art";

const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: "center",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));
function Arts() {
  const classes = useStyles();

  const arts = [
    {
      id: "1",
      banner: `/images/whero.jpg`,
      subject: "History of Nigeria",
      institution: "Cornelius Academy",
      price: "Free",
      teacher: "Eze Kennedy",
    },
    {
      id: "2",
      banner: `/images/whero5.jpg`,
      subject: "Government",
      institution: "Peace school",
      price: "5000",
      teacher: "Eze Chukwunonso",
    },
    {
      id: "3",
      banner: `/images/whero5.jpg`,
      subject: "Food and Nutrition",
      institution: "Cornelius Academy",
      price: "500",
      teacher: "Eze Chukwunonso",
    },
    {
      id: "4",
      banner: `/images/whero5.jpg`,
      subject: "Public Speaking",
      institution: "Cornelius Academy",
      price: "500",
      teacher: "Eze Chukwunonso",
    },
    {
      id: "5",
      banner: `/images/whero5.jpg`,
      subject: "Agriculture",
      institution: "Success Institute",
      price: "3000",
      teacher: "Nnaji Ngozika",
    },
    {
      id: "6",
      banner: `/images/whero.jpg`,
      subject: "History of Nigeria",
      institution: "Cornelius Academy",
      price: "Free",
      teacher: "Eze Kennedy",
    },
    {
      id: "7",

      banner: `/images/whero5.jpg`,
      subject: "Government",
      institution: "Peace school",
      price: "5000",
      teacher: "Eze Chukwunonso",
    },
    {
      id: "8",
      banner: `/images/whero5.jpg`,
      subject: "Food and Nutrition",
      institution: "Cornelius Academy",
      price: "500",
      teacher: "Eze Chukwunonso",
    },
    {
      id: "9",
      banner: `/images/whero.jpg`,
      subject: "Public Speaking",
      institution: "Cornelius Academy",
      price: "500",
      teacher: "Eze Chukwunonso",
    },
    {
      id: "10",
      banner: `/images/whero.jpg`,
      subject: "Agriculture",
      institution: "Success Institute",
      price: "3000",
      teacher: "Nnaji Ngozika",
    },
  ];
  return (
    <Box container className={classes.container}>
      {arts.map((art) => (
        <Art
          id={art.id}
          key={art.id}
          banner={art.banner}
          subject={art.subject}
          institution={art.institution}
          price={art.price}
          teacher={art.teacher}
        />
      ))}
    </Box>
  );
}

export default Arts;
