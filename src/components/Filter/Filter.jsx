import React, { useState } from 'react';
import { FilterStyles, List, ListItem } from './FilterStyles';
import ButtonIndex from '../Button/ButtonIndex';

const Filter = ({ setFilter, setSort }) => {
  const [activeItem, setActiveItem] = useState(0);

  const handleItemClick = (value, index) => {
    setActiveItem(index);
    setFilter(value);
  };

  const items = ['Todos', 'Completo', 'Incompleto'];
  return (
    <FilterStyles>
      <h4>Filtrar:</h4>
      <div>
        <List>
          {items.map((item, index) => (
            <ListItem
              key={index}
              className={activeItem === index ? 'active' : ''}
              onClick={() => handleItemClick(item, index)}
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
