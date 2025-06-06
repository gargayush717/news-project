import React from 'react'

function Newsitem(props) {
  return (
    <div className="card h-100 shadow-sm border-0">
      <img
        src={props.idata || "https://via.placeholder.com/150"}
        className="card-img-top"
        alt="News"
        style={{ height: '180px', objectFit: 'cover' }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-truncate" title={props.title}>{props.title}</h5>
        <p className="card-text" style={{ flexGrow: 1 }}>{props.desc || "No description available."}</p>
        <a href={props.detail} target="_blank" rel="noreferrer" className="btn btn-primary mt-auto">Read More</a>
      </div>
    </div>
  )
}

export default Newsitem
