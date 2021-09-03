import React, { Component } from 'react';
import axios from 'axios';
import './css/App.css';
import './css/DeliveryTitle.css';
import DeliveryHeader from './basic/DeliveryHeader';
import DeliveryNav from './basic/DeliveryNav';

class MemberList extends Component {
  
    constructor(props) {
        super(props)
        this.state = {
          app_member : [],
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
  
    // _getAllMember = async() => {
    //   const res = await axios.get('/member');
    // //   this.List.insert({ member: res.data.products })
    //   console.log(this.res.data.products);
    // }
    // _getMenu = async(id) => {
    //   const res = await axios.get('/menu/'+id);
    //   this.setState({ food__menu : res.data.products })
    //   console.log(this.state.food__menu);
    // }
  
    render() {
      return(
        <main>
            <h3 className="menu_title">
              회원정보 리스트
            </h3>
            <table>
              <tr>
                <th>아이디</th>
                <th>닉네임</th>
                <th>주소</th>
                <th>이메일</th>
                <th>전화번호</th>
                <th>가입일자</th>
                <th>전체주문횟수</th>
                <th>포인트</th>
              </tr>
              <tr>
                <td>

                </td>
              </tr>
            </table>
        </main>
      )
    }
  }

  export default MemberList;