document.addEventListener("DOMContentLoaded", () => {
  const dropdowns = document.querySelectorAll(".dropdownElem summary");

  //leaving first dropdown open by default
  const firstDropdownContent = dropdowns[0].nextElementSibling;
  firstDropdownContent.style.display = "block";

  dropdowns.forEach((item) => {
    item.addEventListener("click", () => {
      //closing other dropdowns
      dropdowns.forEach((otherItem) => {
        const otherContent = otherItem.nextElementSibling;
        if (otherContent.style.display === "block" && otherItem !== item) {
          otherContent.style.display = "none";
        }
      });

      const content = item.nextElementSibling;
      content.style.display =
        content.style.display === "block" ? "none" : "block";
    });
  });
});


// unmuting background music
const muteBtn = document.getElementById("mute-btn");
const bgMusic = document.getElementById("bg-music");

muteBtn.addEventListener("click", () => {
  if (bgMusic.paused) {
    bgMusic.play();
    muteBtn.textContent = "🔇";
  } else {
    bgMusic.pause();
    muteBtn.textContent = "🔊";
  }
});
