<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Interactive CV</title>
  <style>
    /* CSS styles for the pop-up boxes */
    .popup {
      display: none;
      position: absolute;
      background-color: white;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
  </style>
</head>
<body>

<!-- Your drawn picture with clickable circles -->
<img src="pic1.jpg" alt="pic1" id="cvImage">

<!-- Pop-up boxes for different sections of your CV -->
<div class="popup" id="educationPopup">
  <h2>Education</h2>
  <p>Your education details go here...</p>
</div>

<div class="popup" id="experiencePopup">
  <h2>Experience</h2>
  <p>Your work experience details go here...</p>
</div>

<!-- JavaScript to handle the interactivity -->
<script>
  // Function to show pop-up when a circle is clicked
  function showPopup(popupId) {
    var popup = document.getElementById(popupId);
    popup.style.display = "block";
  }

  // Function to hide all pop-ups
  function hidePopups() {
    var popups = document.querySelectorAll('.popup');
    popups.forEach(function(popup) {
      popup.style.display = "none";
    });
  }

  // Attach click event listeners to the circles
  var cvImage = document.getElementById('cvImage');
  cvImage.addEventListener('click', function(event) {
    var clickedElementId = event.target.id;
    hidePopups(); // Hide all pop-ups first
    switch (clickedElementId) {
      case 'circle1':
        showPopup('educationPopup');
        break;
      case 'circle2':
        showPopup('experiencePopup');
        break;
      // Add more cases for other circles if needed
    }
  });
</script>

</body>
</html>
