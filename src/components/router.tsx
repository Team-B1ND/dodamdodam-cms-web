import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import HomePage from "../pages/homePage";
import WritePage from "../pages/writePage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<HomePage />} />
        <Route path="/write" element={<WritePage />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
