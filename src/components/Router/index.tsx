import { Routes as Switch, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import RecruitDetailPage from "../../pages/RecruitDetailPage";
import RecruitPage from "../../pages/RecruitPage";
import RecruitWritePage from "../../pages/RecruitWritePage";
import WritePage from "../../pages/WritePage";
import withAuth from "../HOC/withAuth";

const Router = () => {
  const AuthHomePage = withAuth(HomePage);
  const AuthWritePage = withAuth(WritePage);
  const AuthRecruitPage = withAuth(RecruitPage);
  const AuthRecruitWritePage = withAuth(RecruitWritePage);
  const AuthRecruitDetailPage = withAuth(RecruitDetailPage);

  return (
    <Switch>
      <Route path="/" element={<AuthHomePage />} />
      <Route path="/write" element={<AuthWritePage />} />
      <Route path="/recruit" element={<AuthRecruitPage />} />
      <Route path="/recruitwrite" element={<AuthRecruitWritePage />} />
      <Route path="/recruit/:id" element={<AuthRecruitDetailPage />} />
      <Route path="/recruitwrite/:id" element={<AuthRecruitWritePage />} />
    </Switch>
  );
};

export default Router;
