import React from 'react';
import PropTypes from 'prop-types';
import './Review.css';

function Review({profileImage, nickName, menuName, starRating, reviewComent, date}){
        return(
            <div className="Review">
                <div className="Review__Columns">
                    <ProfileImage profileImage={profileImage} alt={nickName}/>
                    <h1>{nickName}</h1>
                </div>
                <div className="Review__Columns">
                    <h2>{menuName}</h2>
                    <div className="Review__StarRating">{starRating}</div>
                    <p className="Review__ReviewComent">{reviewComent}</p>
                    <p>{date}</p>
                </div>
            </div>
        )
}

function ProfileImage({profileImage, alt}){
        return(
            <img src={profileImage} alt={alt} title={alt} className="Review__ProfileImage"/>
        )
}

Review.propTypes = {
    profileImage: PropTypes.string.isRequired,
    nickName: PropTypes.string.isRequired,
    menuName: PropTypes.string.isRequired,
    starRating: PropTypes.number.isRequired,
    reviewComent: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
}

ProfileImage.propTypes = {
    profileImage: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

export default Review;
