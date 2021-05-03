import React from "react";

interface Html {
  scripts: string[];
  styles: string[];
}
export function Html({ children, scripts, styles }: React.PropsWithChildren<Html>) {
  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width,minimum-scale=1,maximum-scale=1,initial-scale=1"
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="icon" type="image/svg+xml" href="favicon.svg" />
        <title>React SSR App</title>
        {styles?.map((style: string, index: number) => (
          <link href={style} rel="stylesheet" key={index} />
        ))}
      </head>
      <body>
        <div id="root">{children}</div>
        {scripts?.map((script, index) => (
          <script src={script} key={index} />
        ))}
      </body>
    </html>
  );
}
