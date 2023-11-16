import { usePlayerStore } from "@/store/playerStore"
import { useRef } from "react"

export const Pause = ({ className }) => (
  <svg className={className} role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16"><path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path></svg>
)

export const Play = ({ className }) => (
  <svg className={className} role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16"><path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path></svg>
)


export const CurrentSong = ({ image, title, artists}) => {


  return (
    <section className="flex flex-row flex-1 h-full">
      <picture className="w-16 h-16 bg-dark-strong rounded-md shadow-lg overflow-hidden">
        <img src={image} alt={title} />
      </picture>
      <div className="flex flex-col flex-1 truncate overflow-auto">
        <span className="truncate font-semibold text-sm block">{title}</span>
        <span className="truncate text-xs opacity-80">{ artists?.join(', ')}</span>
      </div>
    </section>
  )
}


export const PlayerBar = () => { 
  const { currentMusic, isPlaying, setIsPlaying, volume } = usePlayerStore(state => state)
  const audioRef = useRef()
  return (<div
    id="playBar"
    className="flex flex-row flex-1 justify-between items-center"
    
  >
    <CurrentSong {...currentMusic.song} />
    
  
    <section></section>
    <section></section>
  </div>
  )
}

