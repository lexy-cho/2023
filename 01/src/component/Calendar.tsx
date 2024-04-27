import { ko } from "date-fns/esm/locale";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface DatePickerProps {
  selectedDate: any;
  onSelectDate?: (date: Date) => void;
  datelimit?: any;
}

const Calendar: React.FC<DatePickerProps> = ({ selectedDate, onSelectDate, datelimit }) => {
  return (
    <DatePicker
      locale={ko}
      dateFormat="yyyy-MM-dd" // 날짜 형태
      shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
      minDate={!datelimit ? new Date("2000-01-01") : new Date("1900-01-01")} // minDate 이전 날짜 선택 불가
      // maxDate={new Date()} // maxDate 이후 날짜 선택 불가
      selected={selectedDate}
      onChange={(date: Date) => {
        // console.log("onChange", date);
        if (onSelectDate) onSelectDate(date);
      }}
      renderCustomHeader={({
        // custom header 만들어주기
        monthDate,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }) => (
        <div className="custom-header" style={{ display: "flex", justifyContent: "center", margin: "10" }}>
          <button className="datePickerBtn btnPrev" onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
            {/* <img src="public/assets/images/btn_next.png" /> */}
          </button>
          <div style={{ alignSelf: "center" }}>
            {monthDate.getFullYear()}년 {monthDate.getMonth() + 1}월
          </div>
          <button className="datePickerBtn btnNext" onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
            {/* <img src="../../public/assets/images/btn_next.png" /> */}
          </button>
        </div>
      )}
    />
  );
};

export default Calendar;
