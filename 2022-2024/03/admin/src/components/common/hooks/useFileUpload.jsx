import { useEffect, useState } from 'react';
import useContentMainMutate from '../service/mutation/useFileUploadMutate';

const switchBodyByType = (type) => {
  switch (type) {
    case 'IMG':
      return {
        companySeq: 8001,
        hotelSeq: 8001,
        fileData: [],
        filePath: 'IMG',
        useUniqueFileName: 1,
        useDateFolder: 1,
        targetType: 'BRANDING_LOGO_TEMP',
        targetKey: 'BRANDING_LOGO_TEMP',
        userId: 'admin_test',
        option1: '',
        makeThumb: 1,
        thumbWidth: 400,
        thumbHeight: 160,
        thumbOption: 4,
      };
    case 'MOV':
      return {
        filePath: 'MOV',
        encodeSize: '',
        encodeFps: 24,
        useUniqueFileName: 1,
        useDateFolder: 1,
        makeThumb: 1,
        thumbWidth: 400,
        thumbHeight: 160,
        thumbOption: 4,
        thumbPath: '',
        targetType: 'TEMP',
        targetKey: 'TEMP',
        companySeq: 8001,
        hotelSeq: 8001,
        userId: 'admin_test',
        fileData: [],
      };
  }
};

const useFileUpload = ({ fileType = 'IMG', formData }) => {
  const [formDataArr, setFormDataArr] = useState(formData || switchBodyByType(fileType));
  const { fetchImageKey, fetchMovKey } = useContentMainMutate();

  const makeFormData = (formDataArr) => {
    const formData = new FormData();
    for (const key in formDataArr) {
      console.log(key, formDataArr[key]);
      formData.append(key, formDataArr[key]);
    }

    return formData;
  };

  const fetchFileKeyByType = async (type, newFormDataArr) => {
    const formData = makeFormData(newFormDataArr);
    let result = '';
    if (type === 'mov') {
      console.log('type===mov');
      return (result = await fetchMovKey(formData));
    }
    if (type === 'img') {
      return (result = await fetchImageKey(formData));
    }
    return result;
  };

  const handleFileUpload = async (fileList, formData) => {
    let newFormDataArr = { ...formDataArr, fileData: fileList };
    if (formData) {
      newFormDataArr = { ...formData, fileData: fileList };
    }
    console.log(newFormDataArr);
    const fetchedFileKey = await fetchFileKeyByType(formData.filePath, newFormDataArr);
    return fetchedFileKey?.file_seq;
  };

  useEffect(() => {
    setFormDataArr(switchBodyByType(fileType));
  }, [fileType]);

  useEffect(() => {
    makeFormData();
  }, [formDataArr]);

  return { formDataArr, setFormDataArr, handleFileUpload };
};

export default useFileUpload;
