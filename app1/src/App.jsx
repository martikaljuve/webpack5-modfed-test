import React from "react";

const App2 = React.lazy(() => import("app2/App"));

console.log(App2);

export function App() {
  return (
    <React.Suspense fallback="loading...">
      <div>hello from App1.</div>
      <App2 />
    </React.Suspense>
  );
}
