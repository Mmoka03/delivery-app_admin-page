import React, { Component } from 'react';

class DeliveryNav extends Component {
    render() {
      return(
        <nav>
            <ul className="side_menu">
              <li>
                <a href="/#" className="main_menu">회원관리</a>
                <div className="sub_menu">
                  <a href="/#">회원추가</a>
                  <a href="./memberupdate">회원정보수정</a>
                  <a href="/#">회원정보 강제삭제</a>
                  <a href="./memberlist">회원정보 리스트</a>
                  <a href="/#">회원쿠폰관리</a>
                  <a href="/#">회원주문내역관리</a>
                  <a href="/#">회원리뷰관리</a>
                </div>
              </li>
              <li>
                <a href="/#" className="main_menu">쿠폰관리</a>
                <div className="sub_menu">
                  <a href="/#">쿠폰추가</a>
                  <a href="/#">쿠폰정보수정</a>
                  <a href="/#">회원정보 강제삭제</a>
                  <a href="/#">쿠폰정보 리스트</a>
                  <a href="/#">쿠폰삭제</a>
                </div>
              </li>
              <li>
                <a href="/#" className="main_menu">식당관리</a>
                <div className="sub_menu">
                  <a href="/#">식당추가</a>
                  <a href="/#">식당정보수정</a>
                  <a href="/#">식당정보 리스트</a>
                  <a href="/#">식당정보 강제삭제</a>
                  <a href="/#">식당주문내역관리</a>
                  <a href="/#">식당리뷰관리</a>
                </div>
              </li>
            </ul>
        </nav>
      )
    }
}

  
export default DeliveryNav;