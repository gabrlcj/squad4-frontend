import styled from 'styled-components'

export const Container = styled.div`
  grid-area: appointments;
  background: #fff;
  color: var(--orange-main);
  border-radius: 2rem;
  margin: 0.75rem auto 0;
  padding: 0.75rem 1rem;
  width: 18rem;
  height: 90%;

  display: flex;
  align-items: center;
  justify-content: start;
  gap: 0.25rem;
  flex-direction: column;

  @media (max-width: 1080px) {
    width: 15rem;
  }

  h4 {
    width: 100%;
    text-align: center;
    line-height: 1.5rem;
    margin-bottom: 1rem;
    font-weight: 800;
    color: var(--blue-darker);
  }

  h5 {
    margin: 0 0.5rem 1rem;
    font-weight: 700;
    font-size: 1rem;
    margin-right: auto;
  }

  .appointments {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    .rec {
      width: 100%;
      height: 5rem;
      padding: 0;
      margin: 0;

      .rec.rec-item-wrapper {
        flex-direction: column;
      }

      button {
        border-radius: 100%;
        width: 0.75rem;
        height: 0.75rem;
        padding: 0;
        border: 0;
        margin-top: 0.85rem;
        background: #c4c4c4;

        &:hover {
          box-shadow: 0 0 1px 3px var(--orange-lighter);
        }
      }

      .rec.rec-dot_active {
        background: var(--orange-lighter);
        box-shadow: 0 0 1px 3px var(--orange-lighter);
      }

      .rec.rec-arrow {
        display: none;
      }

      .rec.rec-pagination {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
      }
    }

    .appointment-date {
      color: #fff;
      background: var(--orange-main);
      padding: 1rem 0.35rem;
      border-radius: 1rem;
      width: 100%;
      height: 3.25rem;
      text-align: center;

      display: flex;
      align-items: center;
      justify-content: space-around;
      transition: all ease-in-out 0.3s;
    }

    .show {
      transition: all ease-in-out 0.3s;
      transform: translateX(-40%);
    }
  }
`
