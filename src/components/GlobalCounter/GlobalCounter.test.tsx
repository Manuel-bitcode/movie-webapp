import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { GlobalCounter } from './GlobalCounter'

// Mock del context
vi.mock('@/context/useCounter', () => ({
  useCounter: vi.fn(() => ({
    likesCount: 5,
    incrementLikes: vi.fn(),
    decrementLikes: vi.fn(),
  })),
}))

describe('GlobalCounter', () => {
  it('renderiza correctamente', () => {
    render(<GlobalCounter />)
    
    const element = screen.getByText(/Likes count:/i)
    expect(element).toBeTruthy()
  })

  it('muestra el contador de likes', () => {
    render(<GlobalCounter />)
    
    const element = screen.getByText('Likes count: 5')
    expect(element).toBeTruthy()
  })

  it('muestra el ícono de corazón', () => {
    const { container } = render(<GlobalCounter />)
    
    const heartIcon = container.querySelector('svg')
    expect(heartIcon).toBeTruthy()
  })
})

