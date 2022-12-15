import Grid from "@mui/material/Grid";
import { useState } from "react";
import { useForm } from "./hooks";
import { Menu } from "./Menu";

import { Panel } from "./Panel";
const formData = {
  //fase
  method:"",
  cannibals: 0,
  missionary: 0,
  side: "left",
  time: "1",
};

const formValidations = {
  //fase
  cannibals: [(value) => value >= 0, ""],
  missionary: [(value) => value >= 0, ""],
  side: [(value) => value.length >= 0, ""],
  time: [(value) => value.length > 0, ""],
};

const App = () => {
  const {
    //accion
    onInputChange,
    // form sunmit
    formState,
    // estado validaciones formulario
    isFormValid,
    //data
    cannibals,
    missionary,
    side,
    time,
  } = useForm(formData, formValidations);
  const [data, setData] = useState(null);
  const [desactivar, setDesactivar] = useState({ readOnly: false });
  return (
    <div className="App">
      <Grid container className="container">
        <Grid
          item
          xs={2}
          md={3}
          direction="row"
          justifyContent="center"
          alignItems="baseline"
          sx={{ background: "white", p: "20px" }}
        >
          <Menu
            setData={setData}
            onInputChange={onInputChange}
            formState={formState}
            isFormValid={isFormValid}
            cannibals={cannibals}
            missionary={missionary}
            side={side}
            time={time}
            desactivar={desactivar}
            setDesactivar={setDesactivar}
          />
        </Grid>
        <Grid item xs={10} md={9} sx={{ background: "#162856", p: "50px" }}>
          <Panel
            data={data}
            formState={formState}
            desactivar={desactivar}
            setDesactivar={setDesactivar}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
