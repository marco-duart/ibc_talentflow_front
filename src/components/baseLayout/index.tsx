import { Outlet } from "react-router-dom";
import * as S from "./styles";

const BaseLayout = () => {
  return (
    <S.BaseLayoutPageStyled>
      <S.BaseLayoutSidebarStyled>
        <div>Sidebar?</div>
      </S.BaseLayoutSidebarStyled>
      <S.BaseLayoutDivStyled>
        <div>Header</div>
        <Outlet />
      </S.BaseLayoutDivStyled>
    </S.BaseLayoutPageStyled>
  );
};

export default BaseLayout;
