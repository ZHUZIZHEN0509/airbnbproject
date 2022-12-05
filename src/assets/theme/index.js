const Theme = {
  color: {
    primaryColor: "#FF385C",
    secondColor: "#DDDDDD",
  },
  text: {
    primaryColor: "#484848",
    secondColor: "#222222",
    threeColor: "#767676",
  },
  bgColor: {
    primaryColor: "#008489",
  },
  size: {
    oneSize: "16px",
    twoSize: "12px",
  },
  //boxshadow公用样式混入
  mixin: {
    boxShadow: `
    transition: box-shadow 200ms ease;
    &:hover {
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
    }
    `,
  },
};

export default Theme;
