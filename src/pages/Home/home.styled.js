import styled from '@emotion/styled';

export const Gallery = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, 160px);
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const Message = styled.p`
  text-align: center;
  color: #212121;
  font-weight: 500;
  font-size: 12px;
  line-height: calc(14 / 12);
  text-transform: uppercase;
  padding-left: 5px;
  margin-top: 5px;
`;

export const Image = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
  overflow: hidden;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    transform: scale(1.03);
    cursor: pointer;
  }
`;

export const Card = styled.li`
  border-radius: 2px;
  overflow: hidden;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;
