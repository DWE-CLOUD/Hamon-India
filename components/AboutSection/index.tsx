import { AboutHeader } from "./AboutHeader"
import { ImageGrid } from "./ImageGrid"

export function AboutSection() {
  return (
    <section className="min-h-screen bg-white">
      <div className="container mx-auto px-4">
        <AboutHeader />
        <ImageGrid />
      </div>
    </section>
  )
}