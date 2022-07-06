import { Grid } from "@mui/material";
import url from "../../api/baseUrl";

export const ScoopOption = ({ item: { name, imagePath } }) => {
  return (
    <Grid
      container
      alignItems={"center"}
      direction={"column"}
      rowGap={1}
    >
      <img
        src={`${url}/${imagePath}`}
        className="option__img"
        alt={`${name} scoop`}
      />
      <span>
        {name}
        <input type={"number"} min={0} />
      </span>
    </Grid>
  );
};
