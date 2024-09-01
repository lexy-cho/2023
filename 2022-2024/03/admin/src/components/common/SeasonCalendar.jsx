import React, { useState } from 'react';
import { isBefore, isEqual, format } from 'date-fns';

const SeasonCalendar = ({ onClick, dates }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

  const daysInMonth = [];
  for (let i = 1; i <= endOfMonth.getDate(); i++) {
    daysInMonth.push(new Date(currentDate.getFullYear(), currentDate.getMonth(), i));
  }

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const renderDaysOfWeek = () => {
    const daysOfWeek = ['월', '화', '수', '목', '금', '토', '일'];
    return daysOfWeek.map((day, index) => <th key={index}>{day}</th>);
  };

  //일월화수목금토
  // const renderDates = () => {
  //   const firstDayOfMonth = startOfMonth.getDay();
  //   const dates = [];

  //   for (let i = 0; i < firstDayOfMonth; i++) {
  //     dates.push(<td key={`empty-${i}`} className="empty"></td>);
  //   }

  //   daysInMonth.forEach((date, index) => {
  //     const isToday = date.toDateString() === new Date().toDateString();
  //     dates.push(
  //       <td key={index} className={isToday ? 'today' : ''}>
  //         <span>{date.getDate()}</span>
  //       </td>
  //     );
  //   });

  //   return dates;
  // };

  //월화수목금토일
  const renderDates = () => {
    const firstDayOfMonth = (startOfMonth.getDay() + 6) % 7; // 월요일을 첫번째로 변경
    const rdates = [];

    for (let i = 0; i < firstDayOfMonth; i++) {
      rdates.push(<td key={`empty-${i}`} className="empty"></td>);
    }

    daysInMonth.forEach((date, index) => {
      const isToday = date.toDateString() === new Date().toDateString();
      const isCheck = dates.findIndex((d) => format(date, 'yy.MM.dd') === d);

      rdates.push(
        <td
          key={index}
          className={`${isToday ? 'today' : ''} ${isCheck > -1 ? 'this' : ''}`}
          // className="this"
          onClick={() => {
            if (onClick) onClick(format(date, 'yy.MM.dd'));
          }}
        >
          <span>{date.getDate()}</span>
        </td>
      );
    });

    return rdates;
  };

  const renderWeeks = () => {
    const dates = renderDates();
    const weeks = [];

    for (let i = 0; i < dates.length; i += 7) {
      weeks.push(<tr key={`week-${i}`}>{dates.slice(i, i + 7)}</tr>);
    }

    return weeks;
  };

  return (
    <>
      <div className="month">
        {currentDate.getFullYear()}년 {currentDate.getMonth() + 1}월
        <span>
          <button onClick={handlePrevMonth}>위</button>
          <button onClick={handleNextMonth}>아래</button>
        </span>
      </div>
      <table className="day">
        <thead>
          <tr>{renderDaysOfWeek()}</tr>
        </thead>
        <tbody>{renderWeeks()}</tbody>
      </table>
    </>
  );
};

export default SeasonCalendar;
