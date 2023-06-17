import React from "react";
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, useLocation } from 'react-router-dom';



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    const location = useLocation();

    let navigation = [
        { name: 'Inicio', href: '/', current: location.pathname === '/' },
        { name: 'Nosotros', href: '#', current:  location.pathname === '#' },
        { name: 'Ingresar', href: '/login', current:  location.pathname === '/login' }];

  return (
    <Disclosure as="nav" className="bg-equilibrium">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-20 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start h-full" style={{ justifyContent: 'space-between' }}>
                <div className="flex flex-shrink-0 items-center">
                  <img width="250" height="auto" src={"/imges/nombre.png"} alt="description" />
                </div>
                <div className="flex  items-center">
                  <div className="flex flex-col items-center">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <Link to={item.href} className="no-underline">
                          <p
                            key={item.name}
                            className={item.current ? 'bg-pink text-white px-3 py-2 rounded-md text-md font-medium' : 'text-white hover:bg-pink hover:text-white px-3 py-2 rounded-md text-md font-medium'}
                          >
                            {item.name}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Link to ={item.href} className="no-underline">
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-pink text-white' : 'text-white hover:bg-pink hover:text-white',
                      'block px-3 py-2 rounded-md text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
