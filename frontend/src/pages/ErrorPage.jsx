import styles from './Scss/ErrorPage.module.scss'

const ErrorPage = () => {
  return ( 
    <div className={styles.ErrorPage}>
      <div>This page does not exist.</div>
      <div></div>
    </div>
  );
}

export default ErrorPage;