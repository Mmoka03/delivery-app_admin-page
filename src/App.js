import React, { Component } from 'react';
// import axios from 'axios';
import { Home, MemberList, MemberUpdate } from './page/index';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './page/css/App.css';
import './page/css/DeliveryTitle.css';
import DeliveryHeader from './page/basic/DeliveryHeader';
import DeliveryNav from './page/basic/DeliveryNav';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      food__menu : [],
    }
  }

  // componentDidMount() {
  //   console.log('--------------------------------------');
  //   // this._getMenu(1);
  //   const menuObject = {
  //     price: 5000,
  //     menu_description: '맛없을 수도 있을 수도 없을 수도는 서울이다',
  //     menu_name: '수도권'
  //   };
  //   this._getAllMenu();
  // }

  // _getAllMenu = async() => {
  //   const res = await axios.get('/menu');
  //   this.setState({ food__menu : res.data.products })
  //   console.log(this.state.food__menu);
  // }
  // _getMenu = async(id) => {
  //   const res = await axios.get('/menu/'+id);
  //   this.setState({ food__menu : res.data.products })
  //   console.log(this.state.food__menu);
  // }
  // addMenu = () => {
  //   const menuObject = {
  //     price: 5000,
  //     menu_description: '맛없을 수도 있을 수도 없을 수도는 서울이다',
  //     menu_name: '수도권'
  //   };
  //   axios.post('/menu', {
  //     data: {
  //       price: menuObject.price,
  //       menu_description: menuObject.menu_description,
  //       menu_name: menuObject.menu_name
  //     }
  //   })
  //   .catch(function (error) {
  //     console.log(error)
  //   });
  // }

  render() {
    return(
      <>
        <DeliveryHeader />
        <DeliveryNav />
    	  <Router>
          <Route path="/home" component={Home} />
          <Route path="/memberlist" component={MemberList} />
          <Route path="/memberupdate" component={MemberUpdate} />
          {/* <Route path="/memberupdate" component={MemberUpdate} />
          <Route path="/memberupdate" component={MemberUpdate} /> */}
        </Router>

        {/* <h1>회원관리</h1>
        <span>회원추가, 회원정보수정, 회원정보리스트, 회원정보, 회원정보 강제삭제, 회원쿠폰관리CRUD, 회원주문내역관리CRU, 회원리뷰관리CRUD</span>
        <h1>쿠폰관리</h1>
        <span>쿠폰추가, 쿠폰정보수정, 쿠폰정보리스트, 쿠폰정보, 쿠폰삭제</span>
        <h1>식당관리</h1>
        <span>식당추가, 식당정보수정, 식당정보리스트, 식당정보, 식당정보 강제삭제, 식당주문내역관리CRU, 식당리뷰관리CRUD</span> */}
      </>
    )
  }
}

export default App;