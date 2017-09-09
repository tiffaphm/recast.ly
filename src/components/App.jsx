/*var App = () => (
  <div>
    <nav className="navbar">
      <div className="col-md-6 offset-md-3">
        <div><h5><em>search</em> view goes here</h5></div>
      </div>
    </nav>
    <div className="row">
      <div className="col-md-7">
        <VideoPlayer video={props.video} />
      </div>
      <div className="col-md-5">
        <VideoList videos={exampleVideoData} getNewVideo={this.getNewVideo.bind(this)}/>
      </div>
    </div>
  </div>
);*/

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined


// create App as a class
  // in renderApp function
    // on state change
      // set VideoPlayer props to new video
      
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videosCollection: exampleVideoData,
      videoObject: exampleVideoData[0]
    };
  }
  
  getNewVideo(video) {
    this.setState({
      videoObject: video
    });
    // console.log(video);
    // ;
  }
  
  render() {
    var url = `https://www.youtube.com/embed/${this.state.videoObject.id.videoId}?autoplay=1`;

    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.videoObject} url={url} />
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videosCollection} getNewVideo={this.getNewVideo.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
}

window.App = App;