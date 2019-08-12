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
$(document).ready(function() {
  $("input[type=radio][name=typeImport]").change(function() {
    console.log(this.value);
    if (this.value == "file") {
      $(".file-content").removeClass('hidden');
      $(".data-content").addClass('hidden');
    } else if (this.value == "data") {
         $(".file-content").addClass("hidden");
        $(".data-content").removeClass("hidden");
    }
  });

  $("input[type=radio][name=importMode]").change(function() {
    console.log(this.value);
    if (this.value == "overwrite") {
      $(".import-warning-text").removeClass("hidden");
    } else if (this.value == "add") {
      $(".import-warning-text").addClass("hidden");
    }
  });

  $("input[type=radio][name=tableMode]").change(function() {
    console.log(this.value);
    if (this.value == "multi-table") {
      $(".table-warning-text").removeClass("hidden");
      $(".select-single-table").addClass("hidden");
    } else if (this.value == "single-table") {
      $(".table-warning-text").addClass("hidden");
      $(".select-single-table").removeClass("hidden");
    }
  });

   $("input[type=radio][name=deleteType]").change(function() {
     console.log(this.value);
     if (this.value == "deteleData") {
       $(".delete-data").removeClass("hidden");
       $(".delete-file").addClass("hidden");
     } else {
       $(".delete-data").addClass("hidden");
       $(".delete-file").removeClass("hidden");
     }
   });
});
