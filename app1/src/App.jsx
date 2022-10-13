import React from "react";

const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));

const App2 = React.lazy(() => sleep(2000).then(() => import("app2/App")));

export function App() {
  return (
    <React.Suspense fallback="loading...">
      <div>hello from App1.</div>
      <App2 />
    </React.Suspense>
  );
}
