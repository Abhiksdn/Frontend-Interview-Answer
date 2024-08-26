import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import Head from "next/head";

const App = () => (
  <div>
    <Head>
      <title>Trying out next.js</title>
    </Head>
    <Hello name="CodeSandbox" />
    <h2 className="boxed">Start editing to see some magic happen {"\u2728"}</h2>
    <style jsx>{`
      .boxed {
        border: 1px solid grey;
        border-radius: 8px;
        padding: 0 12px;
      }
      @media (max-width: 600px) {
        .boxed {
          background: lightblue;
        }
      }
    `}</style>
  </div>
);

render(<App />, document.getElementById("root"));
