import { ButtonContainer } from "./styles";

const Button = ({label, onClick}) => {
    return (
      <ButtonContainer type="button" onClick={onClick}>
        {label}
      </ButtonContainer>
    );
  }
  
  export default Button;
  