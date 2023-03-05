import React from 'react';

const Loading = () => {
  const spinnerStyle = {
    display: 'inline-block',
    width: '1.5rem',
    height: '1.5rem',
    verticalAlign: 'text-bottom',
    border: '.25em solid currentColor',
    borderTopColor: 'transparent',
    borderRadius: '50%',
    animation: 'spinner-border .75s linear infinite',
  };

  const srOnlyStyle = {
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: '0',
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0,0,0,0)',
    whiteSpace: 'nowrap',
    border: '0',
  };

  return (
    <div className="text-center mt-3">
      <div style={spinnerStyle} role="status">
        <span style={srOnlyStyle}>Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
