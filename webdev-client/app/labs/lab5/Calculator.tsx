"use client";

import { useState } from "react";

const OPERATIONS = [
  { label: "+", value: "add" },
  { label: "-", value: "subtract" },
  { label: "*", value: "multiply" },
  { label: "/", value: "divide" },
] as const;

const SYMBOLS: Record<string, string> = {
  add: "+",
  subtract: "-",
  multiply: "*",
  divide: "/",
};

export default function CalculatorNextWebApiClient() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [operation, setOperation] = useState("add");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const calculate = async (nextOperation = operation) => {
    setError("");
    try {
      const params = new URLSearchParams({
        a,
        b,
        operation: nextOperation,
      });
      const response = await fetch(`/api/lab5/calculator?${params.toString()}`);
      const data = await response.json();
      if (!response.ok) {
        setResult("");
        setError(data.error ?? "Request failed");
        return;
      }
      const symbol = SYMBOLS[data.operation] ?? data.operation;
      setResult(`${data.a} ${symbol} ${data.b} = ${data.result}`);
    } catch {
      setResult("");
      setError("Request failed");
    }
  };

  return (
    <div
      id="wd-calculator-next-web-api"
      className="mt-3 max-w-md rounded border border-neutral-300 bg-white p-4"
    >
      <h3 className="mb-3 text-lg font-semibold">
        Calculator (Next.js Web API)
      </h3>
      <div className="mb-2">
        <label className="mb-1 block text-sm" htmlFor="wd-calc-a">
          A:
        </label>
        <input
          id="wd-calc-a"
          className="w-full rounded border border-neutral-300 px-3 py-1.5"
          placeholder="A"
          value={a}
          onChange={(e) => setA(e.target.value)}
        />
      </div>
      <div className="mb-2">
        <label className="mb-1 block text-sm" htmlFor="wd-calc-b">
          B:
        </label>
        <input
          id="wd-calc-b"
          className="w-full rounded border border-neutral-300 px-3 py-1.5"
          placeholder="B"
          value={b}
          onChange={(e) => setB(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="mb-1 block text-sm" htmlFor="wd-calc-operation">
          Operation:
        </label>
        <select
          id="wd-calc-operation"
          className="w-full rounded border border-neutral-300 px-3 py-1.5"
          value={operation}
          onChange={(e) => {
            const nextOperation = e.target.value;
            setOperation(nextOperation);
            void calculate(nextOperation);
          }}
        >
          {OPERATIONS.map((op) => (
            <option key={op.value} value={op.value}>
              {op.label}
            </option>
          ))}
        </select>
      </div>
      <button
        type="button"
        id="wd-calc-submit"
        className="rounded bg-blue-500 px-4 py-1.5 text-sm font-medium text-white hover:bg-blue-600"
        onClick={() => void calculate()}
      >
        Calculate
      </button>
      <input
        id="wd-calc-result"
        className="mt-3 w-full rounded border border-neutral-300 bg-neutral-50 px-3 py-1.5"
        readOnly
        value={error || result}
      />
    </div>
  );
}
