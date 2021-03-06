import styled from 'styled-components'

export default styled.div`
  height: ${p => p.height || '350px'};
  width: 1px;
  align-self: center;
  background: #eee;
  @media (max-width: 600px) {
    display: none;
  }
`
