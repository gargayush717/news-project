import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Newsitem from './Newsitem'

function News(props) {
  const [val, setValue] = useState([])

  useEffect(() => {
    axios
      .get(`https://newsapi.org/v2/everything?q=${props.category}&language=hi&apiKey=7bea0555f2974f8bab00242df6941f9d`)
      .then((res) => {
        setValue(res.data.articles)
      })
  }, [props.category])

  return (
    <>
      <div className="row g-4">
        {val.map((item, index) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
            <Newsitem
              idata={item.urlToImage}
              title={item.title}
              desc={item.description}
              detail={item.url}
            />
          </div>
        ))}
      </div>
    </>
  )
}

export default News
