import fs from "fs";
import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router";
import App from "./containers/App";
import { Html } from "./server/Server";

const port = 3000;
const server = express();
const jsFiles: string[] = [];
const cssFiles: string[] = [];

fs.readdirSync("./dist/assets")?.forEach((file) => {
  if (file.split(".").pop() === "js") {
    jsFiles.push("/assets/" + file);
  }
});

fs.readdirSync("./dist/assets")?.forEach((file) => {
  if (file.split(".").pop() === "css") {
    cssFiles.push("/assets/" + file);
  }
});

server.use("/assets", express.static("./dist/assets"));
server.use("/public", express.static("./dist/public"));

server.get("*", async (req, res) => {
  ReactDOMServer.renderToNodeStream(
    <Html scripts={jsFiles} styles={cssFiles}>
      <StaticRouter location={req.url} context={{}}>
        <App />
      </StaticRouter>
    </Html>
  ).pipe(res);
});

server.listen(port, () => console.log(`Listening on port ${port}`));
