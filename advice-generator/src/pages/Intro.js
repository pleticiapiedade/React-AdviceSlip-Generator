import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import FortuneCookie from "../assets/images/fortune-cookie.png";

const IntroWrapper = styled.div`
  width: auto;
  height: 15rem;
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
    .open-right,
    .open-left {
      width: 216px;
      height: 100%;
      z-index: 2; 
      img {
        max-width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .open-left {
      transition: margin 0.4s ease-in-out 0s, width 0.4s ease-in-out 0s;
      img {
        object-position: 1rem;
        transition: object-position 0.4s ease-in-out 0s;
      }
    }
    .open-right {
      transition: width 0.4s ease-in-out 0s;
      img {
        object-position: -12.5rem;
        transition: object-position 0.4s ease-in-out 0s;
      }
    }
    .message {
      position: absolute;
      z-index: 1;
      background-color: white;
      cursor: pointer;
      left: 8rem;
      padding: 1rem 2rem;
      margin-top: 2rem;
      font-weight: 700;
      text-decoration: none;
      color: #04aa6d;
      transition: left 0.4s ease-in-out 0s;
    }
  }
  &.glowup {
    filter: saturate(1) brightness(1);
    transform: scale(1);
    transition: filter 950ms ease-in-out 0ms, transform 950ms ease-in-out 0ms;
    animation-name: glowupboy;
    animation-duration: 950ms;
    animation-timing-function: ease-in-out;
    animation-delay: 0ms;
    animation-iteration-count: infinite;
  }
  &.openCookie {
    animation-play-state: paused !important;
    .open-right,.open-left{
      width: 239px;
    }
    .open-left {
      margin-right: 10rem;
      transition: margin 0.4s ease-in-out 0s, object-position 0.4s ease-in-out 0s, width 0.4s ease-in-out 0s ;
      img{
        object-position: 2.54rem;
      }
    }
    .message {
      left: 14rem;
      transition: left 0.4s ease-in-out 0s;
    }
    .open-right {
      img {
        object-position: -13.69rem;
        transition: object-position 0.4s ease-in-out 0s;
      }
    }
  }
  @media screen and (max-width: 765px) {
    width: 330px;
    .open-left,.open-right{
      width: 50%;
      display: flex;
      align-items: center;
      img{
        height: 75%;
      }
    }
    .open-left {
      img {
        object-position: 0.3rem;
      }
    }
    .message{
      left: 4.5rem;
    }
    .open-right {
      img {
        object-position: -10rem;
      }
    }
    &.openCookie{
      .open-left,.open-right{
        width: 50%
      }
      .open-left{
        img{
          object-position: -3rem;
        }
      }
      .message{
        left:5rem;
      }
      .open-right{
        img{
          object-position: -10.3rem;
        }
      }
    }
  }
`;

function Intro() {
  const [isActive, setIsActive] = useState(true);

  const openLucky = (event) => {
    setIsActive((current) => !current);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <IntroWrapper
        className={isActive ? "glowup" : "openCookie glowup"}
        onClick={openLucky}
      >
        <div className="open-left">
          <img src={FortuneCookie} alt="" />
        </div>
        <Link to="/advice" className="message">
          Get your advice
        </Link>
        <div className="open-right">
          <img src={FortuneCookie} alt="" />
        </div>
      </IntroWrapper>
    </motion.div>
  );
}

export default Intro;
