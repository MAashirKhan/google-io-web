import React from 'react'

const Header : React.FC = () => {
  return (
    <div className='mx-3 pt-3 text-lg flex items-center justify-center'>
        <div className='col-span-24'>
            <h1 className='flex text-white gap-1 items-center'>
              <img className='h-[80px]' src='/assets/Devfest2024Logo.svg'/>
            </h1>
        </div>
    </div>
  )
}

export default Header