function openMAP(){
  window.location.href = "map.html";
}

function openOPN(){
  window.location.href = "opn.html";
}

function openFLP(){
  window.location.href = "flp.html";
}

function openBBF(){
  window.location.href = "bbf.html";
}



document.addEventListener("DOMContentLoaded", function(){

  const tabs = document.querySelectorAll(".tab");
  const cards = document.querySelectorAll(".card");
  const slider = document.querySelector(".slider");

  function moveSlider(tab){
    if(!slider) return;
    slider.style.width = tab.offsetWidth + "px";
    slider.style.left = tab.offsetLeft + "px";
  }

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {

      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      moveSlider(tab);

      const filter = tab.getAttribute("data-filter");

      cards.forEach(card => {
        if(filter === "all" || card.classList.contains(filter)){
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });

    });
  });

  const activeTab = document.querySelector(".tab.active");
  if(activeTab){
    moveSlider(activeTab);
  }

});