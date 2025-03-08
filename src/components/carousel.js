import { useState, useEffect } from "react";
import styles from '@/styles/Home.module.css'; // Import custom CSS module

export default function Home() {
  const [index, setIndex] = useState(0);
  const [isFading, setIsFading] = useState(false); // Control fade-out effect for both h1 and p
  const [hasLoaded, setHasLoaded] = useState(false); // State to track page load
  const urls = ["/1.jpeg", "/4.jpg", "/3.jpg"]; // Background images
  const hArr = ["Welcome to", "WE ARE AUTHORISED AGENT OF", "BUEN-KNIT IS A TOP"];
  const pArr = ["Gawsia International Trade", "BUEN-KNIT IN BANGLADESH", "KNITTING MACHINE MANUFACTURER IN CHINA"];

  const [headerText, setHeaderText] = useState(hArr[0]);
  const [paragraphText, setParagraphText] = useState(pArr[0]);

  useEffect(() => {
    // Trigger fade-in on page load after a short delay
    setTimeout(() => {
      setHasLoaded(true); // Start fade-in once the page has loaded
    }, 1000);

    const interval = setInterval(() => {
      setIsFading(true); // Start fade-out for both <h1> and <p>

      setTimeout(() => {
        // Update index and text after fade-out
        setIndex((prevIndex) => (prevIndex + 1) % urls.length);
        setHeaderText(hArr[(index + 1) % urls.length]);
        setParagraphText(pArr[(index + 1) % urls.length]);

        // Fade-in with a delay for the <p> element after the <h1>
        setTimeout(() => {
          setIsFading(false); // Start fade-in after the delay
        }, 1000); // Delay fade-in for <p> to happen after <h1>
      }, 500); // Duration of the fade-out
    }, 6000); // Interval for slide and text change

    return () => clearInterval(interval);
  }, [index, urls.length]);

  return (
    <div className={styles.mainContainer}>
      {/* Background Sliding Section */}
      <div className={styles.sliderContainer} style={{ backgroundImage: `url(${urls[index]})` }}>
        {urls.map((url, i) => (
          <div
            key={i}
            className={`${styles.slide} ${i === index ? styles.active : ""}`}
            style={{
              backgroundImage: `url(${url})`,
            }}
          ></div>
        ))}
      </div>

      {/* Foreground Content Section */}
      <div className={styles.overlayContent}>
        <h1 className={`${styles.text} ${hasLoaded && !isFading ? styles.fadeIn : styles.fadeOut} text-white text-5xl font-bold text-center uppercase`}>
          {headerText}
        </h1>
        <p className={`${styles.text} ${hasLoaded && !isFading ? styles.fadeInDelayed : styles.fadeOut} text-white text-7xl font-bold text-center uppercase`}>
          {paragraphText}
        </p>
      </div>
    </div>
  );
}
