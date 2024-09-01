import { useEffect, useRef, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css';
import moment from 'moment/moment';
import styled from 'styled-components';
import { dateFormat, dateFormatUse } from '@utils/DateUtil';
export const StyledCalendarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  .react-calendar {
    width: 100%;
    border: none;
    border-radius: 0.5rem;
    //box-shadow: 4px 2px 10px 0px rgba(0, 0, 0, 0.13);
    padding: 3% 5%;
    background-color: white;
    z-index: 999;
  }

  /* 전체 폰트 컬러 */
  .react-calendar__month-view {
    abbr {
      color: ${(props) => props.theme.gray_1};
    }
  }

  /* 네비게이션 가운데 정렬 */
  .react-calendar__navigation {
    justify-content: flex-start;
  }

  .react-calendar__navigation__arrow {
    justify-content: flex-end;
  }

  /* 네비게이션 폰트 설정 */
  .react-calendar__navigation button {
    font-weight: 800;
    font-size: 1rem;
  }

  /* 네비게이션 버튼 컬러 */
  .react-calendar__navigation button:focus {
    background-color: white;
  }

  /* 네비게이션 비활성화 됐을때 스타일 */
  .react-calendar__navigation button:disabled {
    background-color: white;
    color: ${(props) => props.theme.darkBlack};
  }

  /* 년/월 상단 네비게이션 칸 크기 줄이기 */
  .react-calendar__navigation__label {
    flex-grow: 0 !important;
  }

  /* 요일 밑줄 제거 */
  .react-calendar__month-view__weekdays abbr {
    text-decoration: none;
    font-weight: 800;
  }

  /* 일요일에만 빨간 폰트 */
  .react-calendar__month-view__weekdays__weekday--weekend abbr[title='일요일'] {
    color: ${(props) => '#f3500f'};
  }

  .react-calendar__month-view__weekdays__weekday--weekend abbr[title='토요일'] {
    color: ${(props) => '#4f07eb'};
  }

  /* 오늘 날짜 폰트 컬러 */
  .react-calendar__tile--now {
    background: none;
    abbr {
      color: ${(props) => props.theme.primary_2};
    }
  }

  /* 네비게이션 월 스타일 적용 */
  .react-calendar__year-view__months__month {
    border-radius: 0.8rem;
    background-color: ${(props) => props.theme.gray_5};
    padding: 0;
  }

  /* 네비게이션 현재 월 스타일 적용 */
  .react-calendar__tile--hasActive {
    background-color: ${(props) => props.theme.primary_2};
    abbr {
      color: white;
    }
  }

  /* 일 날짜 간격 */
  .react-calendar__tile {
    padding: 5px 0px 18px;
    position: relative;
  }

  /* 네비게이션 월 스타일 적용 */
  .react-calendar__year-view__months__month {
    flex: 0 0 calc(33.3333% - 10px) !important;
    margin-inline-start: 5px !important;
    margin-inline-end: 5px !important;
    margin-block-end: 10px;

    padding: 20px 6.6667px;
    font-size: 0.9rem;
    font-weight: 600;
    color: ${(props) => props.theme.gray_1};
  }

  /* 선택한 날짜 스타일 적용 */
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus,
  .react-calendar__tile--active {
    background-color: ${(props) => props.theme.yellow_2};
    border-radius: 0.3rem;
  }

  .react-calendar__tile:disabled {
    background-color: ${(props) => 'white'};
    abbr {
      color: #c5c8ce !important;
    }
  }
`;

export const StyledCalendar = styled(Calendar)`
  z-index: 999;
`;

/* 오늘 버튼 스타일 */
// export const StyledDate = styled.div`
//   position: absolute;
//   right: 7%;
//   top: 6%;
//   background-color: ${(props) => props.theme.primary_3};
//   color: ${(props) => props.theme.yellow_2};
//   width: 18%;
//   min-width: fit-content;
//   height: 1.5rem;
//   text-align: center;
//   margin: 0 auto;
//   line-height: 1.6rem;
//   border-radius: 15px;
//   font-size: 0.8rem;
//   font-weight: 800;
// `;

/* 오늘 날짜에 텍스트 삽입 스타일 */
// export const StyledToday = styled.div`
//   font-size: x-small;
//   color: ${(props) => props.theme.br_2};
//   font-weight: 600;
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translateX(-50%);
// `;

/* 출석한 날짜에 점 표시 스타일 */
// export const StyledDot = styled.div`
//   background-color: ${(props) => props.theme.br_2};
//   border-radius: 50%;
//   width: 0.3rem;
//   height: 0.3rem;
//   position: absolute;
//   top: 60%;
//   left: 50%;
//   transform: translateX(-50%);
// `;

const CoCalendar = ({ onChangeDate, resultDateType = 'yyyy-MM-DD', defaultDate, maxDate, min = true, ...props }) => {
  const { className, placeholder } = props;
  const [checkDate, setCheckDate] = useState();
  const [date, setDate] = useState(defaultDate);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const calendarRef = useRef(null);
  const inputRef = useRef(null);
  const [calendarPosition, setCalendarPosition] = useState('bottom');
  const handleDateChange = (newDate) => {
    setDate(newDate);
    //setIsCalendarOpen(false); // 날짜 선택 후 캘린더 닫기
  };

  const handleClickOutside = (event) => {
    if (calendarRef.current && !calendarRef.current.contains(event.target)) {
      setIsCalendarOpen(false);
    }
  };

  useEffect(() => {
    if (isCalendarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    // input 필드의 위치를 감지하여 달력 위치 조정
    const inputRect = inputRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    if (inputRect.bottom + 300 > viewportHeight) {
      // 300은 달력의 대략적인 높이
      setCalendarPosition('top');
    } else {
      setCalendarPosition('bottom');
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isCalendarOpen]);

  const handleInputClick = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  const handleCancel = () => {
    //setDate();
    setIsCalendarOpen(false);
  };

  const handleApply = () => {
    setIsCalendarOpen(false);
    // 적용 로직 추가 가능

    setCheckDate(date);
    onChangeDate(dateFormatUse(date, resultDateType));
  };

  const tileContent = ({ date, view }) => {
    // 월 단위 뷰일 때만 타일 내용을 커스터마이즈
    if (view === 'month') {
      return <span>{date.getDate()}</span>;
    }
    return null;
  };

  useEffect(() => {
    console.log(checkDate);
    if (defaultDate) {
      console.log(defaultDate);
      setCheckDate(defaultDate);
    }
  }, [defaultDate]);

  console.log(placeholder);
  return (
    <div className="my-date-picker" ref={calendarRef} style={{ ...props.style }}>
      <input type="text" className={className ? className : 'cal'} value={checkDate ? dateFormat(checkDate) : ''} onClick={handleInputClick} ref={inputRef} placeholder={props?.placeholder} />
      {isCalendarOpen && (
        <div className={`calendar-container ${calendarPosition} `}>
          <StyledCalendarWrapper>
            <StyledCalendar
              value={checkDate}
              onChange={handleDateChange}
              formatDay={(locale, date) => moment(date).format('D')}
              formatYear={(locale, date) => moment(date).format('YYYY')}
              formatMonthYear={(locale, date) => moment(date).format('YYYY. MM')}
              calendarType="gregory"
              showNeighboringMonth={false}
              next2Label={null}
              prev2Label={null}
              minDetail="year"
              minDate={min && new Date()}
            />
          </StyledCalendarWrapper>
          {/* <Calendar
            onChange={handleDateChange}
            value={date}
            formatDay={(locale, date) => moment(date).format('D')} // 일 제거 숫자만 보이게
            formatYear={(locale, date) => moment(date).format('YYYY')} // 네비게이션 눌렀을때 숫자 년도만 보이게
            formatMonthYear={(locale, date) => moment(date).format('YYYY. MM')} // 네비게이션에서 2023. 12 이렇게 보이도록 설정
            calendarType="gregory" // 일요일 부터 시작
            showNeighboringMonth={false} // 전달, 다음달 날짜 숨기기
            next2Label={null} // +1년 & +10년 이동 버튼 숨기기
            prev2Label={null} // -1년 & -10년 이동 버튼 숨기기
            minDetail="year" // 10년단위 년도 숨기기
          /> */}
          <div className="button-container">
            <button onClick={handleCancel} style={{ marginRight: 5 }}>
              취소
            </button>
            <button onClick={handleApply}>적용</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoCalendar;
