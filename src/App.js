import React, { Component } from 'react';
import './App.css';
import Review from './Review';


class App extends Component {
  // Render: componentWillMount() -> render() -> componentDidMount()
  // Update componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

  state = {}

  componentDidMount(){
      this._getMovies();
  }

  _renderReviews = () => {
    const reviews = this.state.reviews.map(review => {
        return <Review
                  nickName={review.nickName}
                  profileImage={review.profileImage}
                  menuName={review.menuName}
                  starRating={review.starRating}
                  reviewComent={review.reviewComent}
                  date={review.date}
                  key={review.id}
                />
    })
    return reviews;
  }

  _getMovies = async () => {
      const reviews = await this._callApi()
      this.setState({
          reviews
      })
  }

  _callApi = () => {
      const reviews = [
          {
            nickName: "abel ko",
            profileImage: "http://mud-kage.kakao.co.kr/14/dn/btqd2WqfxbS/kVa0XJZQzFoePKj5pRZYEk/o.jpg",
            menuName: "치미추리 스테이크",
            starRating: 4.5,
            reviewComent: "전자레인지로 이런 스테이크를 먹을 수 있다니 놀랍습니다. 가니시들의 구성도 좋고, 특히 감자의 식감이 인상적 입니다.",
            date: "2018-02-07"
          },
          {
            nickName: "kku",
            profileImage: "http://k.kakaocdn.net/dn/h6u5D/btqjEcH2e0C/Lj4pb4dZ8ahA0NadGK3OxK/profile_640x640s.jpg",
            menuName: "부리또 볼",
            starRating: 5.0,
            reviewComent: "저는 부리또볼만 있다면 회사에 평생 남겠어요!",
            date: "2018-02-06"
          },
          {
            nickName: "Duck",
            profileImage: "https://scontent-icn1-1.xx.fbcdn.net/v/t1.0-9/15349655_217828411960103_1737140661008716902_n.jpg?oh=f883741683dac6546aa42f5330bd6683&oe=5B25BC45",
            menuName: "수란을 얹은 김퓨레 라이스",
            starRating: 4.0,
            reviewComent: "일식 너무 좋아요. 플레이팅에서 먹고 감동받아서, 일본으로 떠납니다",
            date: "2018-02-07"
          },
          {
            nickName: "Yun",
            profileImage: "https://mud-kage.kakao.com/14/dn/btqfa7rh12I/KgbZVQZB4B3Wa8TRWWfdqK/o.jpg",
            menuName: "새우와 인도식 커리",
            starRating: 2.0,
            reviewComent: "새우 먹기가 불편해여. 까주세요",
            date: "2018-02-05"
          },
          {
            nickName: "Yowu",
            profileImage: "https://scontent-icn1-1.xx.fbcdn.net/v/t1.0-9/10600541_753994891324911_4409874377371761598_n.jpg?oh=25a9223e5b33b560beb55e012f0be6b7&oe=5AD8F6DF",
            menuName: "트터플 페스토 파스타",
            starRating: 5.0,
            reviewComent: "아.. 나란 남자, 오늘도 파스타를 먹는다....*",
            date: "2018-02-07"
          }
      ]
      return reviews
  }

  render() {
    const { reviews } = this.state;
    return (
      <div className={reviews ? "App" : "App--loading"}>
        {reviews ? this._renderReviews() : 'Loading'}
      </div>
    );
  }
}

export default App;
