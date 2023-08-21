import buttonStyle from './buttonStyle.module.scss'

interface Props {}

const buttonAdd = (props: Props) => {
  return (
    <button className={buttonStyle.buttonAdd}>
        Add to cart
    </button>
  )
}

export default buttonAdd