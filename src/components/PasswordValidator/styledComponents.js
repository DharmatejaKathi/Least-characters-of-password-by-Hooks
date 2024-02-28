// Style your elements here
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #24263c;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const InnerContainer = styled.div`
  width: 50%;
  padding: 20px;
  background-color: #383a4e;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 12px;
`
export const Heading = styled.h1`
  color: #edeeff;
  font-family: 'Roboto';
  font-size: 32px;
`

export const Paragraph = styled.p`
  color: #edeeff;
  font-family: 'Roboto';
  font-size: 18px;
`
export const Input = styled.input`
  background-color: #edeeff;
  width: 280px;
  height: 40px;
  border: none;
  outline: none;
  border-radius: 6px;
  padding-left: 14px;
`
export const WarningParagraph = styled.p`
  color: #ef4444;
  font-family: 'Roboto';
  font-size: 15px;
`
