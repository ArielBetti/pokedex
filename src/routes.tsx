import { Routes, Route } from "react-router-dom";
import { Home } from "./pages";

const AppRouter = () => (
  <Routes>
    <Route path="*" element={<div>404</div>} />
    <Route path="/" element={<Home />}>
      <Route path="/area-logada" element={<div>Logado</div>}>
        <Route path=":id" />
      </Route>
    </Route>
  </Routes>
);

export default AppRouter;
