import styled from 'styled-components';

export const StyleButton = styled.button`
  display: inline-block;
  font-weight: 400;
  text-align: center;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  color: #fff;
  background-color: #4c1d95;
  border-color: #4c1d95;

  &:hover {
    background-color: darkviolet;
    border-color: darkviolet;
  }
`;
