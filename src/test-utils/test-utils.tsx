import { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { CounterProvider } from '@/context/useCounter'

// Custom render function that includes CounterProvider
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <CounterProvider>{children}</CounterProvider>
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }

