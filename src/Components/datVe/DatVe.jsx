import React, { Component } from "react";
import ListSeat from "./ListSeat";
import BookingList from "./BookingList";


export default class DatVe extends Component {
 


// ShowList = () => { 
//   return this.mangDanhSachGhe.map((ghe)  => { 
//     let {hang} = ghe;
//     return <tr>
//       <td>{hang}</td>
//       {ghe.danhSachGhe.filter(danhSachGhe => danhSachGhe.gia === 0).map((danhSach) => { 
//         let {soGhe} = danhSach;
//         return <td>{soGhe}</td>
//        })}
//     </tr>
// })}


  render() {
    
    return (
      <div className="bookingMovie">
        <div className="overlay pb-4">
          <div className="container">
           
            <div className="row">
           
              <div className="col-9">
              
                <ListSeat />
              </div>
              <div className="col-3">
                <BookingList />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
