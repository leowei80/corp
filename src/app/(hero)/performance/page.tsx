import React from 'react'
import PerformanceSrc from '/public/performance.jpg'
import Hero from '@/components/hero'

export default function Page() {
  return (
    <Hero imgUrl={PerformanceSrc} content='111Performance Cloud Hosting' altTxt='Performance Image' />
  )
}
