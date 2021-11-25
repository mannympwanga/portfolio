import Image from 'next/image'
import {AiFillGithub,AiFillLinkedin} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import {GiTie} from 'react-icons/gi'
import { useTheme } from 'next-themes'

const Sidebar = () => {
    const{theme, setTheme} = useTheme();
    
    const changeThem = ()=>{
        setTheme(theme==='light'?'dark':'light');
    }

    return (
        <div>
            <Image src="https://avatars.githubusercontent.com/u/84036779?v=4" alt="user avater" className=" mx-auto border rounded-full "
            height="128px"
            width="128px"
            layout="intrinsic"
            quality="100">

            </Image>
            <h1 className='my-4 text-3xl font-medium tracking-wider font-Lobster'>
                <span className='text-blue'>Emmanuel </span> 
                Mpwanga
            </h1>
            <p className='px-2 py-1 my-3 bg-blue dark:bg-dark-200 rounded-full'>Software Engineer</p>
            <a className='flex items-center justify-center px-2 py-1 my-3 bg-blue-700 dark:bg-dark-200 rounded-full'
                href='/pdf,img/Emmanuel Mpwanga CV.pdf'
                download='Emmanuel Mpwanga CV.pdf'>
                <GiTie className='w-6 h-6'/>Download CV
             </a>

            {/* icons*/}
            <div className='flex justify-around mx-auto w-9/12 my-5 text-blue md:w-full' >
                <a href="https://github.com/mannympwanga">
                    <AiFillGithub className='w-8 h-8' cursor-pointer/>
                </a>
                <a href="https://www.linkedin.com/in/emmanuel-mpwanga-4387271bb">
                    <AiFillLinkedin className='w-8 h-8' cursor-pointer/>
                </a>
            </div>

            {/*adress*/}
            <div 
               className='my-5 py-4 bg-blue dark:bg-dark-200'
               style={{ marginLeft: '-1rem', marginRight: '-1rem'}}>
                <div className='flex items-center justify-center space-x-2'>
                    <GoLocation/>
                    <span>12 Groenberg Modder East Springs</span>
                </div>
                <p className='my-3'>empwanga20@gmail.com</p>
                <p className='my-3'>0671728760</p>
            </div>

            {/*Email Button*/}
            <button className='my-2 bg-gradient-to-r from-blue-800 to-red-500 w-8/12 rounded-full py-3 pt-3 text-black'
            onClick={()=>window.open('mailto:empwanga20@gmail.com')}>Email</button>
            <button className='my-2  bg-gradient-to-r from-blue-800 to-red-500 w-8/12 rounded-full py-3 pt-3 text-black'
            onClick={changeThem}>Theme</button>
        </div>
    )
}

export default Sidebar
