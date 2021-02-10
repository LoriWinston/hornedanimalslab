import React from 'react';

export default class ImageItem extends React.Component {
    render() {
        return (
            <div>
                <img class="images" alt="images" src={this.props.ImageItemProp.url}/>
                <p>{this.props.ImageItemProp.title}</p>
                <p>{this.props.ImageItemProp.description}</p> 
            </div>
        )
    }
}