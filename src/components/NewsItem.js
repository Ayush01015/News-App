import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description,imgUrl,newsUrl} = this.props;
    return (
      <div>
        <div
          className="card my-3"
          style={{
            width: "18rem",
            // backgroundColor: "orange"
          }}
        >
          <div className="card-body">
          <img src={imgUrl?imgUrl:"https://feeds.abplive.com/onecms/images/uploaded-images/2022/07/11/f271ac1c6343137ace60dd34e14890271657526062_original.png?impolicy=abp_cdn&imwidth=1200&imheight=628"} className="card-img-top" alt="..." />
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
