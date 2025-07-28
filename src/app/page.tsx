import { CoinList } from '@/components/coin-list'
import { SearchBar } from '@/components/search'

export default function Home() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="font-bold text-3xl tracking-tight">
            Top Cryptocurrencies
          </h1>
          <p className="text-muted-foreground">
            Track the top 20 cryptocurrencies by market capitalization
          </p>
        </div>
        <SearchBar />
      </div>
      <CoinList />
    </div>
  )
}
