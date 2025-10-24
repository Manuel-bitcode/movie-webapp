'use client'

import { IconHeart } from "../IconHeart"
import { useCard } from "./useCard"
import { useCounter } from "@/context/useCounter"

const HoverButtonClass = "hover:bg-primary-800 hover:shadow-xl transition-all duration-300"

export const Card = () => {
  const { isLiked, setIsLiked } = useCard()
  const { incrementLikes, decrementLikes } = useCounter()

  const handleLike = () => {
    if (isLiked) {
      decrementLikes()
    } else {
      incrementLikes()
    }
    setIsLiked(!isLiked)
  }

  return (
    <div className="w-60 bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center gap-3">
      <img src={"https://picsum.photos/seed/picsum/200/300"} className="rounded-md w-full object-cover" />
      <button
        onClick={handleLike}
        className={`group w-full h-10 bg-primary-950 text-white rounded-md flex items-center justify-center gap-2 cursor-pointer ${HoverButtonClass}`}>
        <IconHeart size={20} className={`group-hover:fill-red-600 group-hover:scale-110 transition-all duration-300 ${isLiked ? 'fill-red-600' : ''}`} />
        {isLiked ? 'Liked' : 'Like'}
      </button>
    </div>
  );
};