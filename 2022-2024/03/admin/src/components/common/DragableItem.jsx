import { SortableElement, SortableHandle } from 'react-sortable-hoc';
const DragableItem = SortableElement(({ RowComponent, ...props }) => {
  return <RowComponent {...props} DragHandler={DragHandler} />;
});

export const DragHandler = SortableHandle(() => {
  return <span className="bMove">Move</span>;
});

export default DragableItem;
