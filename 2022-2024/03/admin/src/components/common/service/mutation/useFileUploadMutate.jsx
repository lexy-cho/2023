import { commonApi } from '@api';

const useContentMainMutate = () => {
  const fetchImageKey = (params) => {
    return commonApi.multipartFileUpload(params);
  };
  const fetchFileKey = (params) => {
    return commonApi.multipartEtcUpload(params);
  };
  const fetchMovKey = (params) => {
    console.log(params);
    return commonApi.multipartMovUpload(params);
  };

  return { fetchImageKey, fetchFileKey, fetchMovKey };
};

export default useContentMainMutate;
