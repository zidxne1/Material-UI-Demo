import React from "react";
import { Button, Snackbar, Alert, AlertProps } from "@mui/material";
import { useState, forwardRef } from "react";

const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(
  function SnackbarAlert(props, ref) {
    return <Alert elevation={6} ref={ref} {...props} />;
  }
);

const MuiSnackbar = () => {
  const [open, setOpen] = useState(false);
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return (
    <>
      <Button onClick={() => setOpen(true)}>Submit</Button>
      {/* <Snackbar
        message="Form Submitted successcfully"
        autoHideDuration={4000}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      /> */}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <SnackbarAlert onClick={handleClose} severity="success">
          Form submitted succesfully
        </SnackbarAlert>
      </Snackbar>
    </>
  );
};

export default MuiSnackbar;