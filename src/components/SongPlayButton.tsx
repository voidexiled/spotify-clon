import type { Song } from "@/lib/data"
import { Pause, Play } from "./PlayerBar"
import { usePlayerStore } from '@/store/playerStore'


export function SongPlayButton({ song}:{song:Song} ) {
  const {
    currentMusic,
    isPlaying,
    setIsPlaying,
    setCurrentMusic
  } = usePlayerStore(state => state)


  const handleClick = () => {

    
    if (isPlaying) {
      
      setIsPlaying(false)

    } else {
      setIsPlaying(true)
      setCurrentMusic({song})
    }
    (currentMusic)
  }
    

  return (
    <button onClick={handleClick} >
      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
    </button>
  )
}