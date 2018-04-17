list = document.getElementById("ol");

list.addEventListener("onmouseover",
  function(e) {
    e.target.style.fontSize = "18pt";
  });

list.addEventListener("onmouseout",
  function(e) {
    e.target.style.fontSize = "14pt";
  }, true);
