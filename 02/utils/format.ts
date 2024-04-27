import moment, { Moment } from 'moment';

export function formatDate(date: string | Date | undefined, format: string): string {
  const momentDate: Moment = moment(date);
  return momentDate.format(format) === "Invalid date" ? "-" : momentDate.format(format)
}


export function formatTime(totalSeconds: any, locale: string): string {
  if (totalSeconds === '') return '';

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = Math.floor(totalSeconds % 60);

  let formattedTime = null;

  if (locale === 'HH:mm:ss') {
    formattedTime = `${hours ? `${pad(hours)}시 ` : ``}${(hours || minutes) ? `${pad(minutes)}분 ` : ``}${pad(seconds)}초`;
  }else if (locale === 'mm') {
    formattedTime =  `${minutes ? `${pad(minutes)}분 ` : ``}`;
  }else if(locale === 'mm:ss') {
    formattedTime = `${minutes ? `${pad(minutes)}분 ` : ``}${seconds ? `${pad(seconds)}초`:``}`;
  }else {
    formattedTime = (hours ? pad(hours) + ":" : '') + pad(minutes) + ":" + pad(seconds);
  }

  function pad(value: any) {
    return value < 10 ? "0" + value : value;
  }
  return formattedTime;
};