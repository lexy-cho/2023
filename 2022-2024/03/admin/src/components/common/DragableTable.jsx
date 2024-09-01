import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { Table, ModalTable } from '@components/common';

const DragableTable = forwardRef(({ ItemComponent, RowComponent, ...props }, ref) => {
  const {
    list,
    header,
    onAddBtn,
    onSortEnd,
    title,
    onDelBtn,
    onDragSelect,
    isShiftDrag,
    helperClass,
    isModal,
    onAllCheck,
    onDelete,
    onRewardBtn,
    handleSelDel,
    onHandleChange,
    subTitle = '',
    checkList,
    page = 0,
    onSelected,
    multiSelect = true,
    multiRow = false,
    filterList,
    isMultiDel = true,
    comCallback,
    tableClass,
    nullMsg = undefined,
  } = props;

  const [selectedRows, setSelectedRows] = useState(new Set());
  const [isSelecting, setIsSelecting] = useState(false);
  const [startRow, setStartRow] = useState(null);

  useImperativeHandle(ref, () => ({
    clear: () => {
      setSelectedRows(new Set());
    },
  }));

  const handleMouseDown = (index) => {
    if (isSelecting) {
      setStartRow(index);
      if (selectedRows.has(index)) {
        const newSelectedRows = new Set(selectedRows);
        newSelectedRows.delete(index);
        setSelectedRows(newSelectedRows);
        if (onDragSelect) {
          onDragSelect(newSelectedRows);
        }
      } else {
        setSelectedRows(new Set([index]));
      }
    }
  };

  const handleMouseOver = (index) => {
    if (isSelecting && startRow !== null) {
      const newSelectedRows = new Set();
      const [start, end] = [startRow, index].sort((a, b) => a - b);
      for (let i = start; i <= end; i++) {
        newSelectedRows.add(i);
      }
      setSelectedRows(newSelectedRows);
      if (onDragSelect) {
        onDragSelect(newSelectedRows);
      }
    }
  };

  const handleMouseUp = () => {
    //setIsSelecting(false);
    setStartRow(null);
  };

  useEffect(() => {
    const handleKeyUp = (e) => {
      if (isShiftDrag) {
        if (e.key === 'Shift') {
          setIsSelecting(false);
        }
      }
    };

    const handleKeyDown = (e) => {
      if (isShiftDrag) {
        if (e.key === 'Shift') {
          setIsSelecting(true);
        }
      }
    };

    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  const onClickDel = () => {
    let newList = [...list];

    const selectedArrIndex = Array.from(selectedRows).sort();

    const reqArr = newList.filter((e, i) => selectedArrIndex.some((e2) => e2 === i));

    // const startIndex = selectedArrIndex[0];
    // const spliceCount = selectedArrIndex.length;
    // const requestArr = newList.splice(startIndex, spliceCount);
    handleSelDel(reqArr);
  };

  const handleOnSelect = (e, i) => {
    if (multiSelect) {
      onSelected(e);
    } else {
      if (e) {
        onSelected(e);
        const newSelectedRows = new Set();
        newSelectedRows.add(i);
        setSelectedRows(newSelectedRows);
      } else {
        onSelected(e);
        const newSelectedRows = new Set();
        setSelectedRows(newSelectedRows);
      }
    }
    //onSelected(e)
  };

  const onClickCheckBox = (index) => {
    if (multiSelect) {
      if (selectedRows.has(index)) {
        const newSelectedRows = new Set(selectedRows);

        newSelectedRows.delete(index);

        setSelectedRows(newSelectedRows);
      } else {
        const newSelectedRows = new Set(selectedRows);
        newSelectedRows.add(index);

        setSelectedRows(newSelectedRows);
      }
    } else {
      if (selectedRows.has(index)) {
        handleOnSelect(undefined, index);
      } else {
        handleOnSelect(list[index], index);
      }
    }
  };

  const onCheckAllCell = (list) => {
    //한꺼번에

    if (selectedRows.size > 0) {
      setSelectedRows(new Set());
    } else {
      const newList = list?.map((_, index) => index);
      const newSelectedRows = new Set(newList);

      setSelectedRows(newSelectedRows);
    }
  };

  return isModal === true ? (
    <ModalTable
      header={header}
      data={list?.map((el, i) => {
        return (
          <ItemComponent
            isSelect={selectedRows.has(i)}
            el={el}
            num={page + i}
            idx={i}
            index={i}
            {...props}
            RowComponent={RowComponent}
            onSelected={onSelected}
            onMouseDown={() => handleMouseDown(i)}
            onMouseOver={() => handleMouseOver(i)}
            onDelete={onDelete}
            onClickCheckBox={onClickCheckBox}
            checkList={checkList}
            filterList={filterList}
            comCallback={comCallback}
          />
        );
      })}
      onSortEnd={onSortEnd}
      useDragHandle
      helperClass={helperClass}
      onAllCheck={onCheckAllCell}
      list={list}
      nullMsg={nullMsg}
    />
  ) : (
    <Table
      ref={ref}
      isMultiDel={isMultiDel}
      header={header}
      title={title}
      onAddBtn={onAddBtn}
      onSelDelBtn={onDelBtn}
      onRewardBtn={onRewardBtn}
      multiRow={multiRow}
      data={list?.map((el, i) => {
        return (
          <ItemComponent
            isSelect={selectedRows.has(i)}
            el={el}
            num={page + i}
            index={i}
            {...props}
            RowComponent={RowComponent}
            onMouseDown={() => handleMouseDown(i)}
            onMouseOver={() => handleMouseOver(i)}
            onClickCheckBox={onClickCheckBox}
            checkList={checkList}
            onSelected={handleOnSelect}
            comCallback={comCallback}
          />
        );
      })}
      onClickDel={onClickDel}
      onSortEnd={onSortEnd}
      useDragHandle
      helperClass={helperClass}
      subTitle={subTitle}
      onAllCheck={onCheckAllCell}
      list={list}
      tableClass={tableClass}
      nullMsg={nullMsg}
    />
  );

  // return (
  //   <Table
  //     header={header}
  //     title={title}
  //     onAddBtn={onAddBtn}
  //     onSelDelBtn={onDelBtn}
  //     data={list?.map((el, i) => {
  //       return (
  //         <ItemComponent
  //           isSelect={selectedRows.has(i)}
  //           el={el}
  //           num={i}
  //           index={i}
  //           {...props}
  //           RowComponent={RowComponent}
  //           onMouseDown={() => handleMouseDown(i)}
  //           onMouseOver={() => handleMouseOver(i)}
  //         />
  //       );
  //     })}
  //     onSortEnd={handleSortEnd}
  //     useDragHandle
  //     helperClass={helperClass}
  //   />
  // );
});

DragableTable.defaultProps = {
  isShiftDrag: false,
  isModal: false,
};

export default DragableTable;
