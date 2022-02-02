import React from "react";

const NewsItem=(props)=>  {
  
    let { title, description, imageUrl, newsUrl ,author,date,source} = props;
    return (
      <div className="my-4">
        <div className="card" >
          <img
            src={
              !imageUrl
                ? "https://s.france24.com/media/display/d1676b6c-0770-11e9-8595-005056a964fe/w:1400/p:16x9/news_1920x1080.webp"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title"> {title}...<span className="badge bg-danger">{source}</span></h5>
            <p className="card-text"> {description}...</p>
            <p className="card-text"><small className="text-danger">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem;
