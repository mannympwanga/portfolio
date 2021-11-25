import Image from 'next/image'
import {AiFillGithub,AiFillLinkedin} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import {GiTie} from 'react-icons/gi'
import { useTheme } from 'next-themes'

const Sidebar = () => {

    {/*In ables you to change theme from light to dark or other way round*/}
    const{theme, setTheme} = useTheme();
    
    const changeThem = ()=>{
        setTheme(theme==='light'?'dark':'light');
    }

    return (
        
        <div>
            {/*Image at the top of the side bar*/}
            <Image src="https://avatars.githubusercontent.com/u/84036779?v=4" alt="user avater" className="mx-auto border rounded-full "
            height="128px"
            width="128px"
            layout="intrinsic"
            quality="100">

            </Image>

            {/*Name and Surname*/}
            <h1 className='my-4 text-3xl font-medium tracking-wider font-Lobster'>
                <span className='text-blue'>Emmanuel </span> 
                Mpwanga
            </h1>

            {/*My career*/}
            <p className='px-2 py-1 my-3 rounded-full bg-blue dark:bg-dark-200'>Software Engineer</p>

            {/*Download CV You are able to download my cv*/}
            <a className='flex items-center justify-center px-2 py-1 my-3 bg-blue-700 rounded-full dark:bg-dark-200'
                href='/pdf,img/Emmanuel Mpwanga CV.pdf'
                download='Emmanuel Mpwanga CV.pdf'>
                <GiTie className='w-6 h-6'/>Download CV
             </a>

            {/*icons - this is the github and linkedin links everytime you click on it takes you to my profile*/}
            <div className='flex justify-around w-9/12 mx-auto my-5 text-blue md:w-full' >
                <a href="https://github.com/mannympwanga">
                    <AiFillGithub className='w-8 h-8' cursor-pointer/>
                </a>
                <a href="https://www.linkedin.com/in/emmanuel-mpwanga-4387271bb">
                    <AiFillLinkedin className='w-8 h-8' cursor-pointer/>
                </a>
            </div>

            {/*adress and contact information*/}
            <div 
               className='py-4 my-5 bg-blue dark:bg-dark-200'
               style={{ marginLeft: '-1rem', marginRight: '-1rem'}}>
                <div className='flex items-center justify-center space-x-2'>
                    <GoLocation/>
                    <span>12 Groenberg Modder East Springs</span>
                </div>
                <p className='my-3'>empwanga20@gmail.com</p>
                <p className='my-3'>0671728760</p>
            </div>

            {/*Email Button it will take your system email app and create a new draft with my email alredy inside*/}
            <button className='w-8/12 py-3 pt-3 my-2 text-black rounded-full bg-gradient-to-r from-blue-800 to-red-500 dark:from-dark-200 dark:to-dark-100'
            onClick={()=>window.open('mailto:empwanga20@gmail.com')}>Email</button>

            {/*Theme Button changes from dark mode to light mode*/}
            <button className='w-8/12 py-3 pt-3 my-2 text-black rounded-full bg-gradient-to-r from-blue-800 to-red-500 dark:from-dark-200 dark:to-dark-100'
            onClick={changeThem}>Theme</button>
        </div>
    )
}

export default Sidebar
