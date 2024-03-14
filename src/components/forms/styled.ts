import styled from "styled-components"

export const LoginFormStyle = styled.form`
  width: ${props => props.theme.widths.forms.xsm};
  height: ${props => props.theme.widths.forms.xsm};
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  h1 {
    width: 100%;
    text-align: center;
    font-family: ${props => props.theme.fontFamily.Sora};
  }
  div {
    display: flex;
    flex-direction: column;
  }
  input {
    width: 100%;
    height: ${props => props.theme.heights.imputs.sm};
    background-color: ${props => props.theme.colors.lightGrey200};
    //color: ${props => props.theme.colors.lightGrey300};
    border: none;
    border-radius: ${props => props.theme.radius.xl};
    padding: 0 20px;
    font-family: ${props => props.theme.fontFamily.Poppins};
    font-size: ${props => props.theme.fontSizes.md};
  }
`

//Verificar como alterar a cor de quando preenche automático, atualmente está amarelo.