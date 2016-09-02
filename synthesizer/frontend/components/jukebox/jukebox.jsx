import Track from './track';
import React from 'react';

const Jukebox = ({ tracks, isRecording, isPlaying, onPlay }) => {

  let trackList = Object.keys(tracks).map(id => {
    return <Track key={id}
                  track={tracks[id]}
                  onPlay={onPlay(tracks[id])}
                  disabled = {isRecording || isPlaying} />;
  });

  return (
    <div>
      {trackList}
    </div>
  )
};

export default Jukebox;
