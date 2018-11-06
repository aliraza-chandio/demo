<script>
function openModal() {
  document.getElementById('myModal').style.display = "block";
}

function openModal_uni() {
  document.getElementById('myModal_uni').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
	document.getElementById('myModal_uni').style.display = "none";
}

var slideIndex = 1;
var slideIndex_uni = 1;
showSlides(slideIndex);
showSlides_uni(slideIndex_uni);


function plusSlides(n) {
  showSlides(slideIndex += n);
}
function plusSlides_uni(n) {
	showSlides_uni(slideIndex_uni +=n );
}


function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides"); 
  if (n > slides.length) {slideIndex = 1;}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}



function showSlides_uni(n) {
  var i;

  var slides_uni = document.getElementsByClassName("mySlides_uni");
  if (n > slides_uni.length) {slideIndex_uni = 1}
  if (n < 1) {slideIndex_uni = slides_uni.length}
  for (i = 0; i < slides_uni.length; i++) {
      slides_uni[i].style.display = "none";
  }
  slides_uni[slideIndex_uni-1].style.display = "block";  
}
</script>
