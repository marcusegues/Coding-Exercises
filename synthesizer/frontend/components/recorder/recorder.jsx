import React from 'react';

class Recorder extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { isRecording, isPlaying, tracks, startRecording, stopRecording } = this.props;
    return (
      <div>
        <button onClick={startRecording} disabled={isRecording || isPlaying}>Start</button>
        <button onClick={stopRecording} disabled={!isRecording || isPlaying}>Stop</button>
      </div>
    )
  }
}

export default Recorder;
