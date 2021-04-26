// JAVASCRIPT AND JQUERY


$(document).ready(function(){

    // NAV bar
    $("#jnavbar").html("    <nav is=\"jnavbar\" class=\"navbar navbar-expand-lg navbar-light bg-light\">\n" +
        "        <div class=\"container-fluid\">\n" +
        "            <a class=\"navbar-brand\" href=\"index.html\">PhotonLife</a>\n" +
        "            <button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n" +
        "                <span class=\"navbar-toggler-icon\"></span>\n" +
        "            </button>\n" +
        "            <div class=\"collapse navbar-collapse justify-content-end\" id=\"navbarNavDropdown\">\n" +
        "\n" +
        "\n" +
        "                <ul class=\"navbar-nav\">\n" +
        "\n" +
        "                    <!-- CODE button -->\n" +
        "\n" +
        "                    <li class=\"nav-item dropdown\">\n" +
        "                        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n" +
        "                            Code / {programming}\n" +
        "                        </a>\n" +
        "                        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\n" +
        "                            <a class=\"dropdown-item\" href=\"weathermap.html\">WeatherMap</a>\n" +
        "                            <a class=\"dropdown-item\" href=\"#\">Tims Favorite Foods</a>\n" +
        "                            <a class=\"dropdown-item\" href=\"#\">Coffee Shop Project</a>\n" +
        "                        </div>\n" +
        "                    </li>\n" +
        "\n" +
        "\n" +
        "                    <li class=\"nav-item\">\n" +
        "                        <a class=\"nav-link active mr-auto\" aria-current=\"page\" href=\"/3d.html\">3D Realms</a>\n" +
        "                    </li>\n" +
        "\n" +
        "\n" +
        "                    <li class=\"nav-item\">\n" +
        "                        <a class=\"nav-link\" href=\"flickarchive.html\">Photographic Archive</a>\n" +
        "                    </li>\n" +
        "\n" +
        "                    <li class=\"nav-item\">\n" +
        "                        <a class=\"nav-link\" href=\"contact.html\">Contact / Resume </a>\n" +
        "                    </li>\n" +
        "\n" +
        "\n" +
        "\n" +
        "                    </li>\n" +
        "                </ul>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "    </nav>");



    // const flavoursContainer = document.getElementById('flavoursContainer');
    // const flavoursScrollWidth = flavoursContainer.scrollWidth;
    //
    // window.addEventListener('load', () => {
    //     self.setInterval(() => {
    //         if (flavoursContainer.scrollLeft !== flavoursScrollWidth) {
    //             flavoursContainer.scrollTo(flavoursContainer.scrollLeft + 1, 0);
    //         }
    //     }, 15);
    // });


})