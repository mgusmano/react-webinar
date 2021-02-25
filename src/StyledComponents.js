import styled from "styled-components";

export const Page = styled.div`
  height:100%;
  justify-content:space-evenly;
  border:1px solid lightgray;
`;

export const Title = styled.div`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  color: white;
  font-size: 32px;
  background: #3f51b5;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  bottom: 0;
`;

export const Row = styled.div`
  display:flex;
  flex-direction:row;
  xpadding: 0 0 0 10px;
  justify-content:space-evenly;
  padding:10px;
  border-bottom:0px solid lightgray;
`;

export const Footer = styled.div`
background: lightgray;
position: absolute;
right: 0;
bottom: 0;
margin: 30px;
`;
