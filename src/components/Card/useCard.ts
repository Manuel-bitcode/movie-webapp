'use client'

import { useEffect, useState } from "react"

export const useCard = () => {
  const [isLiked, setIsLiked] = useState(false)

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/movies`)
      const data = await response.json()
      console.log('data', data)
    }
    fetchMovie()
  }, [])

  return { isLiked, setIsLiked }
}