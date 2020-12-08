var b = false;
var slideIndex = 1;
var slideIndex1 = 1;
document.addEventListener("DOMContentLoaded", function(){
  showDivs(slideIndex);
});

document.addEventListener("DOMContentLoaded", function(){
  showDiv(slideIndex1);
});

function plusDiv(n) {
  showDiv(slideIndex1 += n);
}

function plusDivs(n) {
  showDivs(slideIndex += n);
}
belgium = ["The Grand Place is the one of the most if not the most popular tourist attractions in Belgium. This 223ft by 361ft square is surrounded by guildhalls which were built in the 14th century. Every two years in August a huge flower carpet is set up. This UNESCO World Heritage site is a sight to behold and is the most popular time for tourists to visit.","Gravensteen is a medieval castle dating back to 1180. This is one of the best surviving moated fortresses and is now a museum where tourists can visit.","St. Peter’s Church in Leuven is one of Belgium’s best examples of the Barbant Gothic style. This gorgeous church built in the 15th century is a beautiful place to visit."];

brazil = ["Chisto Redentor or the Christ the Redeemer statue is one of the most iconic statues in the world. This beautiful statue built in the early 1900s is a sight to behold as it looks out upon the city of Rio. ","Iguazu Falls is located where Brazil, Paraguay, and Argentina meet and is the largest collection of waterfalls in the world consisting of 247 waterfalls.Every angle you look at it, the view is amazing.A great place to visit if you want to see one of nature’s greatest spectacles.","Ipanema is a beautiful beach located in the South Zone of Rio and its a popular place to relax and enjoy the beach."];

greece = ["Acropolis in Athens is considered the symbol of Greece. Acropolis consists of many historically significant buildings that have been around since ancient times. The most recognizable structure in Acropolis is the Parthenon which is a former temple built for the goddess Athena.","Delphi is a UNESCO World heritage site built on Mount Parnassus. A historic site which was used to worship the Greek god Apollo. Numerous ruined temples and even a theater and a stadium are located in Delphi.","Corfu is an island located in the Ionian sea. Corfu Town is a UNESCO World Heritage Site and is known for its bays and beaches which meet the crystal clear sea."];

hungary = ["The Danube river is the second-longest river in Europe. The beautiful Danube River flows through Hungary from north to south, and as it passes through Budapest, it splits the city in two. One of the best sunset views of the river and of both Buda and Pest is from the Freedom Bridge, a favorite spot for locals. Other great places from which to view this majestic river are at the Danube Bend, one of the country's most popular recreational and excursion spots. This is where the river winds its way through the heavily wooded Visegrád Mountains before turning sharply south towards Budapest. The area is popular with hikers and nature lovers and is included in the many excellent river cruises that travel the Danube from as far as neighboring Austria.","The Buda Castle is a UNESCO World Heritage site located in the Hungarian capital of Budapest. This beautiful castle was first built in the 14th century for Hungarian Kings and is a site to behold if you visit Hungary."];

morroco = ["High Atlas Mountain, Morocco is a mountain range in Central Morocco which separates the northern plains from the Pre-sahara of Morocco.  The Atlas mountains are the highest mountains in North Africa.","Chefchaouen, Morocco is a city in Morocco known for its signature blue and white style buildings.  The city was originally built as a fortress in the 15th century, but now has become a tourist destination for many to explore the steep, narrow, and blue corridors."];

myanmar = ["Pagan, Myanmar is a place of rich history for the people of Myanmar. It lies on the bank of the Irrawaddy river, lined with Pagodas (temples). These temples offer a glimpse back in history of the various peoples who once called this city home. It serves as a pilgrimage center as there are many Buddhist shrines which are still in use today.  It is a city which has been shaken by natural disasters, yet it has persisted and remains a beautiful gem in the country of Myanmar.","Kakku, Myanmar is one of the most iconic locations located within the country.  Kakku contains over 2,478 Stupas which are credited to many ancient rulers such as the Indian Emperor Ashoka and King Alaungsithu in the 12th Century.  Kakku is a site of religious worship for the second largest ethnic group, the Pa’O people."];

