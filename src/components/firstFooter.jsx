import AboutUs from './aboutUs';
import Contact from './contact';
import Career from './career';
import New from './news';
import Press from './press';
import Terms from './terms';
import Privacy from './privacy'
import { NavLink } from 'react-router-dom';

const firstFooter = () => {
  return (
    <div className='grid grid-cols-3 gap-4 mt-24'>
            <div className=''>
            <ul>
              <li className="w-full hover:text-red-300">
                <NavLink to="/aboutus" className='text-2xl tracking-wider font-bold mb-3'> ABOUT MONSTERCAT </NavLink>
              </li>

              <li className="w-full hover:text-red-300">
                <NavLink to="/contact" className='text-2xl tracking-wider font-bold mb-3'> CONTACT US </NavLink>
              </li>
              <li className="w-full hover:text-red-300">
                <NavLink to="/career" className='text-2xl tracking-wider font-bold mb-3'> CAREER </NavLink>
              </li>
              <li className="w-full hover:text-red-300">
                <NavLink to="/news" className='text-2xl tracking-wider font-bold mb-3'> NEWS </NavLink>
              </li>
              <li className="w-full hover:text-red-300">
                <NavLink to="/press" className='text-2xl tracking-wider font-bold mb-3'> PRESS </NavLink>
              </li>
            </ul>
            </div>
            <div>
            <ul >
              <li className="w-full hover:text-red-300">
                <NavLink to="/privacy" className='text-2xl tracking-wider font-bold mb-3'> PRIVACY POLICY </NavLink>
              </li>
              <li className="w-full hover:text-red-300">
                <NavLink to="/terms" className='text-2xl tracking-wider font-bold mb-3'> TERMS OF SERVICE </NavLink>
              </li>
            </ul>
            </div>
            <div>
            <h1 className='text-2xl tracking-wider font-bold mb-3'>MONSTERCAT NEWS</h1>
            <p>Dont miss a thing, stay up to date with the latest news from us</p>
            </div>
      </div>
  )
}

export default firstFooter
