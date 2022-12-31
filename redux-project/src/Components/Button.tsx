import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

type CounterProps = {
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onIncreaseBy: (diff: number) => void;
};

export default function BasicButtons({
  count,
  onIncrease,
  onDecrease,
}: CounterProps) {
  return (
    <div style={{ height: "90vh", display: "flex", justifyContent: "center" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Stack spacing={4} direction="row">
          <Button variant="contained" onClick={onIncrease}>
            Message+
          </Button>
          {count > 0 && (
            <Button variant="outlined" onClick={onDecrease}>
              Message-
            </Button>
          )}
        </Stack>
      </div>
    </div>
  );
}
