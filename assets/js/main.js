"use strict";

/* ======= Header animation ======= */
const header = document.getElementById("header");

window.onload = function () {
  headerAnimation();
};

window.onresize = function () {
  headerAnimation();
};

window.onscroll = function () {
  headerAnimation();
};

function headerAnimation() {
  var scrollTop = window.scrollY;

  if (scrollTop > 100) {
    header.classList.add("header-shrink");
  } else {
    header.classList.remove("header-shrink");
  }
}

/* ===== Page Loader ====== */
document.addEventListener("DOMContentLoaded", function () {
  const loader = document.getElementById("loader");
  if (loader) {
    loader.style.display = "none";
  }
});

/* ===== Nav Link & Page Banner ====== */
document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll(".nav-link");
  const dropdownItems = document.querySelectorAll(".dropdown-item");

  if (currentPage === "index.html") {
    return;
  }

  navLinks.forEach((link) => {
    const linkHref = link.getAttribute("href");
    if (linkHref === currentPage) {
      link.classList.add("active");
    }
  });

  dropdownItems.forEach((item) => {
    const itemHref = item.getAttribute("href");
    if (itemHref === currentPage) {
      item.classList.add("active");
      const parentDropdown = item.closest(".dropdown-menu");
      if (parentDropdown) {
        parentDropdown.previousElementSibling.classList.add("active");
      }
    }
  });
});

/* ===== Search ====== */
document.addEventListener("DOMContentLoaded", function () {
  const search = document.getElementById("accordion_search_bar");
  if (!search) return;

  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  search.addEventListener("input", function (event) {
    const term = event.target.value.trim();

    if (term === "") {
      document.querySelectorAll(".accordion-item").forEach((item) => {
        const collapse = item.querySelector(".accordion-collapse");
        const button = item.querySelector(".accordion-button");
        item.style.display = "";
        button.classList.add("collapsed");
        button.setAttribute("aria-expanded", "false");
        collapse.classList.remove("show");
      });

      document.querySelectorAll(".item.item-talk").forEach((item) => {
        item.style.display = "";
      });

      return;
    }

    const searchRegex = new RegExp("\\b" + escapeRegExp(term), "i");

    document.querySelectorAll(".accordion-item").forEach((item) => {
      const text = item.textContent;
      const collapse = item.querySelector(".accordion-collapse");
      const button = item.querySelector(".accordion-button");

      if (searchRegex.test(text)) {
        item.style.display = "";
        button.classList.remove("collapsed");
        button.setAttribute("aria-expanded", "true");
        collapse.classList.add("show");
      } else {
        item.style.display = "none";
        button.classList.add("collapsed");
        button.setAttribute("aria-expanded", "false");
        collapse.classList.remove("show");
      }
    });

    document.querySelectorAll(".item.item-talk").forEach((item) => {
      const text = item.textContent;

      if (searchRegex.test(text)) {
        item.style.display = "";
      } else {
        item.style.display = "none";
      }
    });
  });
});
