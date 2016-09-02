import { connect } from 'react-redux';
import { startPlaying, stopPlaying } from './../../actions/playing_actions';
import { groupUpdate } from './../../actions/note_actions';
import Jukebox from './jukebox';

const mapStateToProps = (state) => ({
  tracks: state.tracks,
  isRecording: state.isRecording,
  isPlaying: state.isPlaying
});

const mapDispatchToProps = (dispatch) => ({
  onPlay: track => e => {
    dispatch(startPlaying());
    const playBackStartTime = Date.now();
    const roll = track.roll
    let currNote = 0;
    let timeElapsed;
    let interval = setInterval(() => {
      if (currNote < roll.length) {
        timeElapsed = Date.now() - playBackStartTime;
        if (timeElapsed >= roll[currNote].timeSlice) {
          dispatch(groupUpdate(roll[currNote].notes));
          currNote++;
        }
      } else {
        clearInterval(interval);
        dispatch(stopPlaying());
      }
    }, 1);
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Jukebox);
