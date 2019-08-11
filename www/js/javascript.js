
function openContent(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("block-page");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("sidebar__item");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(
      " sidebar__item--active",
      ""
    );
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " sidebar__item--active";
}