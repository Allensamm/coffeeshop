import Image from 'next/image'
import Banner from './components/Banner'
import Sectiontwo from './components/Sectiontwo'
import Sectionthree from './components/Sectionthree'
import Footer from './components/Footer'
export default function Home() {
  return (
   <div>
    <Banner/>
    <Sectiontwo/>
    <Sectionthree/>
    <Footer/>
   </div>
  )
}
