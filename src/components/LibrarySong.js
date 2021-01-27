import { getNewSongs, playAudio } from "../util";

function LibrarySong({
  song,
  setCurrentSong,
  audioRef,
  isPlaying,
  songs,
  setSongs,
}) {
  //// Event Handler ////
  const songSelectHandler = () => {
    setCurrentSong(song);
    // Add active state to song & keep playing songs if active playing
    setSongs(getNewSongs(songs, song.id));
    playAudio(isPlaying, audioRef);
  };

  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img alt={song.name} src={song.cover}></img>
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
}

export default LibrarySong;
