import { Link } from "react-router-dom";
import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useContext } from "react";
import { Context } from "../contexts/Context";
import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { useEffect } from "react";

function Footer() {
  const {
    token,
    doneList,
    setTodayList,
    setDoneList,
    todayList,
    percentage,
    setPercentage,
  } = useContext(Context);

  setPercentage(
    Math.floor((Number(doneList.length) / Number(todayList.length)) * 100)
  );

  return (
    <FooterContainer>
      <Option>
        <Link to="/habitos">Hábitos</Link>
      </Option>
      <ProgressBar>
        <Link to="/hoje">
          <CircularProgressbar
            value={percentage}
            text={`Hoje`}
            background
            backgroundPadding={6}
            styles={buildStyles({
              backgroundColor: "#52B6FF",
              textColor: "#fff",
              pathColor: "#fff",
              trailColor: "transparent",
            })}></CircularProgressbar>
        </Link>
      </ProgressBar>
      <Option>
        <Link to="/historico">Histórico</Link>
      </Option>
    </FooterContainer>
  );
}

export default Footer;

export const ProgressBar = styled.div`
  width: 91px;
  height: 91px;
  position: absolute;
  bottom: 10px;
  right: 50%;
  left: 50%;
  transform: translate(-50%);
  background: #52b6ff;
  margin: 0;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    color: #ffffff;
  }
`;

const Option = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 18px;

  a {
    color: #52b6ff;
    font-size: 18px;
  }

  :hover {
    cursor: pointer;
    text-decoration-line: underline;
  }
`;
const FooterContainer = styled.div`
  width: 100%;
  max-width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  z-index: 1;

  a {
    text-decoration: none;
  }

  background-color: #ffffff;
  flex-direction: row;
`;
