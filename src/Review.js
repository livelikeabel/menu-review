import React, { Component }from 'react';
import PropTypes from 'prop-types';
import './Review.css';

class Review extends Component{

    static propTypes = {
        profileImage: PropTypes.string.isRequired,
        nickName: PropTypes.string.isRequired,
        menuName: PropTypes.string.isRequired,
        starRating: PropTypes.number.isRequired,
        reviewComent: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired
    }

    render(){
      console.log(this.props)
        return(
            <div>
              <ProfileImage profileImage={this.props.profileImage}/>
              <h1>{this.props.nickName}</h1>
              <div>
                <h3>{this.props.menuName}</h3>
                <h3>{this.props.starRating}</h3>
                <h3>{this.props.reviewComent}</h3>
                <h3>{this.props.date}</h3>
              </div>
            </div>
        )
    }
}

class ProfileImage extends Component{

    static propTypes = {
        profileImage: PropTypes.string.isRequired
    }

    render(){
        return(
            <img src={this.props.profileImage} alt="Profile Image"/>
        )
    }
}

export default Review;
