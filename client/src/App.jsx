import Grid from "@mui/material/Grid";
import { useState, useEffect } from "react";
import { useForm } from "./hooks";
import { Menu } from "./Menu";

import { Panel } from "./Panel";
const formData = {
  //fase
  method: "",
  cannibals: "",
  missionary: "",
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
  const [cani1, setCani1] = useState({ x: 0, y: 15, lado: "izq" });
  const [cani2, setCani2] = useState({ x: 0, y: 55, lado: "izq" });
  const [cani3, setCani3] = useState({ x: 0, y: 95, lado: "izq" });
  const [min1, setMin1] = useState({ x: 30, y: 15, lado: "izq" });
  const [min2, setMin2] = useState({ x: 30, y: 55, lado: "izq" });
  const [min3, setMin3] = useState({ x: 30, y: 95, lado: "izq" });

 

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
            cani1={cani1}
            cani2={cani2}
            cani3={cani3}
            setCani1={setCani1}
            setCani2={setCani2}
            setCani3={setCani3}
            min1={min1}
            min2={min2}
            min3={min3}
            setMin1={setMin1}
            setMin2={setMin2}
            setMin3={setMin3}
            missionary={missionary}
            side={side}
            time={time}
          />
        </Grid>
        <Grid item xs={10} md={9} sx={{ background: "#162856", p: "50px" }}>
          <Panel
            data={data}
            formState={formState}
            cani1={cani1}
            cani2={cani2}
            cani3={cani3}
            min1={min1}
            min2={min2}
            min3={min3}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
