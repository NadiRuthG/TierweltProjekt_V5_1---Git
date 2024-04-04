document.addEventListener("DOMContentLoaded", function() {
    // Suche nach dem Suchformular und füge einen Event-Listener hinzu
    var searchForm = document.getElementById("searchForm");
    if (searchForm) {
        searchForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Verhindere das Standardverhalten des Formulars (Seite neu laden)

            // Erfasse den Suchbegriff aus dem Eingabefeld
            var query = document.getElementById("searchInput").value.trim();

            // Weiterleitung zur search.html-Seite mit dem Suchbegriff als Parameter
            window.location.href = "search.html?query=" + encodeURIComponent(query);
        });
    }
});
