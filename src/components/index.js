import React, { Component } from 'react';
import ListVideo from './listVideo';
import ResultVideo from './resultVideo';
import VideoLayer from './videoLayer'
import {Row} from 'react-bootstrap';
import YoutubeApi from '../api/youtube';

export default class componentName extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       listVideo: [],
       selectedVideo: '',
       search: 'youtube',
       titleSelectedVideo: '',
       dateUploadSelectedVideo: ''
    };
  };

  changeValue = (e) => {
    this.setState({
      search: e.target.value
    })
    console.log(this.state.search)
  }

  componentDidMount() {
    this.getData()
  }
  
  getData = async (e) => {
    const result = await YoutubeApi.get('/search', {
      params: {
        q: this.state.search
      }
    })
    this.setState({
      listVideo: result.data.items,
      selectedVideo: result.data.items[0].id.videoId,
      titleSelectedVideo: result.data.items[0].snippet.title,
      dateUploadSelectedVideo: result.data.items[0].snippet.publishTime
    })
    console.log('data: ', this.state.listVideo)
  }
  
  onSubmit = async (e) => {
    e.preventDefault();
    
    const result = await YoutubeApi.get('/search', {
      params: {
        q: this.state.search
      }
    })
    this.setState({
      listVideo: result.data.items,
      selectedVideo: result.data.items[0].id.videoId
    })
    console.log('data: ', this.state.listVideo)
  }
  

  render() {
    return (
      <Row className="section">
          <div className="col-12 col-sm-12">
              <ResultVideo listVideo={this.state.listVideo} onSubmit={this.onSubmit} changeValue={this.changeValue} />
          </div>
          <div className="col-12 col-sm-12" id="resultVideos">
            <div className="col-12 col-sm-8">
              <VideoLayer selectedVideo={this.state.selectedVideo} dateUploadSelectedVideo={this.state.dateUploadSelectedVideo} titleSelectedVideo={this.state.titleSelectedVideo} />
            </div>
            <div className="col-12 col-sm-4">
              <ListVideo style={{marginTop: '50px'}} listVideos={this.state.listVideo} />
            </div>
          </div>
      </Row>
    );
  }
} 
