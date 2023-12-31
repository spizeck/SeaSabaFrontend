import React, {useState} from 'react'
import Image from 'next/image'
import Link from "next/link"
import { FaBars, FaTimes } from'react-icons/fa'


const Header: React.FC = () => {

  const [nav, setNav] = useState(false)

  const links = [
    {
      name: 'Home',
      link: '/'
    },
    {
      name: 'About',
      link: '/about'
    },
    {
      name: 'Group Contracts',
      link: '/group-contracts'
    },
    {
      name: 'Preferences',
      link: '/preferences'
    }
  ]

  return (
    <header className="bg-blue-950 text-white p-4 border-b-2">
      <div className="flex justify-between items-center">
        <div className="nav-logo">
          <Link href="/">
              <Image src="/WhiteLogo.png" alt="logo" width={250} height={150} />
          </Link>
        </div>

        <div className="hidden md:flex">
          {links.map((link) => (
            <Link href={link.link} key={link.name}>
              <div className="mx-4 hover:text-gray-300">{link.name}</div>
            </Link>
          ))}
        </div>

        <div className="md:hidden">
          {nav ? (
            <FaTimes onClick={() => setNav(false)} />
          ) : (
            <FaBars onClick={() => setNav(true)} />
          )}
        </div>
      </div>

      <nav className={nav ? 'flex' : 'hidden'} onClick={() => setNav(false)}>
        {links.map((link) => (
          <Link href={link.link} key={link.name}>
            <div className="block p-4 text-sm hover:bg-gray-700">{link.name}</div>
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;