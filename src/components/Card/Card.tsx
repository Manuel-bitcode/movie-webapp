'use client'

import { IconHeart } from "../IconHeart"
import { useCard } from "./useCard"
import { useCounter } from "@/context/useCounter"

const HoverButtonClass = "hover:bg-primary-800 hover:shadow-xl transition-all duration-300"

interface Movie {
  imdbId: string
  title: string
  year: string
  poster: string
  imdbRating: string
  likes: number
}

interface CardProps {
  movie: Movie
}

export const Card = ({ movie }: CardProps) => {
  const { isLiked, setIsLiked, toggleLike } = useCard(movie.imdbId)
  const { incrementLikes, decrementLikes } = useCounter()

  const handleLike = async () => {
    const previousState = isLiked
    
    // Actualizar UI inmediatamente (optimistic update)
    setIsLiked(!isLiked)
    if (!isLiked) {
      incrementLikes()
    } else {
      decrementLikes()
    }

    // Hacer la petición al backend
    const success = await toggleLike(!isLiked)
    
    // Si falla, revertir los cambios
    if (!success) {
      setIsLiked(previousState)
      if (!previousState) {
        decrementLikes()
      } else {
        incrementLikes()
      }
    }
  }

  return (
    <div className="w-60 bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center gap-3">
      <img 
        src={movie.poster || "https://picsum.photos/seed/picsum/200/300"} 
        alt={movie.title}
        className="rounded-md w-full h-80 object-cover" 
      />
      <div className="w-full">
        <h3 className="font-bold text-sm truncate" title={movie.title}>{movie.title}</h3>
        <p className="text-xs text-gray-600">{movie.year} • ⭐ {movie.imdbRating}</p>
      </div>
      <button
        onClick={handleLike}
        className={`group w-full h-10 bg-primary-950 text-white rounded-md flex items-center justify-center gap-2 cursor-pointer ${HoverButtonClass}`}>
        <IconHeart size={20} className={`group-hover:fill-red-600 group-hover:scale-110 transition-all duration-300 ${isLiked ? 'fill-red-600' : ''}`} />
        {isLiked ? 'Liked' : 'Like'}
      </button>
    </div>
  );
};