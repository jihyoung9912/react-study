import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function BasicButtons() {
  return (
    <div style={{ height: "90vh", display: "flex", justifyContent: "center" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Stack spacing={2} direction="row">
          <Button variant="contained">Message</Button>
          <Button variant="outlined">Alarm</Button>
        </Stack>
      </div>
    </div>
  );
}
