import styled from 'styled-components'

export const Container = styled.nav`
  grid-area: navbar;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  border-radius: 0 1.75rem 1.75rem 0;
  box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.7);
  background: var(--blue-darker);
  padding: 2rem 0;

  .profile-img {
    height: 6rem;
    width: 6rem;
    border-radius: 50%;
    border: 3.5px solid white;
  }

  .nav-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5rem;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    flex-direction: column;

    img {
      height: 2rem;
      width: 2rem;
    }
  }
`
