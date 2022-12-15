import { styled } from "@mui/material/styles";
import Canvas from "./Canvas";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  fontSize: "20px",
  color: theme.palette.text.secondary,
}));
export const Panel = ({ data, formState, desactivar, setDesactivar }) => {
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
        ubicacion={formState}
        desactivar={desactivar}
        setDesactivar={setDesactivar}
      />
    </>
  );
};
