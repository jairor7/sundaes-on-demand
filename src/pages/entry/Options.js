import { Grid } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOptions } from "../../store/actions/entry/optionsAction";
import { AlertBanner } from "../components/AlertBanner";
import { ScoopOption } from "./ScoopOption";
import { ToppingOption } from "./ToppingOption";

export const Options = ({ optionType }) => {
  const dispatch = useDispatch();
  const {
    scoopsOptions = [],
    toppingsOptions = [],
    messageError = "",
  } = useSelector((state) => state.optionsReducer);

  useEffect(() => {
    dispatch(getOptions(optionType));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [optionType]);

  if (messageError) {
    return (
      <AlertBanner
        type="error"
        title={"Error"}
        message={messageError}
      />
    );
  } else if (optionType === "scoops") {
    return (
      <Grid container justifyContent="space-around" rowGap={2}>
        {scoopsOptions.map((scoopOption) => (
          <Grid
            key={scoopOption.name}
            item
            rowGap={1}
            xs={12}
            sm={6}
            md={2}
          >
            <ScoopOption item={scoopOption} />
          </Grid>
        ))}
      </Grid>
    );
  } else if (optionType === "toppings") {
    return (
      <Grid container justifyContent="space-around" rowGap={2}>
        {toppingsOptions.map((toppingOption) => (
          <Grid
            key={toppingOption.name}
            item
            rowGap={1}
            xs={12}
            sm={6}
            md={2}
          >
            <ToppingOption item={toppingOption} />
          </Grid>
        ))}
      </Grid>
    );
  }
  return null;
};
