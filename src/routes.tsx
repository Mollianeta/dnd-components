import { Routes, Route } from "react-router";
import { Creature, Weapon, Armor } from "./components/handbook";

export default function Router() {
  return (
    <Routes>
      <Route index element={<h1>Insert Landing Page here</h1>} />
      <Route path="encounter">
        <Route path="monster/:stub" element={<Creature />} />
        <Route path="weapons/:stub" element={<Weapon />} />
        <Route path="armor/:stub" element={<Armor />} />
      </Route>
    </Routes>
  );
}
