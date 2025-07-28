'use client'

import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import { getCoinChart } from '@/http/get-coin-chart'
import { formatCurrency } from '@/utils/currency'
import { Skeleton } from '../ui/skeleton'

export const description = 'A linear line chart'

const chartConfig = {
  price: {
    label: 'Price',
    color: 'var(--chart-4)',
  },
} satisfies ChartConfig

interface CoinChartProps {
  coinId: string
}

export function CoinChart({ coinId }: CoinChartProps) {
  const { data, isLoading, isError } = useQuery({
    queryKey: [coinId, 'getCoinChart'],
    queryFn: () => getCoinChart(coinId),
    enabled: !!coinId,
  })

  const formattedChartData = useMemo(() => {
    if (!data?.prices) {
      return []
    }

    return data.prices.map(([timestamp, price]: [number, number]) => ({
      date: new Date(timestamp).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
      }),
      price,
    }))
  }, [data])

  if (isError) {
    return <p>data unavailable</p>
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Price Chart</CardTitle>
        <CardDescription>Last 7 days</CardDescription>
      </CardHeader>
      <CardContent>
        {isLoading && <Skeleton className="aspect-video w-full" />}
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={formattedChartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              axisLine={false}
              dataKey="date"
              tickLine={false}
              tickMargin={8}
            />
            <YAxis
              axisLine={false}
              dataKey="price"
              tickFormatter={(value) => formatCurrency(value)}
              tickLine={false}
              tickMargin={4}
            />
            <ChartTooltip
              content={<ChartTooltipContent hideLabel />}
              cursor={true}
            />
            <Line
              dataKey="price"
              dot={false}
              stroke="var(--color-price)"
              strokeWidth={2}
              type="linear"
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
