import React from 'react';
import PropTypes from 'prop-types';
import { DragDropImage } from '@components/common';
import useFileUpload from '@components/hooks/useFileUpload';
import FileItem from './FileItem';

const FileUpload = ({ fileList, setFileList, maxSize, maxFile, fileTypes, label, guide, isMust }) => {
  const { handleAddFile, handleRemoveFile } = useFileUpload({ fileList, setFileList, maxFile });

  return (
    <>
      <div className="fileSet">
        <DragDropImage className={'fileFind'} fileTypes={fileTypes} onHandleDrop={(file) => handleAddFile(file)} maxSize={maxSize}>
          {label}
        </DragDropImage>
        {guide}

        <ul>
          {fileList?.map((el, idx) => {
            return <FileItem key={`file-key-${idx}`} isMust={isMust} element={el} idx={idx} onRemoveFile={handleRemoveFile} />;
          })}
        </ul>
      </div>
    </>
  );
};

FileUpload.defaultProps = {
  isMust: false,
  maxFile: 5,
  label: <label>파일 첨부하기</label>,
  guide: (
    <em className="guide">
      [파일형식] <i>pdf, jpg, png</i> (500MB 이하)
    </em>
  ),
};

export default FileUpload;
