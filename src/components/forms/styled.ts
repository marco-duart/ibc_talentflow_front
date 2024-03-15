import styled from "styled-components";

export const LoginFormStyle = styled.form`
  width: ${(props) => props.theme.widths.forms.xsm};
  height: ${(props) => props.theme.widths.forms.xsm};
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  h1 {
    width: 100%;
    margin-bottom: 15px;
    text-align: center;
    font-family: ${(props) => props.theme.fontFamily.Sora};
  }
  .first-section {
    height: 60px;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .second-section {
    display: flex;
    flex-direction: row-reverse;
    justify-content: start;
    align-items: center;
    gap: 10px;
    font-family: ${(props) => props.theme.fontFamily.Poppins}
  }
  input {
    width: 100%;
    height: ${(props) => props.theme.heights.imputs.sm};
    background-color: ${(props) => props.theme.colors.lightGrey200};
    border: none;
    border-radius: ${(props) => props.theme.radius.xl};
    padding: 0 20px;
    font-family: ${(props) => props.theme.fontFamily.Poppins};
    font-size: ${(props) => props.theme.fontSizes.md};
  }
  small {
    width: 100%;
    text-align: center;
    color: ${(props) => props.theme.colors.lightRed100};
  }
  input[type="checkbox"] {
    all: unset;
    display: inline-block;
    border: 1px solid ${(props) => props.theme.colors.white200};
    width: 18px;
    height: 18px;
    border-radius: 5px;

    &:checked {
      background-color: ${(props) => props.theme.colors.lightBlue100};
    }
    &:checked::before {
      content: "✓";
      font-size: 14px;
      color: ${(props) => props.theme.colors.black100};
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

//Verificar como alterar a cor de quando preenche automático, atualmente está amarelo.
