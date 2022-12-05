import styled from "styled-components";

export const DetailPictureWrapper = styled.div`
  height: 600px;
  display: flex;
  .pictureLeft {
    width: 50%;
    position: relative;
    cursor: pointer;
    border: 1px solid #000;
    img {
      position: relative;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease-in;
    }
    &:hover {
      img {
        transform: scale(1.1);
      }
    }
  }
  .pictureRight {
    width: 50%;
    display: flex;
    flex-wrap: wrap;
    .item {
      flex-shrink: 0;
      width: 50%;
      height: 50%;
      position: relative;
      cursor: pointer;
      border: 1px solid #000;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: relative;
        transition: transform 0.3s ease-in;
      }
      &:hover {
        img {
          transform: scale(1.1);
        }
      }
    }
  }

  .cover {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.8;
    background-color: rgba(0, 0, 0, 0.2);
    transition: opacity 200ms ease;
    &:hover {
      opacity: 0;
    }
  }
`;
