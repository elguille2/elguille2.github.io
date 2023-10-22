var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sideMenu = document.getElementById("side-menu");

function openMenu() {
    sideMenu.style.right = "0";
}

function closeMenu() {
    sideMenu.style.right = "-200px";
}

var seeMoreButton = document.getElementById('see-more');
var seeLessButton = document.getElementById('see-less');
var workColumns = document.querySelector('.work-list');

seeMoreButton.addEventListener('click', function () {
    var workElements = document.querySelectorAll('.work');
    for (var i = 3; i < workElements.length; i++) {
        workElements[i].style.display = 'block';
    }
    seeMoreButton.style.display = 'none';
    seeLessButton.style.display = 'block';
});

seeLessButton.addEventListener('click', function () {
    var workElements = document.querySelectorAll('.work');
    for (var i = 3; i < workElements.length; i++) {
        workElements[i].style.display = 'none';
    }
    seeMoreButton.style.display = 'block';
    seeLessButton.style.display = 'none';
});

function toggleLayer(workElement) {
    const layer = workElement.querySelector(".layer");
    if (layer.style.height === "" || layer.style.height === "0px") {
        layer.style.height = "100%";
    } else {
        layer.style.height = "0";
    }
}

var workElements = document.querySelectorAll('.work');

workElements.forEach(function (workElement) {
    workElement.addEventListener('click', function () {
        toggleLayer(workElement);
    });
});

// Agrega este código para cerrar el menú lateral cuando se hace clic en un enlace
var sideMenuLinks = document.querySelectorAll('#side-menu a');

sideMenuLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        closeMenu();
    });
});
