import ProgramsHero from '@/components/HeroPrograms'
import Programs from '@/components/Programs'
import React from 'react'

export default function ProgramsPage() {
  return (
    <div className='relative overflow-x-hidden pt16'>
        <ProgramsHero />
        <Programs />
    </div>
  )
}
