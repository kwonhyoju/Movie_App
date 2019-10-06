import React from 'react';

const foodName =[
  {
    id:1,
    name: "김치",
    img:"http://m.08food.com/web/product/big/201801/32_shop1_475359.jpg"
  },
  {
    id:2,
    name:"떡볶이",
    img:"https://t1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/55oP/image/hpJrhAab-Ph2aW_vxpH-c5CCYto.jpg"
  },
  {
    id:3,
    name: "순대",
    img:"http://sanghafarm.co.kr/sanghafarm_Data/upload/shop/product/201810/A0003528_2018102319172333992.jpg"
  },
  {
    id:4,
    name: "케익",
    img:"http://m.ops.co.kr/web/product/big/201806/87_shop1_15296451981396.jpg"
  },
  {
    id:5,
    name: "아이스아메리카노",
    img:"https://img.seoul.co.kr/img/upload/2019/02/13/SSI_20190213100441_V.jpg"
  }
];

function Test ({name,img}){
  return (
  <div>
    <h2>I like{name} </h2>
    <img src={img} alt={name}/>
  </div>
  );
}

function RenderFood(dish){
  return <Test key ={dish.id} name= {dish.name} img={dish.img}/>
}

function App() {
  return (
    <div className="App">
      {/* 바로 넣는 방법 */}
      {foodName.map(curFood=>(
        <Test key={curFood.id} name={curFood.name} img={curFood.img}/>
      ))}
      {/* 함수를 이용해 넣는 방법 */}
      {console.log(foodName.map(RenderFood))}
      {foodName.map(RenderFood)}
    </div>
  );
}

export default App;
