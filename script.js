var dropdownBtn = document.getElementById('drop-btn');
var showMoreLink=document.getElementById('showMoreLink');
var sideActivity=document.getElementById('sideBarActivity')

dropdownBtn.onclick = function () {
    document.getElementById("toggle").classList.toggle("show-profile-menu");
};

showMoreLink.onclick=function(){
   sideActivity.classList.toggle('open-activity')

   if(sideActivity.classList.contains('open-activity')){
    showMoreLink.innerHTML="Show less <b>-</b>";
   }else{
    showMoreLink.innerHTML="Show more <b>+</b>";
   }
}
