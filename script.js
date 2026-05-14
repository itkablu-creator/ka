const deviceList = [
  "PLAYSTATION",
  "XBOX",
  "NINTENDO SWITCH",
  "PLĂCI DE BAZĂ",
  "LAPTOPURI",
  "INSTALARE WINDOWS",
  "INSTALARE OFFICE",
  "RECUPERĂRI DATE",
  "CONFIGURAȚIE PC",
  "ASAMBLARE PC",
  "SERVICII MENTENANȚĂ",
  "TROTINETE"
];
const deviceElement = document.getElementById("device");

let currentIndex = 0;
function changeDeviceText(newText) {
  // Măsoară lățimea pentru noul text
  const temp = document.createElement("span");
  temp.style.visibility = "hidden";
  temp.style.position = "absolute";
  temp.style.font = window.getComputedStyle(device).font;
  temp.style.padding = window.getComputedStyle(device).padding;
  temp.textContent = newText;
  document.body.appendChild(temp);
  const newWidth = temp.offsetWidth;
  document.body.removeChild(temp);

  // Setează width-ul actual
  device.style.width = device.offsetWidth + "px";
  // Trigger reflow
  device.offsetWidth;

  // Setează width-ul la noua valoare (animat)
  device.style.width = newWidth + "px";

  // După tranziție, schimbă textul și resetează width-ul
  setTimeout(() => {
    device.textContent = newText;
    device.style.width = "";
  }, 400); // să fie puțin mai mare decât transition-ul din CSS
}

setInterval(() => {
  currentIndex = (currentIndex + 1) % deviceList.length;
  changeDeviceText(deviceList[currentIndex]);
}, 2000);
