
    const galleryItems = document.querySelectorAll('.gallery-item');
    let currentIndex = 0;
    let currentCategory = ''; // Variable, um den aktuellen Untertitel zu speichern

    function showNextItem() {
        // Verstecke alle Elemente ausser dem aktuellen Kategorieelement
        galleryItems.forEach((item, index) => {
            const category = item.parentElement.tagName.toLowerCase() === 'h3' ? item.parentElement.textContent.trim() : '';
            if (category === currentCategory) {
                if (index !== currentIndex) {
                    item.classList.remove('active');
                } else {
                    item.classList.add('active');
                }
            } else {
                item.classList.remove('active');
            }
        });
        currentIndex = (currentIndex + 1) % galleryItems.length;
        if (currentIndex === 0) {
            // Wenn currentIndex wieder 0 ist, aktualisieren Sie die currentCategory
            currentCategory = galleryItems[currentIndex].parentElement.tagName.toLowerCase() === 'h3' ? galleryItems[currentIndex].parentElement.textContent.trim() : '';
        }
    }

    // Funktion zum Zurücksetzen der Bilder nach Abschluss der Animationen
    function resetImages() {
        galleryItems.forEach(item => {
            item.classList.remove('active');
        });
        // Rufen Sie die showNextItem-Funktion auf, um die Animation für das nächste Bild zu starten
        showNextItem();
    }

    // Fügen Sie einen Event-Listener für das transitionend-Event hinzu
    galleryItems.forEach(item => {
        item.addEventListener('transitionend', resetImages);
    });

    // Fügen Sie standardmässig die active-Klasse zu den Bildern hinzu
    galleryItems.forEach(item => {
        item.classList.add('active');
    });

    function startSlideshow() {
        setInterval(showNextItem, 5000); // Ändern Sie das Zeitintervall nach Bedarf (2000ms = 2 Sekunden)
    }

    startSlideshow();
