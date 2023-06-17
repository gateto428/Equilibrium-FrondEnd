import React from "react";
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, useLocation } from 'react-router-dom';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Footer() {
    const location = useLocation();

  return (
    <footer className="bg-gray-800 text-white">
        <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center">
            <img src="/imges/LogoBlanco.png" alt="Logo" className="h-10 mr-2" />
            <span className="text-sm">Equilibrium Pole Fitness</span>
        </div>
        <div className="flex items-center">
          <a href="https://www.instagram.com/equilibriumpole" target="_blank" rel="noopener noreferrer" className="text-white mx-1 hover:text-gray-400">
            <img src="/instagram.png" alt="Instagram" width="30" /> 
          </a>
          <a href="https://www.facebook.com/Equilibrium.polefitness" target="_blank" rel="noopener noreferrer" className="text-white mx-1 hover:text-gray-400">
            <img src="/facebook.png" alt="Facebook" width="30" /> 
          </a>
          <a href="https://wa.me/3208345762" target="_blank" rel="noopener noreferrer" className="text-white mx-1 hover:text-gray-400">
            <img src="/whatsapp.png" alt="Whatsapp" width="30" /> 
          </a>
        </div>
        </div>
    </footer>
  )
}