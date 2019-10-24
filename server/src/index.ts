"use strict";
import express from "express";
const app = express();

// Constants
const PORT = 8080;
// reverse HOST for docker image
// const HOST = '0.0.0.0';

app.get("/", (req, res) => {
  res.send("PENIS");
});
app.listen( PORT, () => {
  // tslint:disable-next-line:no-console
  // console.log( `FOR NUDES -> http://localhost:${ PORT }` );
} );
