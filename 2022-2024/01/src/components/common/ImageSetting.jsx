import React, { forwardRef } from 'react';
import { DragDropImage } from '@components/common';
// import { getImageUrl } from '@utils/Image';
import useImageUpload from '../hooks/useImageUpload';
import ImageItem from './ImageItem';

const ImageSetting = ({ fileList, setFileList, maxSize }) => {
  const { handleAddFile, handleRemoveFile } = useImageUpload({ fileList, setFileList });
  return (
    <>
      <div className='fileSet'>
        <div>
          <ul>
            <li>
              <span className='fileLoad'>
                <span>이미지영역</span>
                <button className='bID'>Del</button>
              </span>
            </li>
          </ul>
          <ul items={fileList?.map((el, i) => {
              return <ImageItem element={el} idx={i} />;
            })}>
          </ul>
          <DragDropImage className={'fileFind'} onHandleDrop={(file) => handleAddFile(file)} maxSize={maxSize}>
              <i>파일 첨부하기</i>
          </DragDropImage>
        </div>
        <p className='fileGuide'>
          <span>사진 및 동영상은 최대 N장까지, NNMB 이하의 파일만 업로드가 가능합니다.</span>
          <span>상품과 무관한 내용이나 사진 및 동양상 등의 부적절한 리뷰는 사전 경고 없이 삭제될 수 있습니다.</span>
        </p>
      </div>
    </>
  );
};

export default ImageSetting;
