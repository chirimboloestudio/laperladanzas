// =========================
// MENÚ HAMBURGUESA
// =========================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const abierto = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", abierto);

});


// Cerrar menú al seleccionar una sección

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

    });

});


// =========================
// CAMBIAR MENÚ AL DESPLAZARSE
// =========================

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


// =========================
// COMPROBAR VIDEO
// =========================

const heroVideo = document.querySelector(".hero-video");

if (heroVideo) {

    heroVideo.addEventListener("error", () => {

        heroVideo.style.display = "none";

    });

}

// =====================================
// VISOR DE FOTOGRAFÍAS - GALERÍA
// =====================================

const galleryDialog = document.getElementById("gallery-dialog");

const galleryDialogImage = document.getElementById("gallery-dialog-image");

const galleryDialogCaption = document.getElementById("gallery-dialog-caption");


document.querySelectorAll(".gallery-photo").forEach(photo => {

    photo.addEventListener("click", () => {

        const image = photo.dataset.full;
        const caption = photo.dataset.caption;

        galleryDialogImage.src = image;
        galleryDialogImage.alt = caption;

        galleryDialogCaption.textContent = caption;

        galleryDialog.showModal();

    });

});


// CERRAR AL HACER CLIC FUERA DE LA IMAGEN

galleryDialog.addEventListener("click", event => {

    if (event.target === galleryDialog) {

        galleryDialog.close();

    }

});


// LIMPIAR LA IMAGEN AL CERRAR

galleryDialog.addEventListener("close", () => {

    galleryDialogImage.src = "";

});

// =====================================
// MODAL GOOGLE MAPS
// =====================================

const mapModal = document.getElementById("map-modal");

const openMap = document.getElementById("open-map");

const closeMap = document.getElementById("map-close");


if (mapModal && openMap && closeMap) {

    // ABRIR MAPA

    openMap.addEventListener("click", function(event) {

        event.preventDefault();

        mapModal.showModal();

    });


    // CERRAR CON LA X

    closeMap.addEventListener("click", function() {

        mapModal.close();

    });


    // CERRAR AL HACER CLIC FUERA

    mapModal.addEventListener("click", function(event) {

        if (event.target === mapModal) {

            mapModal.close();

        }

    });

}

// PAUSAR VIDEO CUANDO SALE DE PANTALLA

const galleryVideo = document.querySelector(".gallery-scroll-video");

if (galleryVideo && "IntersectionObserver" in window) {

    const videoObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) {
                galleryVideo.pause();
            }

        });

    }, {
        threshold: 0
    });

    videoObserver.observe(galleryVideo);
}
