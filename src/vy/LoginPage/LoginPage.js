import React from 'react'
import Input from '../../Components/Input/Input'
import Button from '../../Components/Button/Button'
import {
  inputInfo,
  LoginButtonInfo
} from '../../staticData'
import {
  StyledLoginWrapper,
  StyledLoginContainer,
  StyledLogin,
  StyledLoginHeader,
  StyledLabel,
  StyledFormWrapper,
  StyledButtonWrapper
} from './StyledLoginPage'

const LoginPage = () => {

  /**
   * Render login button
   */
  const renderButton = () => LoginButtonInfo.map(({ id, text }) => <Button key={id} text={text} />)

  /**
   * Render input
   */
  const renderInput = () => inputInfo.map(({ id, name, placeholder }) =>
    <StyledFormWrapper key={id}>
      <StyledLabel>
        {name}
      </StyledLabel>
      <Input
        placeholder={placeholder}
      />
    </StyledFormWrapper>)


  return (
    <StyledLoginWrapper>
      <StyledLoginContainer>
        <StyledLogin>
          <StyledLoginHeader>Login</StyledLoginHeader>
            {renderInput()}
          <StyledButtonWrapper>
            {renderButton()}
          </StyledButtonWrapper>
        </StyledLogin>
      </StyledLoginContainer>

    </StyledLoginWrapper>
  )
}

export default LoginPage;
