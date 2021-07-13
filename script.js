let isOpenMoreNav=false;
let moreNavOverlay=document.createElement("div");
moreNavOverlay.id= "more-nav-overlay";
function openMoreNav(){
    isOpenMoreNav= !isOpenMoreNav;
    if (isOpenMoreNav) {
        document.getElementById("up-arrow").style.display="block";
        document.getElementById("first-more-nav").style.animation="firstMoreNavShow.3s forwards";
        document.getElementById("moreNav").style.animation="openMoreNav .2s forwards";
    }else{
        document.getElementById("up-arrow").style.display="none";
        document.getElementById("moreNav").style.animation="closeMoreNav .3s forwards";
        // Append Overlay
        document.getElementById("moreNav").prepend(moreNavOverlay);
        // Reset Styling After Animation
        document.getElementById("moreNav").addEventListener("animationend",()=>{
            document.getElementById("first-more-nav").style.animation= "";
            // Remove Overlay
            document.getElementById("more-nav-overlay").remove();
        });
    }
}
// Handle First Column
function changeFirstCol(eventTarget) {
    //Loop through selected
    document.querySelectorAll("#first-more-nav p").forEach(result => {
        result.classList.remove("selectedFirstColumn");
    });
    // Change Selected 
    eventTarget.classList.add("selectedFirstColumn");
   if(eventTarget.id === "first-col-2" ){ 
    document.querySelectorAll("#second-more-nav p").forEach(result => {
        result.style.animation = "secondMoreNavShow .2s forwards"
    });

   }
}

function changeSecondCol(eventTarget) {
    //Loop through selected
    document.querySelectorAll("#second-more-nav p").forEach(result => {
        result.classList.remove("selectedSecondColumn");
    });
    // Change Selected 
    eventTarget.classList.add("selectedSecondColumn");

if(eventTarget.id === "second-col-1" ){
    document.getElementById("third-more-nav").innerHTML =`<div class="third-nav-col">
    <div class="third-nav-header">New Releases</div>
    <p>Shoes</p>
          <p>Clothes</p>
          <p>Caps</p>
          <p>Trousers</p>
    <div class="third-nav-header">Summer Trends</div>
    <p>Shoes</p>
          <p>Clothes</p>
          <p>Caps</p>
          <p>Trousers</p>
  </div>
  <div class="third-nav-col"  style="margin-top":40px">
    <div class="third-nav-header">National Team Collection</div>
    <p>Shoes</p>
    <p>Clothes</p>
    <p>Caps</p>
    <p>Trousers</p>
    <div class="third-nav-header">Nike Essential</div>
    <p>Shoes</p>
    <p>Clothes</p>
     <p>Caps</p>
    <p>Trousers</p>
  </div>`;
}else if(eventTarget.id === "second-col-2"){
document.getElementById("third-more-nav").innerHTML =`<div class="third-nav-col">
<div class="third-nav-header">New Releases</div>
<p>Shoes</p>
<p>Clothes</p>
<p>Caps</p>
<p>Trousers</p>
</div>
<div class="third-nav-col" style="margin-top":40px">
<div class="third-nav-header">National Team Collection</div>
<p>Shoes</p>
<p>Clothes</p>
<p>Caps</p>
<p>Trousers</p>
<div class="third-nav-header">Nike Essential</div>
<p>Shoes</p>
<p>Clothes</p>
<p>Caps</p>
<p>Trousers</p>
</div>`;
}
}