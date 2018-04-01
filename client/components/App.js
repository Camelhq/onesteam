import React from 'react';
import { Component } from 'react';
import Home from './Home';
import About from './About';
import Footer from './Footer';
import Commerical from './Commerical';
import Residential from './Residential';
import Invoice from './Invoice';
import GoogleApi from './GoogleApi';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
//https://css-tricks.com/learning-react-router/#article-header-id-9

import logo from "../imgs/onesteam-Logo.png"

class App extends Component {
	constructor (props) {
	super(props)

	this.state = {
		rotated: false,
		show: true,
		color_black: true,
		flex: true,
		isHovering: false
	}

	this.handleChange = this.handleChange.bind(this);
	// this.handleSubmit = this.handleSubmit.bind(this);
	// this.onMouseOver = this.onMouseOver.bind(this);
	// this.handleMouseHover = this.handleMouseHover.bind(this);
}

trait_select = () => {
	this.setState({ rotated: !this.state.rotated })
	this.setState({ show: !this.state.show })
	this.setState({flex: !this.state.flex})
	this.setState({color_black: !this.state.color_black})
}

handleChange(event) {
	this.setState({value: event.target.value});
}


render() {
	const direction = {
		width: "100px",
		height: "40px",
		margin: "20px",
		paddingTop: "20px",
		textAlign: "center",
		fontSize: "20px",
		color: "white",
		left: "100px"
	};
	let bgColor = this.state.color_black ? "" : "none";
	// let flex = this.state.flex ? mobileNavBar : "";
	// style={direction}
	const whiteBox = {
		backgroundColor: "black",
		width: "100%",
		height: "100%"
	}
	const black = {
		color: "black"
	}
		return (
			<div>
		  <Router>
		    <div>
		      <div class="nav-bar">
						<div class="nav-bar-align">
						 <div class="logo-outline"><Link to="/"><img alt="CamelHQ" class="onesteam-logo" src={logo} /></Link></div>
						 <ul class="nav-bar-flex font-large">
							 <li ><Link to="/residential"><div class="underline nav-bar-item" >Residential</div></Link></li>
							 <li ><Link to="/commerical"><div class="underline nav-bar-item" >Commerical</div></Link></li>
							 <li ><Link to="/about"><div class="underline nav-bar-item" >About</div></Link></li>
							 <li ><Link to="/invoice"><div class="underline nav-bar-item" >Invoice</div></Link></li>
						 </ul>
						</div>

						<div class="" onClick={this.trait_select.bind(this)}>
							<div class="nav-bar-align mobile-nav-bar">
								<div class="bar1" style={{transform: this.state.rotated ? 'rotate(-45deg) translate(-6px, 5px)' : 'none' }}></div>
								<div class="bar2" style={{display: this.state.show ? '' : 'none' }}></div>
								<div class="bar3" style={{transform: this.state.rotated ? 'rotate(45deg) translate(-6px, -5px)' : 'none' }}></div>
							</div>
							<ul class="nav-bar-tabs font-large">
								<li style={{display: this.state.color_black ? 'none' : '' }}><Link to="/residential"><div class="underline mobile-nav-bar-item">Residental</div></Link></li>
								<li style={{display: this.state.color_black ? 'none' : '' }}><Link to="/commerical"><div class="underline mobile-nav-bar-item">Commerical</div></Link></li>
								<li style={{display: this.state.color_black ? 'none' : '' }}><Link to="/about"><div class="underline mobile-nav-bar-item">About</div></Link></li>
								<li style={{display: this.state.color_black ? 'none' : '' }}><Link to="/invoice"><div class="underline mobile-nav-bar-item">Invoice</div></Link></li>
							</ul>
						</div>
		      </div>

					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/about" component={About} />
						<Route exact path="/commerical" component={Commerical} />
						<Route exact path="/residential" component={Residential} />
						<Route exact path="/invoice" component={Invoice} />
						{/* <Route path="*" component={NotFound} /> */}
					</Switch>
				</div>
		  </Router>
				<Footer />
			</div>
		);
	}
}

// const OldSchoolMenuLink = ({ label, to, activeOnlyWhenExact }) => (
//   <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
//     <div className={match ? 'active' : ''}>
//       {match ? '> ' : ''}<Link to={to}>{label}</Link>
//     </div>
//   )}/>
// )
export default App
