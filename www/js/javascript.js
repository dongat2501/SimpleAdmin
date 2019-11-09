// function openContent(evt, tabName) {
//   var i, tabcontent, tablinks;
//   tabcontent = document.getElementsByClassName("block-page");
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = "none";
//   }
//   tablinks = document.getElementsByClassName("sidebar__item");
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].className = tablinks[i].className.replace(
//       " sidebar__item--active",
//       ""
//     );
//   }
//   document.getElementById(tabName).style.display = "block";
//   evt.currentTarget.className += " sidebar__item--active";
// }
// $(document).ready(function() {
//   $("input[type=radio][name=typeImport]").change(function() {
//     console.log(this.value);
//     if (this.value == "file") {
//       $(".file-content").show();
//       $(".data-content").hide();
//     } else if (this.value == "data") {
//          $(".file-content").hide();
//         $(".data-content").show();
//     }
//   });

//   $("input[type=radio][name=importMode]").change(function() {
//     console.log(this.value);
//     if (this.value == "overwrite") {
//       $(".import-warning-text").show();
//     } else if (this.value == "add") {
//       $(".import-warning-text").hide();
//     }
//   });

//   $("input[type=radio][name=tableMode]").change(function() {
//     console.log(this.value);
//     if (this.value == "multi-table") {
//       $(".table-warning-text").show();
//       $(".select-single-table").hide();
//     } else if (this.value == "single-table") {
//       $(".table-warning-text").hide();
//       $(".select-single-table").show();
//     }
//   });

//    $("input[type=radio][name=deleteType]").change(function() {
//      console.log(this.value);
//      if (this.value == "deteleData") {
//        $(".delete-data").show();
//        $(".delete-file").hide();
//      } else {
//        $(".delete-data").hide();
//        $(".delete-file").show();
//      }
//    });
// });
