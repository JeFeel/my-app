import logo from './logo.svg';
import './App.css';
import SayHello from "./SayHello";
import ClickEvent from "./component/chap01_event/ClickEvent";
import ChangeEvent from "./component/chap01_event/ChangeEvent";
import SubmitEvent from "./component/chap01_event/SubmitEvent";
import FoodList from "./component/chap02_props/FoodList";
import NickName from "./component/chap03_state/NickName";
import Counter from "./component/chap03_state/Counter";

function App() {

    const looping = () => {
        const helloList = [];
        for (let i = 0; i < 5; i++) {
            helloList.push(<SayHello/>)
        }
        return helloList;
    };
    return (
        // <>
        //     <h1 className='abc'>리액트 초보입니다!</h1>
        //     <p>하하호호</p>
        // </>
        //html이 아닌 script 코드 (JSX)
        //rendering은 class로 되지만 작성은 className로 해야됨
        // 부모 태그 없는 형제가 존재하면 에러
        // 필요없는 부모 태그라면 대신에 빈 태그를 작성하자 -> JSX에서 없는 태그 취급으로 인식

        // JSX 문법에서는 스크립트 코드를 직접 사용 불가능
        // {} 안에서 함수호출문이나 변수참조를 할 수 있음
        <>
            {/*{looping()}*/}
           {/*{ClickEvent()}*/}
           {/* <ChangeEvent />*/}
           {/* <SubmitEvent />*/}
           {/* <FoodList />*/}
           {/* <NickName />*/}
            <Counter />
        </>

    );
}

export default App;


//    <div className="App">
//    <header className="App-header">
//      <img src={logo} className="App-logo" alt="logo" />
//      <p>
//        Edit <code>src/App.js</code> and save to reload.
//      </p>
//      <a
//        className="App-link"
//        href="https://reactjs.org"
//        target="_blank"
//        rel="noopener noreferrer"
//      >
//        Learn React
//      </a>
//    </header>
//  </div>