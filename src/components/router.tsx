import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<></>} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
