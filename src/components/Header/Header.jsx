import React from 'react';
import Search from '../Seach/Search';
import { HeaderStyles } from './HeaderStyles';
import Logo from '../Logo/Logo';
import ButtonIndex from '../Button/ButtonIndex';
import CurrentDate from '../CurrentData/CurrentData';

const Header = ({ modal, setModal, search, setSearch }) => {
  return (
    <HeaderStyles>
      <Logo txt={'ToDo-List'} />
      <Search search={search} setSearch={setSearch} />
      <CurrentDate />
      <ButtonIndex
        modal={modal}
        onClick={() => setModal(true)}
        txt={'Criar Task'}
      />
    </HeaderStyles>
  );
};

export default Header;
