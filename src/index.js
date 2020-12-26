import React from 'react';
import { render } from 'react-dom';
import './sections/sec1.js';
import './index.css';
import seed0 from './seed0.jpg'; 
import seed1 from './seed1.jpg'; 
import seed2 from './seed2.jpg'; 
import seed3 from './seed3.jpg'; 
import seed4 from './seed4.jpg'; 
import seed5 from './seed5.jpg'; 
import seed6 from './seed6.jpg'; 
import seed7 from './seed7.jpg';
import pup1 from './pup1.png';
import pup2 from './pup2.jpg';
import pup3 from './pup3.jpg';
import pup4 from './pup4.jpeg';
import pup5 from './pup5.jpg';
import pup6 from './pup6.jpg';
import pup7 from './pup7.jpg';
import pup8 from './pup8.jpg';
import pup9 from './pup9.jpeg';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showHide1: true,
      showHide2: false,
      showHide3: false,
      showHide4: false,
      showHide5: false,
      meter: "",
      kilometer: "",
      celsius: "",
      fahrenheit: "",
      sqfeet: "",
      sqyard: "",
      mL: "",
      L: "",
      ounce: "",
      pound: "",
      img1: "",
      img2: "",
      r: "",
      g: "",
      b: "",
      width: "3",
      height: "2",
      padding: ""
    };
  }

  handleChange1(event) {
    if (event.target.name === "meter") {
      this.setState({ meter: event.target.value });
      this.setState({ kilometer: event.target.value / 1000})
      if (event.target.value >= 100) {
        this.setState({img1: seed7});
      } else if (event.target.value >= 75 && event.target.value < 100) {
        this.setState({img1: seed6});
      } else if (event.target.value >= 50 && event.target.value < 75) {
        this.setState({img1: seed5});
      } else if (event.target.value >= 30 && event.target.value < 50) {
        this.setState({img1: seed4});
      } else if (event.target.value >= 10 && event.target.value < 30) {
        this.setState({img1: seed3});
      } else if (event.target.value >= 1 && event.target.value < 10) {
        this.setState({img1: seed2});
      } else if (event.target.value > 0 && event.target.value < 1) {
        this.setState({img1: seed1});
      } else {
        this.setState({img1: seed0});
      }
    } else if (event.target.name === "kilometer") {
      this.setState({ kilometer: event.target.value });
      this.setState({ meter: event.target.value * 1000})
    }
  }

  handleChange2(event) {
    if (event.target.name === "celsius") {
      this.setState({ celsius: event.target.value });
      this.setState({ fahrenheit: (Math.round((event.target.value * (9/5) + 32) * 100000)) / 100000})
      if (event.target.value >= 100) {
        var r = 255;
      } else if (event.target.value <= 0) {
        var r = 0;
      } else {
        var r = event.target.value * 255 / 100;
      }
      var g = 255 - (255 * (Math.abs(r-127)/128))
      var b = 255 - r;
      this.setState({r: r});
      this.setState({g: g});
      this.setState({b: b});
    } else if (event.target.name === "fahrenheit") {
      this.setState({ fahrenheit: event.target.value });
      this.setState({ celsius: (Math.round((event.target.value - 32) * (5/9) * 100000)) / 100000})
    }
  }

  handleChange3(event) {
    if (event.target.name === "sqfeet") {
      this.setState({ sqfeet: event.target.value });
      this.setState({ sqyard: (Math.round(event.target.value / 9 * 100000)) / 100000})
      if (event.target.value >= 220) {
        var h = 220;
        var w = 220 * 3.9;
      } else {
        var h = event.target.value * 1;
        var w = event.target.value * 3.9;
      }
      this.setState({height: h});
      this.setState({width: w});
    } else if (event.target.name === "sqyard") {
      this.setState({ sqyard: event.target.value });
      this.setState({ sqfeet: (Math.round(event.target.value * 9 * 100000)) / 100000})
    }
  }

  handleChange4(event) {
    if (event.target.name === "mL") {
      this.setState({ mL: event.target.value });
      this.setState({ L: event.target.value / 1000});
      if (event.target.value >= 437) {
        var num = 437;
      } else {
        var num = event.target.value;
      }
      this.setState({padding: num});
    } else if (event.target.name === "L") {
      this.setState({ L: event.target.value });
      this.setState({ mL: event.target.value * 1000})
    }
  }

  handleChange5(event) {
    if (event.target.name === "ounce") {
      this.setState({ ounce: event.target.value });
      this.setState({ pound: Math.round(event.target.value / 16 * 100000) / 100000})
      if (event.target.value >= 1400) {
        this.setState({img2: pup9});
      } else if (event.target.value >= 1000) {
        this.setState({img2: pup8});
      } else if (event.target.value >= 870) {
        this.setState({img2: pup7});
      } else if (event.target.value >= 600) {
        this.setState({img2: pup6});
      } else if (event.target.value >= 400) {
        this.setState({img2: pup5});
      } else if (event.target.value >= 250) {
        this.setState({img2: pup4});
      } else if (event.target.value > 150) {
        this.setState({img2: pup3});
      } else if (event.target.value > 60) {
        this.setState({img2: pup2});
      } else if (event.target.value > 0) {
        this.setState({img2: pup1});
      } else {
        this.setState({img2: pup1});
      }
    } else if (event.target.name === "pound") {
      this.setState({ pound: event.target.value });
      this.setState({ ounce: Math.round(event.target.value * 16 * 100000) / 100000})
    }
  }

  directions() {
    alert("1. Click on any of the 5 basic units  2. Use the left field to control the images/displays")
  }

  showHide1()
  {
    this.setState({showHide1: true});
    this.setState({showHide2: false, showHide3: false, showHide4: false, showHide5: false,})
  }

  showHide2()
  {
    this.setState({showHide2: true});
    this.setState({showHide1: false, showHide3: false, showHide4: false, showHide5: false,})
  }

  showHide3()
  {
    this.setState({showHide3: true});
    this.setState({showHide1: false, showHide2: false, showHide4: false, showHide5: false,})
  }

  showHide4()
  {
    this.setState({showHide4: true});
    this.setState({showHide1: false, showHide2: false, showHide3: false, showHide5: false,})
  }

  showHide5()
  {
    this.setState({showHide5: true});
    this.setState({showHide1: false, showHide2: false, showHide3: false, showHide4: false,})
  }

  render() {
    return (
      <div className='conversion-body'>
        <h1>Interactive Conversion Calculator</h1>
        <button className="dir" onClick={() => this.directions()}>
          ?
        </button>
        <div className="buttons">
          <button onClick={() => this.showHide1()}>
            Length
          </button>
          <button onClick={() => this.showHide2()}>
            Temperature
          </button>
          <button onClick={() => this.showHide3()}>
            Area
          </button>
          <button onClick={() => this.showHide4()}>
            Volume
          </button>
          <button onClick={() => this.showHide5()}>
            Mass
          </button>
        </div>
        <div className="bodies">
          {
            this.state.showHide1?
            <div className="section">
            <div className="boxes">
              <div className="box1">
                <p className="label">meter (m)</p>
                <input
                  className="value-input"
                  name="meter"
                  value={this.state.meter}
                  placeholder="enter length"
                  onChange={this.handleChange1.bind(this)} 
                />
                <p>kilometer (km)</p>
                <p className="result">{this.state.kilometer}</p>
              </div>
              <div className="box2">
              <p className="label">kilometer (km)</p>
                <input
                  className="value-input"
                  name="kilometer"
                  value={this.state.kilometer}
                  placeholder="enter length"
                  onChange={this.handleChange1.bind(this)} 
                />
                <p>meter (m)</p>
                <p className="result">{this.state.meter}</p>
              </div>
            </div>
            <img className="img1" src={this.state.img1} />
            </div>
            :null
          }
          {
            this.state.showHide2?
            <div className="section">
            <div className="boxes">
              <div className="box1">
                <p className="label">celsius (ºC)</p>
                <input
                  className="value-input"
                  name="celsius"
                  value={this.state.celsius}
                  placeholder="enter temperature"
                  onChange={this.handleChange2.bind(this)} 
                />
                <p>fahrenheit (ºF)</p>
                <p className="result">{this.state.fahrenheit}</p>
              </div>
              <div className="box2">
              <p className="label">fahrenheit (ºF)</p>
                <input
                  className="value-input"
                  name="fahrenheit"
                  value={this.state.fahrenheit}
                  placeholder="enter temperature"
                  onChange={this.handleChange2.bind(this)} 
                />
                <p>celsius (ºC)</p>
                <p className="result">{this.state.celsius}</p>
              </div>
            </div>
            <div style={{backgroundColor: "rgb("+this.state.r+","+this.state.g+","+this.state.b+")"}} className = "therm"></div>
            </div>
            :null
          }
          {
            this.state.showHide3?
            <div className="section">
            <div style={{height: this.state.height, width: this.state.width}} className="spread"></div>
            <div className="boxes">
              <div className="box1">
                <p className="label">square foot (ft^2)</p>
                <input
                  className="value-input"
                  name="sqfeet"
                  value={this.state.sqfeet}
                  placeholder="enter area"
                  onChange={this.handleChange3.bind(this)} 
                />
                <p>square yard (yd^2)</p>
                <p className="result">{this.state.sqyard}</p>
              </div>
              <div className="box2">
              <p className="label">square yard (yd^2)</p>
                <input
                  className="value-input"
                  name="sqyard"
                  value={this.state.sqyard}
                  placeholder="enter area"
                  onChange={this.handleChange3.bind(this)} 
                />
                <p>square foot (ft^2)</p>
                <p className="result">{this.state.sqfeet}</p>
              </div>
            </div>
            </div>
            :null
          }
          {
            this.state.showHide4?
            <div className="section">
            <div className="boxes">
              <div className="box1">
                <p className="label">milliliter (mL)</p>
                <input
                  className="value-input"
                  name="mL"
                  value={this.state.mL}
                  placeholder="enter volume"
                  onChange={this.handleChange4.bind(this)} 
                />
                <p>liter (L)</p>
                <p className="result">{this.state.L}</p>
              </div>
              <div className="box2">
              <p className="label">liter (L)</p>
                <input
                  className="value-input"
                  name="L"
                  value={this.state.L}
                  placeholder="enter volume"
                  onChange={this.handleChange4.bind(this)} 
                />
                <p>milliliter (mL)</p>
                <p className="result">{this.state.mL}</p>
              </div>
            </div>
            <div style={{paddingBottom: this.state.padding + "px"}} className="water"></div>
            </div>
            :null
          }
          {
            this.state.showHide5?
            <div className="section">
            <div className="boxes">
              <div className="box1">
                <p className="label">ounce (oz)</p>
                <input
                  className="value-input"
                  name="ounce"
                  value={this.state.ounce}
                  placeholder="enter mass"
                  onChange={this.handleChange5.bind(this)} 
                />
                <p>pound (lb)</p>
                <p className="result">{this.state.pound}</p>
              </div>
              <div className="box2">
              <p className="label">pound (lb)</p>
                <input
                  className="value-input"
                  name="pound"
                  value={this.state.pound}
                  placeholder="enter mass"
                  onChange={this.handleChange5.bind(this)} 
                />
                <p>ounce (oz)</p>
                <p className="result">{this.state.ounce}</p>
              </div>
            </div>
            <img className="img2" src={this.state.img2} />
            </div>
            :null
          }
        </div>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));
