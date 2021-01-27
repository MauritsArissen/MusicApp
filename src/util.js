const getNewSongs = (songs, id) => {
  const newSongs = songs.map((state) => {
    if (state.id === id) {
      return { ...state, active: true };
    } else {
      return { ...state, active: false };
    }
  });
  return newSongs;
};

const playAudio = (isPlaying, audioRef) => {
  if (isPlaying) {
    const playPromise = audioRef.current.play();
    if (playPromise !== undefined) {
      playPromise.then((audio) => {
        audioRef.current.play();
      });
    }
  }
};

export { getNewSongs, playAudio };
