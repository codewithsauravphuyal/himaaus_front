import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="space-y-8">
      <section className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">
            Strategic consultancy to grow your business.
          </h1>
          <p className="text-muted-foreground">
            We help modern organizations unlock growth through strategy,
            technology, and execution.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/consultation">Book a consultation</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/services">View services</Link>
            </Button>
          </div>
        </div>
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle>Why clients choose us</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            <p>• Proven track record in digital transformation</p>
            <p>• Senior consultants with deep domain expertise</p>
            <p>• Outcome-focused engagements</p>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}