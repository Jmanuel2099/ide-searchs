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
  getEstadisticas,
  getProfundidad,
  getUniform_cost,
} from "./service";
import { ToastContainer, toast } from "react-toastify";
import { Modal } from "./Modal";

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
  validarm,
  validarc,
  indice,
  max,
}) => {
  const [anchura, setAnchura] = useState(false);
  const [profundidad, setProfundidad] = useState(false);
  const [uniform_cost, setUniform_cost] = useState(false);
  const [best_first, setBest_first] = useState(false);
  const [statistics, setStatistics] = useState(false);
  const [open, setOpen] = useState(false);
  const [esta, setEsta] = useState(null);

  const validarSide = ({ target }) => {
    validarc(cannibals, target.value);
    validarm(missionary, target.value);
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
    if (anchura == max) {
      setAnchura(false);
      setProfundidad(false);
      setUniform_cost(false);
      setBest_first(false);
      setStatistics(false);
    }
  }, [indice, max]);

  useEffect(() => {
    if (anchura) {
      resquestAnchura();
      setAnchura(false)
    }
  }, [anchura]);
  useEffect(() => {
    if (profundidad) {
      resquestProfundidad();
      setProfundidad(false)
    }
  }, [profundidad]);
  useEffect(() => {
    if (uniform_cost) {
      resquestUniform_cost();
      setUniform_cost(false)
    }
  }, [uniform_cost]);
  useEffect(() => {
    if (best_first) {
      resquestBest_first();
      setBest_first(false)
    }
  }, [best_first]);

  useEffect(() => {
    if (open) {
      resquestStatic();
    }
  }, [open]);
  const resquestAnchura = async () => {
    const recorrido = await getAnchura(formState);

    setData(recorrido);
  };

  const resquestProfundidad = async () => {
    const recorrido = await getProfundidad(formState);
    setData(recorrido);
  };
  const resquestStatic = async () => {
    const recorrido = await getEstadisticas(formState);
    setEsta(recorrido);
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
    setAnchura(true);
    formState.method = "Breadth Search";

    return;
  };
  const obtnerProfundidad = () => {
    setProfundidad(true);
    formState.method = " Deep Search";

    return;
  };
  const obtnerBest_first = () => {
    setUniform_cost(true);
    formState.method = "First the best";

    return;
  };
  const obtnerUniform_cos = () => {
    setBest_first(true);
    formState.method = "Uniform Cost";

    return;
  };
  const obtnerStatic = () => {
    if (!open) {
      setOpen(true);
    }
    return;
  };

  return (
    <>
      <Modal open={open} setOpen={setOpen} esta={esta} />
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
        <hr />
        <Button
          variant="outlined"
          onClick={obtnerStatic}
          sx={{ gridColumn: "span 8" }}
        >
          Get Statistics
        </Button>
      </Box>
    </>
  );
};
