let data = {
  scrollPos: 0,
};

document.onreadystatechange = () => {
  dataset();
};

const dataset = () => {
  window.onscroll = (e) => {
    data.scrollPos = Math.ceil(window.scrollY);

    navbarHandler();
  };
};

const navbarHandler = () => {
  const navId = document.getElementById("navbar");
  const navText = document.getElementsByClassName("nav-text");

  if (data.scrollPos > 5) {
    navId.classList.add("bg-light");
    navId.classList.remove("bg-transparent");
    for (let i = 0; i < navText.length; i++) {
      navText[i].style.color = "rgba(0,0,0,.77)";
    }
  } else {
    navId.classList.remove("bg-light");
    navId.classList.add("bg-transparent");
    for (let i = 0; i < navText.length; i++) {
      navText[i].style.color = "rgba(0,0,0,.77)";
    }
  }
};
