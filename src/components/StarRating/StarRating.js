import React from 'react';
import PropTypes from 'prop-types';
import Star from '../Star/Star';

const StarRating = ({starsSelected = 0, totalStars = 5, onRate = f => f}) =>
    <div className="star-rating">
        {[...Array(totalStars)].map((n, i) =>
            <Star key={i}
                  selected={i < starsSelected}
                  onClick={() => onRate(i + 1)}/>
        )}
    </div>;

StarRating.propTypes = {
    totalStars: PropTypes.number
};

StarRating.defaultProps = {
    totalStars: 5
};

export default StarRating;