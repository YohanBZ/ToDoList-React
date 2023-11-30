import { Calendar, CalendarBlank } from '@phosphor-icons/react';
import React from 'react';

const CurrentDate = () => {
  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate()}/${
    currentDate.getMonth() + 1
  }/${currentDate.getFullYear()}`;

  return (
    <div style={{ color: '#c0c5de', display: 'flex', alignItems: 'end' }}>
      <CalendarBlank size={24} color="#c0c5de" />
      {formattedDate}
    </div>
  );
};

export default CurrentDate;
