import OurGallery from '@/components/Gallery'
import GalleryHero from '@/components/HeroGlallery'
import React from 'react'

export default function GalleryPage() {
  return (
    <div className='overflow-x-hidden pt16'>
      <GalleryHero />
      <OurGallery />
    </div>
  )
}
