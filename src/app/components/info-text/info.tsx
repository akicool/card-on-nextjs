import infoStyle from './infoStyle.module.scss'

interface Props {}

const info = (props: Props) => {
  return (
    <div className={infoStyle.info}>
        <h1 className={infoStyle.title}>
            $100
        </h1>
        <h2 className={infoStyle.subtitle}>
            Zebronics head phone
        </h2>
        <h3 className={infoStyle.text}>
            A portable headphone with a battery 
            life of 20 hours and 
            IP67 rating. Comes with 
            a 3 years warranty.
        </h3>
        <h4 className={infoStyle.text}>
            Choose your colour
        </h4>
    </div>
  )
}

export default info