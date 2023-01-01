console.log("start");
const mouseOver = (hotspot) => {
  document.getElementById(hotspot).style.display = "block";
  console.log("block");
};

const mouseOut = (hotspot) => {
  document.getElementById(hotspot).style.display = "none";
  console.log("none");
};
console.log("started");
