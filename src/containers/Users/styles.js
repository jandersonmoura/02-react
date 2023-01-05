import styled from "styled-components";


import Background from "../../assets/background2.png"

export const Container = styled.div`
  background: url("${Background}");
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  height:100vh;
  min-height: 100vh;
`;
export const Image = styled.img`
  margin-top: 30px;
`;
    
export const Button = styled.button`
  background:transparent;border-radius: 14px;border:1px solid #ffffff;outline:none;cursor:pointer;
  width: 342px;height:74px;
  font-style: normal;font-weight: 700;font-size: 17px;line-height: 28px;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap:20px;
  margin-top: 120px;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.4;
  }
  img {
    transform: rotate(180deg);
  }

`;

export const User = styled.li`
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;

  width: 342px; height: 58px;outline:none;border:none;
  display: flex;
  justify-content: space-around;
  align-items: center;

  p{
    font-style: normal;font-weight:normal;font-size:20px;line-height:28px;color:#ffffff;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }

`
