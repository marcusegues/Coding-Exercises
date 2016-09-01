import { connect } from 'react-redux';
import Recorder from './recorder';
import { startRecording, stopRecording } from './../../actions/track_actions';

const mapStateToProps = (state) => ({
  tracks: state.tracks,
  isRecording: state.isRecording
});

const mapDispatchToProps = (dispatch) => ({
  startRecording: () => dispatch(start_recording()),
  stopRecording: () => dispatch(stop_recording())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recorder);
