import { Disclosure } from '@headlessui/react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import DoguitoLogo from '../assets/doguito.svg'

const navigation = [
    { name: 'Início', href: '/' },
    { name: 'Produtos', href: '/produtos' },
    { name: 'Blog', href: '/blog' },
    { name: 'Sobre', href: '/sobre' },
]

const Navbar = () => {
    const [currentPage, setCurrentPage] = useState(window.location.pathname)
    console.log(currentPage)
    return (
        <Disclosure as="nav" className="bg-slate-100 shadow-md">
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img src={DoguitoLogo} alt="Doguito Logo" width={28}/>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link key={item.name} to={item.href}>
                        <button onClick={() => setCurrentPage(item.href)} className={`${currentPage === item.href ? 'bg-cyan-500 text-white' : 'text-slate-600'} px-3 py-2 rounded-full text-sm font-medium`} aria-current={currentPage === item.href ? 'page' : undefined}>
                          {item.name}
                        </button>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button key={item.name} as="a" href={item.href} className={`${item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'} block px-3 py-2 rounded-md text-base font-medium `} aria-current={item.current ? 'page' : undefined} >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
    </Disclosure>
    )
}

export default Navbar