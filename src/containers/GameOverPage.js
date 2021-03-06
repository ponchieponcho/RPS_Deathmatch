import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import {connect} from 'react-redux';

class GameOverPage extends Component {

componentDidMount() {
  
}

masterReset() {
  this.props.socket.emit('master-reset')
  this.props.socket.emit('game-end', false)
}

 render() {
  return (
    <div className="gameover-page-container">
    <div className="winner-icon-wrapper">
      <svg className="winner-icon" id="trophie" xmlns="http://www.w3.org/2000/svg"  xlinkHref="http://www.w3.org/1999/xlink" viewBox="0 0 521.45 700.03">
        <defs>
        <filter id="75b73330-6db2-4c3c-be63-97937d7d1c2a" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feColorMatrix values="-1 0 0 0 1 0 -1 0 0 1 0 0 -1 0 1 0 0 0 1 0"/>
        </filter>
        <mask id="a12d1629-865b-41b8-925a-665a4a460417" x="117.73" y="116.17" width="289" height="57" maskUnits="userSpaceOnUse">
        <g filter={`url(#75b73330-6db2-4c3c-be63-97937d7d1c2a)`}>
        <image width="289" height="57" transform="translate(117.73 116.17)" xlinkHref="data:image/png;base64,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"/>
        </g>
        </mask>
        </defs>
        <title>WINNER</title>
        <g isolation="isolate">
        <g id="9d29897b-7c02-47e5-b978-7a44d26c8a76" data-name="Layer 2">
        <g id="888e9769-9b7f-4992-ac6d-f930055817bd" data-name="OBJECTS">
        <path d="M363.17,302.07C496.24,188.92,536.24,83.9,516.84,30,510.17,11.46,496.12.24,479.26,0a70.61,70.61,0,0,0-51.8,20.92c-19.94,19.66-31.84,52.29-31.84,87.29H424c0-27.15,9-52.86,23.39-67.09a43.06,43.06,0,0,1,31.48-12.75c6,.09,9.45,6.16,11.27,11.24,13,36.08-15,130-145.36,240.83Z" fill="#f4cc6a" />
        <path d="M158.29,302.07l18.38-21.62C46.32,169.62,18.33,75.7,31.31,39.62c1.83-5.08,5.27-11.15,11.27-11.24A42.89,42.89,0,0,1,74.07,41.13C88.5,55.36,97.46,81.07,97.46,108.22h28.38c0-35-11.91-67.63-31.84-87.29A70.7,70.7,0,0,0,42.19,0C25.34.24,11.29,11.46,4.61,30-14.78,83.9,25.22,188.92,158.29,302.07Z" fill="#f4cc6a" />
        <path d="M217.67,379.26A171,171,0,0,1,200.8,453.6H320.65a172.3,172.3,0,0,1,0-148.67H200.8A170.89,170.89,0,0,1,217.67,379.26Z" fill="#e1ad3d"/>
        <path d="M423.78,40.78V173.84a163,163,0,1,1-326.1,0V40.78Z" fill="#f4cc6a"/>
        <path d="M169.88,519.84a90.85,90.85,0,0,1,181.69,0Z" fill="#e1ad3d"/>
        <rect x="54.73" y="649.83" width="412" height="50.2" transform="translate(521.46 1349.85) rotate(180)" fill="#c68f30"/>
        <rect x="98.74" y="501.03" width="323.98" height="148.8" transform="translate(521.46 1150.85) rotate(180)" fill="#f4cc6a"/>
        <path d="M148,628.93h225.4c0-12.6,12.45-22.81,27.8-22.81V544.73c-15.35,0-27.8-10.21-27.8-22.8H148c0,12.59-12.45,22.8-27.8,22.8v61.39C135.58,606.12,148,616.33,148,628.93Z" fill="#c68f30">
        </path>
        <text transform="translate(130 590)" fontSize="250%" fill="#fff" fontFamily="QuicksandBold-Regular, Quicksand" fontWeight="700">
            <tspan className="winner-name">{this.props.winner}</tspan>
        </text>
        <text transform="translate(116.01 170.17)" fontSize="72px" fill="#fff" fontFamily="QuicksandBold-Regular, Quicksand" fontWeight="700">
        <tspan letterSpacing="-0.04998779296875em">W</tspan>
        <tspan x="75.74" y="0">I</tspan>
        <tspan x="97.7" y="0" letterSpacing="-0.03299289279513889em">N</tspan>
        <tspan x="150.84" y="0" letterSpacing="-0.06498209635416667em">N</tspan>
        <tspan x="201.67" y="0" letterSpacing="0.019985622829861112em">E</tspan>
        <tspan x="245.81" y="0">R</tspan></text>
        <g mask="url(#a12d1629-865b-41b8-925a-665a4a460417)">
        </g></g></g></g>
      </svg>
    </div>
    <div className="win-footer-placeholder"></div>
    <div className="win-footer" onClick={() => this.masterReset()}>
        <span>RESTART</span>
        <i className="fas fa-angle-right"></i>
      </div>
    </div>
  );
}
}

let mapStateToProps = (state) => { 
  return {
    winner: state.winner,
    socket: state.socket
    };
}

let mapDispatchToProps = (dispatch) => {
  return {dispatch:dispatch} 
}


export default connect(mapStateToProps,mapDispatchToProps)(withRouter(GameOverPage));

