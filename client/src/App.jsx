import Grid from "@mui/material/Grid";
import { Menu } from "./menu";
import { Panel } from "./Panel";


function App() {
  return (
    <div className="App">
      <Grid container className="container" >
        <Grid
          item
          xs={2}
          md={3}

          direction="row"
          justifyContent="center"
          alignItems="baseline"
          sx={{ background: "white", p: "20px" }}
        >
          <Menu />
        </Grid>
        <Grid item xs={10} md={9} sx={{ background: "#162856", p: "50px" }}>
          <Panel/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
