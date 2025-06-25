import React from 'react'

const StatsSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center  space-y-2 rounded-2xl border border-black bg-gray-100 md:flex-row-reverse md:space-x-4 md:space-y-0">
      {/* Icons Section (appears first on desktop) */}

      {/* <!-- Stats Section --> */}
      <div className="grid w-full grid-cols-2 gap-4 p-4 md:flex md:justify-around">
        {/* <!-- Stat Item 1 --> */}
        <div className="bgstat bgimg1 flex h-32 w-full flex-col items-center justify-center rounded-lg">
          <h1 className="text-3xl font-bold m-[5px]">35+</h1>
          <p className="text-sm">Speakers</p>
        </div>
        {/* <!-- Stat Item 2 --> */}
        <div className="bgstat bgimg2 flex h-32 w-full flex-col items-center justify-center rounded-lg">
          <h1 className="text-3xl font-bold m-[5px]">1000+</h1>
          <p className="text-sm">Participants</p>
        </div>
        {/* <!-- Stat Item 3 --> */}
        <div className="bgstat  bgimg3 flex h-32 w-full flex-col items-center justify-center rounded-lg">
          <h1 className="text-3xl font-bold m-[5px]">25+</h1>
          <p className="text-sm">Sessions</p>
        </div>
        {/* <!-- Stat Item 4 --> */}
        <div className="bgstat bgimg4 flex h-32 w-full flex-col items-center justify-center rounded-lg">
          <h1 className="text-3xl font-bold m-[5px]">2</h1>
          <p className="text-sm">Day(s)</p>
        </div>
      </div>

      <div className="flex w-full justify-end md:w-1/3 md:justify-start" style={{ margin: 0 }}>
        <img src="https://devfest.gdgpune.in/_nuxt/element3.ChNA72B8.svg" className="h-auto w-full md:hidden" alt="Icons for mobile" />
        <img src="https://devfest.gdgpune.in/_nuxt/element1.D8SuHIlW.svg" className="hidden md:block" alt="Icons for desktop" />
      </div>
    </div>
  )
}

export default StatsSection