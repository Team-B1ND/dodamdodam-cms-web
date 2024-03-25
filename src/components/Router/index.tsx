import { useEffect } from "react";
import { Routes as Switch, Route, useNavigate } from "react-router-dom";
import { useResetRecoilState } from "recoil";
import RecruitDetailPage from "../../pages/RecruitDetailPage";
import RecruitPage from "../../pages/RecruitPage";
import RecruitWritePage from "../../pages/RecruitWritePage";

import { recruitImageAtom } from "../../store/recruitWrite/recuritWriteAtom";
import withAuth from "../HOC/withAuth";

const Router = () => {
  const AuthRecruitPage = withAuth(RecruitPage);
  const AuthRecruitWritePage = withAuth(RecruitWritePage);
  const AuthRecruitDetailPage = withAuth(RecruitDetailPage);

  const navigate = useNavigate();
  const resetRecruitImage = useResetRecoilState(recruitImageAtom);

  useEffect(() => {
    resetRecruitImage();
  }, [navigate]);

  return (
    <Switch>
      <Route path="/recruit" element={<AuthRecruitPage />} />
      <Route path="/recruitwrite" element={<AuthRecruitWritePage />} />
      <Route path="/recruit/:id" element={<AuthRecruitDetailPage />} />
      <Route path="/recruitwrite/:id" element={<AuthRecruitWritePage />} />
    </Switch>
  );
};

export default Router;
