import Hero from '@/components/hero'
import ScaleSrc from '/public/scale.jpg'
import React from 'react'

export default function Page() {
  return (
        <Hero imgUrl={ScaleSrc} content='333Scale Cloud Hosting' altTxt='Scale Image' />
  )
}
