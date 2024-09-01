import React, { useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';

const DragDropImage = ({ onHandleDrop, className, children, maxSize }) => {
  const fileTypes = ['JPG', 'PNG', 'GIF', 'JPEG'];
  const [file, setFile] = useState(null);

  return (
    <FileUploader name="file" types={fileTypes} multiple={true} classes={className} maxSize={maxSize} onDrop={onHandleDrop} onSelect={onHandleDrop}>
      {children}
    </FileUploader>
  );
};

export default DragDropImage;
