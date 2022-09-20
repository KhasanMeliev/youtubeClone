import styled from "styled-components";

export const NavbarWrapper = styled.div`
  width: 100%;
  height: 60px;
  background-color: #212121;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  svg {
    margin-left: 10px;
    font-size: 38px;
    color: red;
  }

  p {
    font-size: 22px;
    color: white;
    margin-left: 2px;
  }
`;
export const ProfileItems = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0px 15px;
  gap: 15px;

  svg {
    font-size: 25px;
    font-weight: 400;
    color: white;
  }
`;

export const Box = styled.div`
  width: 30px;
  height: 30px;
  background-image: url("https://avatars.githubusercontent.com/khasanmeliev");
  background-size: cover;
  background-repeat: no-repeat;

  border-radius: 50%;
`;
