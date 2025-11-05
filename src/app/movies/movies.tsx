'use client'

import { Card, GlobalCounter } from "@/components"
import { useEffect, useState } from "react"

interface Movie {
  imdbId: string
  title: string
  year: string
  poster: string
  imdbRating: string
  likes: number
}

export const Movies = () => {
  const [movies, setMovies] = useState<Movie[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/movies`)
        
        if (!response.ok) {
          throw new Error('Error al cargar películas')
        }

        const result = await response.json()
        setMovies(result.data || [])
      } catch (err) {
        console.error('Error fetching movies:', err)
        setError('No se pudieron cargar las películas')
      } finally {
        setLoading(false)
      }
    }

    fetchMovies()
  }, [])

  if (loading) {
    return (
      <div className="flex flex-col gap-5">
        <GlobalCounter />
        <div className="flex justify-center items-center h-96">
          <p className="text-white text-xl">Cargando películas...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex flex-col gap-5">
        <GlobalCounter />
        <div className="flex justify-center items-center h-96">
          <p className="text-red-500 text-xl">{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-5">
      <GlobalCounter />
      <div className="flex flex-wrap gap-5 justify-center items-center">
        {movies.map((movie) => (
          <Card key={movie.imdbId} movie={movie} />
        ))}
      </div>
    </div>
  )
}