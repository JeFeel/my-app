import React from 'react';
import FoodItem from "./FoodItem";
import SayHello from "../../SayHello";
// props 예시
const FoodList = () => {
    // fetch를 통해 음식 목록 json을 불러옴
    const foods = {
        id: 327432,
        foodList: [
            {
                fName: '짜장면',
                price: 6000,
                id: 'chinese'
            },
            {
                fName: '해물파전',
                price: 12000,
                id: 'korean'
            },
            {
                fName: '가츠동',
                price: 8000,
                id: 'japanese'
            },
            {
                fName: '김치찌개',
                price: 5000,
                id: 'korean'
            },
            {
                fName: '오향장육',
                price: 50000,
                id: 'chinese'
            }
        ]
    };


    return (
        <ul>
            <SayHello>
                <a href={'https://www.naver.com'}>네이버 링크</a>
            </SayHello>
            <SayHello>
                <a href={'https://www.google.com'}>구글 링크</a>
            </SayHello>
            {
                foods.foodList.map(f=>
                    <FoodItem foodName={f.fName} price={f.price} foodId={f.id}/>)
            }

            {/*원래 '짜장면'에도 중괄호를 붙여야 함, 문자열은 중괄호 생략 가능*/}
            {/*<FoodItem foodName='짜장면' price={6000} foodId={'chinese'}/>*/}
            {/*<FoodItem foodName='해물파전' price={12000} foodId={'korean'}/>*/}
            {/*<FoodItem foodName='카츠동' price={8000} foodId={'japanese'}/>*/}
        </ul>
    );
};

export default FoodList;