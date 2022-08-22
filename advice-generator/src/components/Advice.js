import React, { useState, useEffect } from "react";
import styled from "styled-components";
import LuckyButton from "../assets/images/cookie.svg";

const AdviceWrapper = styled.div`
  position: relative;

  background-color: rgba(66,93,120,0.5);
  max-width: 27rem;
  min-width: 22rem;
  min-height: 15rem;
  padding: 2rem;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 2rem;

  .advice-title {
    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;

    color: #FFD15D;
  }

  .advice-text {
    font-size: 1.5rem;
    text-align: center;
  }

  .spacement {
    background-color: #1c2541;
    width: 98%;
    height: 1px;
  }

  button {
    position: absolute;
    background-color: transparent;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    border: none;
    bottom: -25px;

    cursor: pointer;

    transition: transform 0.4s ease-in-out 0s, filter 0.4s ease-in-out 0s;

    &:hover {
      transform: rotate(-180deg) scale(1.1);
      filter: saturate(1.1);
      transition: transform 0.4s ease-in-out 0s, filter 0.4s ease-in-out 0s;
      tra
    }
  }

  @media screen and (max-width: 400px){
    max-width: 19rem;
    min-width: 19rem;
    min-height: 20rem;
  }
`;

function Advice() {
  const [text, setText] = useState([]);

  const rand = (min, max) => {
    return (
      (Math.floor(Math.pow(10, 14) * Math.random() * Math.random()) %
        (max - min + 1)) +
      min
    );
  };

  const fetchings = async (id) => {
    const response = await fetch(`https://api.adviceslip.com/advice/${id}`);
    const data = await response.json();

    return data;
  };

  const getAdvice = async () => {
    let slipId = rand(0, 280);
    let data = await fetchings(slipId);

    if (data.slip) {
      setText(data.slip);
      console.log(text);
    } else {
      getAdvice();
    }
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <AdviceWrapper>
      <span className="advice-title">Advice # {text.id}</span>
      <div className="advice-text">
        <p>" {text.advice} "</p>
      </div>
      <div className="spacement"></div>

      <button onClick={getAdvice}>
        <img src={LuckyButton} alt="Get your advice" />
      </button>
    </AdviceWrapper>
  );
}

export default Advice;
