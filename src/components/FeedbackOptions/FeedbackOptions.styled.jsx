import styled from 'styled-components';
export const ReviewsList = styled.ul`
  padding: 0;
  margin-top: 30px;
  list-style: none;
  gap: 20px;
  display: flex;
  justify-content: center;
`;
export const Button = styled.button`
  font-weight: 500;
  font-size: 14px;
  width: 100px;
  text-transform: uppercase;
  padding: 10px 0;
  border-radius: 10px;
  border-color: transparent;
  cursor: pointer;
  &:active {
    background-color: #4440f6;
  }
`;
