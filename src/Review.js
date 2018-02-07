import React from 'react';
import PropTypes from 'prop-types';
import './Review.css';

function Review({profileImage, nickName, menuName, starRating, reviewComent, date}){
        return(
            <div>
              <ProfileImage profileImage={profileImage}/>
              <h1>{nickName}</h1>
              <div>
                <h3>{menuName}</h3>
                <h3>{starRating}</h3>
                <h3>{reviewComent}</h3>
                <h3>{date}</h3>
              </div>
            </div>
        )
}

function ProfileImage({profileImage}){
        return(
            <img src={profileImage} alt="Profile Image"/>
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
    profileImage: PropTypes.string.isRequired
}

export default Review;
