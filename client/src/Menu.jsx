import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

import {
  getAnchura,
  getBest_first,
  getProfundidad,
  getUniform_cost,
} from "./service";

export const Menu = ({
  setData,
  onInputChange,
  formState,
  isFormValid,
  cannibals,
  missionary,
  side,
  time,

  cani1,
  cani2,
  cani3,
  setCani1,
  setCani2,
  setCani3,

  min1,
  min2,
  min3,
  setMin1,
  setMin2,
  setMin3,
}) => {
  const [anchura, setAnchura] = useState(false);
  const [profundidad, setProfundidad] = useState(false);
  const [uniform_cost, setUniform_cost] = useState(false);
  const [best_first, setBest_first] = useState(false);
  const validarm = (value, s) => {
    debugger;
    if (s == "left") {
      switch (value) {
        case 0:
          setMin1({ x: 220, y: 15, lado: "der" });
          setMin2({ x: 220, y: 55, lado: "der" });
          setMin3({ x: 220, y: 95, lado: "der" });

          break;
        case 1:
          if (
            min1.lado == "der" &&
            min2.lado == "der" &&
            min3.lado == "der"
          ) {
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
            (min1.lado == "izq" &&
            min2.lado == "der" &&
            min3.lado == "der") ||
            (min1.lado == "der" &&
            min2.lado == "der" &&
            min3.lado == "izq") ||
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
          if (
            min1.lado == "der" &&
            min2.lado == "izq" &&
            min3.lado == "izq"
          ) {
            setMin1({ x: 220, y: 55, lado: "der" });
            break;
          }
          break;
        case 2:
          if (
            min1.lado == "der" &&
            min2.lado == "der" &&
            min3.lado == "der"
          ) {
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
            (min1.lado == "izq" &&
            min2.lado == "izq" &&
            min3.lado == "der") ||
            (min1.lado == "der" &&
            min2.lado == "izq" &&
            min3.lado == "izq") ||
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
          if (
            min1.lado == "izq" &&
            min2.lado == "der" &&
            min3.lado == "der"
          ) {
            setMin2({ x:40, y: 55, lado: "izq" });
            break;
          }
          break;
        case 3:
          if (
            min1.lado == "der" &&
            min2.lado == "der" &&
            min3.lado == "der"
          ) {
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
          if (
            min1.lado == "izq" &&
            min2.lado == "der" &&
            min3.lado == "izq"
          ) {
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
          if (
            min1.lado == "izq" &&
            min2.lado == "der" &&
            cani3.lado == "der"
          ) {
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
          if (
            min1.lado == "izq" &&
            min2.lado == "izq" &&
            min3.lado == "izq"
          ) {
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
            (min1.lado == "izq" &&
            min2.lado == "izq" &&
              min3.lado == "der") ||
            (min1.lado == "der" &&
            min2.lado == "izq" &&
              min3.lado == "izq") ||
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
          if (
            min1.lado == "der" &&
            min2.lado == "izq" &&
            min3.lado == "der"
          ) {
            setMin2({ x: 40, y: 55, lado: "izq" });
            break;
          }
          break;
        case 2:
          if (
            min1.lado == "izq" &&
            min2.lado == "izq" &&
            min3.lado == "izq"
          ) {
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
            (min1.lado == "izq" &&
            min2.lado == "der" &&
              min3.lado == "der") ||
            (min1.lado == "der" &&
            min2.lado == "der" &&
              min3.lado == "izq") ||
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
            setMin1({ x: 220, y: 15, lado: "der" });
            break;
          }
          if (
            min1.lado == "izq" &&
            min2.lado == "der" &&
            min3.lado == "izq"
          ) {
            setMin1({ x: 220, y: 15, lado: "der" });
            break;
          }
          break;
        case 3:
          if (
            min1.lado == "izq" &&
            min2.lado == "izq" &&
            min3.lado == "izq"
          ) {
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
            setMin1({ x: 220, y: 55, lado: "der" });
            break;
          }
          if (
            min1.lado == "der" &&
            min2.lado == "izq" &&
            min3.lado == "der"
          ) {
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
          if (
            min1.lado == "der" &&
            min2.lado == "izq" &&
            min3.lado == "izq"
          ) {
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

  const validarSide = ({ target }) => {
    validarc(cannibals, target.value);
    validarm(target.value, side);
    onInputChange({ target });
  };
  const validarMisionero = ({ target }) => {
    validarm(target.value, side);
    onInputChange({ target });
  };
  const validarCanibal = ({ target }) => {
    validarc(target.value, side);
    onInputChange({ target });
  };

  useEffect(() => {
    if (anchura) {
      resquestAnchura();
    }
  }, [anchura]);
  useEffect(() => {
    if (profundidad) {
      resquestProfundidad();
    }
  }, [profundidad]);
  useEffect(() => {
    if (uniform_cost) {
      resquestUniform_cost();
    }
  }, [uniform_cost]);
  useEffect(() => {
    if (best_first) {
      resquestBest_first();
    }
  }, [best_first]);

  const resquestAnchura = async () => {
    const recorrido = await getAnchura(formState);
    setData(recorrido);
  };

  const resquestProfundidad = async () => {
    const recorrido = await getProfundidad(formState);
    setData(recorrido);
  };

  const resquestUniform_cost = async () => {
    const recorrido = await getUniform_cost(formState);
    setData(recorrido);
  };

  const resquestBest_first = async () => {
    const recorrido = await getBest_first(formState);
    setData(recorrido);
  };

  const obtenerAnchura = () => {
    if (isFormValid) {
      setAnchura(true);
      formState.method = "Breadth Search";
    }
    return;
  };
  const obtnerProfundidad = () => {
    if (isFormValid) {
      setProfundidad(true);
      formState.method = " Deep Search";
    }
    return;
  };
  const obtnerBest_first = () => {
    if (isFormValid) {
      setUniform_cost(true);
      formState.method = "First the best";
    }
    return;
  };
  const obtnerUniform_cos = () => {
    if (isFormValid) {
      setBest_first(true);
      formState.method = "Uniform Cost";
    }
    return;
  };

  return (
    <>
      <Typography
        variant="h1"
        fontWeight="bold"
        sx={{ m: "0 0 5px 0", fontSize: "30px" }}
        align="center"
      >
        Smart project
      </Typography>
      <Typography
        variant="h3"
        sx={{ m: "0 0 5px 0", fontSize: "20px" }}
        align="center"
      >
        missionary and cannibals
      </Typography>

      <Box
        display="grid"
        gap="20px"
        mt="40px"
        gridTemplateColumns="repeat(8 , minmax(0, 1fr))"
      >
        <Typography
          variant="h3"
          sx={{ mt: "20px", fontSize: "20px", gridColumn: "span 8" }}
        >
          {`Initial state`}
        </Typography>

        <FormControl variant="filled" sx={{ gridColumn: "span 8" }}>
          <InputLabel>Missionary</InputLabel>

          <Select
            required
            label="Missionary"
            name="missionary"
            value={missionary}
            onChange={validarMisionero}
          >
            <MenuItem value={0}>0 missionary</MenuItem>
            <MenuItem value={1}>a missionary</MenuItem>
            <MenuItem value={2}>two missionary</MenuItem>
            <MenuItem value={3}>three missionary</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="filled" sx={{ gridColumn: "span 8" }}>
          <InputLabel>Cannibals</InputLabel>

          <Select
            required
            label="Cannibals"
            name="cannibals"
            value={cannibals}
            onChange={validarCanibal}
          >
            <MenuItem value={0}>0 cannibal</MenuItem>
            <MenuItem value={1}>a cannibal</MenuItem>
            <MenuItem value={2}>two cannibals</MenuItem>
            <MenuItem value={3}>three cannibals</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="filled" sx={{ gridColumn: "span 8" }}>
          <InputLabel>side</InputLabel>

          <Select
            label="side"
            name="side"
            value={side}
            required
            onChange={validarSide}
          >
            <MenuItem value="right">Right</MenuItem>
            <MenuItem value="left">Left</MenuItem>
          </Select>
        </FormControl>
        <TextField
          fullWidth
          value={time}
          variant="filled"
          required
          onChange={onInputChange}
          type="number"
          label="time (segundos)"
          name="time"
          sx={{ gridColumn: "span 8" }}
        />

        <Typography variant="h3" sx={{ mt: "20px", fontSize: "20px" }}>
          Algorithms
        </Typography>
        <Button
          variant="outlined"
          onClick={obtenerAnchura}
          sx={{ gridColumn: "span 8" }}
        >
          Breadth Search
        </Button>
        <Button
          variant="outlined"
          onClick={obtnerProfundidad}
          sx={{ gridColumn: "span 8" }}
        >
          Deep Search
        </Button>
        <Button
          variant="outlined"
          onClick={obtnerBest_first}
          sx={{ gridColumn: "span 8" }}
        >
          First the best
        </Button>
        <Button
          variant="outlined"
          onClick={obtnerUniform_cos}
          sx={{ gridColumn: "span 8" }}
        >
          Uniform Cost
        </Button>
      </Box>
    </>
  );
};
