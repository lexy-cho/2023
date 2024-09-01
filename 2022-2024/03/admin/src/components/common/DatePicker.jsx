import React, { useEffect, useState } from 'react';
import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
import localeEn from 'air-datepicker/locale/en';
import { getTodayFormat } from '@utils/DateUtil';
const DatePicker = ({ onSelect, ...props }) => {
  return new AirDatepicker(props.dateRef.current, {
    dateFormat: 'yyyy-MM-dd',
    minDate: new Date(),
    range: props.range || false,
    autoClose: true,
    multipleDatesSeparator: props.range ? ' - ' : '',
    onSelect({ date }) {
      onSelect && onSelect(date);
    },
    locale: localeEn,
    ...props,
  });
};

export default DatePicker;
