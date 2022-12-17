import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Grid, MenuItem, Paper, Typography } from "@mui/material";
import styled from "styled-components";

export const Modal = ({ open, setOpen, esta }) => {
  const Item = styled(Paper)(() => ({
    width: "150px",
    textAlign: "center",
    fontSize: "20px",
  }));

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Statistics"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Grid container spacing={2}>
              <Grid item xs={12} md={12}>
                <Typography
                  variant="h3"
                  sx={{ m: "0 0 5px 0", fontSize: "20px" }}
                  align="left"
                >
                  {`Best algorithm: ${!!esta ? esta.best_algorithm : ""}`}
                </Typography>
              </Grid>
              <Grid item xs={4} md={12}>
                <Typography
                  variant="h3"
                  sx={{ m: "0 0 5px 0", fontSize: "20px" }}
                  align="left"
                >
                  {`Best first information`}
                </Typography>
              </Grid>

              <Grid item md={6}>
                <Typography
                  variant="h3"
                  sx={{ m: "0 0 5px 0", fontSize: "20px" }}
                >
                  {`Node generated: ${
                    !!esta ? esta.best_first.node_generated : ""
                  }`}
                </Typography>
              </Grid>
              <Grid item md={6}>
                <Typography
                  variant="h3"
                  sx={{ m: "0 0 5px 0", fontSize: "20px" }}
                  align="center"
                >
                  {`Path sizem: ${!!esta ? esta.best_first.path_size : ""}`}
                </Typography>
              </Grid>

              <Grid item xs={4} md={12}>
                <Typography
                  variant="h3"
                  sx={{ m: "0 0 5px 0", fontSize: "20px" }}
                  align="left"
                >
                  {`bfs information`}
                </Typography>
              </Grid>

              <Grid item md={6}>
                <Typography
                  variant="h3"
                  sx={{ m: "0 0 5px 0", fontSize: "20px" }}
                  align="center"
                >
                  {`Node generated: ${!!esta ? esta.bfs.node_generated : ""}`}
                </Typography>
              </Grid>
              <Grid item md={6}>
                <Typography
                  variant="h3"
                  sx={{ m: "0 0 5px 0", fontSize: "20px" }}
                  align="center"
                >
                  {`Path sizem: ${!!esta ? esta.bfs.path_size : ""}`}
                </Typography>
              </Grid>
              <Grid item xs={4} md={12}>
                <Typography
                  variant="h3"
                  sx={{ m: "0 0 5px 0", fontSize: "20px" }}
                  align="left"
                >
                  {`dfs information`}
                </Typography>
              </Grid>

              <Grid item md={6}>
                <Typography
                  variant="h3"
                  sx={{ m: "0 0 5px 0", fontSize: "20px" }}
                  align="center"
                >
                  {`Node generated: ${!!esta ? esta.dfs.node_generated : ""}`}
                </Typography>
              </Grid>
              <Grid item md={6}>
                <Typography
                  variant="h3"
                  sx={{ m: "0 0 5px 0", fontSize: "20px" }}
                  align="center"
                >
                  {`Path sizem: ${!!esta ? esta.dfs.path_size : ""}`}
                </Typography>
              </Grid>
              <Grid item xs={4} md={12}>
                <Typography
                  variant="h3"
                  sx={{ m: "0 0 5px 0", fontSize: "20px" }}
                  align="left"
                >
                  {`uniform_cost information`}
                </Typography>
              </Grid>

              <Grid item md={6}>
                <Typography
                  variant="h3"
                  sx={{ m: "0 0 5px 0", fontSize: "20px" }}
                  align="center"
                >
                  {`Node generated: ${
                    !!esta ? esta.uniform_cost.node_generated : ""
                  }`}
                </Typography>
              </Grid>
              <Grid item md={6}>
                <Typography
                  variant="h3"
                  sx={{ m: "0 0 5px 0", fontSize: "20px" }}
                  align="center"
                >
                  {`Path sizem: ${!!esta ? esta.uniform_cost.path_size : ""}`}
                </Typography>
              </Grid>
            </Grid>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
