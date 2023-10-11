const products = [
  { name: "Ham", price: 50, image: "ham.jpg" },
  { name: "Pork", price: 30, image: "pork.jpg" },
  { name: "Beef", price: 70, image: "veal.jpg" },
  { name: "Mutton", price: 20, image: "mutton.jpg" },
  { name: "Pollutry", price: 15, image: "pollutry.jpg" },
  { name: "Chevon", price: 65, image: "chevon.jpg" },
  { name: "Venison", price: 45, image: "venison.jpg" },
  { name: "Lamb", price: 30, image: "lamb.jpg" },
  { name: "Game", price: 5, image: "game.jpg" },
  { name: "Exotic", price: 100, image: "exotic.jpg" },
  { name: "Organ", price: 80, image: "organ.jpg" },
  { name: "Processed", price: 10, image: "processed.jpg" },
  { name: "Deli", price: 25, image: "deli.jpg" },
  { name: "Bison", price: 25, image: "bison.jpg" },
];

$(document).ready(createDiv);


function SortByPrice() { //initilize function
    products.sort((a, b) => a.price - b.price); //sorts by price :)
    createDiv()
}
function SortByName(){ //starts function
    products.sort((a, b) => a.name.localeCompare(b.name)); // sorts by name
    createDiv()
}
// Attach the searchProducts function to the input's "keyup" event using jQuery

function createDiv(){
    $("#productList").html(""); //clears div

    for (var i = 0; i < products.length; i++) {
        var product = products[i];

        // makes a div for each item
        var div = $('<div class="meat-box">');

        // loads dog!
        var img = $('<img class="meat-img">').attr({
            src: '/img/' + product.image, // loads specific img
            alt: 'photo of ' + product.name, // name in alt text for accesibility'
          });
        // adds all the info

        var h2 = $('<h2>').text(product.name)
        var h3 = $('<h3>').text("£" + product.price + "/per pound")
        // adds both to div
        div.append(img, h2, h3);

        // adds div to container
        $('#productList').append(div);
    }
}
function updateProductList() {
  $("#productList").empty(); // Clear existing divs

  const searchText = $('#search-input').val().toLowerCase();
  
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().startsWith(searchText)
  );
  console.log(filteredProducts)
  if (filteredProducts.length === 0) {
    var div = $('<div class="meat-box">');
    var h2 =  $('<h2>').text("We dont have anything like this yet! Check back as we update regularly :)")
    div.append(h2)
    $('#productList').append(div);
  }
  else{
    for (var i = 0; i < filteredProducts.length; i++) {
      var product = filteredProducts[i];
  
      // Create a div for each item
      var div = $('<div class="meat-box">');
  
      // Load the product image
      var img = $('<img class="meat-img">').attr({
        src: 'img/' + product.image, // Assuming the images are in a folder named 'img'
        alt: 'photo of ' + product.name, // Name in alt text for accessibility
      });
  
      // Create a paragraph element to display product information
      var h2 = $('<h2>').text(product.name)
      var h3 = $('<h3>').text("£" + product.price + "/per pound")
      // adds both to div
      div.append(img, h2, h3);
  
      // Add the div to the container with the ID 'productList'
      $('#productList').append(div);
    }
  }
  
}
$(document).ready(function () {
  $("#search-input").on("input", function () {
    updateProductList();
  });
});


