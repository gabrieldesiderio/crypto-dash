import { fireEvent, render, screen } from '@testing-library/react'
import { expect, test, vi } from 'vitest'
import { Button } from '../button'

test('Button', () => {
  render(<Button>Test</Button>)
  expect(screen.getByRole('button', { name: 'Test' })).toBeDefined()
})

test('Button onClick', () => {
  const handleClick = vi.fn()

  render(<Button onClick={handleClick}>Click</Button>)

  const button = screen.getByRole('button', { name: 'Click' })
  fireEvent.click(button)

  expect(handleClick).toHaveBeenCalledTimes(1)
})
