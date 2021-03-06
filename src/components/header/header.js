import React from 'react'
import convert from 'htmr'
import styled from 'styled-components'

const Wrapper = styled.div`
  text-align: center;
  margin: 5rem 0;
`

const Portrait = styled.img`
  border-radius: 10px;
  width: 200px;
  height: 200px;
  background: #ddd;
  @media (max-width: 600px) {
    width: 150px;
    height: 150px;
  }
`

export default ({contents}) => (
  <Wrapper>
    <Portrait src="/portrait.jpg" alt="Portrait" />
    {convert(contents)}
  </Wrapper>
)
