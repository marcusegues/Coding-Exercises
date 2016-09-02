import React from 'react';

const Track = ({ track, disabled, onPlay }) => {
  return (
    <div>
      {track.name}
      <button onClick={onPlay} disabled={disabled}>Play</button>
    </div>
  );
}

export default Track;
