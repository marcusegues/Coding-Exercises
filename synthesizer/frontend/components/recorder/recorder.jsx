import React from 'react';

class Recorder extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { isRecording, tracks, startRecording, stopRecording } = this.props;
    debugger;
    return (
      <div>
        <button onClick={startRecording} disabled={isRecording}>Start</button>
        <button onClick={stopRecording} disabled={!isRecording}>Stop</button>
      </div>
    )
  }
}

export default Recorder;
