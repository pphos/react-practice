import React from 'react';

type ButtonColor = 'red' | 'green' | 'gray';

type Props = {
  onClick: () => void;
  color: ButtonColor;
  optionClass?: string;
};

const Button: React.FC<Props> = ({
  onClick =  () => undefined,
  color = 'red',
  optionClass = '',
  children,
}) => {
  return (
    <button
      className={`text-white bg-${color}-500 rounded text-lg focus:outline-none hover:bg-${color}-700 ${optionClass} p-2`}
      onClick={onClick}
    >{children}</button>
  );
};

export default Button;