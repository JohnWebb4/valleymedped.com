const healthAnnouncements = document.getElementById("healthAnnouncements");

if (healthAnnouncements) {
    healthAnnouncements.addEventListener('load', function(e) {
        if (window.innerWidth <= 750) {
            healthAnnouncements.setAttribute('height', 2000);
        }
    });
}

