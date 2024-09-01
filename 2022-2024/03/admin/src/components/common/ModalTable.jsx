import { SortableContainer } from 'react-sortable-hoc';

const ModalTable = SortableContainer(({ title, header, data, onAllCheck, list, nullMsg }) => {
  const widths = header?.map((el) => {
    return el.width;
  });
  const headerTitles = header?.map((el) => {
    return el.title;
  });

  return (
    <table>
      <colgroup>
        {widths?.map((el, index) => {
          return <col width={el} key={`modal-header-colgroup-${index}`} />;
        })}
      </colgroup>
      <thead>
        <tr>
          {headerTitles?.map((el, index) => {
            if (el === 'checkbox') {
              return (
                <th key={`header-key-${index + 1}`}>
                  <span className="checkSet">
                    <input type="checkbox" id="" onChange={() => onAllCheck(list)} />
                  </span>
                </th>
              );
            } else {
              return <th key={`header-key-${index + 1}`}>{el}</th>;
            }
          })}
        </tr>
      </thead>
      <tbody>
        {data?.length > 0 ? (
          data
        ) : nullMsg ? (
          <tr>
            <td colSpan={headerTitles?.length}>{nullMsg}</td>
          </tr>
        ) : (
          <tr>
            <td colSpan={headerTitles?.length} className="noResult">
              <div>검색 결과가 없습니다.</div>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
});

export default ModalTable;
