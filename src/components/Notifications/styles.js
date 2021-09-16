import styled from 'styled-components'

export const Container = styled.div`
  grid-area: notification;
  background: #fff;
  color: var(--orange-main);
  border-radius: 2rem;
  margin: 1rem auto 0;
  padding: 1rem;
  width: 18rem;
  height: 90%;

  @media (max-width: 1080px) {
    width: 15rem;
  }

  h5 {
    margin: 0 0 0.5rem 0.75rem;
    font-weight: 700;
    font-size: 1rem;
    margin-right: auto;
  }

  .notification-container {
    color: #fff;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;

    div {
      background: var(--blue-lighter);
      border-radius: 1rem;
      width: 100%;
      padding: 1rem;

      transition: all ease 0.3s;

      &:hover {
        transform: translateY(-15%);
        background: var(--blue-main);
      }
    }
  }
`
