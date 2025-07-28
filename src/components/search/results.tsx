import Image from 'next/image'
import Link from 'next/link'
import type { SearchCoin } from '@/http/search-coins'
import { Badge } from '../ui/badge'
import { ScrollArea } from '../ui/scroll-area'
import { SearchNotFound } from './not-found'

interface SearchResultsProps {
  coins?: SearchCoin[]
}

export function SearchResults({ coins }: SearchResultsProps) {
  if (!coins) {
    return <SearchNotFound />
  }

  return (
    <ScrollArea className="h-80 w-full">
      <div className="space-y-2">
        {coins.map((coin) => (
          <Link
            className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-accent/60"
            href={`/coin/${coin.id}`}
            key={coin.id}
          >
            <Image
              alt={coin.name}
              className="size-6 shrink-0 rounded-full"
              height={24}
              src={coin.thumb}
              width={24}
            />
            <div className="flex-1 text-left">
              <div className="font-medium">{coin.name}</div>
              <Badge className="text-xs" variant="secondary">
                {coin.symbol.toUpperCase()}
              </Badge>
              <span className="ml-1.5 text-muted-foreground text-xs">
                #{coin.market_cap_rank}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </ScrollArea>
  )
}
