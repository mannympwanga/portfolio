import { GetServerSideProps, GetServerSidePropsContext } from "next"

export const index = () => {
  return (
    <div className='flex flex-col px-6 pt-1'>
      <h1 className='my-3 text-4xl font-Lobster'>About Me</h1>
      <p className='my-3 font-medium'>
        I believe I am an enthusiastic person who genuinely wants to develop
        the necessary skills and qualities to have a successful career and future.
        I am genuinely a positive person; I keep myself active and i want to learn from
        more experienced people than myself, so I can build the necessary work qualities
        and traits that are attrative to future hiring managets.
        I am someone who understadn you have to work hard to achieve what you want in life,
        and I feel that by undertaking this Graduate Programme with SovTech, it will allow me 
        to build the foundations necessaryfor a successful future career. I graduated from HyperionDev
        Software Engineer bootcamp with a 97% pass rate. I am person who loves learning new things, I recently
        tought myself the basics of react and django.
      </p>

      <div>
        <h1 className='my-3 text-4xl font-Lobster'>Why Do I Want To Be A Developer At SovTech</h1>
        <p className='my-3 font-medium'>
          The is three main reasons I want to be a developer at SovTech. Firstly, I feel that SovTech 
          is aligned to future career goals and I will get to learn invaluable skills that will help me in future.
          Secondly, it is clear the is a wealth of experince at SovTech and the is strong work values and
          ethics. I want to use my time wisely during the Graduate Programme and get as much out of it as possible.
          If I undertake this Graduate Programme, I am confident that will happen. Finally, the main reasons for undertaking
          this Graduate Programme is i want to develop the necessary work skills and values to excel in my future career.
          working here will allow me to deverlop those skills and values, for sure.
        </p>
      </div>
    </div>

    
  )
}

 export const getServerSideProps: GetServerSideProps = async (
    context: GetServerSidePropsContext
 ) => {
    
    return { props: { endpoint: process.env.VERCEL_URL }}
 }

export default index
