import { useEffect, useRef, useState } from 'react';
import { formatTime } from '../util/format-time';

const PlayPauseBtn = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const audioRef = useRef(null);

  const btnHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      console.log('Audio is paused!!!');
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.error(err));
      console.log('Audio is playing!!!');
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    const setAudioData = () => setDuration(audio.duration);
    const setAudioTime = () => setCurrentTime(audio.currentTime);

    audio.addEventListener('loadedmetadata', setAudioData);
    audio.addEventListener('timeupdate', setAudioTime);
    audio.addEventListener('ended', () => setIsPlaying(false));

    return () => {
      audio.removeEventListener('loadedmetadata', setAudioData);
      audio.removeEventListener('timeupdate', setAudioTime);
      audio.addEventListener('ended', () => setIsPlaying(false));
    };
  }, []);

  return (
    <div>
      <audio ref={audioRef} src='audio/sample.mp3' type='audio/mpeg' />
      <button onClick={btnHandler} className='border border-red-100'>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <p>
        {formatTime(currentTime)}/{formatTime(duration)}
      </p>
    </div>
  );
};

export default PlayPauseBtn;
