import React, {Component} from 'react';


class SearchField extends Component{
    constructor(){
        super();
    
        this.state = {
          query: "",
        }
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.parseSearch = this.parseSearch.bind(this);
        this.handleRandom= this.handleRandom.bind(this);
      }

    parseSearch(search){
        let q = search.replace(" ", "+");

        this.setState({query: q});
    
    }

    handleChange(e){
        const inputValue = e.target.value;
        this.setState({query: inputValue});
    }

    handleSearch(){
        this.parseSearch(this.state.query);
        this.props.getData("search", this.state.query)
    }

    handleRandom(e){
        this.props.getData(e.target.value);
    }

    render(){

        return(
            <div>
                <button onClick={this.handleRandom} value="trending">Trending</button>
                <button onClick={this.handleRandom} value="random">Random</button>
                <input type="text" name="field" onChange={this.handleChange} value={this.state.query}/>
                <button onClick={this.handleSearch}>Search</button>
                
            </div>
        );
    }
};

export default SearchField;