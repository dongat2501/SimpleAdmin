
function changeIconHeader() {
  var element = document.body;
  if (element.classList) {
    element.classList.toggle("header__icon--close");
  } else {
    // For IE9
    var classes = element.className.split(" ");
    var i = classes.indexOf("header__icon--close");

    if (i >= 0)
      classes.splice(i, 1);
    else
      classes.push("header__icon--close");
    element.className = classes.join(" ");
  }
}

function openContent(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" tab__item--active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " tab__item--active";
}