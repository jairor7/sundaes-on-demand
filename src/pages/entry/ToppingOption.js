import { Grid } from "@mui/material";
import React from "react";
import baseUrl from "../../api/baseUrl";

export const ToppingOption = ({ item: { name, imagePath } }) => {
  return (
    <Grid
      container
      alignItems={"center"}
      direction={"column"}
      rowGap={1}
    >
      <img
        src={`${baseUrl}/${imagePath}`}
        className="option__img"
        alt={`${name} topping`}
      />
      <span>{name}</span>
    </Grid>
  );
};
