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
  desactivar,
  setDesactivar,
}) => {
  const [anchura, setAnchura] = useState(false);
  const [profundidad, setProfundidad] = useState(false);
  const [uniform_cost, setUniform_cost] = useState(false);
  const [best_first, setBest_first] = useState(false);
  const { readOnly } = desactivar;

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
    if (isFormValid && !readOnly) {
      setAnchura(true);
      formState.method = "Breadth Search";
      setDesactivar({ readOnly: !readOnly });
    }
    return;
  };
  const obtnerProfundidad = () => {
    if (isFormValid && !readOnly) {
      setProfundidad(true);
      formState.method = " Deep Search";
      setDesactivar({ readOnly: !readOnly });
    }
    return;
  };
  const obtnerBest_first = () => {
    if (isFormValid && !readOnly) {
      setUniform_cost(true);
      formState.method = "First the best";
      setDesactivar({ readOnly: !readOnly });
    }
    return;
  };
  const obtnerUniform_cos = () => {
    if (isFormValid && !readOnly) {
      setBest_first(true);
      formState.method = "Uniform Cost";
      setDesactivar({ readOnly: !readOnly });
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
            onChange={onInputChange}
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
            onChange={onInputChange}
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
            onChange={onInputChange}
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
