import React, {Component} from 'react';
import axios from 'axios';

import GifCard from './components/GifCard';
import SearchField from './components/SearchField';

const APIKey = "api_key=MPa4Wdu4W5XkuFjvNJRxSjCSKiX3lNN6";
const url = " https://api.giphy.com/v1/gifs/";

class App extends Component {
  constructor(){
    super();

    this.state = {
      appdata: [],
    }

    this.getData = this.getData.bind(this);
    this.parseSearch=this.getData.bind(this);
  }

  async getData(type, search){
    let completeUrl = url;
    
    if(type === "search"){
      completeUrl += "search?q=" + search + "&" +APIKey;
    }

    else {
      completeUrl += type + "?"+ APIKey;
    }


    try{

      let result =[];

      if(type ==="random"){
        result.push((await axios.get(completeUrl)).data.data);
      }
      else{
        result =  (await axios.get(completeUrl)).data.data;
      }

      this.setState({appdata: result});

    }

    catch(error){
      
    }
    

  }

  
  componentDidMount(){
    this.getData("trending")
  }

  render(){

    const rows=[];

    this.state.appdata.map(gif =>
      rows.push(<GifCard gifurl={gif.embed_url} title={gif.title} id={gif.id} key={gif.id}/>)

    )
    
    return(
      <div className="App">
        <SearchField getData={this.getData}/>
        {rows}
      </div>
    );
  }


};

export default App;
