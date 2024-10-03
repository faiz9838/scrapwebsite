function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    company: document.getElementById("company").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_s1jpgdv";
  const templateID = "template_0ff29ho";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("company").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("Email sent successfully");
    })
    .catch((err) => console.log(err));
}

var floatingButtonContainer = document.querySelector(".floating-button-div");
var scrollY = window.scrollY;

window.addEventListener("slide", function () {
  scrollY = window.scrollY;
  floatingButtonContainer.style.top = scrollY + window.innerHeight - 150 + "px";
});

$("#show").on("click", function () {
  $(".center").show();
  $(this).hide();
});

$("#close").on("click", function () {
  $(".center").hide();
  $("#show").show();
});
