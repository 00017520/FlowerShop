document.addEventListener("DOMContentLoaded", () => {
  const stars = document.querySelectorAll(".star");
  const nameInput = document.getElementById("name");
  const feedbackTextarea = document.getElementById("feedback");
  const options = document.querySelectorAll(".options input");
  const submitButton = document.getElementById("submit");
  const reviewsSection = document.getElementById("allReviews");
  let selectedRating = 0;

  stars.forEach((star, index) => {
    star.addEventListener("click", () => {
      selectedRating = index + 1;
      updateStars(selectedRating);
      playTwinkleSound();
    });

    star.addEventListener("mouseover", () => updateStars(index + 1));
    star.addEventListener("mouseout", () => updateStars(selectedRating));
  });

  const updateStars = (count) => {
    stars.forEach((star, index) => {
      star.classList.toggle("selected", index < count);
    });
  };

  //tinckling sound
  const playTwinkleSound = () => {
    const audio = new Audio("../assets/meow.mp3");
    audio.play();
  };

  options.forEach((option) => {
    option.addEventListener("change", () => {
      const selectedOptions = Array.from(options)
        .filter((opt) => opt.checked)
        .map((opt) => opt.value);

      feedbackTextarea.value = selectedOptions.length
        ? `I loved ${selectedOptions.join(", ")}`
        : "";
    });
  });

  //submiting
  submitButton.addEventListener("click", (e) => {
    e.preventDefault(); 

    const customerName = nameInput.value.trim();
    const feedback = feedbackTextarea.value.trim();

    if (!selectedRating) {
      alert("Please select a rating.");
      return;
    }

    if (!customerName) {
      alert("Please enter your name.");
      return;
    }

    //create reviev
    const newReview = document.createElement("div");
    newReview.classList.add("review");
    newReview.innerHTML = `
      <strong>${"🌟".repeat(selectedRating)}</strong>
      <p id="customer" ><strong>${customerName}</strong></p> 
      <p>"${feedback || "No additional feedback provided."}"</p>
    `;


    //add new review
    reviewsSection.appendChild(newReview);

    const reviews = reviewsSection.querySelectorAll(".review");
    if (reviews.length > 3){
      reviewsSection.classList.add("scrollable");
    }

    //reset form
    document.querySelector("#rateUs form").reset();
    updateStars(0); 
    selectedRating = 0;   
  });
});
