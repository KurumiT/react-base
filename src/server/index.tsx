import * as React from "react";
import * as ReactDOM from "react-dom/server";
import Express from "express";
import { StaticRouter as Router } from "react-router-dom";
import App from "../containers/App";

declare const module: any;

function main() {
  const express = Express();
  const port = 8080;

  express.use(Express.static("build"));

  express.get("/*", (req, res, next) => {
    const sheetsManager = new Map();

    const appHTML = ReactDOM.renderToString(
      <Router location={req.path} context={{}}>
        <App />
      </Router>
    );

    res.send(`
            <!DOCTYPE html>
            <html>
              <head>
                <meta charset="UTF-8" />
                <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
                />
                <link rel="icon" type="image/svg+xml" href="favicon.svg" />
                <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                <title><%= htmlWebpackPlugin.options.title %></title>
              </head>
              <body>
                <div id="root" class="b-page type-main lang-ru"></div>
                <script type="application/javascript" src="bundle.js"></script>
              </body>
            </html>
        `);
    res.end();
    next();
  });

  const server = express.listen(port);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => server.close());
  }
}

main();
