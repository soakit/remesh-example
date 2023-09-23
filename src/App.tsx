import { HashRouter, Routes, Route } from "react-router-dom";

import { Remesh } from "remesh";
import { RemeshRoot } from "remesh-react";
import { RemeshReduxDevtools } from "remesh-redux-devtools";
import { RemeshLogger } from "remesh-logger";

import { AddOrder } from "./pages/order/add";

import "./styles.css";

export default function App() {
  const store = Remesh.store({
    externs: [],
    inspectors: [RemeshReduxDevtools(), RemeshLogger()],
  });

  return (
    <RemeshRoot store={store}>
      <HashRouter basename="/">
        <Routes>
          <Route path="/" element={<AddOrder />} />
        </Routes>
      </HashRouter>
    </RemeshRoot>
  );
}
