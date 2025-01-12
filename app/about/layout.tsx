import { PageTransition } from "@/components/PageTransition"

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <PageTransition>{children}</PageTransition>
}