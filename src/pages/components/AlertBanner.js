import { Alert, AlertTitle } from "@mui/material";
import React from "react";

export const AlertBanner = ({
  type = "error",
  title = "Error",
  message = "An unexpected error occurred. Please try again later.",
}) => {
  return (
    <Alert severity={type}>
      <AlertTitle>{title}</AlertTitle>
      {message}
    </Alert>
  );
};
