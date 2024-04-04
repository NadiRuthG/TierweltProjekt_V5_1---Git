document.addEventListener('DOMContentLoaded', function() {
    // Selektieren der DOM-Elemente
    var header = document.querySelector('header');
    var h1 = document.querySelector('h1');
    var h2 = document.querySelector('h2');
    var buttonContainer = document.querySelector('.button-container');

    // Überwachen des Scroll-Events
    window.addEventListener('scroll', function() {
        // Wenn das Ende des Titelsichtbar ist, den Untertitel ausblenden, sonst anzeigen
        if (h1.getBoundingClientRect().bottom <= header.getBoundingClientRect().bottom) {
            h2.style.display = 'none';
        } else {
            h2.style.display = 'block';
        }
    });

    // Event-Listener für den Zustimmungsbutton
    var acceptButton = document.getElementById('acceptButton');
    acceptButton.addEventListener('click', handleAcceptance);

    // Diashows für jede Kategorie starten
    startSlideshow('korallenriffe');
    startSlideshow('meeresvögel');
    startSlideshow('tiefsee');
    startSlideshow('tropische_korallenriffe');
    startSlideshow('meeressäuger');
});

// Funktion zum Behandeln der Zustimmung zur Datenschutzerklärung
function handleAcceptance() {
    // Hier können Sie den Code einfügen, der die Zustimmung zur Datenschutzerklärung behandelt
    // Zum Beispiel könnten Sie einen Cookie setzen, der die Zustimmung speichert
    // Oder Sie könnten eine Benachrichtigung anzeigen, die bestätigt, dass die Datenschutzerklärung akzeptiert wurde
    // Beispiel: Setzen eines Dummy-Cookies für die Zustimmung
    document.cookie = "datenschutz_zustimmung=akzeptiert";

    // Ausblenden des Buttons
    buttonContainer.style.display = 'none';

    // Anzeige einer Benachrichtigung
    alert("Vielen Dank für Ihre Zustimmung zur Datenschutzerklärung!");
}

// Funktion zum Starten einer Diashow für eine bestimmte Kategorie
function startSlideshow(categoryId) {
    const category = document.getElementById(categoryId);
    const galleryItems = category.querySelectorAll('.gallery-item');
    let currentIndex = 0;

    function showNextItem() {
        // Alle Bilder in der Kategorie ausblenden
        galleryItems.forEach(item => {
            item.style.display = 'none';
        });
        
        // Das aktuelle Bild anzeigen
        galleryItems[currentIndex].style.display = 'block';
        
        // Index für das nächste Bild aktualisieren
        currentIndex = (currentIndex + 1) % galleryItems.length;
    }

    // Diashow starten
    setInterval(showNextItem, 3000); // Zeitintervall anpassen (3000ms = 3 Sekunden)
}
