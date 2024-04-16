// my certificate

document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab");

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      tabs.forEach((t) => t.classList.remove("active-link"));

      this.classList.add("active-link");

      const certificate = document.querySelector(".cert-cont");
      const idAttribute = tab.getAttribute("id");

      if (idAttribute == "one") {
        certificate.style.backgroundImage = "url(images/certi.png)";
      } else if (idAttribute == "two") {
        certificate.style.backgroundImage = "url(images/mern.png)";
      } else {
        certificate.style.backgroundImage = "url(images/js1.png)";
      }

      tab.classList.add("active-link");
    });
  });
});
