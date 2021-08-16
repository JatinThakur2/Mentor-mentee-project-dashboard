function toggleNav() {
  var status = parseInt(document.getElementById("mySidenav").style.width);
  if (status > 0) {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  } else {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
}
function guide1() {
  document.getElementById("section1").style.display = "initial";
  document.getElementById("section2").style.display = "none";
  document.getElementById("section3").style.display = "none";
  document.getElementById("section4").style.display = "none";
}

function guide2() {
  document.getElementById("section1").style.display = "none";
  document.getElementById("section2").style.display = "initial";
  document.getElementById("section3").style.display = "none";
  document.getElementById("section4").style.display = "none";
}

function guide3() {
  document.getElementById("section1").style.display = "none";
  document.getElementById("section2").style.display = "none";
  document.getElementById("section3").style.display = "initial";
  document.getElementById("section4").style.display = "none";
}

function guide4() {
  document.getElementById("section1").style.display = "none";
  document.getElementById("section2").style.display = "none";
  document.getElementById("section3").style.display = "none";
  document.getElementById("section4").style.display = "initial";
}
function Export() {
  $("#tblCustomers").table2excel({
    filename: "Table.xls"
  });
}
