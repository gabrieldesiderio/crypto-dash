import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export function CoinListTableSkeleton() {
  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-1">
            <Skeleton className="mx-auto h-4 w-4" />
          </div>
          <div className="col-span-4 md:col-span-3">
            <Skeleton className="h-4 w-16" />
          </div>
          <div className="col-span-3 md:col-span-2">
            <Skeleton className="ml-auto h-4 w-12" />
          </div>
          <div className="col-span-2">
            <Skeleton className="ml-auto h-4 w-8" />
          </div>
          <div className="col-span-2 hidden md:block">
            <Skeleton className="ml-auto h-4 w-20" />
          </div>
          <div className="col-span-2 hidden lg:block">
            <Skeleton className="ml-auto h-4 w-16" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y">
          {Array.from({ length: 20 }).map((_, i) => (
            <div className="grid grid-cols-12 gap-4 p-4" key={i}>
              <div className="col-span-1 flex items-center justify-center">
                <Skeleton className="h-4 w-4" />
              </div>
              <div className="col-span-4 flex items-center gap-3 md:col-span-3">
                <Skeleton className="h-8 w-8 rounded-full" />
                <div className="space-y-1">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-3 w-12" />
                </div>
              </div>
              <div className="col-span-3 flex items-center justify-end md:col-span-2">
                <Skeleton className="h-4 w-16" />
              </div>
              <div className="col-span-2 flex items-center justify-end">
                <Skeleton className="h-4 w-12" />
              </div>
              <div className="col-span-2 hidden items-center justify-end md:flex">
                <Skeleton className="h-4 w-16" />
              </div>
              <div className="col-span-2 hidden items-center justify-end lg:flex">
                <Skeleton className="h-4 w-14" />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
