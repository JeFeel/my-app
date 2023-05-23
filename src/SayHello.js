import React from "react";
// react component : 파일명을 앞에 대문자로 작성

function SayHello(props){
    //파일명과 똑같이 함수 생성
    return (
        //여기에 부품화시킬 html 태그를 작성
        <div>
            <p>안녕</p>
            {props.children}
            <span>메롱</span>
        </div>
    );
}

//화살표 함수로 작성해도 무방
// const SayHello = () => {
//     return (
//         <div>
//             <p>안녕</p>
//             <span>메롱</span>
//         </div>
//     );
// }

export default SayHello;