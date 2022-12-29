import React from "react";
import { Stack, Alert, AlertTitle } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const MuiAlert = () => {
  return (
    <Stack spacing={2}>
      <Alert severity="error">This is an error alert</Alert>
      <Alert severity="warning">This is a warning alert</Alert>
      <Alert severity="info">This is a info alert</Alert>
      <Alert severity="success">This a success alert</Alert>

      <Alert variant="outlined" severity="error">
        This is an error alert
      </Alert>
      <Alert variant="outlined" severity="warning">
        This is a warning alert
      </Alert>
      <Alert variant="outlined" severity="info">
        This is a info alert
      </Alert>
      <Alert variant="outlined" severity="success">
        This a success alert
      </Alert>

      <Alert variant="filled" severity="error">
        <AlertTitle>Error</AlertTitle>
        This is an error alert
      </Alert>
      <Alert variant="filled" severity="warning">
        <AlertTitle>Warning</AlertTitle>
        This is a warning alert
      </Alert>
      <Alert variant="filled" severity="info">
        <AlertTitle>Info</AlertTitle>
        This is a info alert
      </Alert>
      <Alert variant="filled" severity="success" icon={<CheckIcon />}>
        <AlertTitle>Successg</AlertTitle>
        This a success alert
      </Alert>
    </Stack>
  );
};

export default MuiAlert;
