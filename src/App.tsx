import { HashRouter, Routes, Route, Link } from "react-router-dom";

import { Remesh } from "remesh";
import { RemeshRoot } from "remesh-react";
import { RemeshReduxDevtools } from "remesh-redux-devtools";
import { RemeshLogger } from "remesh-logger";

import { AddOrder } from "./pages/order/add";
import { TodoApp } from "./pages/todo/TodoApp";
import { StorageImpl } from "./domain-externs-impl/storage";

import "./styles.css";

export default function App() {
  const store = Remesh.store({
    externs: [StorageImpl],
    inspectors: [/* RemeshReduxDevtools(), RemeshLogger() */],
  });

  return (
    <RemeshRoot store={store}>
      <HashRouter basename="/">
        <div className="app">
          <ul className="menu">
            <li>
              <Link to="/" >首页</Link>
            </li>
            <li>
              <Link to="/todo" >Todo App</Link>
            </li>
          </ul>
          <div className="container">
            <Routes>
              <Route path="/" element={<AddOrder />} />
              <Route path="/todo" element={<TodoApp />} />
              <Route path="/todo/:filter" element={<TodoApp />} />
            </Routes>
          </div>
        </div>
      </HashRouter>
    </RemeshRoot>
  );
}
