---
to:  <%= path %>/layout.tsx
---
import * as React from 'react'
import type { Metadata, ResolvingMetadata } from 'next'


type Props = {
  children: React.ReactNode
}

export default function Layout({ params }: Props) {
  return (
    <>
      {children}
    </>
  )
}




