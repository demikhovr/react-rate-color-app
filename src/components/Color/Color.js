import React from 'react';
import PropTypes from 'prop-types';
import StarRating from '../StarRating/StarRating';

const {Component} = React;

class Color extends Component {
    componentWillMount() {
        this.style = {backgroundColor: '#cccccc'};
    }

    shouldComponentUpdate(nextProps) {
        const {rating} = this.props;

        return rating !== nextProps.rating;
    }

    componentWillUpdate(nextProps) {
        const {title, rating} = this.props;
        this.style = null;
        this.refs.title.style.backgroundColor = 'red';
        this.refs.title.style.color = 'white';
        alert(`${title}: rating ${rating} -> ${nextProps.rating}`);
    }

    componentDidUpdate(prevProps) {
        const {title, rating} = this.props;
        const status = (rating > prevProps.rating) ? 'better' : 'worse';
        this.refs.title.style.backgroundColor = '';
        this.refs.title.style.color = 'black';
        console.log(`${title} is getting ${status}`);
    }

    static propTypes = {
        title: PropTypes.string,
        rating: PropTypes.number,
        color: PropTypes.string,
        onRate: PropTypes.func
    };

    static defaultProps = {
        title: undefined,
        rating: 0,
        color: '#000000',
        onRate: f => f
    };

    render() {
        const {title, rating, color, onRate, onRemove} = this.props;

        return (
            <section className="color" style={this.style}>
                <h1 ref="title">{title}</h1>
                <button onClick={onRemove}>X</button>
                <div className="color"
                     style={{backgroundColor: color}}>
                </div>
                <div>
                    <StarRating starsSelected={rating} onRate={onRate}/>
                </div>
            </section>
        )
    }
}

// const Color = ({title, color, rating = 0, onRemove = f => f, onRate = f => f}) =>
//     <section className="color">
//         <h1>{title}</h1>
//         <button onClick={onRemove}>X</button>
//         <div className="color"
//              style={{backgroundColor: color}}>
//         </div>
//         <div>
//             <StarRating starsSelected={rating} onRate={onRate}/>
//         </div>
//     </section>;

export default Color;