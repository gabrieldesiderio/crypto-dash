import { Card, CardContent, CardHeader } from '@/components/ui/card'
import type { ListCoinItem } from '@/http/list-top-cryptos'
import { CoinListItem } from './item'

interface CoinListTableProps {
  coins: ListCoinItem[]
}

export function CoinListTable({ coins }: CoinListTableProps) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="grid grid-cols-10 gap-4 font-medium text-muted-foreground text-sm md:grid-cols-14">
          <div className="col-span-1 text-center">#</div>
          <div className="col-span-4">Coin</div>
          <div className="col-span-3 text-right">Price</div>
          <div className="col-span-2 text-right">24h</div>
          <div className="col-span-2 hidden text-right md:block">
            Market Cap
          </div>
          <div className="col-span-2 hidden text-right md:block">
            Volume 24h
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y">
          {coins.map((crypto) => (
            <CoinListItem crypto={crypto} key={crypto.id} />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
