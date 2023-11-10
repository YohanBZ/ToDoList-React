import React, { useState } from 'react';
import { FilterStyles, List, ListItem } from './FilterStyles';
import ButtonIndex from '../Button/ButtonIndex';

const Filter = ({ filter, setFilter, setSort, items }) => {
  const [activeItem, setActiveItem] = useState(filter);

  const handleItemClick = (item) => {
    setActiveItem(item);
    setFilter(item);
  };

  return (
    <FilterStyles>
      <h4>Filtrar:</h4>
      <div>
        <List>
          {items.map((item) => (
            <ListItem
              key={item}
              className={filter === item ? 'active' : ''}
              onClick={() => handleItemClick(item)}
            >
              <a href="#">{item}</a>
            </ListItem>
          ))}
        </List>
      </div>
      <div className="filters">
        <p>Ordem alfabética:</p>
        <ButtonIndex txt={'Ascendente'} onClick={() => setSort('Asc')} />
        <ButtonIndex txt={'Descendente'} onClick={() => setSort('Desc')} />
      </div>
    </FilterStyles>
  );
};

export default Filter;
