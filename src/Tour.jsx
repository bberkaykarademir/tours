
import React, { useState } from 'react';

const Tour = ({ id, name, info, image, removeTour }) => {
    const [readMore, setReadMore] = useState(false);
    return (
    <div className="tour">
      <img src={image} />
      <div className="details">
        <h4 className="name">{name}</h4>
        <small>1995$</small>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button className='more' onClick={() => setReadMore(!readMore)}>
            {readMore ? '---show less' : '  read more'}
          </button>
        </p>
      </div>
      <button className='interest'
        onClick={() => {
          removeTour(id);
        }}
      >
        Not Interested
      </button>
    </div>
  );
};

export default Tour;
