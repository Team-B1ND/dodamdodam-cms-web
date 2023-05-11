import { Routes as Switch, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import RecruitPage from "../../pages/RecruitPage";
import RecruitWritePage from "../../pages/RecruitWritePage";
import WritePage from "../../pages/WritePage";

const Router = () => {
  return (
    <Switch>
      <Route path="/" element={<HomePage />} />
      <Route path="/write" element={<WritePage />} />
      <Route path="/recruit" element={<RecruitPage />} />
      <Route path="/recruitwrite" element={<RecruitWritePage />} />
    </Switch>
  );
};

export default Router;
