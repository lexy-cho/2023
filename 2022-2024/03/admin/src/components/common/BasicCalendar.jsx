import { CoCalendar } from '@components/common';
const BasicCalendar = ({ title, requied = true, handleItemChange, name, value }) => {
  console.log(value);
  return (
    <dl>
      <dt>
        {title} {requied && <sup>*</sup>}
      </dt>
      <dd>
        <CoCalendar onChangeDate={(date) => handleItemChange(name, date)} defaultDate={value} />
      </dd>
    </dl>
  );
};

export default BasicCalendar;
