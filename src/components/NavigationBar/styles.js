import styled from 'styled-components'

export const Container = styled.nav`
  grid-area: navbar;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  border-radius: 0 1.75rem 1.75rem 0;
  box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.7);
  background: var(--blue-darker);
  padding: 1.5rem 0;

  @media (min-width: 1440px) {
    border-radius: 1.75rem 0 1.75rem 0;
  }

  .profile-img {
    height: 6rem;
    width: 6rem;
    border-radius: 50%;
    border: 3.5px solid white;

    @media (max-width: 1080px) {
      height: 3.5rem;
      width: 3.5rem;
      border: 2.2px solid white;
    }
  }

  .nav-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5rem;

    transition: all ease 0.3s;

    &:hover {
      transform: translateY(0%);
      filter: drop-shadow(1.5);
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    flex-direction: column;
  }

  img:not(.profile-img) {
    height: 2rem;
    width: 2rem;

    transition: all ease 0.3s;

    &:hover {
      transform: translateY(-25%);
      filter: drop-shadow(1.5);
    }

    @media (max-width: 1080px) {
      height: 1.75rem;
      width: 1.75rem;
    }
  }
`
