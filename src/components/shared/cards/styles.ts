import styled from "styled-components";

export const LoginCardStyle = styled.div`
  width: ${props => props.theme.widths.cards.xxl};
  height: ${props => props.theme.heights.cards.xxl};
  position: relative;
  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.radius.md};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: ${props => props.theme.glows.glow100};
  padding: 20px 0;
`

export const RegisterCardStyle = styled.div`
  width: ${props => props.theme.widths.cards.xxl};
  height: ${props => props.theme.heights.cards.xxxl};
  position: relative;
  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.radius.md};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: ${props => props.theme.glows.glow100};
  padding: 20px 0;
`
export const ForgotPasswordCardStyle = styled.div`
  width: ${props => props.theme.widths.cards.xxl};
  height: ${props => props.theme.heights.cards.xl};
  position: relative;
  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.radius.md};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: ${props => props.theme.glows.glow100};
  padding: 20px 0;
`
export const ConfirmAccountCardStyle = styled.div`
  width: ${props => props.theme.widths.cards.xxl};
  height: ${props => props.theme.heights.cards.lg};
  position: relative;
  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.radius.md};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: ${props => props.theme.glows.glow100};
  padding: 20px 0;
`