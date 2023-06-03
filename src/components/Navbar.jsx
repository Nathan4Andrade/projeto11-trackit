import styled from "styled-components";
import { Context } from "../contexts/Context";
import { useContext } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const { image } = useContext(Context);

  return (
    <NavContainer data-test="header">
      <Link to={`/hoje`}>
        <Logo>TrackIt</Logo>
      </Link>

      <ProfilePicture src={image} data-test="avatar" />
    </NavContainer>
  );
}

export default Navbar;

const NavContainer = styled.header`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  a {
    text-decoration: none;
  }
`;

const Logo = styled.a`
  font-family: "Playball";
  font-style: normal;
  font-weight: 400;
  font-size: 39px;
  line-height: 49px;
  color: #ffffff;
  margin-left: 18px;
`;

const ProfilePicture = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-right: 18px;
`;
