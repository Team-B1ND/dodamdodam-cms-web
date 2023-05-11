import { Routes as Switch, Route } from "react-router-dom";
import HomePage from "../../pages/homePage";
import WritePage from "../../pages/writePage";

const Router = () => {
  return (
    <Switch>
      <Route path="/" element={<HomePage />} />
      <Route path="/write" element={<WritePage />} />
    </Switch>
  );
};

export default Router;
