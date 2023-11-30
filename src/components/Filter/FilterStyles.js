import styled from 'styled-components';

export const FilterStyles = styled.div`
  display: flex;
  width: 30%;
  flex-direction: column;
  padding: 10px 0px 10px 10px;
  gap: 10px;
  color: white;
  background-color: #14203f;

  .filters {
    display: flex;
    margin-right: 15px;
    flex-direction: column;
    gap: 5px;
  }
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const ListItem = styled.li`
  padding: 5px 0px;
  cursor: pointer;

  &.active {
    border-radius: 4px 0 0 4px;
    background-color: #3d475f;
    border-right: 3px solid #b6c4e4;
    color: white;
  }

  a {
    text-decoration: none;
    padding: 5px;
    color: inherit;
  }
`;
