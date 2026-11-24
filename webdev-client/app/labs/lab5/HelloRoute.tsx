"use client";

import { useEffect, useState } from "react";
import * as client from "./client";

export default function HelloRoute() {
  const [hello, setHello] = useState<{ message?: string }>({});

  useEffect(() => {
    client.fetchHello().then(setHello);
  }, []);

  return (
    <div id="wd-lab5-hello-route">
      <h3>Hello Route</h3>
      <p id="wd-hello-message">{hello.message}</p>
    </div>
  );
}
