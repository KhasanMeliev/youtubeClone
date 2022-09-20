import styled from "styled-components";

export const HomeWrapper = styled.div`
  width: 100%;
  height: 500px;
  background-color: #212121;
  border-top: 1px solid white;
`;
export const Explore = styled.div`
  width: 100%;
  height: 55px;
  background-color: #212121;
  border-bottom: 1px solid white;
  display: flex;
  align-items: center;
  overflow: scroll;
  gap: 10px;

  &::-webkit-scrollbar {
    display: none;
  }
`;
export const ExploreButton = styled.button`
  width: 120px;
  height: 35px;
  background-color: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin-left: 10px;
  border-radius: 2px;

  svg {
    font-size: 25px;
  }
`;

export const HorizontalLine = styled.hr`
  width: 1px;
  height: 30px;
  background-color: white;
`;

export const Button = styled.button`
  height: 35px;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  border: none;
  border-radius: 20px;
  font-size: 17px;
`;

export const VideosWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: red;
`;

export const Video = styled.div`
  width: 100%;
  height: 250px;
  background-color: blue;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 100%;
`;

export const Description = styled.div`
  width: 100%;
  height: 100%;
  background-color: blue;
  display: flex;
`;

export const Profile = styled.div`
  width: 20%;
  height: 100%;
  background-color: green;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Box = styled.div`
  width: 45px;
  height: 45px;
  background-color: yellow;
`;

export const Texts = styled.div`
  width: 80%;
  height: 100%;
  background-color: antiquewhite;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 13px;
  padding: 0px 16px;
  text-align: left;
  h4 {
    margin: 0;
  }
  p {
    margin: 0;
  }
`;
