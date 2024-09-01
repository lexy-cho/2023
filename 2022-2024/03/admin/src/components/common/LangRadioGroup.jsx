const LangRadioGroup = (props) => {
  const { langs, onLangCheck } = props;

  return (
    <div className="langSelect">
      {langs.map((el) => {
        return (
          <span key={`brand-lang-key-${el.key}`}>
            <input
              type="radio"
              readOnly
              checked={el.check}
              onClick={(e) => {
                onLangCheck(el, e.target.checked);
              }}
            />
            <label>{el.title}</label>
          </span>
        );
      })}
    </div>
  );
};

export default LangRadioGroup;
