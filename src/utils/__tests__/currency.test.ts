import { describe, expect, it } from 'vitest'
import { formatCurrency, formatMarketCap } from '../currency'

describe('formatCurrency', () => {
  it('formata valores pequenos corretamente', () => {
    expect(formatCurrency(123.45)).toBe('$123.45')
  })

  it('formata com até 6 casas decimais', () => {
    expect(formatCurrency(0.123_456)).toBe('$0.123456')
  })
})

describe('formatMarketCap', () => {
  it('formata valores em trilhões (T)', () => {
    expect(formatMarketCap(2_000_000_000_000)).toBe('$2.00T')
  })

  it('formata valores em bilhões (B)', () => {
    expect(formatMarketCap(350_000_000_000)).toBe('$350.00B')
  })

  it('formata valores em milhões (M)', () => {
    expect(formatMarketCap(75_000_000)).toBe('$75.00M')
  })

  it('formata valores pequenos com vírgulas', () => {
    expect(formatMarketCap(123_456)).toBe('$123,456')
  })
})
