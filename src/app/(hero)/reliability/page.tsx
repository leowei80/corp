import Hero from '@/components/hero'
import ReliabilitySrc from '/public/reliability.jpg'
import React from 'react'

export default function Page() {
  return (
    <Hero imgUrl={ReliabilitySrc} content='Performance Cloud Hosting' altTxt='Reliability Image' />
  )
}
