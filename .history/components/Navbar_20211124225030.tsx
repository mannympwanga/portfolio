import { useState, useEffect, FunctionComponent } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const NavItem: FunctionComponent<{
   active: string
   setActive: Function
   name: string
   route: string
}> = ({ active, setActive, name, route }) => {
   return active !== name ? (
      <Link href={route}>
         <a>
            <span
               className='mx-2 cursor-pointer hover:border-b-4 hover:text-blue'
               onClick={() => setActive(name)}>
               {name}
            </span>
         </a>
      </Link>
   ) : null
}

const Navbar = () => {
   const { pathname } = useRouter()

   const [active, setActive] = useState('')

   //later
   useEffect(() => {
      if (pathname === '/') setActive('HI THERE, I AM EMMANUEL MPWANGA')
     }, [])

   return (
      <div className='flex items-center justify-between px-5 py-3 my-3'>
         <span className='text-xl font-bold border-b-4 md:text-2xl border-green'>
            {active}
         </span>

         <div className='text-base font-Lobster md:text-xl'>
            <NavItem
               active={active}
               setActive={setActive}
               name='HI THERE, I AM EMMANUEL MPWANGA'
               route='/'
            />
         </div>
      </div>
   )
}

export default Navbar