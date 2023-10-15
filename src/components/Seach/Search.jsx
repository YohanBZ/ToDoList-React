import React from 'react';
import { SearchStyled } from './SearchStyled';

const Search = ({ search, setSearch }) => (
  <SearchStyled
    type="text"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    placeholder="Digite para pesquisar..."
  />
);

export default Search;
