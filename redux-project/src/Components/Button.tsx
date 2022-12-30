import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

type CounterProps = {
  onIncrease: () => void;
  onDecrease: () => void;
  onIncreaseBy: (diff: number) => void;
};

export default function BasicButtons({ onIncrease, onDecrease }: CounterProps) {
  return (
    <div style={{ height: "90vh", display: "flex", justifyContent: "center" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Stack spacing={2} direction="row">
          <Button variant="contained" onClick={onIncrease}>
            Message+
          </Button>
          <Button variant="outlined" onClick={onDecrease}>
            Message-
          </Button>
        </Stack>
      </div>
    </div>
  );
}
