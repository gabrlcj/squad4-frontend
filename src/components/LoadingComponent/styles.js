import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));


  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #36357e;
    width: 45rem;
    height: 30rem;
    border-radius: 40px 0px 40px 40px;

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

`
