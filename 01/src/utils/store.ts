import CryptoJS from 'crypto-js';

const ACCESS_TOKEN_KEY = 'access_token';
const REFRESH_TOKEN_KEY = 'refresh_token';
const USER_INFO = 'user_info';
const SEORO_THEME = 'seoro_theme';

interface UserInfo {
  admSeq?: string;
  admId?: string;
  admEmail?: string;
  admPhone?: string;
  memberNormalVO?: any;
  memUseType?: string;
  userType?: string;
  notiCount?: number;
}

/**
 * AccessToken 정보를 저장한다.
 * @param token 
 */
export const setAccessToken = (token: string): void => {
  sessionStorage.setItem(ACCESS_TOKEN_KEY, token);
};

/**
 * AccessToken 정보를 가져온다.
 * @returns 
 */
export const getAccessToken = (): string | null => {
  return sessionStorage.getItem(ACCESS_TOKEN_KEY);
};

/**
 * AccessToken 정보를 삭제한다.
 */
export const removeAccessToken = (): void => {
  sessionStorage.removeItem(ACCESS_TOKEN_KEY);
};

/**
 * RefreshToekn 정보를 저장한다.
 * @param token 
 */
export const setRefreshToken = (token: string): void => {
  // Set refreshToken as a HTTP-only cookie
  document.cookie = `${REFRESH_TOKEN_KEY}=${token}; path=/; secure; SameSite=Strict`;
};

/**
 * RefreshToekn 정보를 가져온다.
 * @returns 
 */
export const getRefreshToken = (): string | null => {
  const cookies = document.cookie.split(';').map((cookie) => cookie.trim());
  for (const cookie of cookies) {
    if (cookie.startsWith(`${REFRESH_TOKEN_KEY}=`)) {
      return cookie.substring(REFRESH_TOKEN_KEY.length + 1);
    }
  }
  return null;
};

/**
 * RefreshToekn 정보를 삭제한다.
 */
export const removeRefreshToken = (): void => {
  document.cookie = `${REFRESH_TOKEN_KEY}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC; secure; SameSite=Strict`;
};

/**
 * 유저 정보를 저장한다.
 * @param userInfo 
 */
export const setUserInfo = (userInfo: UserInfo): void => {
  const userInfoString = JSON.stringify(userInfo);
  const encryptedUserInfo = CryptoJS.AES.encrypt(userInfoString, `${process.env.REACT_APP_ENC_KEY}`).toString()
  sessionStorage.setItem(USER_INFO, encryptedUserInfo);
};

/**
 * 유저 정보를 가져온다.
 * @returns 
 */
export const getUserInfo = (): UserInfo | null => {
  const encryptedUserInfo = sessionStorage.getItem(USER_INFO);
  if (encryptedUserInfo) {
    const decryptedBytes = CryptoJS.AES.decrypt(encryptedUserInfo, `${process.env.REACT_APP_ENC_KEY}`);
    const decryptedUserInfoString = decryptedBytes.toString(CryptoJS.enc.Utf8);
    const decryptedUserInfo: UserInfo = JSON.parse(decryptedUserInfoString);
    return decryptedUserInfo;
  } else {
    // console.log('No UserInfo found in sessionStorage.');
    return null;
  }
};

/**
 * 유저 정보를 삭제한다.
 */
export const removeUserInfo = (): void => {
  sessionStorage.removeItem(USER_INFO);
};

/**
 * 다크모드 정보를 저장한다.
 * @param darkMode 
 */
export const setTheme = (darkMode:boolean): void => {
  !darkMode ? document.querySelector("body")?.classList.add('dark') : document.querySelector("body")?.classList.remove('dark');
  sessionStorage.setItem(SEORO_THEME, String(!darkMode));
};

/**
 * 다크모드 정보를 가져온다.
 * @returns 
 */
export const getTheme = (): boolean => {
  const darkMode = sessionStorage.getItem(SEORO_THEME);
  return Boolean(JSON.parse(String(darkMode)));
};