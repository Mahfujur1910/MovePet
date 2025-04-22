// Optional: alert on add to cart
document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Item added to cart!");
  });
});
