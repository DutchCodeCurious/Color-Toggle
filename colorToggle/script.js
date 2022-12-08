const menuHover = function () {
  const menu = document.getElementById("hamburger");
  const hiddenMenu = document.getElementById("hiddenM");
  menu.addEventListener("mouseover", function () {
    hiddenMenu.style.display = "block";
  });
  hiddenMenu.addEventListener("mouseover", function () {
    hiddenMenu.style.display = "block";
  });
};

const menuOut = function () {
  const menu = document.getElementById("hamburger");
  const hiddenMenu = document.getElementById("hiddenM");
  menu.addEventListener("mouseout", function () {
    hiddenMenu.style.display = "none";
  });
  hiddenMenu.addEventListener("mouseout", function () {
    hiddenMenu.style.display = "none";
  });
};

// Hover over hidden/show
menuHover();
menuOut();

//Hover over colors, change color
const colorChangeR = function () {
  const body = document.getElementById("body");
  const li = document.getElementById("red");
  const color = document.body.classList;
  if (color != "red-background") {
    li.addEventListener("click", function () {
      body.classList.remove(color);
      body.classList.add("red-background");
    });
  }
};

const colorChangeO = function () {
  const body = document.getElementById("body");
  const li = document.getElementById("orange");
  const color = document.body.classList;
  if (color != "orange-background") {
    li.addEventListener("click", function () {
      body.classList.remove(color);
      body.classList.add("orange-background");
    });
  }
};

const colorChangeP = function () {
  const body = document.getElementById("body");
  const li = document.getElementById("purple");
  const color = document.body.classList;
  if (color != "purple-background") {
    li.addEventListener("click", function () {
      body.classList.remove(color);
      body.classList.add("purple-background");
    });
  }
};
const colorChangeG = function () {
  const body = document.getElementById("body");
  const li = document.getElementById("green");
  const color = document.body.classList;
  if (color != "orange-background") {
    li.addEventListener("click", function () {
      body.classList.remove(color);
      body.classList.add("green-background");
    });
  }
};
const colorChangeH = function () {
  const body = document.getElementById("body");
  const li = document.getElementById("home");
  const color = document.body.classList;
  if (color != "orange-background") {
    li.addEventListener("click", function () {
      body.classList.remove(color);
      body.classList.add("home-background");
    });
  }
};

const colorChangeAll = function () {
  colorChangeH();
  colorChangeR();
  colorChangeO();
  colorChangeG();
  colorChangeP();
};

colorChangeAll();
