// Without using bootstrap create a dropdown accordion.
// When I click the button, if the content is shown should hide it and the text should say Read More,
// otherwise if the content is hidden should show it and the button text would be Read Less.
// Use functions, make your code independent of the button indeed, 
// so if at any point I want to create another button that does the same I will be able


var acc = document.getElementsByClassName("accordion");


var i;

for (i = 0; i < acc.length; i++) {

  acc[i].addEventListener("click", function () {

    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      $(this).val('Show More');
      panel.style.display = "none";
    } else {
      $(this).val('Show Less');
      panel.style.display = "block";
    }
  });
}
