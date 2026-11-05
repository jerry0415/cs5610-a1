import { Suspense } from "react";
import QueryCalculator from "./QueryCalculator";

export default function QueryParamsPage() {
  return (
    <Suspense fallback={<p>Loading query string...</p>}>
      <QueryCalculator />
    </Suspense>
  );
}
