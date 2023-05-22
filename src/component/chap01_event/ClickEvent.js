// rsi
import React from 'react'

const ClickEvent = () => {

    // const $btn1 = document.getElementById('btn1');
    // $btn1.onclick = e => {
    //     alert('클릭 잘했다!');
    // };

    return (
        <button id='btn1' onClick={()=> alert('클릭잘했어요') }>클릭해봐~~</button>
    )
}

export default ClickEvent;