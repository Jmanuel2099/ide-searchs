import { styled } from "@mui/material/styles";
import Canvas from "./Canvas";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  fontSize: "20px",
  color: theme.palette.text.secondary,
}));
export const Panel = ({
  data,
  formState,
  cani1,
  cani2,
  cani3,
  min1,
  min2,
  min3,
}) => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Item>{`Algorithm used: ${formState.method}`}</Item>
        </Grid>
        <Grid item xs={4} md={4}>
          <Item>{`Generated nodes: ${
            !!data ? data.generated_nodes : ""
          }`}</Item>
        </Grid>
        <Grid item xs={4} md={4}>
          <Item>{`Path len: ${!!data ? data.path_len : ""}`}</Item>
        </Grid>
        <Grid item xs={4} md={4}>
          <Item>{`Win: ${!!data ? data.win : ""}`}</Item>
        </Grid>
      </Grid>
      <hr />
      <Canvas
        data={!!data ? data.path : []}
        cani1={cani1}
        cani2={cani2}
        cani3={cani3}
        min1={min1}
        min2={min2}
        min3={min3}
        ubicacion={formState}
       
      />
      <hr />
      <Grid container spacing={2}>
        <Grid item xs={8} md={8}></Grid>
        <Grid item xs={4} md={4}>
          <Item>
            <Button variant="outlined" fullWidth>
              Next move
            </Button>
          </Item>
        </Grid>
      </Grid>
    </>
  );
};
