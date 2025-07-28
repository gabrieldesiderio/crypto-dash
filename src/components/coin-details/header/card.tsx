import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface CoinDetailsHeaderCardProps {
  title: string
  content: string
}

export function CoinDetailsHeaderCard({
  title,
  content,
}: CoinDetailsHeaderCardProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="font-medium text-muted-foreground text-sm">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="font-bold text-2xl">{content}</CardContent>
    </Card>
  )
}
