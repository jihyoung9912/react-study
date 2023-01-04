import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../modules";
import { decrease, increase } from "../modules/counter";

const BasicButtons = () => {
  //상태 조회. state 의 상태는 index 에서 선언한 RootState
  const count = useSelector((state: RootState) => state.counter.count);
  // Dispatch 함수 가져오기
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increase());
  };

  const onDecrease = () => {
    dispatch(decrease());
  };

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
};

export default BasicButtons;
