import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import styles from "./app.module.css";
import Nav from "./component/nav/nav";
import Tap from "./component/tap/tap";
function App() {
  let [video, setVideo] = useState();
  useEffect(() => {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${process.env.REACT_APP_Y0UTUBE_API_KEY}`
      )
      .then((response) => {
        setVideo(response.data.items);
      })
      .catch(() => {});
  }, []);
  return (
    <div className={styles.app}>
      <Nav></Nav>
      <div className={styles.body}>
        <Tap></Tap>
        {
          video.map((item,i) => (<img id={i} src={item.snippet.thumbnails.medium.url} alt='img'></img>))
      }
      </div>
    </div>
  );
}

export default App;