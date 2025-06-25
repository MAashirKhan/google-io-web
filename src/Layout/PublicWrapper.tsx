import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderSection from '../components/HeaderSection'
import FooterSection from '../components/FooterSection'

const PublicWrapper: React.FC = () => {
  return (
    <>
      <HeaderSection />
      <div className='zm-container p-4'>
        <Outlet />
      </div>
      <FooterSection />
    </>
  )
}

export default PublicWrapper