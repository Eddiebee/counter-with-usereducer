import React, { useReducer } from "react";
import Button from "@mui/material/Button";
import { Container, Stack } from "@mui/material";
import { Box } from "@mui/system";

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error("Invalid action");
  }
};
const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <Container maxWidth="sm">
        <Box sx={{ p: 5, bgcolor: "#e3f2fd" }}>
          <p>Count: {state.count}</p>
          <br />
          <Stack direction="row" spacing={2}>
            <Button
              variant="outlined"
              color="secondary"
              size="small"
              onClick={() => dispatch({ type: "decrement" })}
            >
              -
            </Button>
            <Button
              variant="outlined"
              color="primary"
              size="small"
              onClick={() => dispatch({ type: "increment" })}
            >
              +
            </Button>
          </Stack>
        </Box>
      </Container>
    </>
  );
};

export default Counter;
