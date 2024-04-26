import { IoMenu } from "react-icons/io5"
import Logo from "./logo"
import SocialIcons from './socialIcons'

const Navigation = () => {
  return (
    <nav className='navigation'>
      <div className='container flex items-center justify-between px-5'>
        <Logo />
        <div className='relative'>
          <IoMenu className='text-3xl' />
          <SocialIcons />
        </div>
      </div>
    </nav>
  )
}

export default Navigation
