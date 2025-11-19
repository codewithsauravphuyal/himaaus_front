export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col gap-2 py-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} HimaAus All rights reserved.</p>
      </div>
    </footer>
  )
}