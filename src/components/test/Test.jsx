import styles from './Test.module.css'

export default function test(props){
    return(
        <>
        <h2 className={styles.name}>{props.name} {props.surname}</h2>
        <button className={styles.btn}>Замовити</button>
        <p className={styles.link}><a href='https://google.com'>Вхід до інтернетів</a></p>
        </>
    )
}