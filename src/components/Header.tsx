import React from 'react'
import Image from 'next/image'
import Link from "next/link"
import {cn} from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const Header: React.FC = () => {

  return (
    <header className='p-4 border-b-2'>
      <div className='flex justify-between items-center'>
        <div className="nav-logo">
          <Image
            src="/ColorLogo.png"
            alt="logo"
            width={250}
            height={150}
          />
        </div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

      </div>
    </header>
  )
}

export default Header