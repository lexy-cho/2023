import moment, { Moment } from 'moment';


const checkNull = (str: string | RegExpMatchArray | null) => {
  if (typeof str == "undefined" || str == null || str == "") {
    return true;
  }
  else {
    return false;
  }
}

export const betweenTime = (date1: string | Date, date2: string | Date) => {
  const startTime = moment(date1); 
  const endTime = moment(date2); 
  return moment.duration(endTime.diff(startTime)).asHours();
}
/**
 * 날짜 포맷
 * @param date 
 * @param format 
 * @returns 
 */
export const formatDate = (date: string | Date | undefined, format: string): string => {
  const momentDate: Moment = moment(date);
  return momentDate.format(format) === "Invalid date" ? "-" : momentDate.format(format)
}

/**
 * 시간 포맷
 * @param totalSeconds 
 * @param locale 
 * @returns 
 */
export const formatTime = (totalSeconds: any, locale: string): string => {
  if (totalSeconds === '') return '';

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = Math.floor(totalSeconds % 60);

  let formattedTime = null;

  if (locale === 'HH:mm:ss') {
    formattedTime = `${hours ? `${pad(hours)}시 ` : ``}${(hours || minutes) ? `${pad(minutes)}분 ` : ``}${pad(seconds)}초`;
  } else if (locale === 'mm') {
    formattedTime = `${minutes ? `${pad(minutes)}분 ` : ``}`;
  } else if (locale === 'mm:ss') {
    formattedTime = `${pad(minutes)}:${pad(seconds)}`;
  } else {
    formattedTime = (hours ? pad(hours) + ":" : '') + pad(minutes) + ":" + pad(seconds);
  }

  function pad(value: any) {
    return value < 10 ? "0" + value : value;
  }
  return formattedTime;
};

/**
 * 생년월일 검증
 * @param str 
 * @returns 
 */
export const isValidateDateOfBirth = (str: string) => {
  const dateRegex = /^\d{4}\d{2}\d{2}$/; //? YYYYMMDD 형식의 정규식
  const dateRegex2 = /^\d{4}-\d{2}-\d{2}$/; //? YYYY-MM-DD 형식의 정규식
  const dateRegex3 = /^(19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])$/; //? 230613 kty YYYYMMDD 각 자리에 유효한 생년월일인지 확인
  const dateRegex4 = /^(19|20)\d{2}-(0[1-9]|1[0-2])-([0-2][1-9]|3[01])$/; //? 230613 kty YYYY-MM-DD 각 자리에 유효한 생년월일인지 확인

  if (dateRegex.test(str) || dateRegex2.test(str)) {
    if (dateRegex3.test(str) || dateRegex4.test(str)) return true;
    else return false;
  }
  return false;
};

/**
 * 이메일 검증
 * @param str 
 * @returns 
 */
export const isValidateEmail = (str: string) => {
  // 간단한 이메일 유효성 검사를 위한 정규 표현식 사용
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return regex.test(str);
};

/**
 * 전화번호 검증
 * @param str 
 * @returns 
 */
export const isValidatePhone = (str: string) => {
  // 간단한 전화번호 유효성 검사를 위한 정규 표현식 사용
  const regex = /^01([0|1|6|7|8|9])?([0-9]{3,4})?([0-9]{4})$/
  return regex.test(str);
};

/**
 * 휴대폰 번호 마스킹
 * @param str 
 * @returns 
 */
export const maskingPhoneNumber = (str: string) => {
  return str.replaceAll('-', '').replace(/^(\d{3})(\d{2})(\d{2})(\d{2})(\d{2})$/, '010-$2**-**$4');
};

/**
 * 이메일 마스킹
 * @param str 
 * @returns 
 */
export const maskingEmail = (str: string) => {
  let originStr = str;
  let emailStr = originStr.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
  let strLength;

  if (checkNull(originStr) == true || checkNull(emailStr) == true) {
    return originStr;
  } else {
    strLength = emailStr ? emailStr.toString().split('@')[0].length - 3 : 0;

    // ex1) abcdefg12345@naver.com => ab**********@naver.com
    // return originStr.toString().replace(new RegExp('.(?=.{0,' + strLength + '}@)', 'g'), '*');

    // ex2) abcdefg12345@naver.com => ab**********@nav******
    return originStr.toString().replace(new RegExp('.(?=.{0,' + strLength + '}@)', 'g'), '*').replace(/.{6}$/, "******");
  }
};

/**
 * 금액 포맷
 * @param num 
 * @returns 
 */
export const withCommas = (num: number) => {
  return num > 0 ? `${num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원` : `무료`;
};

/**
 * 비밀번호 검증(영어,숫자,특수문자 포함 8자이상)
 * @param password 
 * @returns 
 */
export const isValidPassword = (str: string) => {
  let regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  return regex.test(str);
};

export const setPhoneBar = (target: string) => {
  target = target
    .replace(/[^0-9]/g, "")
    .replace(/(^02.{0}|^01.{1}|[0-9]{3,4})([0-9]{3,4})([0-9]{4})/g, "$1-$2-$3");
    return target;
};