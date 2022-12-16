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
  const [indice, setIndice] = useState(0);
  const [max, setMax] = useState(0);

  useEffect(() => {
    setIndice(0);
    setMax(!!data ? (!!data.path ? data.path.length : 0) : 0);
  }, [data]);


  const nextState = () => {
    if (indice >= 0 && indice < max) {
      const state = data.path[indice];
      validarm(state.missionary, state.side);
      validarc(state.cannibals, state.side);
      setIndice(indice + 1);
    }
  };

  const validarm = (value, s) => {
    if (s == "left") {
      switch (value) {
        case 0:
          setMin1({ x: 220, y: 15, lado: "der" });
          setMin2({ x: 220, y: 55, lado: "der" });
          setMin3({ x: 220, y: 95, lado: "der" });

          break;
        case 1:
          if (min1.lado == "der" && min2.lado == "der" && min3.lado == "der") {
            setCani1({ x: 0, y: 15, lado: "izq" });

            break;
          } else if (
            min1.lado == "izq" &&
            min2.lado == "izq" &&
            min3.lado == "izq"
          ) {
            setMin1({ x: 220, y: 15, lado: "der" });
            setMin2({ x: 220, y: 55, lado: "der" });
            break;
          } else if (
            (min1.lado == "izq" && min2.lado == "der" && min3.lado == "der") ||
            (min1.lado == "der" && min2.lado == "der" && min3.lado == "izq") ||
            (min1.lado == "der" && min2.lado == "izq" && min3.lado == "der")
          ) {
            break;
          } else if (
            min1.lado == "izq" &&
            min2.lado == "izq" &&
            min3.lado == "der"
          ) {
            setMin1({ x: 220, y: 15, lado: "der" });
            break;
          } else if (
            min1.lado == "izq" &&
            min2.lado == "der" &&
            min3.lado == "izq"
          ) {
            setMin1({ x: 220, y: 55, lado: "der" });
            break;
          }
          if (min1.lado == "der" && min2.lado == "izq" && min3.lado == "izq") {
            setMin1({ x: 220, y: 55, lado: "der" });
            break;
          }
          break;
        case 2:
          if (min1.lado == "der" && min2.lado == "der" && min3.lado == "der") {
            setMin1({ x: 40, y: 15, lado: "izq" });
            setMin2({ x: 40, y: 55, lado: "izq" });
            break;
          } else if (
            min1.lado == "izq" &&
            min2.lado == "izq" &&
            min3.lado == "izq"
          ) {
            setMin1({ x: 220, y: 15, lado: "der" });
            break;
          } else if (
            (min1.lado == "izq" && min2.lado == "izq" && min3.lado == "der") ||
            (min1.lado == "der" && min2.lado == "izq" && min3.lado == "izq") ||
            (min1.lado == "izq" && min2.lado == "der" && min3.lado == "izq")
          ) {
            break;
          } else if (
            min1.lado == "der" &&
            min2.lado == "izq" &&
            min3.lado == "der"
          ) {
            setMin1({ x: 40, y: 15, lado: "izq" });
            break;
          } else if (
            min1.lado == "der" &&
            min2.lado == "der" &&
            min3.lado == "izq"
          ) {
            setMin1({ x: 40, y: 15, lado: "izq" });
            break;
          }
          if (min1.lado == "izq" && min2.lado == "der" && min3.lado == "der") {
            setMin2({ x: 40, y: 55, lado: "izq" });
            break;
          }
          break;
        case 3:
          if (min1.lado == "der" && min2.lado == "der" && min3.lado == "der") {
            setMin1({ x: 40, y: 15, lado: "izq" });
            setMin2({ x: 40, y: 55, lado: "izq" });
            setMin3({ x: 40, y: 95, lado: "izq" });
            break;
          } else if (
            min1.lado == "izq" &&
            min2.lado == "izq" &&
            min3.lado == "izq"
          ) {
            break;
          } else if (
            min1.lado == "izq" &&
            min2.lado == "izq" &&
            min3.lado == "der"
          ) {
            setMin3({ x: 40, y: 95, lado: "izq" });
            break;
          } else if (
            min1.lado == "der" &&
            min2.lado == "izq" &&
            min3.lado == "izq"
          ) {
            setMin1({ x: 40, y: 15, lado: "izq" });
            break;
          }
          if (min1.lado == "izq" && min2.lado == "der" && min3.lado == "izq") {
            setMin2({ x: 40, y: 55, lado: "izq" });
            break;
          } else if (
            min1.lado == "der" &&
            min2.lado == "izq" &&
            min3.lado == "der"
          ) {
            setMin1({ x: 40, y: 15, lado: "izq" });
            setMin3({ x: 40, y: 95, lado: "izq" });
            break;
          } else if (
            min1.lado == "der" &&
            min2.lado == "der" &&
            min3.lado == "izq"
          ) {
            setMin1({ x: 40, y: 15, lado: "izq" });
            setMin2({ x: 40, y: 55, lado: "izq" });
            break;
          }
          if (min1.lado == "izq" && min2.lado == "der" && cani3.lado == "der") {
            setMin2({ x: 40, y: 15, lado: "izq" });
            setMin3({ x: 40, y: 95, lado: "izq" });
            break;
          }
          // expected output: "Mangoes and papayas are $2.79 a pound."
          break;
        default:
          console.log("Mangoes and papayas are $2.79 a pound.");
          break;
      }
    } else {
      switch (value) {
        case 0:
          setMin1({ x: 40, y: 15, lado: "izq" });
          setMin2({ x: 40, y: 55, lado: "izq" });
          setMin3({ x: 40, y: 95, lado: "izq" });

          break;
        case 1:
          if (min1.lado == "izq" && min2.lado == "izq" && min3.lado == "izq") {
            setMin1({ x: 220, y: 15, lado: "der" });

            break;
          } else if (
            min1.lado == "der" &&
            min2.lado == "der" &&
            min3.lado == "der"
          ) {
            setMin1({ x: 40, y: 15, lado: "izq" });
            setMin2({ x: 40, y: 55, lado: "izq" });
            break;
          } else if (
            (min1.lado == "izq" && min2.lado == "izq" && min3.lado == "der") ||
            (min1.lado == "der" && min2.lado == "izq" && min3.lado == "izq") ||
            (min1.lado == "izq" && min2.lado == "der" && min3.lado == "izq")
          ) {
            break;
          } else if (
            min1.lado == "der" &&
            min2.lado == "der" &&
            min3.lado == "izq"
          ) {
            setMin1({ x: 40, y: 15, lado: "izq" });
            break;
          } else if (
            min1.lado == "izq" &&
            min2.lado == "der" &&
            min3.lado == "der"
          ) {
            setMin2({ x: 40, y: 55, lado: "izq" });
            break;
          }
          if (min1.lado == "der" && min2.lado == "izq" && min3.lado == "der") {
            setMin2({ x: 40, y: 55, lado: "izq" });
            break;
          }
          break;
        case 2:
          if (min1.lado == "izq" && min2.lado == "izq" && min3.lado == "izq") {
            setMin1({ x: 220, y: 15, lado: "der" });
            setMin2({ x: 220, y: 55, lado: "der" });

            break;
          } else if (
            min1.lado == "der" &&
            min2.lado == "der" &&
            min3.lado == "der"
          ) {
            setMin1({ x: 40, y: 15, lado: "izq" });
            break;
          } else if (
            (min1.lado == "izq" && min2.lado == "der" && min3.lado == "der") ||
            (min1.lado == "der" && min2.lado == "der" && min3.lado == "izq") ||
            (min1.lado == "der" && min2.lado == "izq" && min3.lado == "der")
          ) {
            break;
          } else if (
            min1.lado == "izq" &&
            min2.lado == "izq" &&
            min3.lado == "der"
          ) {
            setMin1({ x: 220, y: 15, lado: "der" });
            break;
          } else if (
            min1.lado == "der" &&
            min2.lado == "izq" &&
            min3.lado == "izq"
          ) {
            setMin2({ x: 220, y: 55, lado: "der" });
            break;
          }
          if (min1.lado == "izq" && min2.lado == "der" && min3.lado == "izq") {
            setMin1({ x: 220, y: 15, lado: "der" });
            break;
          }
          break;
        case 3:
          if (min1.lado == "izq" && min2.lado == "izq" && min3.lado == "izq") {
            setMin1({ x: 220, y: 15, lado: "der" });
            setMin2({ x: 220, y: 55, lado: "der" });
            setMin3({ x: 220, y: 95, lado: "der" });
            break;
          } else if (
            min1.lado == "der" &&
            min2.lado == "der" &&
            min3.lado == "der"
          ) {
            break;
          } else if (
            min1.lado == "der" &&
            min2.lado == "der" &&
            min3.lado == "izq"
          ) {
            setMin3({ x: 220, y: 95, lado: "der" });
            break;
          } else if (
            min1.lado == "izq" &&
            min2.lado == "der" &&
            min3.lado == "der"
          ) {
            setMin1({ x: 220, y: 15, lado: "der" });
            break;
          }
          if (min1.lado == "der" && min2.lado == "izq" && min3.lado == "der") {
            setMin2({ x: 220, y: 55, lado: "der" });
            break;
          } else if (
            min1.lado == "izq" &&
            min2.lado == "der" &&
            min3.lado == "izq"
          ) {
            setMin1({ x: 220, y: 15, lado: "der" });
            setMin2({ x: 220, y: 55, lado: "der" });
            break;
          } else if (
            min1.lado == "izq" &&
            min2.lado == "izq" &&
            min3.lado == "der"
          ) {
            setMin1({ x: 220, y: 15, lado: "der" });
            setMin2({ x: 220, y: 55, lado: "der" });
            break;
          }
          if (min1.lado == "der" && min2.lado == "izq" && min3.lado == "izq") {
            setMin2({ x: 220, y: 15, lado: "der" });
            setMin3({ x: 220, y: 95, lado: "der" });
            break;
          }
          // expected output: "Mangoes and papayas are $2.79 a pound."
          break;
        default:
          console.log("Mangoes and papayas are $2.79 a pound.");
          break;
      }
    }
  };
  const validarc = (value, s) => {
    if (s == "left") {
      switch (value) {
        case 0:
          setCani1({ x: 270, y: 15, lado: "der" });
          setCani2({ x: 270, y: 55, lado: "der" });
          setCani3({ x: 270, y: 95, lado: "der" });

          break;
        case 1:
          if (
            cani1.lado == "der" &&
            cani2.lado == "der" &&
            cani3.lado == "der"
          ) {
            setCani1({ x: 0, y: 15, lado: "izq" });

            break;
          } else if (
            cani1.lado == "izq" &&
            cani2.lado == "izq" &&
            cani3.lado == "izq"
          ) {
            setCani1({ x: 270, y: 15, lado: "der" });
            setCani2({ x: 270, y: 55, lado: "der" });
            break;
          } else if (
            (cani1.lado == "izq" &&
              cani2.lado == "der" &&
              cani3.lado == "der") ||
            (cani1.lado == "der" &&
              cani2.lado == "der" &&
              cani3.lado == "izq") ||
            (cani1.lado == "der" && cani2.lado == "izq" && cani3.lado == "der")
          ) {
            break;
          } else if (
            cani1.lado == "izq" &&
            cani2.lado == "izq" &&
            cani3.lado == "der"
          ) {
            setCani1({ x: 270, y: 15, lado: "der" });
            break;
          } else if (
            cani1.lado == "izq" &&
            cani2.lado == "der" &&
            cani3.lado == "izq"
          ) {
            setCani1({ x: 270, y: 55, lado: "der" });
            break;
          }
          if (
            cani1.lado == "der" &&
            cani2.lado == "izq" &&
            cani3.lado == "izq"
          ) {
            setCani2({ x: 270, y: 55, lado: "der" });
            break;
          }
          break;
        case 2:
          if (
            cani1.lado == "der" &&
            cani2.lado == "der" &&
            cani3.lado == "der"
          ) {
            setCani1({ x: 0, y: 15, lado: "izq" });
            setCani2({ x: 0, y: 55, lado: "izq" });
            break;
          } else if (
            cani1.lado == "izq" &&
            cani2.lado == "izq" &&
            cani3.lado == "izq"
          ) {
            setCani1({ x: 270, y: 15, lado: "der" });
            break;
          } else if (
            (cani1.lado == "izq" &&
              cani2.lado == "izq" &&
              cani3.lado == "der") ||
            (cani1.lado == "der" &&
              cani2.lado == "izq" &&
              cani3.lado == "izq") ||
            (cani1.lado == "izq" && cani2.lado == "der" && cani3.lado == "izq")
          ) {
            break;
          } else if (
            cani1.lado == "der" &&
            cani2.lado == "izq" &&
            cani3.lado == "der"
          ) {
            setCani1({ x: 0, y: 15, lado: "izq" });
            break;
          } else if (
            cani1.lado == "der" &&
            cani2.lado == "der" &&
            cani3.lado == "izq"
          ) {
            setCani1({ x: 0, y: 15, lado: "izq" });
            break;
          }
          if (
            cani1.lado == "izq" &&
            cani2.lado == "der" &&
            cani3.lado == "der"
          ) {
            setCani2({ x: 0, y: 55, lado: "izq" });
            break;
          }
          break;
        case 3:
          if (
            cani1.lado == "der" &&
            cani2.lado == "der" &&
            cani3.lado == "der"
          ) {
            setCani1({ x: 0, y: 15, lado: "izq" });
            setCani2({ x: 0, y: 55, lado: "izq" });
            setCani3({ x: 0, y: 95, lado: "izq" });
            break;
          } else if (
            cani1.lado == "izq" &&
            cani2.lado == "izq" &&
            cani3.lado == "izq"
          ) {
            console.log("aquii");
            break;
          } else if (
            cani1.lado == "izq" &&
            cani2.lado == "izq" &&
            cani3.lado == "der"
          ) {
            setCani3({ x: 0, y: 95, lado: "izq" });
            break;
          } else if (
            cani1.lado == "der" &&
            cani2.lado == "izq" &&
            cani3.lado == "izq"
          ) {
            setCani1({ x: 0, y: 15, lado: "izq" });
            break;
          }
          if (
            cani1.lado == "izq" &&
            cani2.lado == "der" &&
            cani3.lado == "izq"
          ) {
            setCani2({ x: 0, y: 55, lado: "izq" });
            break;
          } else if (
            cani1.lado == "der" &&
            cani2.lado == "izq" &&
            cani3.lado == "der"
          ) {
            setCani1({ x: 0, y: 15, lado: "izq" });
            setCani3({ x: 0, y: 95, lado: "izq" });
            break;
          } else if (
            cani1.lado == "der" &&
            cani2.lado == "der" &&
            cani3.lado == "izq"
          ) {
            setCani1({ x: 0, y: 15, lado: "izq" });
            setCani2({ x: 0, y: 55, lado: "izq" });
            break;
          }
          if (
            cani1.lado == "izq" &&
            cani2.lado == "der" &&
            cani3.lado == "der"
          ) {
            setCani2({ x: 0, y: 15, lado: "izq" });
            setCani3({ x: 0, y: 95, lado: "izq" });
            break;
          }
          // expected output: "Mangoes and papayas are $2.79 a pound."
          break;
        default:
          console.log("Mangoes and papayas are $2.79 a pound.");
          break;
      }
    } else {
      switch (value) {
        case 0:
          setCani1({ x: 0, y: 15, lado: "izq" });
          setCani2({ x: 0, y: 55, lado: "izq" });
          setCani3({ x: 0, y: 95, lado: "izq" });

          break;
        case 1:
          if (
            cani1.lado == "izq" &&
            cani2.lado == "izq" &&
            cani3.lado == "izq"
          ) {
            setCani1({ x: 270, y: 15, lado: "der" });

            break;
          } else if (
            cani1.lado == "der" &&
            cani2.lado == "der" &&
            cani3.lado == "der"
          ) {
            setCani1({ x: 0, y: 15, lado: "izq" });
            setCani2({ x: 0, y: 55, lado: "izq" });
            break;
          } else if (
            (cani1.lado == "izq" &&
              cani2.lado == "izq" &&
              cani3.lado == "der") ||
            (cani1.lado == "der" &&
              cani2.lado == "izq" &&
              cani3.lado == "izq") ||
            (cani1.lado == "izq" && cani2.lado == "der" && cani3.lado == "izq")
          ) {
            break;
          } else if (
            cani1.lado == "der" &&
            cani2.lado == "der" &&
            cani3.lado == "izq"
          ) {
            setCani1({ x: 0, y: 15, lado: "izq" });
            break;
          } else if (
            cani1.lado == "izq" &&
            cani2.lado == "der" &&
            cani3.lado == "der"
          ) {
            setCani2({ x: 0, y: 55, lado: "izq" });
            break;
          }
          if (
            cani1.lado == "der" &&
            cani2.lado == "izq" &&
            cani3.lado == "der"
          ) {
            setCani2({ x: 0, y: 55, lado: "izq" });
            break;
          }
          break;
        case 2:
          if (
            cani1.lado == "izq" &&
            cani2.lado == "izq" &&
            cani3.lado == "izq"
          ) {
            setCani1({ x: 270, y: 15, lado: "der" });
            setCani2({ x: 270, y: 55, lado: "der" });

            break;
          } else if (
            cani1.lado == "der" &&
            cani2.lado == "der" &&
            cani3.lado == "der"
          ) {
            setCani1({ x: 0, y: 15, lado: "izq" });
            break;
          } else if (
            (cani1.lado == "izq" &&
              cani2.lado == "der" &&
              cani3.lado == "der") ||
            (cani1.lado == "der" &&
              cani2.lado == "der" &&
              cani3.lado == "izq") ||
            (cani1.lado == "der" && cani2.lado == "izq" && cani3.lado == "der")
          ) {
            break;
          } else if (
            cani1.lado == "izq" &&
            cani2.lado == "izq" &&
            cani3.lado == "der"
          ) {
            setCani1({ x: 270, y: 15, lado: "der" });
            break;
          } else if (
            cani1.lado == "der" &&
            cani2.lado == "izq" &&
            cani3.lado == "izq"
          ) {
            setCani2({ x: 270, y: 55, lado: "der" });
            break;
          }
          if (
            cani1.lado == "izq" &&
            cani2.lado == "der" &&
            cani3.lado == "izq"
          ) {
            setCani2({ x: 270, y: 55, lado: "der" });
            break;
          }
          break;
        case 3:
          if (
            cani1.lado == "izq" &&
            cani2.lado == "izq" &&
            cani3.lado == "izq"
          ) {
            setCani1({ x: 270, y: 15, lado: "der" });
            setCani2({ x: 270, y: 55, lado: "der" });
            setCani3({ x: 270, y: 95, lado: "der" });
            break;
          } else if (
            cani1.lado == "der" &&
            cani2.lado == "der" &&
            cani3.lado == "der"
          ) {
            break;
          } else if (
            cani1.lado == "der" &&
            cani2.lado == "der" &&
            cani3.lado == "izq"
          ) {
            setCani3({ x: 270, y: 95, lado: "der" });
            break;
          } else if (
            cani1.lado == "izq" &&
            cani2.lado == "der" &&
            cani3.lado == "der"
          ) {
            setCani1({ x: 270, y: 55, lado: "der" });
            break;
          }
          if (
            cani1.lado == "der" &&
            cani2.lado == "izq" &&
            cani3.lado == "der"
          ) {
            setCani2({ x: 270, y: 55, lado: "der" });
            break;
          } else if (
            cani1.lado == "izq" &&
            cani2.lado == "der" &&
            cani3.lado == "izq"
          ) {
            setCani1({ x: 270, y: 15, lado: "der" });
            setCani3({ x: 270, y: 55, lado: "der" });
            break;
          } else if (
            cani1.lado == "izq" &&
            cani2.lado == "izq" &&
            cani3.lado == "der"
          ) {
            setCani1({ x: 270, y: 15, lado: "der" });
            setCani2({ x: 270, y: 55, lado: "der" });
            break;
          }
          if (
            cani1.lado == "der" &&
            cani2.lado == "izq" &&
            cani3.lado == "izq"
          ) {
            setCani2({ x: 270, y: 15, lado: "der" });
            setCani3({ x: 270, y: 95, lado: "der" });
            break;
          }
          // expected output: "Mangoes and papayas are $2.79 a pound."
          break;
        default:
          console.log("Mangoes and papayas are $2.79 a pound.");
          break;
      }
    }
  };

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
            validarm={validarm}
            validarc={validarc}
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
            indice={indice}
           
            nextState={nextState}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
