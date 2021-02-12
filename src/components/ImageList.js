import React from 'react';
import ImageItem from './ImageItem';

export default class ImageList extends React.Component {
    render() {
        const imageMapVariable = 
            this.props.filteredKeywords.map(
            booger => < ImageItem ImageItemProp={ booger } />
            
            );

        return (
            <div>
                { imageMapVariable }
            </div>
        )
    }
}

