console.log("__webpack_share_scopes__", __webpack_share_scopes__);

// NOTE: For debugging.
window.webpackShareScopes = __webpack_share_scopes__;

function createGet(importName) {
  return () => System.import(importName).then((Module) => () => Module);
}

function fillSharedScope() {
  console.log("Filling share scope manually.");

  __webpack_share_scopes__.default = {
    react: {
      "18.2.0": {
        from: "app-externals",
        eager: false,
        get: createGet("react"),
      },
    },
    "react-dom": {
      "18.2.0": {
        from: "app-externals",
        eager: false,
        get: createGet("react-dom"),
      },
    },
    "styled-components": {
      "5.3.6": {
        from: "app-externals",
        eager: false,
        get: createGet("styled-components"),
      },
    },
  };
}

fillSharedScope();

import("./bootstrap");
