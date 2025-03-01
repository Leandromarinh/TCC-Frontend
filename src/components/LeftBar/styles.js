import styled from "styled-components";

import colors from "../../theme/colors";

export const Container = styled.div`
  width: 19vw;
  height: 100vh;
  background-color: ${colors.green};

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Top = styled.div`
  height: 19vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileIcon = styled.img`
  width: 94px;
  margin-top: 5px;
`;

export const NameText = styled.p`
  font-size: 32px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: bold;
  color: #fff;
  margin-top: 0;
`;

export const Mid = styled.div`
  width: 19vw;
  height: 38vh;

  margin-top: 10vh;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
`;

export const PageButton = styled.button`
  font-size: 23px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: #fff;
  border: none;
  background-color: ${colors.green};
  padding-left: 1vw;
  font-weight: ${(props) => (props.active ? "bolder" : "500")};

  &:hover {
    text-decoration: ${(props) => (props.active ? "none" : "underline")};
    cursor: ${(props) => (props.active ? "default" : "pointer")};
  }
`;

export const Bottom = styled.div`
  width: 19vw;
  position: absolute;
  bottom: 10px;
`;

export const LogoutButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding-left: 1vw;

  border: none;
  background-color: ${colors.green};

  font-size: 20px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: #000;
  border: none;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
export const Logoutimg = styled.img`
  width: 1.8vw;
  margin-right: 10px;
`;
