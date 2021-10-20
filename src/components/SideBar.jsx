import React from 'react'
import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs'
import { FaFire, FaPoo } from 'react-icons/fa'

const SideBarIcon = ({ icon, text = 'tooltip 💡' }) => (
  <div className='sidebar-icon group'>
    {icon}
    <span className='sidebar-tooltip group-hover:scale-100'>{text}</span>
  </div>
)

const SideBar = () => {
  return (
    <div className='fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg'>
      <SideBarIcon icon={<FaFire />} />
      <SideBarIcon icon={<BsPlus />} />
      <SideBarIcon icon={<BsFillLightningFill />} />
      <SideBarIcon icon={<FaPoo />} />
      <SideBarIcon icon={<BsGearFill />} />
    </div>
  )
}

export default SideBar
