import React from 'react';
import SelectFilter from '../Filter/SelectFilter';
import { NavMainStyle } from './NavMainStyle';
import ButtonIndex from '../Button/ButtonIndex';

const NavMain = ({ setFilter, deletar, taskList, items, value }) => {
  return (
    <NavMainStyle>
      <SelectFilter setFilter={setFilter} items={items} value={value} />
      <p>Total de tarefas na lista ({taskList.length}) </p>
      <ButtonIndex txt={'Deletar tudo'} onClick={deletar} />
    </NavMainStyle>
  );
};

export default NavMain;
