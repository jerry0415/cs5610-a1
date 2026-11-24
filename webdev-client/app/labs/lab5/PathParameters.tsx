"use client";

import { useState } from "react";

export default function PathParameters() {
  const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
  const [a, setA] = useState("34");
  const [b, setB] = useState("23");

  return (
    <div id="wd-path-parameters">
      <h3>Path Parameters</h3>
      <input
        className="mb-2 me-2 rounded border border-neutral-300 px-3 py-1.5"
        id="wd-path-parameter-a"
        type="number"
        value={a}
        onChange={(e) => setA(e.target.value)}
      />
      <input
        className="mb-2 rounded border border-neutral-300 px-3 py-1.5"
        id="wd-path-parameter-b"
        type="number"
        value={b}
        onChange={(e) => setB(e.target.value)}
      />
      <br />
      <a id="wd-path-parameter-add" href={`${HTTP_SERVER}/lab5/add/${a}/${b}`}>
        Add {a} + {b}
      </a>
      <br />
      <a
        id="wd-path-parameter-subtract"
        href={`${HTTP_SERVER}/lab5/subtract/${a}/${b}`}
      >
        Subtract {a} - {b}
      </a>
      <br />
      <a
        id="wd-path-parameter-multiply"
        href={`${HTTP_SERVER}/lab5/multiply/${a}/${b}`}
      >
        Multiply {a} * {b}
      </a>
      <br />
      <a
        id="wd-path-parameter-divide"
        href={`${HTTP_SERVER}/lab5/divide/${a}/${b}`}
      >
        Divide {a} / {b}
      </a>
    </div>
  );
}
