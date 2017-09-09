// var Search = (props) => {
  
//   var getInputValue = (event) => {
//     console.log('hi');
//   };  
  
//   return (
//     <div className="search-bar form-inline">
//       <input className="form-control" type="text" />
//       <button className="btn hidden-sm-down" onClick={getInputValue}>
//         <span className="glyphicon glyphicon-search"></span>
//       </button>
//     </div> 
//   );
// };

class Search extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      inputValue: '',
      delayedSubmitSearch: _.debounce(this.submitSearch.bind(this), 500)
    };
  }

  getInputValue(event) {
    console.log(event);
    this.setState({
      inputValue: event.target.value
    });
    
    this.state.delayedSubmitSearch();
  }
  
  submitSearch(input) {
    input = this.state.inputValue;
    searchYouTube(input, this.props.getSearchData);
  }
  
  render() {
    return (
      <div className="search-bar form-inline">
        <input className="form-control" type="text" onChange={this.getInputValue.bind(this)}/>
        <button className="btn hidden-sm-down" onClick={this.submitSearch.bind(this)}>
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div> 
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;

// run getSearchData()