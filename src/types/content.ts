export type SlideContent = {
  id: string
  chapter: string
  title: string
  bullets: string[]
  code?: string
  glossaryTerms?: string[]
}

export type GlossaryTerm = {
  term: string
  short: string
  long: string
  related?: string[]
}
