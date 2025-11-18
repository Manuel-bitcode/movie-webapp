import { http, HttpResponse } from 'msw'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'

// Mock global likes count endpoint
export const handlers = [
  // Get global likes count
  http.get(`${API_URL}/api/likes/count`, () => {
    return HttpResponse.json({
      count: 10,
    })
  }),

  // Like a movie
  http.post(`${API_URL}/api/movies/:movieId/like`, () => {
    return HttpResponse.json({
      success: true,
      message: 'Like added',
    })
  }),

  // Unlike a movie
  http.post(`${API_URL}/api/movies/:movieId/unlike`, () => {
    return HttpResponse.json({
      success: true,
      message: 'Like removed',
    })
  }),
]

