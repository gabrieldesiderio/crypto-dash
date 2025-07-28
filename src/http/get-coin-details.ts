import { api } from './api'

export type CoinDetails = {
  id: string
  name: string
  symbol: string
  image: {
    large: string
  }
  market_data: {
    current_price: {
      usd: number
    }
    price_change_percentage_24h: number
    market_cap: {
      usd: number
    }
    total_volume: {
      usd: number
    }
    high_24h: {
      usd: number
    }
    low_24h: {
      usd: number
    }
  }
  market_cap_rank: number
  description: {
    en: string
  }
}

type GetCoinDetailsResponse = CoinDetails

export async function getCoinDetails(coinId: string) {
  const result = await api
    .get(`coins/${coinId}`, {
      searchParams: {
        localication: false,
        tickers: false,
        market_data: true,
        community_data: false,
        developer_data: false,
        sparkline: false,
      },
    })
    .json<GetCoinDetailsResponse>()

  return result
}
