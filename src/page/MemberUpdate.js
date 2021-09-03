import React, { Component } from 'react';
import axios from 'axios';
import './css/App.css';
import './css/DeliveryTitle.css';
import DeliveryHeader from './basic/DeliveryHeader';
import DeliveryNav from './basic/DeliveryNav';

class MemberUpdate extends Component {
  
    constructor(props) {
        super(props)
        this.state = {
          food__menu : [],
        }
        // let member = new Object();
        // let List = function() {
        //     this.member = []
        // }
      }

  //   componentDidMount() {
  //       console.log('-----------------');
  //       // this._getAllMember();
  //       this._getAllMenu();
  //   }
  //   _getAllMenu = async() => {
  //   const res = await axios.get('/menu');
  //   this.setState({ food__menu : res.data.products })
  //   console.log(this.state.food__menu);
  // }
  // _getMenu = async(id) => {
  //   const res = await axios.get('/menu/'+id);
  //   this.setState({ food__menu : res.data.products })
  //   console.log(this.state.food__menu);
  // }
  
  //   _getAllMember = async() => {
  //     const res = await axios.get('/member');
  //     this.List.insert({ member: res.data.products })
  //     console.log(this.res.data.products);
  //   }
    // _getMenu = async(id) => {
    //   const res = await axios.get('/menu/'+id);
    //   this.setState({ food__menu : res.data.products })
    //   console.log(this.state.food__menu);
    // }
  
    render() {
      return(
        <main>
            <h1 className="title">
              배달의 민족 관리페이지
            </h1>
            <span>
              현재 <b>'최고관리자'</b>계정으로 로그인 되어 있습니다.
            </span>
            <span>
              업데이트
            </span>
        </main>
      )
    }
  }

  export default MemberUpdate;