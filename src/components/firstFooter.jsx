import AboutUs from './aboutUs';
import Contact from './contact';
import Career from './career';
import New from './news';
import Press from './press';
import Terms from './terms';
import Privacy from './privacy'

const firstFooter = () => {
  return (
    <div className='grid grid-cols-3 gap-4 mt-24'>
            <div className=''>
                <AboutUs />
                <Contact />
                <Career />
                <New />
                <Press />
            </div>
            <div>
              <Terms />
              <Privacy />
            </div>
            <div>
            <h1 className='text-2xl tracking-wider font-bold mb-3'>MONSTERCAT NEWS</h1>
            <p>Dont miss a thing, stay up to date with the latest news from us</p>
            </div>
      </div>
  )
}

export default firstFooter
