import { connect } from 'react-redux';
import { groupUpdate, startPlaying, stopPlaying } from './../../actions/playing_actions';
import Jukebox from './jukebox';

const mapStateToProps = (state) => ({
  tracks: state.tracks,
  isRecording: state.isRecording,
  isPlaying: state.isPlaying
});

const onPlay = track => e => {
  dispatch(startPlaying());
  let playBackStartTime = Date.now();
  let currNote = 0;
  let timeElapsed;
  const interval = setInterval(() => {
    if (currNote < track.roll.length) {
      timeElapsed = Date.now() - playBackStartTime;
      if (timeElapsed > track.roll[currNote].timeSlice) {
        dispatch(groupUpdate());
        currNote += 1;
      }
    } else {
      clearInterval(interval);
      dispatch(stopPlaying());
    }
  }, 1000);
}

const mapDispatchToProps = (dispatch) => ({
  onPlay: (track) => {
    dispatch(startPlaying());
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Jukebox);
