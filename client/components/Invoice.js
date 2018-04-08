import React from 'react';
import { Component } from 'react';
import {connect} from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import { addPosts } from '../actions/index';
// import * as actionCreators from './actionCreators'
import moment from 'moment';
// import 'react-datepicker/dist/react-datepicker.css';
//https://github.com/Invoiced/invoice-generator-api
//https://github.com/Hacker0x01/react-datepicker
//https://www.youtube.com/watch?v=SX5HkOP-LWs&list=PLuNEz8XtB51K-x3bwCC9uNM_cxXaiCcRY&index=7
class Invoice extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: moment(),
      // from: "",
      name: "",
      to: "",
      // notes: "",
      living_room15: 0,
      living_room15Final: 0,
      living_room20: 0,
      living_room20Final: 0,
      living_room30: 0,
      living_room30Final: 0,
      living_room_total: 0,
      dining_room15: 0,
      dining_room15Final: 0,
      dining_room20: 0,
      dining_room20Final: 0,
      dining_room30: 0,
      dining_room30Final: 0,
      dining_room_total: 0,
      medea_room15: 0,
      medea_room15Final: 0,
      medea_room20: 0,
      medea_room20Final: 0,
      medea_room30: 0,
      medea_room30Final: 0,
      medea_room_total: 0,
      hallway: 0,
      hallwayFinal: 0,
      sofa: 0,
      sofaFinal: 0,
      recliner: 0,
      reclinerFinal: 0,
      staircase: 0,
      staircaseFinal: 0,
      love_seat: 0,
      love_seatFinal: 0,
      chair: 0,
      chairFinal: 0,
      total: 0
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dateChange = this.dateChange.bind(this);
    this.name = this.name.bind(this);
    this.to = this.to.bind(this);
    this.living_room15 = this.living_room15.bind(this);
    this.living_room20 = this.living_room20.bind(this);
    this.living_room30 = this.living_room30.bind(this);
    // this.living_room_total = this.living_room_total.bind(this);
    this.dining_room15 = this.dining_room15.bind(this);
    this.dining_room20 = this.dining_room20.bind(this);
    this.dining_room30 = this.dining_room30.bind(this);
    // this.dining_room_total = this.dining_room_total.bind(this);
    this.medea_room15 = this.medea_room15.bind(this);
    this.medea_room20 = this.medea_room20.bind(this);
    this.medea_room30 = this.medea_room30.bind(this);
    // this.medea_room_total = this.medea_room_total.bind(this);
    this.hallway = this.hallway.bind(this);
    this.sofa = this.sofa.bind(this);
    this.recliner = this.recliner.bind(this);
    this.staircase = this.staircase.bind(this);
    this.love_seat = this.love_seat.bind(this);
    this.chair = this.chair.bind(this);
    // this.total = this.total.bind(this);
  }


  handleSubmit(event) {
    this.props.addPosts(this.state)
    event.preventDefault()
  }

  dateChange(date) {
    this.setState({
      startDate: date
    });
  }
  name(event) {
    this.setState({
      name: event.target.value
    });
  }
  to(event) {
    this.setState({
      to: event.target.value
    });
  }



  living_room15(event) {
    const newIncome = event.target.value;
    this.setState({
      living_room15: newIncome,
      living_room15Final: newIncome * 35
    });
  }
  living_room20(event) {
    const newIncome = event.target.value;
    this.setState({
      living_room20: newIncome,
      living_room20Final: newIncome - 0
    });
  }
  living_room30(event) {
    const newIncome = event.target.value;
    this.setState({
      living_room30: newIncome,
      living_room30Final: newIncome - 0
    });
  }
  // living_room_total() {
  //   const total = this.state.living_room15Final + this.state.living_room20Final + this.state.living_room30Final
  //   console.log(total)
  //   this.setState({
  //     living_room_totalFinal: totalValue + this.state.living_room15
  //   });
  // }
  dining_room15(event) {
    const newIncome = event.target.value;
    this.setState({
      dining_room15: newIncome,
      dining_room15Final: newIncome - 0
    });
  }
  dining_room20(event) {
    const newIncome = event.target.value;
    this.setState({
      dining_room20: newIncome,
      dining_room20Final: newIncome - 0
    });
  }
  dining_room30(event) {
    const newIncome = event.target.value;
    this.setState({
      dining_room30: newIncome,
      dining_room30Final: newIncome - 0
    });
  }
  // dining_room_total(event) {
  //   this.setState({
  //     dining_room_total: event.target.value
  //   });
  // }
  medea_room15(event) {
    const newIncome = event.target.value;
    this.setState({
      medea_room15: newIncome,
      medea_room15Final: newIncome - 0
    });
  }
  medea_room20(event) {
    const newIncome = event.target.value;
    this.setState({
      medea_room20: newIncome,
      medea_room20Final: newIncome - 0
    });
  }
  medea_room30(event) {
    const newIncome = event.target.value;
    this.setState({
      medea_room30: newIncome,
      medea_room30Final: newIncome - 0
    });
  }
  // medea_room_total(event) {
  //   const newIncome = event.target.value;
  //   this.setState({
  //     medea_room_total: newIncome,
  //
  //   });
  // }
  hallway(event) {
    const newIncome = event.target.value;
    this.setState({
      hallway: newIncome,
      hallwayFinal: newIncome - 0
    });
  }
  sofa(event) {
    const newIncome = event.target.value;
    this.setState({
      sofa: newIncome,
      sofaFinal: newIncome - 0
    });
  }
  recliner(event) {
    const newIncome = event.target.value;
    this.setState({
      recliner: newIncome,
      reclinerFinal: newIncome - 0
    });
  }
  staircase(event) {
    const newIncome = event.target.value;
    this.setState({
      staircase: newIncome,
      staircaseFinal: newIncome - 0
    });
  }
  love_seat(event) {
    const newIncome = event.target.value;
    this.setState({
      love_seat: newIncome,
      love_seatFinal: newIncome - 0
    });
  }
  chair(event) {
    const newIncome = event.target.value;
    this.setState({
      chair: newIncome,
      chairFinal: newIncome - 0
    });
  }
  // total(){
  //   const total = this.state.living_room15Final + this.state.living_room20Final + this.state.living_room30Final +
  //                this.state.dining_room15Final + this.state.dining_room20Final + this.state.dining_room30Final +
  //                this.state.medea_room15Final + this.state.medea_room20Final + this.state.medea_room30Final +
  //                this.state.hallwayFinal + this.state.staircaseFinal + this.state.sofaFinal + this.state.love_seatFinal +
  //                this.state.reclinerFinal + this.state.chairFinal;
  //   this.setState({
  //     total: total - 0
  //   })
  // }


  render() {
    // const { handleSubmit, pristine, reset, submitting } = this.props
    // console.log(this.props.posts)
    // https://www.youtube.com/watch?v=DVEsNYS1Cgo
    //https://github.com/kweiberth/react-todo-list/blob/part-11-start/components/TodoInput.js
    //how to add numberst together!
    //https://codepen.io/jonkemp/pen/zqobVV?editors=1010
    const white = {
      textAlign: "center",
      color: "white"
    }

    const { displayValue } = this.state;


 const total = this.state.living_room15Final + this.state.living_room20Final + this.state.living_room30Final +
              this.state.dining_room15Final + this.state.dining_room20Final + this.state.dining_room30Final +
              this.state.medea_room15Final + this.state.medea_room20Final + this.state.medea_room30Final +
              this.state.hallwayFinal + this.state.staircaseFinal + this.state.sofaFinal + this.state.love_seatFinal +
              this.state.reclinerFinal + this.state.chairFinal;




    return(
    <div>
      <ScrollToTopOnMount/>
      <section class="residential-header" >
        <div>
          <h1 class="middle-font residential-title">Invoice</h1>
          <h1 style={white} class="middle-font ">All rooms 15x15 are $35</h1>
        </div>
        <h1 style={white} class="small-font ">We will clean under beds when requested. **must take off the bed linen**
        </h1>
      </section>
        <div>
        <div class="align-quote-page">
          <form onSubmit={this.handleSubmit}>
            <div class="invoice-header">
              <div class="invoice-float">
                  <h1 class="small-font">fill out this form and it will be sent to you and sent to one our team and will connect you
                  for someone to visit.
                  </h1>
                </div>

                <div class="invoice-float">
                  <div>
                    <div class="middle-font">Date:todays date</div>
                  </div>
                    <div class="two-way">
                      <div>
                        Name: <input value={this.state.name} onChange={this.name} class="blue-button" name="name" type="name" placeholder="name"/>
                      </div>
                      <div>
                        Address: <input value={this.state.to} onChange={this.to} class="blue-button" name="to" type="address" placeholder="address" />
                      </div>
                      <div>
                        Arrival Date: <DatePicker selected={this.state.startDate} onChange={this.dateChange} class="blue-button" name="Address" type="address" placeholder="type address"/>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="flex-pricing-header">
                  <div class="flex-pricing-header-size">
                    <div class="center-it">
                      <h1 class="large-font white-font">info</h1>
                    </div>
                  </div>
                  <div class="flex-pricing-header-size">
                    <div class="center-it">
                      <h1 class="middle-font white-font">15x15</h1>
                    </div>
                  </div>
                  <div class="flex-pricing-header-size">
                    <div class="center-it">
                      <h1 class="middle-font white-font">20x20</h1>
                    </div>
                  </div>
                  <div class="flex-pricing-header-size">
                    <div class="center-it">
                      <h1 class="middle-font white-font">30x30</h1>
                    </div>
                  </div>
                  <div class="flex-pricing-header-size">
                    <div class="center-it">
                        <h1 class="middle-font white-font">Total</h1>
                    </div>
                  </div>
                </div>

                {/* <div class="line">
                </div> */}
                <div class="flex-pricing-container">
                  <div class="flex-pricing">
                    <div class="color-demo">
                      <div class="service-title">
                        <h1 class="middle-font">Living Room</h1>
                      </div>
                    </div>
                    <div class="button-width">
                      <div class="center-button">
                        <input class="blue-textfield-oneItem" value={this.state.living_room15} onChange={this.living_room15} name="Address" type="address" placeholder="type address" />
                      </div>
                    </div>
                    <div class="button-width">
                      <div class="center-button">
                        <input class="blue-textfield-oneItem"  value={this.state.living_room20} onChange={this.living_room20} name="Address" type="address" placeholder="type address" />
                      </div>
                    </div>
                    <div class="button-width">
                      <div class="center-button">
                        <input class="blue-textfield-oneItem" value={this.state.living_room30} onChange={this.living_room30} name="Address" type="address" placeholder="type address" />
                      </div>
                    </div>

                    <div class="color-demo">
                      <div class="line-under-price">
                        <div class="align-total-box middle-font" >
                          {this.state.living_room15Final + this.state.living_room20Final + this.state.living_room30Final}
                        </div>
                      </div>
                    </div>
                  </div>

                   <div class="flex-pricing">
                    <div class="color-demo">
                      <div class="service-title">
                        <h1 class="middle-font">Dining Room</h1>
                      </div>
                    </div>
                    <div class="button-width">
                      <div class="center-button">
                        <input class="blue-textfield-oneItem" value={this.state.dining_room15} onChange={this.dining_room15} name="Address" type="address" placeholder="type address" />
                      </div>
                    </div>
                    <div class="button-width">
                      <div class="center-button">
                        <input class="blue-textfield-oneItem" value={this.state.dining_room20} onChange={this.dining_room20} name="Address" type="address" placeholder="type address" />
                      </div>
                    </div>
                    <div class="button-width">
                      <div class="center-button">
                        <input class="blue-textfield-oneItem" value={this.state.dining_room30} onChange={this.dining_room30} name="Address" type="address" placeholder="type address" />
                      </div>
                    </div>

                    <div class="color-demo">
                      <div class="line-under-price">
                        <div class="align-total-box middle-font">
                          {this.state.dining_room15Final + this.state.dining_room20Final + this.state.dining_room30Final}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="flex-pricing">
                    <div class="color-demo">
                      <div class="service-title">
                        <h1 class="middle-font">Medea Room</h1>
                      </div>
                    </div>
                    <div class="button-width">
                      <div class="center-button">
                        <input class="blue-textfield-oneItem" value={this.state.medea_room15} onChange={this.medea_room15} name="Address" type="address" placeholder="type address" />
                      </div>
                    </div>
                    <div class="button-width">
                      <div class="center-button">
                        <input class="blue-textfield-oneItem" value={this.state.medea_room20} onChange={this.medea_room20} name="Address" type="address" placeholder="type address" />
                      </div>
                    </div>
                    <div class="button-width">
                      <div class="center-button">
                        <input class="blue-textfield-oneItem" value={this.state.medea_room30} onChange={this.medea_room30} name="Address" type="address" placeholder="type address" />
                      </div>
                    </div>
                    <div class="color-demo">
                      <div class="price">
                        <div class="align-total-box middle-font">
                          {this.state.medea_room15Final + this.state.medea_room20Final + this.state.medea_room30Final}
                        </div>
                      </div>
                    </div>
                  </div>
              </div>



                <div class="single-items">

                  <div class="flex-single-items">
                    <div class="flex-single-something">
                      <div class="testing-color">
                        <h1 class="middle-font">Hallway</h1>
                      </div>
                      <div class="align-textfield">
                        <input class="blue-textfield-oneItem" value={this.state.hallway} onChange={this.hallway} name="Address" type="address" placeholder="type address" />
                      </div>
                    </div>
                    <div class="flex-single-something">
                      <div class="testing-color">
                        <h1 class="middle-font">Staircase</h1>
                      </div>
                      <div class="align-textfield">
                        <input class="blue-textfield-oneItem" value={this.state.staircase} onChange={this.staircase} name="Address" type="address" placeholder="type address" />
                      </div>
                    </div>
                    <div class="flex-single-something">
                      <div class="price">
                        <div class="price_padding">
                          <h1 class="middle-font">{this.state.hallwayFinal + this.state.staircaseFinal}</h1>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="flex-single-items">
                    <div class="flex-single-something">
                      <div class="testing-color">
                        <h1 class="middle-font">Sofa</h1>
                      </div>
                      <div class="align-textfield">
                        <input class="blue-textfield-oneItem" value={this.state.sofa} onChange={this.sofa} name="Address" type="address" placeholder="type address" />
                      </div>
                    </div>
                    <div class="flex-single-something">
                      <div class="testing-color">
                        <h1 class="middle-font">Love Seat</h1>
                      </div>
                      <div class="align-textfield">
                        <input class="blue-textfield-oneItem" value={this.state.love_seat} onChange={this.love_seat} name="Address" type="address" placeholder="type address" />
                      </div>
                    </div>
                    <div class="flex-single-something">
                      <div class="price">
                        <div class="price_padding">
                          <h1 class="middle-font">{this.state.sofaFinal + this.state.love_seatFinal}</h1>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="flex-single-items">
                    <div class="flex-single-something">
                      <div class="testing-color">
                        <h1 class="middle-font">Recliner</h1>
                      </div>
                      <div class="align-textfield">
                        <input class="blue-textfield-oneItem" value={this.state.recliner} onChange={this.recliner} name="Address" type="address" placeholder="type address" />
                      </div>
                    </div>
                    <div class="flex-single-something">
                      <div class="testing-color">
                        <h1 class="middle-font">Chair</h1>
                      </div>
                      <div class="align-textfield">
                        <input class="blue-textfield-oneItem" value={this.state.chair} onChange={this.chair} name="Address" type="address" placeholder="type address" />
                      </div>
                    </div>
                    <div class="flex-single-something">
                      <div class="price">
                        <div class="price_padding">
                          <h1 class="middle-font">{this.state.reclinerFinal + this.state.chairFinal}</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="total">
                  <div class="total_amount">
                    <div class="middle-font floating-box">Total:</div>
                    <div class="middle-font floating-box">{total}</div>
                  </div>
                </div>
                <div class="total">
                  <div class="total_button">
                    <button type="submit" class="commerical-button">submit
                  </button>
                  </div>
                </div>
                </form>
          </div>
        </div>
    </div>
  )
  };
}

