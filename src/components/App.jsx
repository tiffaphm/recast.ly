class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      videoCollection: [],
      currentVideo: {
        id: {videoId: 0}, 
        snippet: {
          title: undefined,
          description: undefined
        }
      },
      url: 'https://www.youtube.com/embed/',
      searchString: 'default'
    };
  }
  
  getCurrentVideo(video) {
    this.setState({
      currentVideo: video,
      url: `https://www.youtube.com/embed/${video.id.videoId}?autoplay=1`,
    });
  }
  
  getSearchData(collection) {
    this.setState({
      url: `https://www.youtube.com/embed/${collection[0].id.videoId}?autoplay=1`,
      videoCollection: collection,
      currentVideo: collection[0]
    });
  }
  
  componentDidMount() {
    searchYouTube('elmo', this.getSearchData.bind(this));
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search getSearchData={this.getSearchData.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo} url={this.state.url} />
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

//getSearchData={this.getSearchData.bind(this)}