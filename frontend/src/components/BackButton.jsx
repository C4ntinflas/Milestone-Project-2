import { Link } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'
 
export const BackButton = ({ destination = '/' }) => {
  return (
    <div className='flex'>
        <Link
        to={destination}
        className='bg-sky-800 text-white pex-4 py-1 rounded-1g w-fit'
        >
            <BsArrowLeft className='text-2xl' />
        </Link>
    </div>
  )
}

export default BackButton