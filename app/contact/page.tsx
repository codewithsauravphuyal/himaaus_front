import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const services = [
  "Strategy & Advisory",
  "Digital Transformation",
  "Product Discovery",
  "Delivery Enablement",
]

export default function ServicesPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Services</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {services.map((service) => (
          <Card key={service}>
            <CardHeader>
              <CardTitle>{service}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Placeholder description for {service}. Describe the problems you
              solve and outcomes you drive.
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}