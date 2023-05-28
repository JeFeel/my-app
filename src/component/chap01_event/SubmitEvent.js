import React from 'react';

const SubmitEvent = () => {
    const send = e =>{
        //submit 기능 중지
        //값을 보낼때 페이지가 새로고침되는걸 방지
        e.preventDefault();

        const $nick = document.getElementById('nickName');
        console.log($nick.value);

    };

    const buttonStyle = {
      color : 'red',
      backgroundColor : 'orange',
        fontSize : '1.5em'
    };
    return (
        <form onSubmit={send}>
            <input type='text' id='nickName' name='nick'/>
            {/*{}는 안에 js코드를 쓰겠다는 의미, 객체를 넣고 싶으면 안에 한번 더 쓰던가 밖에서 갖고 와야됨*/}
            <button style={buttonStyle} type='submit'>확인</button>
        </form>
    );
};

export default SubmitEvent;