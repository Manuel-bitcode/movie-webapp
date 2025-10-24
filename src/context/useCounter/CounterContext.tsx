'use client'
import { createContext, useContext, useState, ReactNode } from 'react'

interface CounterContextType {
  likesCount: number;
  incrementLikes: () => void;
  decrementLikes: () => void;
}

const CounterContext = createContext<CounterContextType | undefined>(undefined)

export const CounterProvider = ({ children }: { children: ReactNode }) => {
  const [likesCount, setLikesCount] = useState(0)

  const incrementLikes = () => {
    setLikesCount(prev => prev + 1)
  }

  const decrementLikes = () => {
    setLikesCount(prev => Math.max(0, prev - 1))
  }

  return (
    <CounterContext.Provider value={{ likesCount, incrementLikes, decrementLikes }}>
      {children}
    </CounterContext.Provider>
  )
}

export const useCounter = () => {
  const context = useContext(CounterContext)
  if (context === undefined) {
    throw new Error('useCounter debe ser usado dentro de CounterProvider')
  }
  return context
}

