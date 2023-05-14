import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "../../constants/token/token.constant";
import Token from "../../lib/token/Token";
import { useGetMyMemberQuery } from "../../queries/member/member.query";

const withAuth = (AuthComponent: React.ComponentType) => {
  const AuthCheck = () => {
    const { data: serverMyMemberData, isLoading: serverMyMemberDataIsLoading } =
      useGetMyMemberQuery();

    const navigate = useNavigate();

    const isAuthority =
      Token.get(ACCESS_TOKEN_KEY) !== undefined &&
      Token.get(REFRESH_TOKEN_KEY) !== undefined;

    useEffect(() => {
      if (
        !isAuthority ||
        (!serverMyMemberDataIsLoading &&
          serverMyMemberData?.data.position !== "티쳐")
      ) {
      }
    }, [
      navigate,
      isAuthority,
      serverMyMemberData,
      serverMyMemberDataIsLoading,
    ]);
  };
};

export default withAuth;
