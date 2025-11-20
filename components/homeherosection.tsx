import Link from "next/link"
import { Button } from "./ui/button"

const Herosection = () => {
  return (
    <div className="space-y-10">
      <section className="grid gap-8 lg:grid-cols-2 items-center">
        
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tight leading-tight">
            Your Trusted Partner for Study Abroad & Migration Services.
          </h1>

          <p className="text-muted-foreground text-lg">
            Since 2008, Hima Aus Consultancy has guided thousands of students 
            toward successful international education and visa pathways with 
            expert counselling and certified Australian migration support.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button asChild className="px-6 py-3">
              <Link href="/contact">Speak with Our Experts</Link>
            </Button>

            <Button variant="outline" asChild className="px-6 py-3">
              <Link href="/study-abroad/australia">Explore Study Options</Link>
            </Button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end">
          <img
            src="https://himaaus.com/wp-content/uploads/2022/05/4.png"
            alt="Hima Aus Consultancy"
            className="w-full max-w-md object-cover"
          />
        </div>

      </section>
    </div>
  )
}

export default Herosection
