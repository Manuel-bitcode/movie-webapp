'use client'

import { useState } from "react"

export const useCard = (movieId: string) => {
  const [isLiked, setIsLiked] = useState(false)

  const toggleLike = async (newLikedState: boolean): Promise<boolean> => {
    try {
      const endpoint = newLikedState 
        ? `${process.env.NEXT_PUBLIC_API_URL}/api/movies/${movieId}/like`
        : `${process.env.NEXT_PUBLIC_API_URL}/api/movies/${movieId}/unlike`
      
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (!response.ok) {
        console.error('Error al actualizar like:', response.statusText)
        return false
      }

      const data = await response.json()
      console.log('Like actualizado:', data)
      return true
    } catch (error) {
      console.error('Error al conectar con el backend:', error)
      return false
    }
  }

  return { isLiked, setIsLiked, toggleLike }
}