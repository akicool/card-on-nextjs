import Image from 'next/image'
import styles from './page.module.scss'
import Card from './components/cards/card'

const  Home = ()  => {
  return (
    <div className="container">
      <Card/>
    </div>
  )
}

export default Home;