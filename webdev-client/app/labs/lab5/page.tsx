import PathParameters from "./PathParameters";
import QueryParameters from "./QueryParameters";
import WorkingWithRemoteObjects from "./WorkingWithRemoteObjects";
import WorkingWithRemoteArrays from "./WorkingWithRemoteArrays";
import HttpClient from "./HttpClient";
import WorkingWithRemoteObjectsAsync from "./WorkingWithRemoteObjectsAsync";
import WorkingWithRemoteArraysAsync from "./WorkingWithRemoteArraysAsync";
import HelloRoute from "./HelloRoute";
import CalculatorNextWebApiClient from "./Calculator";

export default function Lab5() {
  const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
  return (
    <div id="wd-lab5">
      <h2>Lab 5</h2>
      <a id="wd-welcome-link" href={`${HTTP_SERVER}/lab5/welcome`}>
        Welcome
      </a>
      <PathParameters />
      <QueryParameters />
      <WorkingWithRemoteObjects />
      <WorkingWithRemoteArrays />
      <HttpClient />
      <WorkingWithRemoteObjectsAsync />
      <WorkingWithRemoteArraysAsync />
      <HelloRoute />
      <CalculatorNextWebApiClient />
    </div>
  );
}
