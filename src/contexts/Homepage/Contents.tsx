// import Image from 'next/image'
import YellowButton2 from '@src/components/Button/YellowButton2'
import Card from '@src/components/Card/Card'

const Contents = (): JSX.Element => {
  return (
    <div className='h-[2000px]'>
      <div className='sm:flex overflow-hidden'>
        <div className='sm:w-1/3 flex justify-center'> 
          <YellowButton2 />
        </div>
        <div className='sm:w-1/3 flex justify-center'> 
          <YellowButton2 />
        </div>
        <div className='sm:w-1/3 flex justify-center'> 
          <YellowButton2 />
        </div>
      </div>
      <div className='mt-[200px]'>
        <Card />
      </div>
    </div>
  )
}

export default Contents
