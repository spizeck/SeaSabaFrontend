import React from 'react'
import Image from 'next/image'
import Link from "next/link"
import {FaBars} from 'react-icons/fa'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {Button} from "@/components/ui/button"
import {RegisterForm} from "@/components/forms/register"

const Header: React.FC = () => {

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
  ]

  const renderAuthButtons = () => {
    const isLoggedIn = false
    // TODO: get this from session
    if (isLoggedIn) {
      return (
        <>
          <Sheet>
            <SheetTrigger>
              <Button variant="ghost">Preferences</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>User Preferences</SheetTitle>
                <SheetDescription>Manage your user preferences</SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
          <Button variant="ghost" onClick={() => {
          }}>Logout</Button>
        </>
      )
    }
    return (
      <>
        <Sheet>
          <SheetTrigger>
            <Button variant="ghost">Register</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>User Registration</SheetTitle>
              {RegisterForm()}
              <SheetDescription>Please fill in the following fields to register a new user</SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        <Sheet>
          <SheetTrigger>
            <Button variant="ghost">Login</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Please Log In</SheetTitle>
              <SheetDescription>Please enter your username and password to login</SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </>
    )
  }

  return (
    <header className="bg-blue-950 text-white p-4 border-b-2">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="nav-logo">
            <Link href="/">
              <Image src="/WhiteLogo.png" alt="logo" width={250} height={150}/>
            </Link>
          </div>
          <div className="hidden md:flex px-4">
            {links.map((link) => (
              <Link href={link.link} key={link.name}>
                <Button variant="ghost">{link.name}</Button>
              </Link>
            ))}
          </div>
        </div>

        <div className="hidden md:flex">
          {renderAuthButtons()}
        </div>


        <div className="md:hidden flex items-center">
          <div className="p-4 flex-grow">
            {renderAuthButtons()}
          </div>
          <Sheet>
            <SheetTrigger className="p-4" aria-label="Menu"><FaBars/></SheetTrigger>
            <SheetContent side='top'>
              <SheetHeader>
                <SheetTitle>Navigation</SheetTitle>
              </SheetHeader>
              {links.map((link) => (
                <Link href={link.link} key={link.name}>
                  <Button variant="link" className="block mb-2">{link.name}</Button>
                </Link>
              ))}
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;