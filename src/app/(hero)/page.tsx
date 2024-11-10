import Image from 'next/image'
import React from 'react'
import homeSrc from '/public/home.jpg'
import Hero from '@/components/hero'

export default function Page() {
  return (
    <Hero imgUrl={homeSrc} content='Professional Cloud Hosting' altTxt='Home Image' />
  )
}

