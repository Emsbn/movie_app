import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "http://recipe1.ezmember.co.kr/cache/recipe/2015/04/02/238f0a3e8b567db1229b0f27220033341.jpg",
    rating: 4.0
  },
  {
    id: 2,
    name: "yeollamyeon",
    image:
      "http://img.danawa.com/prod_img/500000/434/242/img/1242434_1.jpg?shrink=500:500&_v=20181016142238",
    rating: 3.5
  },
  {
    id: 3,
    name: "donkkaseu",
    image:
      "http://recipe1.ezmember.co.kr/cache/recipe/2018/10/21/775ee21fad1d0bbb84b663c5bd4dbeab1.jpg",
    rating: 1.5
  },
  {
    id: 4,
    name: "samgyeobsal",
    image:
      "https://pds.joins.com/news/component/htmlphoto_mmdata/201702/27/117f5b49-1d09-4550-8ab7-87c0d82614de.jpg",
    rating: 4.5
  },
  {
    id: 5,
    name: "deopbab",
    image:
      "https://scontent-frx5-1.cdninstagram.com/vp/83afd4ed545a501aeb072ac0e61d642d/5DEE7C68/t51.2885-15/e35/65135438_694165877697212_6785317496413022206_n.jpg?_nc_ht=scontent-frx5-1.cdninstagram.com&ig_cache_key=MjA3ODMwOTE1NjU2NjU3NzA5NQ%3D%3D.2",
    rating: 2.6
  }
];

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
};

function renderFood(dish) {
  return (
    <Food
      key={dish.id}
      name={dish.name}
      picture={dish.image}
      rating={dish.rating}
    />
  );
}

function App() {
  return (
    <div>
      {/* {console.log(foodILike.map(renderFood))} */}
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;