newZealand = ["Milford Sound, New Zealand is located in the South West in New Zealand’s southern island.  Milford Sound beautiful geography was formed long ago by glaciers over the last few hundred millennia.  Temperatures range from about 41 degrees Fahrenheit- 64 degrees Fahrenheit depending on the season.  There is also an abundance of wildlife which helps to make this a popular tourist destination.","Tongariro National Park, New Zealand is located on the north island of New Zealand.  The national park is known for its three active volcanoes and iconic landscapes.  It is a UNESCO dual heritage area as they recognize the Māori peoples spiritual and cultural existence in the area"];

southAfrica = ["Cape Town Castle is a fort in Cape Town, South Africa, which was founded in the 17th century. Originally situated on the coastline of Table Bay, the fort is now located inland after land recuperation. The castle was declared a historic monument in 1936 (now a provincial heritage site) and is considered the best preserved example of a Dutch East India Company fort after renovations in the 1980s.","Kruger National Park is one of the biggest game reserves in Africa and is a South African National Park. It occupies an area of 19,485 sq. km in the northeastern South African provinces of Limpopo and Mpumalanga and stretches 360 km from north to south and 65 km from east to west. The headquarters of the government are in Skukuza.","Table Mountain is a flat-topped mountain that forms a popular landmark overlooking South Africa's Cape Town. With many tourists using the cableway or climbing to the top, it is a major tourist attraction."];

southKorea = ["Jeju Island is a popular destination for honeymoons. The island is surrounded by beautiful beaches. You can explore the highest mountain in South Korea which is a dormant Volcano called Hallasan. The island is littered with hot springs and health spas so you can relax and enjoy your vacation.","Changdeokgung is one of the Five Grand Palaces built in the 15th century Joseon dynasty. This huge complex of buildings are filled with rooms fit for royalty. This palace has so many places to explore from royal libraries and dining rooms to the 78-acre garden located behind the palace. This beautiful palace is a must visit destination for tourists around the world."];

usa = ["Times square NYC: Times Square is one of the most lively places in the country, it puts visitors at the heart of the city. It's a hub for innovation and the world entertainment industry. It's one of the most widely visited places for tourists to visit with an estimated 50 million visitors annually and it's one of the world's busiest pedestrian locations.","Grand Canyon: Arizona's Grand Canyon is a natural structure characterized by layered bands of red granite, exposing millions of years of cross-sectional geological past. Vast in size, over its 277-mile length, the canyon measures 10 miles wide and a mile deep. Part of the region is a national park, with white-water rapids and sweeping vistas of the Colorado River.","Yosemite is a protected area of 1,200 square miles in the Sierra Nevada Mountains of northern California. For outdoor visitors, Yosemite is really a paradise: camping, rock climbing, horseback riding and rafting are just some of the things that you will appreciate. Skiing and snowboarding are provided throughout the season. Yosemite, declared a UNESCO World Heritage Site in 1984, has an average of 4 million visitors per year, but that figure grew to a peak of 5 million in 2016!"];

belgiumFood = ["Gaufre","Waterzooi","Pommes frites","Moules-frites","Chicons au Gratin"];
brazilFood = ["Feijoada", "Picanha", "Moqueca", "Farofa", "Açaí na tigela"];
greeceFood = ["Moussaka","Honey and Baklava","Courgette Balls", "Tomatokeftedes","Gyros"];
hungaryFood = ["Goulash","Langos", "Somlói Galuska", "Dobos torte", "Halászlé"];
morrocoFood = ["Couscous","Tagine"];
myanmarFood = ["Mohinga","Samosa"];
newZealandFood = ["Hangi","Pavlova"];
southAfricaFood = ["Potjiekos","Braai ","Chakalaka"];
southKoreaFood = ["Bibimbap","Soondae","Jajangmyeon","Tteokbokki","Kimchi Stew"];
usaFood = ["Hamburger","Hot Dog","Tacos", "Apple Pie"];

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slideshow");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";
if ( document.URL.includes("Belgium.html") ) {
    document.getElementById("state").textContent = belgium[slideIndex-1];
}
if ( document.URL.includes("Brazil.html") ) {
    document.getElementById("state").textContent = brazil[slideIndex-1];
}
if ( document.URL.includes("Greece.html") ) {
    document.getElementById("state").textContent = greece[slideIndex-1];
}
if ( document.URL.includes("Hungary.html") ) {
    document.getElementById("state").textContent = hungary[slideIndex-1];
}
if ( document.URL.includes("Morroco.html") ) {
    document.getElementById("state").textContent = morroco[slideIndex-1];
}
if ( document.URL.includes("Myanmar.html") ) {
    document.getElementById("state").textContent = myanmar[slideIndex-1];
}
if ( document.URL.includes("New%20Zealand.html") ) {
    document.getElementById("state").textContent = newZealand[slideIndex-1];
}
if ( document.URL.includes("South%20Africa.html") ) {
    document.getElementById("state").textContent = southAfrica[slideIndex-1];
}
if ( document.URL.includes("South%20Korea.html") ) {
    document.getElementById("state").textContent = southKorea[slideIndex-1];
}
if ( document.URL.includes("USA.html") ) {
    document.getElementById("state").textContent = usa[slideIndex-1];
}
}

