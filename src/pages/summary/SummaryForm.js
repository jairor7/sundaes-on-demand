import React, { useState } from "react";
import {
  FormControl,
  Checkbox,
  FormControlLabel,
  Button,
  Popover,
  Grid,
} from "@mui/material";

export const SummaryForm = () => {
  const [checkboxTerms, setCheckboxTerms] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const openPopover = Boolean(anchorEl);

  const labelCheckboxTerms = (
    <span>
      I agree to{" "}
      <span
        aria-owns={openPopover ? "mouse-hover-popover" : undefined}
        style={{ color: "blue" }}
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        Terms and conditions
      </span>
      <Popover
        id="mouse-hover-popover"
        sx={{
          pointerEvents: "none",
        }}
        className="popover-bottom"
        open={openPopover}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
        transformOrigin={{ horizontal: "center", vertical: "top" }}
        disableAutoFocus
      >
        No ice cream will actually be delivered
      </Popover>
    </span>
  );

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <FormControl>
          <FormControlLabel
            control={<Checkbox />}
            label={labelCheckboxTerms}
            checked={checkboxTerms}
            onChange={() => setCheckboxTerms(!checkboxTerms)}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" disabled={!checkboxTerms}>
          Confirm order
        </Button>
      </Grid>
    </Grid>
  );
};
