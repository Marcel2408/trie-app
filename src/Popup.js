import React from 'react';

const Popup = ({ location }) => {
  const { id, name, adress } = location;

  return (
    <div id={`popup-${id}`} className="popup">
      <h3>{name}</h3>
      {adress}
    </div>
  );
};

export default Popup;