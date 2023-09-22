import {
  useRemeshDomain,
  useRemeshEvent,
  useRemeshQuery,
  useRemeshSend
} from "remesh-react";

import { HashRouter, Routes, Route } from "react-router-dom";

import { Remesh } from "remesh";
import { RemeshRoot } from "remesh-react";
import { RemeshReduxDevtools } from "remesh-redux-devtools";
import { RemeshLogger } from "remesh-logger";

import "./styles.css";

import { AddOrder } from "./pages/order/add";

export default function App() {
  const store = Remesh.store({
    externs: [],
    inspectors: [
      /* RemeshReduxDevtools(), RemeshLogger() */
    ]
  });

  // const domain = useRemeshDomain(OrderDomain());

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
