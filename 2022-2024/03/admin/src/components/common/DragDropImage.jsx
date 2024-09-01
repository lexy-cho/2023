import React, { useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';
import useSnackBar from '@components/common/hooks/useSnackBar';
const DragDropImage = ({ onHandleDrop, className, children, maxSize, fileType = 'IMG' }) => {
  const { open, warnOpen } = useSnackBar();
  const fileTypes = ['JPG', 'PNG', 'GIF', 'JPEG'];
  const video = ['mp4'];
  //prop으로 변경
  const [file, setFile] = useState(null);

  const handleError = () => {
    warnOpen('용량이 초과되었습니다.');
  };
  const handleTypeError = () => {
    warnOpen('설정된 미디어 유형과 다릅니다.');
  };
  return (
    <FileUploader
      name="file"
      types={fileType === 'IMG' ? fileTypes : video}
      multiple={true}
      classes={className}
      maxSize={maxSize}
      onDrop={onHandleDrop}
      onSelect={onHandleDrop}
      required
      onSizeError={handleError}
      onTypeError={handleTypeError}
    >
      {children}
    </FileUploader>
  );
};

export default DragDropImage;
