import { Routes, Route } from "react-router";
import { Creature } from "./components/handbook";

export default function Router() {
  return (
    <Routes>
      <Route index element={<h1>Insert Landing Page here</h1>} />
      <Route path="encounter">
        <Route path="monster/:stub" element={<Creature />} />
      </Route>
    </Routes>
  );
}
