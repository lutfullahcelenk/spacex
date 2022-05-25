import React from 'react';

const Container = (props) => {
    return (
      <div
        className="flex flex-col h-auto justify-between"
        style={{
          marginBottom: "5rem",
        }}
      >
        {props.children}
      </div>
    );
  };
  
  export default Container;
  