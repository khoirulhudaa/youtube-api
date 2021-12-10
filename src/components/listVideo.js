import React, { Component } from 'react';

export default class ListVideo extends Component {
  render() {
    return (
      <div style={{marginTop: '40px'}}>
      {
        this.props.listVideos.map((data, index) => {
          return (
            <div className="card mb-3" key={index} style={{ width: '100%', height: '160px', marginBottom: '20px', border: 'none', outline: 'none'}}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={data.snippet.thumbnails.high.url} className="img-fluid rounded-start" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title"style={{fontSize: '16px'}}>{data.snippet.title}</h5>
                    <p className="card-text"><small className="text-muted">{data.snippet.channelTitle}</small></p>
                  </div>
                </div>
              </div>
            </div>
            )
        })
        }
        </div>
    );
  }
}