function showDiv(n) {
  var i;
  var x = document.getElementsByClassName("slideshows");
  if (n > x.length) {slideIndex1 = 1}    
  if (n < 1) {slideIndex1 = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex1-1].style.display = "block";
if ( document.URL.includes("Belgium.html") ) {
    document.getElementById("states").textContent = belgiumFood[slideIndex1-1];
}
if ( document.URL.includes("Brazil.html") ) {
    document.getElementById("states").textContent = brazilFood[slideIndex1-1];
}
if ( document.URL.includes("Greece.html") ) {
    document.getElementById("states").textContent = greeceFood[slideIndex1-1];
}
if ( document.URL.includes("Hungary.html") ) {
    document.getElementById("states").textContent = hungaryFood[slideIndex1-1];
}
if ( document.URL.includes("Morroco.html") ) {
    document.getElementById("states").textContent = morrocoFood[slideIndex1-1];
}
if ( document.URL.includes("Myanmar.html") ) {
    document.getElementById("states").textContent = myanmarFood[slideIndex1-1];
}
if ( document.URL.includes("New%20Zealand.html") ) {
    document.getElementById("states").textContent = newZealandFood[slideIndex1-1];
}
if ( document.URL.includes("South%20Africa.html") ) {
    document.getElementById("states").textContent = southAfricaFood[slideIndex1-1];
}
if ( document.URL.includes("South%20Korea.html") ) {
    document.getElementById("states").textContent = southKoreaFood[slideIndex1-1];
}
if ( document.URL.includes("USA.html") ) {
    document.getElementById("states").textContent = usaFood[slideIndex1-1];
}
}

function lowerAudio(){
  var audio = document.getElementById("Audio");
  audio.volume = 0.2;
}

function toggle()
{
var f = document.getElementsByClassName("card-body");
var w = document.getElementsByClassName("post-container");
var x = document.getElementsByClassName("hello");
var y = document.getElementsByClassName("thedes");
var z = document.getElementsByClassName("theother");
var y = document.getElementsByClassName("thedes");
var z = document.getElementsByClassName("theother");
 if (b == true){
 x[0].style.backgroundColor = "white";
 x[0].style.color = "black";
 y[0].style.backgroundColor = "white";
 y[0].style.color = "black";
 z[0].style.backgroundColor = "white";
 z[0].style.color = "black";
 w[0].style.backgroundColor = "white";
 w[1].style.backgroundColor = "white";
 w[2].style.backgroundColor = "white";
 w[3].style.backgroundColor = "white";
 f[0].style.color="white";
 b = false;
  }
 else{
 x[0].style.backgroundColor = "black";
 x[0].style.color = "white";
 y[0].style.backgroundColor = "black";
 y[0].style.color = "white";
 z[0].style.backgroundColor = "black";
 z[0].style.color = "white";
 w[0].style.backgroundColor = "black";
 w[1].style.backgroundColor = "black";
 w[2].style.backgroundColor = "black";
 w[3].style.backgroundColor = "black";
 f[0].style.color="black";
 b = true;
 }
}