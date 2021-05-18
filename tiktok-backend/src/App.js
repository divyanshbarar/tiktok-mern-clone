import Video from "./component/video"
import './App.css';
import axios from "./axios.js";
import { useEffect, useState } from "react";

function App() {

  const [videos, setVideos] = useState([])

  useEffect(() => {


    async function postData(url = '', data = {}) {
      // Default options are marked with *
      const response = await fetch(url, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      });
      return response.json(); // parses JSON response into native JavaScript objects
    }

    postData('http://localhost:8000/v2/posts', { answer: 42 })
      .then(data => {
        console.log(data); // JSON data parsed by `data.json()` call
        setVideos(data)
      });
    // const response = await axios.get('/v2/posts')



  }, [])

  return (
    <div className="app">


      {/* container */}
      {/* videos */}
      <div className="app__videos">
        {
          videos.map(
            ({ url, description, name, song, likes, comment, share }) => (
              <Video
                url={url}
                name={name}
                description={description}
                song={song}
                likes={likes}
                comment={comment}
                share={share} />

            )
          )
        }

      </div>

    </div>
  );
}

export default App;
