import { api } from './api'

export type TimeSeriesEntry = [timestamp: number, value: number]

interface GetCoinChartResponse {
  prices: TimeSeriesEntry[]
}

export async function getCoinChart(coinId: string) {
  const result = await api
    .get(`coins/${coinId}/market_chart`, {
      searchParams: {
        vs_currency: 'usd',
        days: 7,
        interval: 'daily',
      },
    })
    .json<GetCoinChartResponse>()

  return result
}
