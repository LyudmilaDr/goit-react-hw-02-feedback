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
  padding: 12px 0;
  border-radius: 9px;
  border-color: #d9d9d9;
  cursor: pointer;
  background-color: #ffffff;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:active {
    background-color: #4440f6;
  }
`;
