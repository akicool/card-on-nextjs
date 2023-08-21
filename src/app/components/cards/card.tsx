import Image from 'next/image'
import Link from 'next/link';
import cardStyle from './cardStyle.module.scss';
import Info from '../info-text/info'
import ButtonColor from '../buttons-colors/buttonColor'
import ButtonAdd from '../buttons/buttonAdd'
import ButtonBuy from '../buttons/buttonBuy'
import headRed from '../../../../public/zebronicks-red.png'

interface Props {}

const Card = (props: Props) => {
  return (
    <div className={cardStyle.card}>
      <Image
        src={headRed}
        alt='headphone'
        className={cardStyle.image}
      />
      <Info/>
      <div className={cardStyle.btnWrap}>
        <ButtonColor/>
      </div>
      <div className={cardStyle.btnColumnWrap}>
        <ButtonAdd/>
        <ButtonBuy/>
      </div>
      <Link href={'/'} className={cardStyle.link}>
        Read reviews
      </Link>
    </div>
  )
}

export default Card