import React from 'react';

const SelectFilter = ({ value, setFilter, items }) => {
  return (
    <select value={value} onChange={(e) => setFilter(e.target.value)}>
      <option value="" disabled>
        Filtrar
      </option>
      {items.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
      {/* <option value="Todos">Todas</option>
      <option value="Completos">Completas</option>
      <option value="Incomplete">Incompletas</option> */}
    </select>
  );
};

export default SelectFilter;
