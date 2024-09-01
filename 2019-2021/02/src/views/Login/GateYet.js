import React, { useState, useEffect } from 'react';
import Modal from '../../components/Modal';
import logo from '../../assets/images/i_logo.svg';
import logoGif from '../../assets/images/i_logo_gateyet.gif';

const GateYet = ({history}) => {
  const [ modalOpen, setModalOpen ] = useState(false);
  const openModal = () => {
      setModalOpen(true);
  }
  const closeModal = () => {
      setModalOpen(false);
  }

	const click = () => {
		sessionStorage.setItem('gate', true);
		history.push('/home');	// 로그인 후 URL
	}

  const flipTo = (digit, n) =>{
    var current = digit.attr('data-num');
    digit.attr('data-num', n);
    digit.find('.front').attr('data-content', current);
    digit.find('.back, .under').attr('data-content', n);
    digit.find('.flap').css('display', 'block');
    setTimeout(function(){
      digit.find('.base').text(n);
      digit.find('.flap').css('display', 'none');
    }, 350);
  }
  
  const jumpTo = (digit, n) =>{
    digit.attr('data-num', n);
    digit.find('.base').text(n);
  }
  
  const updateGroup = (group, n, flip) =>{
    var digit1 = window.$('.ten'+group);
    var digit2 = window.$('.'+group);
    n = String(n);
    if(n.length == 1) n = '0'+n;
    var num1 = n.substr(0, 1);
    var num2 = n.substr(1, 1);
    if(digit1.attr('data-num') != num1){
      if(flip) flipTo(digit1, num1);
      else jumpTo(digit1, num1);
    }
    if(digit2.attr('data-num') != num2){
      if(flip) flipTo(digit2, num2);
      else jumpTo(digit2, num2);
    }
  }
  
  const setTime = (flip) =>{
    var t = new Date();
    updateGroup('hour', t.getHours(), flip);
    updateGroup('min', t.getMinutes(), flip);
    updateGroup('sec', t.getSeconds(), flip);
  }

  useEffect(() => {
    setTime(false);
    setInterval(function(){
      setTime(true);
    }, 1000);
  }, []);
  
  return (
    <div id="gateWrap" className="pre">
      <div className="gateBack">
        <div className="gateInner">
          <h1><img src={logoGif} alt="SDI on"/></h1>
          <div className="intro">
            <strong className="highlight">WE WILL <span className="mBreak">OPEN ON</span></strong>
            <em>SEPTEMBER 20, 2021. 00:00AM CDT</em>
          </div>
          <div className="gateCts">
            {/* clock */}
            <div className="clock">
              <ul>
                <li>
                  <div className="digit tenday">
                    <span className="base"></span>
                    <div className="flap over front"></div>
                    <div className="flap over back"></div>
                    <div className="flap under"></div>
                  </div>
                  <div className="digit day">
                    <span className="base"></span>
                    <div className="flap over front"></div>
                    <div className="flap over back"></div>
                    <div className="flap under"></div>
                  </div>
                  <strong>DAYS</strong>
                </li>
                <li>
                  <div className="digit tenhour">
                    <span className="base"></span>
                    <div className="flap over front"></div>
                    <div className="flap over back"></div>
                    <div className="flap under"></div>
                  </div>
                  <div className="digit hour">
                    <span className="base"></span>
                    <div className="flap over front"></div>
                    <div className="flap over back"></div>
                    <div className="flap under"></div>
                  </div>
                  <strong>Hours</strong>
                </li>
                <li>
                  <div className="digit tenmin">
                    <span className="base"></span>
                    <div className="flap over front"></div>
                    <div className="flap over back"></div>
                    <div className="flap under"></div>
                  </div>
                  <div className="digit min">
                    <span className="base"></span>
                    <div className="flap over front"></div>
                    <div className="flap over back"></div>
                    <div className="flap under"></div>
                  </div>
                  <strong>Minutes</strong>
                </li>
                <li>
                  <div className="digit tensec">
                    <span className="base"></span>
                    <div className="flap over front"></div>
                    <div className="flap over back"></div>
                    <div className="flap under"></div>
                  </div>
                  <div className="digit sec">
                    <span className="base"></span>
                    <div className="flap over front"></div>
                    <div className="flap over back"></div>
                    <div className="flap under"></div>
                  </div>
                  <strong>Seconds</strong>
                </li>
              </ul>
            </div>
            {/* //clock */}
            <p><strong>Welcome to SDI ON, Samsung SDI’s Private online platform</strong><br/>There's a pre-populated battery enclosure coming soon!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GateYet;
