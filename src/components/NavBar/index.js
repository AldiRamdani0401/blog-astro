  // Handlers
  function closeCaution() {
    const element = document.getElementById("caution");
    element.remove();
    if (localStorage.caution === "active") {
      localStorage.caution = "disable";
    } else {
      localStorage.caution = "active";
    }
  }

  // Activation Caution Check
  function checkCaution() {
    const element = document.getElementById("caution");
    if (localStorage.caution === "disable") {
      element.remove();
    }
  }

  window.addEventListener("DOMContentLoaded", () => {checkCaution()});