import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ReactDOM from "react-dom/client";
import {
  Armor,
  Background,
  Class,
  Condition,
  Document,
  Feat,
  MagicItem,
  Monster,
  Plane,
  Race,
  Section,
  Spell,
  SpellList,
  Weapon,
} from "./components/handbook";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Container fluid>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Container>,
);
