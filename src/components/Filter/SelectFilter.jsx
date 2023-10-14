import React from 'react';

const SelectFilter = ({ filter, setFilter }) => {
  return (
    <select value={filter} onChange={(e) => setFilter(e.target.value)}>
      <option disabled>Filtrar</option>
      <option value="Todos">Todas</option>
      <option value="Completos">Completas</option>
      <option value="Incomplete">Incompletas</option>
    </select>
  );
};

export default SelectFilter;
