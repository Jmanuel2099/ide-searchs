import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

export const Menu = () => {
  const [canibales, setCanibales] = useState(1);
  const [misioneros, setMisioneros] = useState(1);
  const [espacio, setEspacio] = useState("left");

  const onInputChange = ({ target }) => {
    const { value, name } = target;
    if (name === "canibales") setCanibales(value);
    if (name === "misioneros") setMisioneros(value);
    if (name === "espacio") setEspacio(value);
  };
  return (
    <>
      <Typography
        variant="h1"
        fontWeight="bold"
        sx={{ m: "0 0 5px 0", fontSize: "30px" }}
        align="center"
      >
        Proyecto Inteligentes
      </Typography>
      <Typography
        variant="h3"
        sx={{ m: "0 0 5px 0", fontSize: "20px" }}
        align="center"
      >
        Misioneros y Caníbales
      </Typography>

      <Box
        display="grid"
        gap="20px"
        mt="40px"
        gridTemplateColumns="repeat(8 , minmax(0, 1fr))"
      >
        <Typography variant="h3" sx={{ mt: "20px", fontSize: "20px",gridColumn: "span 8" }}>
          {`Estado Inicial`}
        </Typography>
        <FormControl variant="filled" sx={{ gridColumn: "span 8" }}>
          <InputLabel>Misioneros</InputLabel>

          <Select
            label="Misioneros"
            name="misioneros"
            value={misioneros}
            required
            onChange={onInputChange}
          >
            <MenuItem value={1}>un misionero</MenuItem>
            <MenuItem value={2}>dos misioneros</MenuItem>
            <MenuItem value={3}>tres misioneros</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="filled" sx={{ gridColumn: "span 8" }}>
          <InputLabel>Caníbales</InputLabel>

          <Select
            label="Caníbales"
            name="canibales"
            value={canibales}
            onChange={onInputChange}
          >
            <MenuItem value={1}>un canibal</MenuItem>
            <MenuItem value={2}>dos canibales</MenuItem>
            <MenuItem value={3}>tres canibales</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="filled" sx={{ gridColumn: "span 8" }}>
          <InputLabel>Espacio</InputLabel>

          <Select
            label="Espacio"
            name="espacio"
            value={espacio}
            required
            onChange={onInputChange}
          >
            <MenuItem value={"right"}>Derecha</MenuItem>
            <MenuItem value={"left"}>Izquirda</MenuItem>
          </Select>
        </FormControl>

        <Typography variant="h3" sx={{ mt: "20px", fontSize: "20px" }}>
          Algoritmos
        </Typography>
        <Button variant="outlined" sx={{ gridColumn: "span 8" }}>
          Búsqueda en Anchura
        </Button>
        <Button variant="outlined" sx={{ gridColumn: "span 8" }}>
          Búsqueda en Profundidad
        </Button>
        <Button variant="outlined" sx={{ gridColumn: "span 8" }}>
          Primero el Mejor
        </Button>
        <Button variant="outlined" sx={{ gridColumn: "span 8" }}>
          Coste Uniforme
        </Button>
      </Box>
    </>
  );
};
