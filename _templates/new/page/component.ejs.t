---
to:  <%= path %>/page.tsx
---
import type { Metadata, ResolvingMetadata } from 'next'

async function getData() {
  // 
}

type Props = {
  params: { id: string }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const data = await getData()
 
  return {
    title: '',
  }
}


export default async function Page({ params }: Props) {
  const data = await getData()

  return (
    <>
      Hello <%= pathname  %>
    </>
  )
}




