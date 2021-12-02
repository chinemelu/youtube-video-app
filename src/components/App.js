import React from 'react';

import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component { 
  state = {
    searchResults: [],
    selectedVideo: null,
  }
  async componentDidMount() {
    await this.onSearchTextSubmit('buildings');
  }
  onSearchTextSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    this.setState({ 
      searchResults: response.data.items,
      selectedVideo: response.data.items[0]
    })
  }

  onSelectVideoItem = (video) => {
    console.log('video', video);
    this.setState({ selectedVideo: video });
  }
  render() {
   
    return ( 
        <div className="ui container">
          <SearchBar onSearchTextSubmit={this.onSearchTextSubmit}/>
          <div className="ui grid">
            <div className="ui row">
              <div className="eleven wide column">
                <VideoDetail video={this.state.selectedVideo}/>
              </div>
              <div className="five wide column">
                <VideoList onselectVideoItem={this.onSelectVideoItem} videos={this.state.searchResults}/>
              </div>
            </div>
            
          </div>

        </div>
    )
  }
}

export default App;