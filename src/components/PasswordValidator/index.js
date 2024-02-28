// Write your code here
import {useState} from 'react'

import {
  Container,
  InnerContainer,
  Heading,
  Paragraph,
  Input,
  WarningParagraph,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setStrong] = useState('')

  const onChangeInput = event => setStrong(event.target.value)

  const passwordLength =
    password.length < 8 ? 'Your password must be at least 8 characters' : null

  return (
    <Container>
      <InnerContainer>
        <Heading>Password Validator</Heading>
        <Paragraph>Check how strong and secure is your password</Paragraph>
        <Input type="password" value={password} onChange={onChangeInput} />
        <WarningParagraph>{passwordLength}</WarningParagraph>
      </InnerContainer>
    </Container>
  )
}

export default PasswordValidator
