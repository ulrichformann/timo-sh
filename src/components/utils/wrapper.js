import React from 'react'
import styled from 'styled-components'

const Darken = styled.div`
  background: rgb(246, 246, 246);
  p {
    color: #666666;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${p => (p.big ? '940px' : '740px')};
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  margin: 0 auto;
  ${p => p.margin && 'margin: 3rem auto 6rem'};
  @media (max-width: 600px) {
    ${p => p.margin && 'margin: 2rem auto 4rem'};
  }
`

export default props => {
  const wrapper = (
    <Wrapper margin={props.margin} big={props.big}>
      {props.children}
    </Wrapper>
  )

  if (props.darken) {
    return <Darken>{wrapper}</Darken>
  }

  return wrapper
}
