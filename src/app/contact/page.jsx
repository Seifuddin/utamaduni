import ContactUs from '@/components/Contacts'
import ContactHero from '@/components/HeroContact'
import React from 'react'

export default function ContactUsPage() {
  return (
    <div className='overflow-x-hidden pt-16'>
        <ContactHero />
        <ContactUs />
    </div>
  )
}
