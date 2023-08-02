import { useEffect, useState } from "react"
import styles from "./Scss/LandingPage.module.scss"

const API_URL = import.meta.env.VITE_BACKEND_URL

const LandingPage = () => {
  const [image, setImage] = useState([])
  const [currentImageIndex, setCurrentImageIndex] = useState(null)
  const [prevImageIndex, setPrevImageIndex] = useState(null)

  const setRandomIndex = () => {
    if (image.length > 1) {
      let randomIndex = Math.floor(Math.random() * image.length)
      while (randomIndex === currentImageIndex) {
        randomIndex = Math.floor(Math.random() * image.length)
      }
      setPrevImageIndex(currentImageIndex)
      setCurrentImageIndex(randomIndex)
    }
  }

  useEffect(() => {
    fetch(`${API_URL}api/v1/getPosts`)
      .then((res) => res.json())
      .then((data) => {
        setImage(data)
        setCurrentImageIndex(Math.floor(Math.random() * data.length))
      })
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomIndex()
    }, 5000)
    return () => clearInterval(interval)
  }, [image, currentImageIndex])

  return (
    <section className={styles.LandingPage}>
      <div className={styles.LandingPageImageContainer}>
        {prevImageIndex !== null && (
          <img
            className={styles.prevImage}
            src={`${API_URL}${image[prevImageIndex].image}`}
            alt=''
            key={image[prevImageIndex]._id}
          />
        )}
        {currentImageIndex !== null && (
          <img
            className={styles.currentImage}
            src={`${API_URL}${image[currentImageIndex].image}`}
            alt=''
            key={image[currentImageIndex]._id}
          />
        )}
      </div>
      {/* <div className={styles.LandingPageTextContainer}>
        <h2>
          Welcome! I'm Leo, a photographer and web developer. With a focus on
          capturing meaningful moments and crafting immersive digital
          experiences, I bring a unique blend of artistry and technical skills
          to my work.
        </h2>
      </div> */}
    </section>
  )
}

export default LandingPage
