import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  padding-top: 40px;
  padding-right: 72px;
  padding-bottom: 40px;
  padding-left: 36px;
  min-width: 704px;
  //   min-height: 400px;
`;

export const Image = styled.img`
  width: 240px;
  height: 360px;
  object-fit: cover;
  border-radius: 25px;
`;

export const Title = styled.h2`
  margin-bottom: 10px;
  font-size: 35px;
`;

export const Headers = styled.h3`
  margin: 10px 0;
  text-transform: uppercase;
`;

export const GenresList = styled.ul`
  display: flex;
  gap: 10px;
`;
export const AdInfo = styled.ul`
  display: flex;
  gap: 20px;
  padding-left: 36px;
  background:lightgrey;
  margin-bottom: 20px;
`;

export const StyledLink = styled(Link)`
  font-size: 14px;
  line-height: calc(14 / 11);
  border-radius: 20px;
  display: inline-block;
  padding: 5px;
  text-transform: uppercase;
  cursor: pointer;
  border: 2px solid #212121;
  background-color: #212121;
  color: white;
  margin-left: 36px;
`;
