class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      videoCollection: exampleVideoData,
      currentVideo: exampleVideoData[0]
    };
  }
  
  getCurrentVideo(video) {
    this.setState({
      currentVideo: video
    });
  }
  
  render() {
    var url = `https://www.youtube.com/embed/${this.state.currentVideo.id.videoId}?autoplay=1`;

    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo} url={url} />
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videoCollection} getCurrentVideo={this.getCurrentVideo.bind(this)} />
          </div>
        </div>
      </div>
    );
  }
}

window.App = App;