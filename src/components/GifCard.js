import React, {Component} from 'react';

class GifCard extends Component{

    render(){
        console.log(this.props.gifurl)
        return(
            <div>
                <iframe src={this.props.gifurl} title={this.props.id}/>
            </div>
        );
    }
};

export default GifCard;