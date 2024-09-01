import React, { forwardRef, useEffect, useLayoutEffect, useRef, useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ImageResize from 'quill-image-resize';
Quill.register('modules/ImageResize', ImageResize);
import FileUploadUtil from '@utils/FileUploadUtil';
import { getters } from '@store/BrandingStore';
import { getImageUrl } from '@utils/Image';

// Editor is an uncontrolled React component
const Editor = forwardRef(({ readOnly, defaultValue, onTextChange, onSelectionChange, height, maxLength = 500 }, ref) => {
  const containerRef = useRef(null);
  const defaultValueRef = useRef(defaultValue);
  const onTextChangeRef = useRef(onTextChange);
  const onSelectionChangeRef = useRef(onSelectionChange);
  const [quill, setQuill] = useState();
  useLayoutEffect(() => {
    onTextChangeRef.current = onTextChange;
    onSelectionChangeRef.current = onSelectionChange;
  });

  useEffect(() => {
    ref.current?.enable(!readOnly);
  }, [ref, readOnly]);
  const { handleUpload } = FileUploadUtil();

  useEffect(() => {
    const container = containerRef.current;
    const editorContainer = container.appendChild(container.ownerDocument.createElement('div'));
    const handleImage = async () => {
      console.log('image');
      const input = document.createElement('input');
      input.setAttribute('type', 'file');
      input.setAttribute('accept', 'image/*');
      input.click();
      input.addEventListener('change', async () => {
        //이미지를 담아 전송할 file을 만든다
        const file = input.files?.[0];
        try {
          const uploadImages = await handleUpload([{ file: file, type: 'local' }], getters.getHotelInfo().company_seq, getters.getHotelInfo().hotel_seq);

          const IMG_URL = getImageUrl(uploadImages[0].company_seq, uploadImages[0].hotel_seq, uploadImages[0].file_path, uploadImages[0].file_name);

          //에디터의 현재 커서 위치에 이미지 삽입
          //const editor = quill.getEditor();

          const range = quill.getSelection();
          // 가져온 위치에 이미지를 삽입한다
          quill.insertEmbed(range.index, 'image', IMG_URL);
        } catch (error) {
          console.log(error);
        }
      });
    };

    const quill = new Quill(editorContainer, {
      theme: 'snow',
      //debug: 'info',
      modules: {
        toolbar: {
          container: [
            [{ font: [] }],
            [{ size: ['small', false, 'large', 'huge'] }],
            [{ header: [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link', 'image'],
            [{ align: [] }, { color: [] }, { background: [] }],
          ],
          handlers: {
            image: handleImage,
          },
        },
        ImageResize: {
          parchment: Quill.import('parchment'),
        },
      },
      formats: ['font', 'size', 'header', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'list', 'bullet', 'link', 'image', 'align', 'color', 'background'],
    });

    ref.current = quill;

    if (defaultValueRef.current) {
      quill.setContents(defaultValueRef.current);
    }

    quill.on(Quill.events.TEXT_CHANGE, (...args) => {
      onTextChangeRef.current?.(...args);
    });

    quill.on(Quill.events.SELECTION_CHANGE, (...args) => {
      onSelectionChangeRef.current?.(...args);
    });

    quill.on(Quill.events.SELECTION_CHANGE, (...args) => {
      onSelectionChangeRef.current?.(...args);
    });

    quill.on('editor-change', (e) => {
      const length = quill.getLength();
      if (length > maxLength) quill.deleteText(maxLength, length);
    });
    // const toolbar = quill.getEditor().getModule('toolbar');
    // toolbar.addHandler('image', handleImage);
    setQuill(quill);
    return () => {
      ref.current = null;
      container.innerHTML = '';
    };
  }, [ref]);

  //return <div className="editor" ref={containerRef} style={{ height: height || 150 }}></div>;
  return <div className="editor" ref={containerRef} style={{ minHeight: height || 150 }}></div>;
});

export default Editor;
