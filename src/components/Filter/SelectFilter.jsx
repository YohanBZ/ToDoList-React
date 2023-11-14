import React from 'react';

const SelectFilter = ({ value, setFilter, items }) => {
  return (
    <select
      style={{
        width: '10rem',
        padding: '0.3rem',
        borderRadius: '6px',
        background: '#654497',
        border: 'none',
        color: 'white',
      }}
      value={value}
      onChange={(e) => setFilter(e.target.value)}
    >
      <option value="" disabled>
        Filtrar
      </option>
      {items.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default SelectFilter;
