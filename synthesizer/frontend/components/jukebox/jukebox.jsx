
const Jukebox = () => {
  const { tracks, isRecording, isPlaying } = this.props
  const trackList = tracks.map((track, idx) => {
    return <Track track={track} />;
  });

  return (
    <div>
      {trackList}
    </div>
  )
};

export default Jukebox;
