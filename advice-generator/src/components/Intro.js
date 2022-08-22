import styled from "styled-components";

import FortuneCookie from "../assets/images/fortune-cookie.png";

const IntroWrapper = styled.div`
  width: 27rem;
  height: 15rem;

  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;

  .open-right,
  .open-left {
    img {
      max-width: 200%;
      object-fit: cover;
    }
  }

  .open-left {
    img {
      object-position: 1.2rem;
    }
  }

  .open-right {
    img {
      object-position: -12.3rem;
    }
  }

  .message {
    position: absolute;
    z-index: -1;
    background-color: white;

    left: 8rem;
    padding: 1rem 2rem;
    margin-top: 2rem;

    color: red;
  }

  @media screen and (max-width: 765px){
    width: 20rem;

    .open-left{
      img{
        object-position: 1.3rem;
      }
    }

    .open-right{
      img{
        object-position: -8.7rem;
      }
    }
  }
`;

function Intro() {
  return (
    <IntroWrapper>
      <div className="open-left">
        <img src={FortuneCookie} alt="" />
      </div>
      <div className="message">Pegue sua sorte</div>
      <div className="open-right">
        <img src={FortuneCookie} alt="" />
      </div>
    </IntroWrapper>
  );
}

export default Intro;
