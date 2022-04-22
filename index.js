var banner = document.getElementById("banner");
var mealName = document.getElementById("mealName");
var recepie = document.getElementById("recepie");
var title = document.getElementById("title");
var card = document.getElementById("card");

var banner2 = document.getElementById("banner2");
var mealName2 = document.getElementById("mealName2");
var recepie2 = document.getElementById("recepie2");
var title2 = document.getElementById("title2");
var card2 = document.getElementById("card2");

var banner3 = document.getElementById("banner3");
var mealName3 = document.getElementById("mealName3");
var recepie3 = document.getElementById("recepie3");
var title3 = document.getElementById("title3");
var card3 = document.getElementById("card3");

var banner4 = document.getElementById("banner4");
var mealName4 = document.getElementById("mealName4");
var recepie4 = document.getElementById("recepie4");
var title4 = document.getElementById("title4");
var card4 = document.getElementById("card4");

var banner5 = document.getElementById("banner5");
var mealName5 = document.getElementById("mealName5");
var recepie5 = document.getElementById("recepie5");
var title5 = document.getElementById("title5");
var card5 = document.getElementById("card5");

/* more section */

var bannerMore1 = document.getElementById("bannerMore1");
var mealNameMore1 = document.getElementById("mealNameMore1");
var recepieMore1 = document.getElementById("recepieMore1");
var titleMore1 = document.getElementById("titleMore1");
var cardMore1 = document.getElementById("cardMore1");

var bannerMore2 = document.getElementById("bannerMore2");
var mealNameMore2 = document.getElementById("mealNameMore2");
var recepieMore2 = document.getElementById("recepieMore2");
var titleMore2 = document.getElementById("titleMore2");
var cardMore2 = document.getElementById("cardMore2");

var bannerMore3 = document.getElementById("bannerMore3");
var mealNameMore3 = document.getElementById("mealNameMore3");
var recepieMore3 = document.getElementById("recepieMore3");
var titleMore3 = document.getElementById("titleMore3");
var cardMore3 = document.getElementById("cardMore3");


var moreBTN = document.getElementById("moreBTN");
var moreDiv = document.getElementById("moreDiv");

card.style.display = "none"
card2.style.display = "none"
card3.style.display = "none"
card4.style.display = "none"
card5.style.display = "none"
cardMore1.style.display = "none"
cardMore2.style.display = "none"
cardMore3.style.display = "none"
moreBTN.style.display = "none"


myForm.addEventListener("submit", function (e) {
        e.preventDefault();

        var meal = document.querySelector("#meal").value;
        //fetch
        var url = "https://themealdb.com/api/json/v1/1/search.php?s=" + meal;

        fetch(url)
          .then((res) => res.json())
          .then((data) => {
            console.log(data.meals[0]);
            /* card - 1 */
            banner.src = data.meals[0].strMealThumb
            title.textContent = "ID : " + data.meals[0].idMeal
            mealName.textContent = data.meals[0].strMeal 
            recepie.textContent = data.meals[0].strInstructions
            card.style.display = "block"
            /* card - 2 */
            banner2.src = data.meals[1].strMealThumb
            title2.textContent = "ID : " + data.meals[1].idMeal
            mealName2.textContent = data.meals[1].strMeal 
            recepie2.textContent = data.meals[1].strInstructions
            card2.style.display = "block"
            /* card - 3 */
            banner3.src = data.meals[2].strMealThumb
            title3.textContent = "ID : " + data.meals[2].idMeal
            mealName3.textContent = data.meals[2].strMeal 
            recepie3.textContent = data.meals[2].strInstructions
            card3.style.display = "block"
            /* card - 4 */
            banner4.src = data.meals[3].strMealThumb
            title4.textContent = "ID : " + data.meals[3].idMeal
            mealName4.textContent = data.meals[3].strMeal 
            recepie4.textContent = data.meals[3].strInstructions
            card4.style.display = "block"
            /* card - 5 */
            banner5.src = data.meals[4].strMealThumb
            title5.textContent = "ID : " + data.meals[4].idMeal
            mealName5.textContent = data.meals[4].strMeal 
            recepie5.textContent = data.meals[4].strInstructions
            card5.style.display = "block"
            /* moreDiv */
            bannerMore1.src = data.meals[5].strMealThumb
            titleMore1.textContent = "ID : " + data.meals[5].idMeal
            mealNameMore1.textContent = data.meals[5].strMeal 
            recepieMore1.textContent = data.meals[5].strInstructions
            
            
            bannerMore2.src = data.meals[6].strMealThumb
            titleMore2.textContent = "ID : " + data.meals[6].idMeal
            mealNameMore2.textContent = data.meals[6].strMeal 
            recepieMore2.textContent = data.meals[6].strInstructions
                        
            bannerMore3.src = data.meals[7].strMealThumb
            titleMore3.textContent = "ID : " + data.meals[7].idMeal
            mealNameMore3.textContent = data.meals[7].strMeal 
            recepieMore3.textContent = data.meals[7].strInstructions
            moreBTN.style.display = "block"
            moreBTN.addEventListener("click", (event) => {
                cardMore1.style.display = "block"
                cardMore2.style.display = "block"
                cardMore3.style.display = "block"
            });
 
          });
      });