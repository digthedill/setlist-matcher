import { useState, useEffect } from "react"
import axios from "axios"
import "./App.css"

function App() {
  const [data, setData] = useState(null)

  // app that shows the closest setlist to the current date

  useEffect(() => {
    fetchData()
  }, [])

  console.log(data)

  const fetchData = () => {
    return axios({
      method: "GET",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "x-api-key": "SPZ6CgBYu2cfEv1myvPklRkKqGJPU2UiX2-v",
      },

      url:
        "https://cors-anywhere.herokuapp.com/https://api.setlist.fm/rest/1.0/artist/6faa7ca7-0d99-4a5e-bfa6-1fd5037520c6/setlists",
    })
      .then((res) => setData(res.data))
      .catch((e) => console.error(e))
  }

  return (
    <div className="App">
      <pre>{data && JSON.stringify(data.setlist[0], null, 4)}</pre>
    </div>
  )
}

export default App
