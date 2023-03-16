import {useState} from 'react';

import {close, logo , menu } from '../assets';
import {navLinks} from '../constants';

const Navbar = () => {
  const [toggle, setToggle] = useState(false)//we set the toggle to off as in closed 

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
        <img src={logo}  alt='hoobank' className='w-[124px] h-[32px]' />
        <ul className='list-none sm:flex hidden justify-end item-center flex-1'>
          {navLinks.map((nav, index)=>(
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index=== navLinks.length-1? 'mr-0': 'mr-10'}`} 
            >
              <a href={`#${nav.id}`}>
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        {/* for mobile response-- list for only mobile */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          {/* if toggle turned on we want to show a closed icon  : otherwise we want to show a menu icon*/}
          <img src={toggle? close:menu} alt='menu' 
          className='w-[28px] h-[28px] object-contain ' onClick={()=> setToggle ((prev)=> !prev)}
          />
          {/* actual mobile menu */}
          {/* if toggle = on it will be a flexed container otherwise it will be hidden */}
          <div  className={`${toggle? 'flex':'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
            <ul className='list-none flex flex-col justify-end item-center flex-1'>
            {navLinks.map((nav, index)=>(
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index=== navLinks.length -1? 'mr-0':'mb-4'} text-center`} 
              >
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))}
            </ul>

          </div>
        </div>

    </nav>
  )
}

export default Navbar
