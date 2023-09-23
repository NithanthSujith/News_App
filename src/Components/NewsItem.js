import React from 'react'

const NewsItem = (props)=> {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
      <div>
        <div className="card">
        <div style={{ display: "flex", justifyContent:'flex-end', position:'absolute', right:'0' }}>
              <span className=" badge rounded-pill bg-danger" >
                {source}</span>
            </div>
          <img src={!imageUrl ? 'https://economictimes.indiatimes.com/thumb/msid-103059769,width-1070,height-580,imgsize-268482,overlay-etmarkets/photo.jpg' : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-body-secondary">By {!author ? "Unkown" : author} on {new Date(date).toUTCString()}</small></p>
            <a rel='noreferrer' href={newsUrl} target='_blank' className="btn btn-primary">Read..</a>
          </div>

        </div>

      </div>

    )
}

export default NewsItem
