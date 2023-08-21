import buttonStyle from './buttonStyle.module.scss'

interface Props {}

const buttonBuy = (props: Props) => {
  return (
    <button className={buttonStyle.buttonBuy}>Buy now</button>
  )
}

export default buttonBuy