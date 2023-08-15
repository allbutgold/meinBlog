import styles from "./Scss/CodingProjects.module.scss"

const ProjectElement = () => {
  return (
    <section className={styles.CodingProjects}>
      <article>
        <div className={styles.TextLeft}>
          <h2>FINCO</h2>
          <h4>
            login with: leo@kieffer.com <br />
            admin
          </h4>
          <p>
            Finco is a personal finance tracker application developed as a final
            exam project for a software development boot camp. The application
            allows users to add and manage transactions, display and filter them
            in various ways. Additional features include setting a spending
            limit and creating a user account with a credit card and a profile
            image. This application is built using the React framework, Node.js,
            Express.js, and SASS, with a MongoDB database for storage.
          </p>
        </div>
        <iframe
          src='https://finco-frontend-production.up.railway.app/onboarding'
          height='650px'
          width='360px'
        ></iframe>
      </article>
      <article>
        <iframe
          src='https://clinquant-squirrel-8b4fad.netlify.app/'
          height='650px'
          width='360px'
        ></iframe>
        <div className={styles.TextRight}>
          <h2>Tasty</h2>
          <p>
            The Tasty App is a React-based application that allows users to
            search and browse meal recipes. It is a project that showcases the
            skills and knowledge our team acquired during a front-end bootcamp.
            The application is built using modern web development technologies
            and aims to provide a useful and practical user experience.
          </p>
        </div>
      </article>
    </section>
  )
}

export default ProjectElement
