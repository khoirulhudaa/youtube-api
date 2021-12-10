import React, { Component } from 'react';

export default class videoLayer extends Component {
  render() {
    return (
      <div className="layar-video">  
          <iframe className="screen" src={`https://www.youtube.com/embed/${this.props.selectedVideo}`}></iframe>
          <small>{this.props.dateUploadSelectedVideo}</small>
          <hr />
          <h3>{this.props.titleSelectedVideo}</h3>
      </div>
    );
  }
}
