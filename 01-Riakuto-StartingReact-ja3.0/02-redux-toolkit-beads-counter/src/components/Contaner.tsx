import React from 'react';

const Container: React.FC = (props) => {
  return (
    <div className="container mx-auto mt-10">
      <div className="flex">
        <div className="p-4 md:w-1/3 mx-auto">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Container;