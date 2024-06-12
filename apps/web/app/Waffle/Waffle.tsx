'use client'

import * as React from 'react'
// import { useGSAP } from '@gsap/react'
// import gsap from 'gsap'
// gsap.registerPlugin(useGSAP)

type TElementProps = React.ComponentProps<'div'>

export type TWaffleProps = TElementProps & {
  //
}

export function Waffle({ children, ...props }: TWaffleProps) {
  const ref = React.useRef<HTMLDivElement>(null!)

  React.useEffect(() => {
    console.log({ ref })
  }, [])

  return (
    <div {...props} ref={ref}>
      {children}
    </div>
  )
}
