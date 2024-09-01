import React, { useState } from 'react';
import Modal from '../../components/Modal';
import logo from '../../assets/images/i_logo.svg';
import ImgGateEnd from '../../assets/images/img_gateEnd.png';

const GateEnd = ({history}) => {
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

  return (
    <div id="gateWrap" className="end">
      <div className="gateBack">
        <div className="gateInner">
          <h1><img src={logo} alt="SDI on"/></h1>
          <div className="intro">
            <p>Thank you for <strong className="point">visiting SDI On.</strong></p>
            <strong className="highlight">WE HOPE TO<br/>SEE YOU SOON!</strong>
          </div>
          <div className="gateCts">
            <img src={ImgGateEnd} alt="Thank You"/>
            <p>asdasdatteasdasd</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GateEnd;
