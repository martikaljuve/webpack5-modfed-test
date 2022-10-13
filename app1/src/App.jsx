import React from "react";

const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));

const App2 = React.lazy(async () => {
  console.table(debugSharedScope());

  await sleep(2000);
  const app = await import("app2/App");

  console.table(debugSharedScope());

  return app;
});

function debugSharedScope() {
  const scope = __webpack_share_scopes__.default;

  const result = [];
  for (const name in scope) {
    const versions = scope[name];
    for (const version in versions) {
      const data = versions[version];

      result.push({
        name,
        version,
        from: data.from,
        loaded: !!data.loaded,
      });
    }
  }

  return result;
}

export function App() {
  return (
    <>
      <div>hello from App1.</div>
      <React.Suspense fallback="loading...">
        <App2 />
      </React.Suspense>
    </>
  );
}
