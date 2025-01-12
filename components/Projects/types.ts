export interface Project {
  id: string
  title: string
  description: string
  image: string
  stats: {
    capacity: string
    industry: string
    location: string
    energy: string
  }
}