const buttons = {
  skin: {
    btn: document.getElementById("skin-btn"),
    spot: document.getElementById("skin-spot"),
  },
  blood: {
    btn: document.getElementById("Blood-btn"),
    spot: document.getElementById("Vessele-spot"),
  },
  bone: {
    btn: document.getElementById("Bone-btn"),
    spot: document.getElementById("bon-spot"),
  },
  marrow: {
    btn: document.getElementById("Bonemarrow"),
    spot: document.getElementById("BM-spot"),
  },
  joint: {
    btn: document.getElementById("joint"),
    spot: document.getElementById("joint-spot"),
  },
  muscles: {
    btn: document.getElementById("muscle"),
    spot: document.getElementById("msc-spot"),
  },
  nerve: {
    btn: document.getElementById("nerve"),
    spot: document.getElementById("nerve-spot"),
  },
  retina: {
    btn: document.getElementById("Retina"),
    spot: document.getElementById("retina-spot"),
  },
  teeth: {
    btn: document.getElementById("Teeth"),
    spot: document.getElementById("teeth-spot"),
  },
  thyroid: {
    btn: document.getElementById("Thyroid"),
    spot: document.getElementById("thy-spot"),
  },
  heart: {
    btn: document.getElementById("Heart"),
    spot: document.getElementById("heart-spot"),
  },
  kidneys: {
    btn: document.getElementById("kidney"),
    spot: document.getElementById("kidney-spot"),
  },
};

function toggleActiveButtons() {
  Object.values(buttons).forEach(({ btn }) =>
    btn.classList.remove("btnactive")
  );
}

function toggleBodySpots() {
  Object.values(buttons).forEach(({ spot }) =>
    spot.classList.remove("btn-spot")
  );
}

function addEventListeners(element, event, handler) {
  element.addEventListener(event, function (e) {
    e.preventDefault();
    handler();
  });
}

function setupButtonEvent(buttonObj) {
  addEventListeners(buttonObj.btn, "click", function () {
    toggleActiveButtons();
    toggleBodySpots();
    buttonObj.btn.classList.toggle("btnactive");
    buttonObj.spot.classList.toggle("btn-spot");
  });

  addEventListeners(buttonObj.spot, "click", function () {
    toggleActiveButtons();
    toggleBodySpots();
    buttonObj.btn.classList.toggle("btnactive");
    buttonObj.spot.classList.toggle("btn-spot");
  });
}

Object.values(buttons).forEach((buttonObj) => {
  setupButtonEvent(buttonObj);
});

// Initial state
toggleBodySpots();
buttons.skin.btn.classList.toggle("btnactive");
buttons.skin.spot.classList.toggle("btn-spot");
