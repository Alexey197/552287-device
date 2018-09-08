  var link = document.querySelector(".login-link");
  var popup = document.querySelector(".modal-login");
  var close = document.querySelector(".modal-close");
  var form = popup.querySelector("form");
  var login = popup.querySelector("[name=login]");
  var email = popup.querySelector("[name=email]");
  var mapLink = document.querySelector(".map-link");
  var mapPopup = document.querySelector(".modal-map");
  var mapClose = document.querySelector(".modal-map-close");

  var isStorageSupport =  true;
  var storage = "";

  try {
      storage = localStorage.getItem("login");
  } catch (err) {
      isStorageSupport = false;
  }

  link.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.add("modal-show");

      if (storage) {
          login.value = storage;
          email.focus();
      } else {
          login.focus();
      }
  });

  mapLink.addEventListener("click", function (evt) {
      evt.preventDefault();
      mapPopup.classList.add("modal-show");
  });

  close.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
  });

  mapClose.addEventListener("click", function (evt) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
  });

  form.addEventListener("submit", function (evt) {
      if (!login.value || !email.value) {
          evt.preventDefault();
          popup.classList.add("modal-error")
      } else {
          if (isStorageSupport) {
              localStorage.setItem("login", login.value);
          }
      }
  });

  window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
          evt.preventDefault();

          if (popup.classList.contains("modal-show")) {
              popup.classList.remove("modal-show");
          }
      }

  });

  window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
          evt.preventDefault();

          if (mapPopup.classList.contains("modal-show")) {
              mapPopup.classList.remove("modal-show");
          }
      }

  });






