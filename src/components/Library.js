import LibrarySong from "./LibrarySong";

function Library({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  libraryStatus,
}) {
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            key={song.id}
            setCurrentSong={setCurrentSong}
            song={song}
            audioRef={audioRef}
            isPlaying={isPlaying}
            songs={songs}
            setSongs={setSongs}
          />
        ))}
      </div>
    </div>
  );
}

export default Library;
