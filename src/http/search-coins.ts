import { api } from './api'

export type SearchCoin = {
  id: string
  name: string
  api_symbol: string
  symbol: string
  market_cap_rank: number
  thumb: string
  large: string
}

type SearchCoinsResponse = {
  coins: SearchCoin[]
}

export async function searchCoins(search: string) {
  const result = await api
    .get('search', {
      searchParams: { query: search.trim().toLowerCase() },
    })
    .json<SearchCoinsResponse>()

  return result
}
