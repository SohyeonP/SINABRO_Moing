function openTab(evt, tabName) {
  var i, con, tabmenu;
  con = document.getElementsByClassName("con");
  for (i = 0; i < con.length; i++) {
    con[i].style.display = "none";
  }
  tabmenu = document.getElementsByClassName("tabmenu");
  for (i = 0; i < con.length; i++) {
    tabmenu[i].className = tabmenu[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  event.currentTarget.className += " active";
}

function subTab(evt, subname) {
  var i, sub, subtab;
  sub = document.getElementsByClassName("sub");
  for (i = 0; i < sub.length; i++) {
    sub[i].style.display = "none";
  }
  subtab = document.getElementsByClassName("subtab");
  for (i = 0; i < sub.length; i++) {
    subtab[i].className = subtab[i].className.replace(" on", "");
  }
  document.getElementById(subname).style.display = "block";
  event.currentTarget.className += " on";
}
