import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export default function ButtonExample() {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const Box2 = styled(Box)(({ theme }) => ({
    ...theme.typography.body2,
    backgroundColor: "#f5f5f5",
    padding: theme.spacing(3),
  }));
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Button variant="outlined" color="secondary">
          secondary
        </Button>
        <Button variant="contained" color="primary">
          primary
        </Button>
      </Box>
      <Box2 sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Item>xs=8</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={8}>
            <Item>xs=8</Item>
          </Grid>
        </Grid>
      </Box2>
    </>
  );
}
