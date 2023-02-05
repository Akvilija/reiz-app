import { Routes, Route } from "react-router-dom";
import { RouteKey } from "./routes";
import CountriesContainer from "containers/Countries/CountriesContainer";

const MainRouter = () => (
  <Routes>
    <Route path={RouteKey.Index} element={<CountriesContainer />} />
    <Route path={RouteKey.Country} element={<CountriesContainer />} />
  </Routes>
);

export default MainRouter;
