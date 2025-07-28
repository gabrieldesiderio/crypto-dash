'use client'

import { useQuery } from '@tanstack/react-query'
import { Search, X } from 'lucide-react'
import { useState } from 'react'
import { useDebounce } from 'use-debounce'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { searchCoins } from '@/http/search-coins'
import { SearchError } from './error'
import { SearchLoading } from './loading'
import { SearchResults } from './results'

export function SearchBar() {
  const [query, setQuery] = useState('')
  const [showResults, setShowResults] = useState(false)

  const [debouncedQuery] = useDebounce(query, 400)

  const { data, isLoading, isError } = useQuery({
    queryKey: ['searchCoins', debouncedQuery],
    queryFn: () => searchCoins(debouncedQuery),
    enabled: debouncedQuery.length >= 2,
  })

  const handleInputChange = (value: string) => {
    setQuery(value)

    if (value.length < 2) {
      setShowResults(false)
    } else {
      setShowResults(true)
    }
  }

  const clearSearch = () => {
    setQuery('')
    setShowResults(false)
  }

  return (
    <div className="relative w-full max-w-sm">
      <Label className="relative" htmlFor="search">
        <Search className="-translate-y-1/2 pointer-events-none absolute top-1/2 left-3 size-4 text-muted-foreground" />
        <Input
          className="px-10"
          id="search"
          onChange={(e) => handleInputChange(e.target.value)}
          placeholder="Search cryptocurrencies..."
          value={query}
        />
        {query && (
          <Button
            className="-translate-y-1/2 absolute top-1/2 right-1 size-6 p-0"
            onClick={clearSearch}
            size="sm"
            variant="ghost"
          >
            <X className="size-4" />
          </Button>
        )}
      </Label>

      {isError && <SearchError />}

      {showResults && (
        <Card className="absolute top-full z-50 mt-1 w-full py-0 shadow-2xl">
          <CardContent className="p-2">
            {isLoading ? (
              <SearchLoading />
            ) : (
              <SearchResults coins={data?.coins} />
            )}
          </CardContent>
        </Card>
      )}
    </div>
  )
}
