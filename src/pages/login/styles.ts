import styled from "styled-components";
import backgroundImage from '../../assets/image/BG.jpg'

export const LoginPageStyled = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  background-image: url(${backgroundImage});
  display: grid;
  place-items: center;
`;

export const LoginCardStyled = styled.div`
  width: 440px;
  height: 350px;
  position: relative;
  background-color: #FFFFFF;
  border-radius: 8px;
`

export const TalentflowLogoStyled = styled.div`
  position: absolute;
  width: 200px;
  left: 50%;
  top: -10px;
`
