function includeHTML() {
    var z, i, element, file, request;
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      element = z[i];
      file = element.getAttribute("w3-include-html");
      if (file) {
        request = new XMLHttpRequest();
        request.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {element.innerHTML = this.responseText;}
            if (this.status == 404) {element.innerHTML = "Page not found.";}
            element.removeAttribute("w3-include-html");
            includeHTML();
          }
        }
        request.open("GET", file, true);
        request.send();
        return;
      }
    }
  }
  includeHTML();