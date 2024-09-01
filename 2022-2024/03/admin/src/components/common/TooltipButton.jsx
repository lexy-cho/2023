import { BaseButton } from '@components/common';
const TooltipButton = ({ tooltip = '', buttonLabel, callback, btnClassName }) => {
  return (
    <span className="tool" name={tooltip}>
      <BaseButton buttonLabel={buttonLabel} onButtonClick={() => callback()} className={btnClassName} />
    </span>
  );
};

export default TooltipButton;
