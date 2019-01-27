/*var seats = ['A10', 'A11', 'A12', 'A13', 'A14', 'A15', 'A16', 'A17', 'A18', 'A19', 'A20', 'A21',
'B10', 'B11', 'B12', 'B13', 'B14', 'B15', 'B16', 'B17', 'B18', 'B19', 'B20', 'B21',
'C10', 'C11', 'C12', 'C13', 'C14', 'C15', 'C16', 'C17', 'C18', 'C19', 'C20', 'C21',
'D10', 'D11', 'D12', 'D13', 'D14', 'D15', 'D16', 'D17', 'D18', 'D19', 'D20', 'D21',
'E10', 'E11', 'E12', 'E13', 'E14', 'E15', 'E16', 'E17', 'E18', 'E19', 'E20', 'E21',
'F10', 'F11', 'F12', 'F13', 'F14', 'F15', 'F16', 'F17', 'F18', 'F19', 'F20', 'F21'];*/

var seats = ['10A', '11A', '12A', '13A', '14A', '15A', '16A', '17A', '18A', '19A', '20A', '21A',
'10B', '11B', '12B', '13B', '14B', '15B', '16B', '17B', '18B', '19B', '20B', '21B',
'10C', '11C', '12C', '13C', '14C', '15C', '16C', '17C', '18C', '19C', '20C', '21C',
'10D', '11D', '12D', '13D', '14D', '15D', '16D', '17D', '18D', '19D', '20D', '21D',
'10E', '11E', '12E', '13E', '14E', '15E', '16E', '17E', '18E', '19E', '20E', '21E',
'10F', '11F', '12F', '13F', '14F', '15F', '16F', '17F', '18F', '19F', '20F', '21F'];


  window.setInterval(function(){
    if (seats.length > 0) {
        sittingDown();
    }
  }, Math.round(Math.random() * 7000));

function sittingDown() {


  if (seats.length > 0) {
    var seatNum = Math.floor(Math.random() * seats.length);
    changeColor(seats[seatNum]);
    seats.splice(seatNum, 1);
  }
}


function changeColor(seatName) {
  var seat = document.getElementById(seatName);
  if (seat.name === "empty") {
    seat.name = "taken";
    seat.style.background = 'red';
    seats.splice(seats.indexOf(seatName), 1);
  } else {
    seat.name = "empty";
    seat.style.background = '#44c767';
    seats.push(seatName);
  }
}
