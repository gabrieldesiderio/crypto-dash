import { ModeToggle } from '@/components/theme-toggle'

export default function Home() {
  return (
    <div className="flex min-h-svh w-full flex-col items-center justify-center gap-2">
      <div className="text-center">
        <h1>Crypto Dash</h1>
        <p>A dashboard with the top 20 crypto</p>
      </div>
      <div className="absolute top-2 right-2">
        <ModeToggle />
      </div>
    </div>
  )
}
