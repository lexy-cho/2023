import { useState } from 'react';
import useVocMutate from '@pages/contents/notification/voc/service/mutaions/useVocMutate';

//path가 변경되면
const useFileDownload = () => {
  const [params, setParams] = useState({
    filePath: 'crs',
    useUniqueFileName: '1',
    useDateFolder: '1',
    targetType: 'TEMP',
    targetKey: 'TEMP',
    userId: 'admin_test',
    fileType: 'etc',
    companySeq: 8001,
    hotelSeq: 8001,
    fileData: '',
    option1: 'test',
  });
  const { fetchVocFile } = useVocMutate();

  const handleFileDownload = async (filePath, fileName) => {
    console.log('file download 클릭');
    const { companySeq, hotelSeq } = params;
    const url = `/${companySeq}/${hotelSeq}/${filePath}${fileName}`;
    if (!url) return console.log('url이없어서 return');
    try {
      const result = await fetchVocFile(url, { responseType: 'blob' });
      const urls = window.URL.createObjectURL(new Blob([result.data]));
      const a = document.createElement('a');
      a.href = urls;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      setTimeout((_) => {
        window.URL.revokeObjectURL(urls);
      }, 1000);
      a.remove();
    } catch (err) {
      console.log('파일 다운로드에 실패했습니다. ', err);
    }
  };

  return { handleFileDownload, setParams };
};

export default useFileDownload;
