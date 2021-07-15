console.log("dac");
const bodyE = document.querySelector("body");

let bodyHtml = bodyE.innerHTML;
let formHtml = `<div id="form">
<div class="overlay"></div>
<div class="register">
  <div class="btn-close">
    <i class="fas fa-times"></i>
  </div>
  <img src="./images/common/logo.png" alt="" class="logo" />
  <h4>Tham gia cuộc thi phim ngắn Đà Nẵng lần thứ I-2021</h4>
  <form class="form">
    <div class="form-group">
      <input type="text" name="email" placeholder="Địa chỉ email" />
      <img src="./images/common/email-icon.png" alt="" />
    </div>
    <div class="form-group">
      <input type="password" name="password" placeholder="Mật khẩu" />
      <img src="./images/common/lock-icon.png" alt="" />
    </div>
    <div class="form-group">
      <input
        type="password"
        name="password2"
        placeholder="Nhập lại mật khẩu"
      />
      <img src="./images/common/lock-icon.png" alt="" />
    </div>
    <div class="form-checkbox">
      <input type="checkbox" />
      <p>Tôi đã đọc và đồng ý với <span>Điều khoản và Điều kiện</span></p>
    </div>
    <button class="btn">Đăng Kí</button>
    <p>Hoặc đăng kí</p>
    <button class="btn btn-third-party">
      <img src="./images/common/fb-color-icon.png" alt="" /> Đăng kí bằng
      Facebook
    </button>
    <button class="btn btn-third-party">
      <img src="./images/common/gg-color-icon.png" alt="" /> Đăng kí bằng
      Google
    </button>
    <p>Bạn đã có tài khoản? <span class="btn-login">Đăng nhập</span></p>
  </form>
</div>
</div>`;
bodyE.innerHTML = formHtml + bodyE.innerHTML;
const navE = document.querySelector(".nav");
const navIcon = document.querySelector(".nav__icon");
const navMenu = document.querySelector(".nav__menu");
const btnDropdown = document.querySelector(
  ".nav__menu-dropdown .nav__menu-link"
);

const dropdownE = document.querySelector(".dropdown-list");
const btnRegisters = document.querySelectorAll(".btn-register");
console.log(btnRegisters);

let btnClose = document.querySelector(".btn-close");
const formE = document.getElementById("form");
let overlayE = document.querySelector(".overlay");

let isScroll = false;

window.onscroll = function (e) {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    navE.classList.add("active");
  } else {
    navE.classList.remove("active");
  }
};
navIcon.addEventListener("click", () => {
  if (navMenu.classList.value.includes("active")) {
    navIcon.innerHTML = '<i class="fas fa-bars"></i>';
    navMenu.classList.remove("active");
  } else {
    navIcon.innerHTML = '<i class="fas fa-times"></i>';
    navMenu.classList.add("active");
  }
});

btnDropdown.addEventListener("click", (e) => {
  e.preventDefault();
  dropdownE.classList.toggle("active");
});
const openForm = () => {
  btnRegisters.forEach((btnRegister) => {
    btnRegister.addEventListener("click", () => {
      formE.classList.add("active");
    });
  });
};
openForm();

const closeForm = () => {
  btnClose.addEventListener("click", () => {
    formE.classList.remove("active");
  });
  overlayE.addEventListener("click", () => {
    formE.classList.remove("active");
  });
};
closeForm();
