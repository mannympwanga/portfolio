import { useState, useEffect, FunctionComponent } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'



const Navbar = () => {
   
   return (
      <div className='flex items-center justify-between px-5 py-3 my-3'>

         <div className='text-base font-Lobster md:text-xl'>
            HI THERE, I AM EMMANUEL MPWANGA
         </div>
      </div>
   )
}

export default Navbar