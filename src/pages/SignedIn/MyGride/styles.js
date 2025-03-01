import styled from "styled-components";

import colors from "../../../theme/colors";

export const Screen = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;

  background-color: #fff;

  display: flex;
  flex-direction: row;
`;

export const Container = styled.div`
  width: 81vw;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding-left: 7vw;
  padding-bottom: 50px;

  overflow: auto;
`;

export const EditButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;

  width: 8vw;
  height: 5vh;

  margin-top: -3vh;
  margin-left: 35vw;

  background-color: ${colors.green};
  border: none;
  border-radius: 10px;
  opacity: 90%;

  font-size: 1.5em;
  color: #fff;

  &:hover {
    cursor: ${(props) => (props.disabled ? "default" : "pointer")};
    opacity: ${(props) => (props.disabled ? "90%" : "100%")};
  }
`;

export const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;

  width: 69px;
  height: 69px;
  margin-top: 30px;

  background-color: ${colors.green};

  border-radius: 100%;
  border: none;
  opacity: 90%;

  &:hover {
    cursor: ${(props) => (props.disabled ? "default" : "pointer")};
    opacity: ${(props) => (props.disabled ? "90%" : "100%")};
  }

  margin-right: ${(props) => props.marginRight};
`;

export const Image = styled.img`
  width: 30px;
`;

export const PeriodInput = styled.input`
  font-size: 24px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin-top: 1px;
  border: none;
`;

export const Text2 = styled.p`
  font-size: 24px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin-top: 35vh;
  font-weight: 600;

  align-self: center;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 9vw);
  grid-template-rows: repeat(18, 55px);
  gap: 1px;
  border: 1px solid #ddd;
  align-self: center;
  margin-top: 10vh;
  margin-left: -7vw;
`;

export const Cell = styled.div`
  border: 1px solid #ddd;
  position: relative;

  display: flex;
  flex-direction: row;
`;

export const NewCell = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.color};
  font-weight: 700;
  font-size: 13px;

  word-break: break-word;
`;

export const CellText = styled.p`
  font-size: 14px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 600;

  align-self: center;
`;

export const TimeLabel = styled.div`
  grid-column: 1 / span 1;
  grid-row: ${(props) => props.row};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
`;

export const WeekLabel = styled.div`
  grid-row: 1 / span 1;
  grid-column: ${(props) => props.column};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
`;
