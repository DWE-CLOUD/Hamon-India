import { PageTransition } from "@/components/PageTransition"

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <PageTransition>{children}</PageTransition>
}