'use client'
import { IconHeart } from "../IconHeart"
import { useCounter } from "@/context/useCounter"

export const GlobalCounter = () => {
  const { likesCount } = useCounter()
  
  return (
    <div className="sticky top-0 z-50">
      <div className={`w-full h-10 bg-primary-800 text-white flex items-center justify-center gap-2 shadow-md`}>
        <IconHeart size={20} className="fill-red-600" />
        Likes count: {likesCount}
      </div>
    </div>
  )
}