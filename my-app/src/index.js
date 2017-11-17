import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class PictureSlider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        }
        this.pictures = [
            {
                id: 1,
                url: '../images/car1.jpg'
            }
        ]
    }
    renderPicture(i) {
        return <img alt="Not Found" src={this.pictures[i].url} />
    }
    render() {
        return (
            <div className="picture-container" >
                <h1> Picture Slider </h1>
                {this.renderPicture(0)}
            </div>
        );
    }
}

ReactDOM.render(
    <PictureSlider />,
    document.getElementById('root')
);