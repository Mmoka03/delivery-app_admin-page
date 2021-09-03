import React, { Component } from 'react';
import axios from 'axios';
import './css/App.css';
import './css/DeliveryTitle.css';
import DeliveryHeader from './basic/DeliveryHeader';
import DeliveryNav from './basic/DeliveryNav';

class Home extends Component {
  
    // constructor(props) {
    //     super(props)
    // }

    render() {
      return(
        <main>
            <h1 className="title">
              배달의 민족 관리페이지입니다.
            </h1>
            <span>
              현재 <b>'최고관리자'</b>계정으로 로그인 되어 있습니다.
            </span>
            <span>
              조작하실 때 각별히 주의해주시길 바랍니다.
            </span>
        </main>
      )
    }
  }

  export default Home;