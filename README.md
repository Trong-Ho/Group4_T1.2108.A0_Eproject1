https://trong-ho.github.io/Group4_T1.2108.A0_Eproject1/

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GALLERY</title>
    <link rel="stylesheet" href="gallery.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.1/font/bootstrap-icons.css">
</head>
<body>
    <div class="main">
        
        <h1>GALLERY</h1>
        <hr>

        <div id="myBtnContainer">
          <button class="btn active" onclick="filterSelection('all')"> Show all</button>
          <button class="btn" onclick="filterSelection('nature')"> Luxury</button>
          <button class="btn" onclick="filterSelection('cars')"> Fishing</button>
          <button class="btn" onclick="filterSelection('people')"> Travel</button>
        </div>
        
        <div class="row">
          <div class="column nature">
            <div class="content">
              <img src="pic1.webp" alt="Luxury" usemap="#mymap1" style="width:100%">
              <map name="mymap1">
                <area shape="rect" coords="0,0,400,400" href="product_1.html"  alt="">
              </map>
              <h4>Regal 26 Express</h4>
              <p>
                5.970.000 &#8363; / Giờ (Weekday) <br>
                7.164.000 &#8363; / Giờ (Weekend) <br>
                &#8987; Giờ Khởi hành: Sông Sài Gòn  <br>
                &#128197; Thời gian: 18h30 - 21h15
              </p>
            </div>
          </div>
          <div class="column nature">
            <div class="content">
            <img src="pic2.webp" alt="Luxury" style="width:100%">
              <h4>Princess 62 Flybridge</h4>
              <p>5.970.000 &#8363; / Giờ (Weekday) <br>
                7.164.000 &#8363; / Giờ (Weekend) <br>
                &#8987; Giờ Khởi hành: Sông Sài Gòn  <br>
                &#128197; Thời gian: 18h30 - 21h15
              </p>
            </div>
          </div>
          <div class="column nature">
            <div class="content">
            <img src="pic3.webp" alt="Luxury" style="width:100%">
              <h4>Lagoon 450F Sarita</h4>
              <p>5.970.000 &#8363; / Giờ (Weekday) <br>
                7.164.000 &#8363; / Giờ (Weekend) <br>
                &#8987; Giờ Khởi hành: Sông Sài Gòn  <br>
                &#128197; Thời gian: 18h30 - 21h15
              </p>
            </div>
          </div>
          <div class="column cars">
            <div class="content">
              <img src="pic4.webp" alt="Fishing" style="width:100%">
              <h4>Lagoon 630 Catamaran</h4>
              <p>5.970.000 &#8363; / Giờ (Weekday) <br>
                7.164.000 &#8363; / Giờ (Weekend) <br>
                &#8987; Giờ Khởi hành: Sông Sài Gòn  <br>
                &#128197; Thời gian: 18h30 - 21h15
              </p>
            </div>
          </div>
          <div class="column cars">
            <div class="content">
            <img src="product_1_1.jpg" alt="Fishing" style="width:100%">
              <h4>Lagoon 42 Cloud Dancer</h4>
              <p>
                5.970.000 &#8363; / Giờ (Weekday) <br>
                7.164.000 &#8363; / Giờ (Weekend) <br>
                &#8987; Giờ Khởi hành: Sông Sài Gòn  <br>
                &#128197; Thời gian: 18h30 - 21h15
              </p>
            </div>
          </div>
          <div class="column cars">
            <div class="content">
            <img src="product_1_2.jpg" alt="Fishing" style="width:100%">
              <h4>Lagoon 52F Blue Moon</h4>
              <p>
                5.970.000 &#8363; / Giờ (Weekday) <br>
                7.164.000 &#8363; / Giờ (Weekend) <br>
                &#8987; Giờ Khởi hành: Sông Sài Gòn  <br>
                &#128197; Thời gian: 18h30 - 21h15
              </p>
            </div>
          </div>
        
          <div class="column people">
            <div class="content">
              <img src="product_1_3.jpg" alt="Travel" style="width:100%">
              <h4>Princess 56 Ana Sonata</h4>
              <p>
                5.970.000 &#8363; / Giờ (Weekday) <br>
                7.164.000 &#8363; / Giờ (Weekend) <br>
                &#8987; Giờ Khởi hành: Sông Sài Gòn  <br>
                &#128197; Thời gian: 18h30 - 21h15
              </p>
            </div>
          </div>
          <div class="column people">
            <div class="content">
            <img src="product_1_4.jpg" alt="Travel" style="width:90%">
              <h4>Lagoon 42 P&B</h4>
              <p>
                5.970.000 &#8363; / Giờ (Weekday) <br>
                7.164.000 &#8363; / Giờ (Weekend) <br>
                &#8987; Giờ Khởi hành: Sông Sài Gòn  <br>
                &#128197; Thời gian: 18h30 - 21h15
              </p>
            </div>
          </div>
          <div class="column people">
            <div class="content">
            <img src="product_1_5.jpg" alt="Travel" style="width:100%">
              <h4>Sunseeker Manhattan 63</h4>
              <p>
                5.970.000 &#8363; / Giờ (Weekday) <br>
                7.164.000 &#8363; / Giờ (Weekend) <br>
                &#8987; Giờ Khởi hành: Sông Sài Gòn  <br>
                &#128197; Thời gian: 18h30 - 21h15
              </p>
            </div>
          </div>
        </div>
        
        </div>
        
        <script>
        filterSelection("all")
        function filterSelection(c) 
        {
          var x, i;
          x = document.getElementsByClassName("column");
          if (c == "all") c = "";
          for (i = 0; i < x.length; i++) 
          {
            w3RemoveClass(x[i], "show");
            if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
          }
        }
        
        function w3AddClass(element, name) 
        {
          var i, arr1, arr2;
          arr1 = element.className.split(" ");
          arr2 = name.split(" ");
          for (i = 0; i < arr2.length; i++) 
          {
            if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
          }
        }
        
        function w3RemoveClass(element, name) 
        {
          var i, arr1, arr2;
          arr1 = element.className.split(" ");
          arr2 = name.split(" ");
          for (i = 0; i < arr2.length; i++) 
          {
            while (arr1.indexOf(arr2[i]) > -1) 
            {
              arr1.splice(arr1.indexOf(arr2[i]), 1);     
            }
          }
          element.className = arr1.join(" ");
        }
        
        
        var btnContainer = document.getElementById("myBtnContainer");
        var btns = btnContainer.getElementsByClassName("btn");
        for (var i = 0; i < btns.length; i++) 
        {
          btns[i].addEventListener("click", function()
          {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
          });
        }
        </script>
        
        

        

</body>
</html>
