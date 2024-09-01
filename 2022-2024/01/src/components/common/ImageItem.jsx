import React, { forwardRef } from 'react';
import { DragDropImage } from '@components/common';
// import { getImageUrl } from '@utils/Image';

const ImageItem = ({ element, idx }) => {
  return (
    <li key={`file-key-${idx}`}>
        <span className="fileLoad">
          <span><img src={element.source} /></span>
          <button className="bID" onClick={() => handleRemoveFile(idx)}>Del</button>
        </span>
    </li>
    // <span className="imgUpLoadAfter" key={`file-key-${idx}`}>
    //   <i>
    //     <button className="bEV">View</button>
    //     <button className="bEX" onClick={() => handleRemoveFile(idx)}>
    //       Del
    //     </button>
    //   </i>
    //   <span><img src={element.source} /></span>
    //   {/* <span>{element.type === 'server' ? <img src={getImageUrl(element?.company_seq, element?.hotel_seq, element?.file_path, element?.file_name)} /> : <img src={element.source} />}</span> */}
    // </span>
  );
};

export default ImageItem;
