'use client'

import { useState } from "react"

export const useCard = () => {
  const [isLiked, setIsLiked] = useState(false)

  return { isLiked, setIsLiked }
}