class ScrollToTopOnMount extends Component {
  componentDidMount(prevProps) {
    window.scrollTo(0, 0)
  }

  render() {
    return null
  }
}


const mapStateToProps = (state) => { //const INITIAL_STATE = []; on actions/index.js
  return state
}

const mapDispatchToProps = { //this is what fires off actions in redux
   addPosts
 }


// Residential = connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Residential);
//
// export default reduxForm({
//     form: 'simple' // a unique name for this form
// })(Residential);


export default connect(mapStateToProps, mapDispatchToProps)(Invoice)
// <div class="flex-box">
//   <div>
//   <h1># of Rooms:</h1>
//   </div>
//   <div>
//     <input class="blue-button" name="Address" type="address" placeholder="type address" />
//   </div>
//   <div>
//     <input class="blue-button" name="Address" type="address" placeholder="type address" />
//   </div>
//   <div>
//     <input class="blue-button" name="Address" type="address" placeholder="type address" />
//   </div>
//   <div class="line">
//     Total:
//   </div>
// </div>
// </div>
//   <h1>line</h1>
// <div>



// <section class="services-for-residential">
// v
// <h1>{this.props.posts}</h1>
// <input id="Email" type="text" />
// <input id="Date" type="text" />
// <button>click here </button>
//   <form onSubmit={handleSubmit}>
//     <div>
//       <label>First Name</label>
//       <div>
//         <Field
//           name="firstName"
//           component="input"
//           type="text"
//           placeholder="First Name"
//         />
//       </div>
//     </div>
//     <div>
//       <label>Last Name</label>
//       <div>
//         <Field
//           name="lastName"
//           component="input"
//           type="text"
//           placeholder="Last Name"
//         />
//       </div>
//     </div>
//     <div>
//       <label>Email</label>
//       <div>
//         <Field
//           name="email"
//           component="input"
//           type="email"
//           placeholder="Email"
//         />
//       </div>
//     </div>
//     <div>
//       <button type="submit" disabled={pristine || submitting}>
//         Submit
//       </button>
//       <button type="button" disabled={pristine || submitting} onClick={reset}>
//         Clear Values
//       </button>
//     </div>
//   </form>
// </section>




//https://www.youtube.com/watch?v=fZKaq623y38

//https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options

//https://stackoverflow.com/questions/43216026/post-request-with-axios-and-redux-thunk-in-a-redux-form
//https://github.com/erikras/redux-form/issues/2481
// https://redux-form.com/7.0.4/docs/faq/howtoconnect.md/
// https://github.com/erikras/redux-form/issues/2491
// https://stackoverflow.com/questions/41788778/dispatch-a-action-once-server-side-validation-passed-in-redux-form
