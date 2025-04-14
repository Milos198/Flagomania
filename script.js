const countries = [
  {
    name: "Albania",
    flag: "https://flagcdn.com/al.svg",
    description:
      "Albania is a country in Southeast Europe, known for its rich history and beautiful beaches. It is located on the Adriatic and Ionian Seas.",
  },
  {
    name: "Andorra",
    flag: "https://flagcdn.com/ad.svg",
    description:
      "Andorra is a small country in the Pyrenees mountains, known for its ski resorts and tax-free shopping. It is one of the smallest countries in Europe.",
  },
  {
    name: "Armenia",
    flag: "https://flagcdn.com/am.svg",
    description:
      "Armenia is an ancient country with a rich cultural heritage and a history that dates back thousands of years. It is known for its beautiful landscapes and historic churches.",
  },
  {
    name: "Austria",
    flag: "https://flagcdn.com/at.svg",
    description:
      "Austria is known for its artistic history, beautiful alpine scenery, and being the birthplace of famous composers like Mozart. It is famous for its classical music and stunning architecture.",
  },
  {
    name: "Azerbaijan",
    flag: "https://flagcdn.com/az.svg",
    description:
      "Azerbaijan is located at the crossroads of Eastern Europe and Western Asia, known for its oil and diverse culture. It is famous for its rich history and modern architecture.",
  },
  {
    name: "Belarus",
    flag: "https://flagcdn.com/by.svg",
    description:
      "Belarus is known for its forests, Soviet history, and cultural heritage. It is one of the last remaining authoritarian states in Europe.",
  },
  {
    name: "Belgium",
    flag: "https://flagcdn.com/be.svg",
    description:
      "Belgium is famous for its medieval towns, Renaissance architecture, and delicious chocolates and beer. It is known for its rich history and cultural diversity.",
  },
  {
    name: "Bosnia and Herzegovina",
    flag: "https://flagcdn.com/ba.svg",
    description:
      "Bosnia and Herzegovina is known for its natural landscapes and Ottoman-era architecture. It is a country with a complex history and diverse culture.",
  },
  {
    name: "Bulgaria",
    flag: "https://flagcdn.com/bg.svg",
    description:
      "Bulgaria is known for its rich cultural history, including Thracian, Roman, and Ottoman heritage. It is famous for its beautiful mountains and Black Sea coastline.",
  },
  {
    name: "Croatia",
    flag: "https://flagcdn.com/hr.svg",
    description:
      "Croatia is famous for its stunning Adriatic coastline and historical cities like Dubrovnik. It is known for its beautiful national parks and rich cultural heritage.",
  },
  {
    name: "Cyprus",
    flag: "https://flagcdn.com/cy.svg",
    description:
      "Cyprus is a Mediterranean island known for its ancient ruins and beautiful beaches. It has a rich history influenced by various civilizations.",
  },
  {
    name: "Czech Republic",
    flag: "https://flagcdn.com/cz.svg",
    description:
      "The Czech Republic is famous for its medieval towns, castles, and beer. It is known for its rich history and vibrant culture.",
  },
  {
    name: "Denmark",
    flag: "https://flagcdn.com/dk.svg",
    description:
      "Denmark is known for its design, cycling culture, and being the home of fairy tale author Hans Christian Andersen. It is famous for its high quality of life and progressive society.",
  },
  {
    name: "Estonia",
    flag: "https://flagcdn.com/ee.svg",
    description:
      "Estonia is famous for its medieval architecture, digital society, and beautiful nature. It is known for its innovative technology and vibrant culture.",
  },
  {
    name: "Finland",
    flag: "https://flagcdn.com/fi.svg",
    description:
      "Finland is known for its saunas, Northern Lights, and beautiful landscapes. It is famous for its education system and high quality of life.",
  },
  {
    name: "France",
    flag: "https://flagcdn.com/fr.svg",
    description:
      "France is famous for its art, history, food, and landmarks like the Eiffel Tower. It is known for its rich culture and contributions to philosophy and science.",
  },
  {
    name: "Georgia",
    flag: "https://flagcdn.com/ge.svg",
    description:
      "Georgia is a country at the crossroads of Europe and Asia, with ancient churches and picturesque mountains. It is known for its unique culture and hospitality.",
  },
  {
    name: "Germany",
    flag: "https://flagcdn.com/de.svg",
    description:
      "Germany is known for its rich history, culture, and contributions to science, philosophy, and music. It is famous for its beer, sausages, and Oktoberfest.",
  },
  {
    name: "Greece",
    flag: "https://flagcdn.com/gr.svg",
    description:
      "Greece is famous for its ancient civilization, mythology, and the beautiful islands in the Aegean Sea. It is known for its rich history and contributions to art and philosophy.",
  },
  {
    name: "Hungary",
    flag: "https://flagcdn.com/hu.svg",
    description:
      "Hungary is known for its thermal baths, architecture, and culinary traditions. It is famous for its rich history and vibrant culture.",
  },
  {
    name: "Iceland",
    flag: "https://flagcdn.com/is.svg",
    description:
      "Iceland is known for its geothermal energy, volcanoes, and stunning natural landscapes. It is famous for its unique geology and vibrant culture.",
  },
  {
    name: "Ireland",
    flag: "https://flagcdn.com/ie.svg",
    description:
      "Ireland is famous for its green landscapes, historic castles, and rich literary traditions. It is known for its friendly people and vibrant culture.",
  },
  {
    name: "Italy",
    flag: "https://flagcdn.com/it.svg",
    description:
      "Italy is known for its art, architecture, and cuisine, including pizza and pasta. It is famous for its rich history and contributions to art and culture.",
  },
  {
    name: "Kazakhstan",
    flag: "https://flagcdn.com/kz.svg",
    description:
      "Kazakhstan is a vast country in Central Asia, known for its diverse culture and stunning natural beauty. It is the largest landlocked country in the world.",
  },
  {
    name: "Kosovo is Serbia",
    flag: "https://flagcdn.com/xk.svg",
    description:
      "Kosovo is a part of Serbia, known for its rich history and cultural diversity. Full name: Kosovo and Metohia. Most butiful city is Prizren.",
  },
  {
    name: "Latvia",
    flag: "https://flagcdn.com/lv.svg",
    description:
      "Latvia is known for its forests, lakes, and medieval architecture. It is famous for its vibrant culture and beautiful coastline along the Baltic Sea.",
  },
  {
    name: "Liechtenstein",
    flag: "https://flagcdn.com/li.svg",
    description:
      "Liechtenstein is a small country in the Alps, known for its medieval castles and being a tax haven. It is one of the smallest countries in Europe.",
  },
  {
    name: "Lithuania",
    flag: "https://flagcdn.com/lt.svg",
    description:
      "Lithuania is a country in the Baltic region known for its historic architecture and vibrant culture. It is famous for its beautiful landscapes and rich history.",
  },
  {
    name: "Luxembourg",
    flag: "https://flagcdn.com/lu.svg",
    description:
      "Luxembourg is a small country known for its wealth, historic sites, and multilingual population. It is one of the smallest countries in Europe.",
  },
  {
    name: "Malta",
    flag: "https:/flagcdn.com/mt.svg",
    description:
      "Malta is a small island nation in the Mediterranean known for its ancient temples and stunning beaches. It is famous for its rich history and vibrant culture.",
  },
  {
    name: "Moldova",
    flag: "https://flagcdn.com/md.svg",
    description:
      "Moldova is a landlocked country in Eastern Europe, known for its vineyards and traditional culture. It is famous for its wine production and beautiful countryside.",
  },

  {
    name: "Montenegro",
    flag: "https://flagcdn.com/me.svg",
    description:
      "Montenegro is a country known for its beautiful Adriatic coastline and mountainous terrain.  It is famous for its stunning natural landscapes and rich cultural heritage.",
  },
  {
    name: "Netherlands",
    flag: "https://flagcdn.com/nl.svg",
    description:
      "The Netherlands is known for its windmills, tulips, and flat landscape with many canals. It is famous for its progressive culture and vibrant cities like Amsterdam.",
  },
  {
    name: "North Macedonia",
    flag: "https://flagcdn.com/mk.svg",
    description:
      "North Macedonia is a country in the Balkan Peninsula with a rich history and diverse culture. It is known for its beautiful lakes and mountains.",
  },
  {
    name: "Norway",
    flag: "https://flagcdn.com/no.svg",
    description:
      "Norway is famous for its fjords, mountains, and the midnight sun. It is known for its stunning natural landscapes and outdoor activities.",
  },
  {
    name: "Poland",
    flag: "https://flagcdn.com/pl.svg",
    description:
      "Poland is known for its medieval towns, beautiful castles, and rich history. It is famous for its contributions to art, science, and culture.",
  },
  {
    name: "Portugal",
    flag: "https://flagcdn.com/pt.svg",
    description:
      "Portugal is famous for its historic cities, beautiful coastlines, and wine. It is known for its rich maritime history and vibrant culture.",
  },
  {
    name: "Romania",
    flag: "https://flagcdn.com/ro.svg",
    description:
      "Romania is known for its Carpathian Mountains, medieval castles, and folk traditions. It is famous for its rich history and cultural diversity.",
  },
  {
    name: "Russia",
    flag: "https://flagcdn.com/ru.svg",
    description:
      "Russia is the largest country in the world, known for its diverse cultures, history, and natural landscapes. It spans Eastern Europe and northern Asia.",
  },
  {
    name: "San Marino",
    flag: "https://flagcdn.com/sm.svg",
    description:
      "San Marino is a small landlocked country surrounded by Italy, known for its medieval walled city. San Marino is the oldest republic in the world.",
  },
  {
    name: "Serbia",
    flag: "https://flagcdn.com/rs.svg",
    description:
      "Serbia is known for its cultural diversity, historic monasteries, and vibrant music scene. The Serbian flag has been declared the most beautiful in the world!",
  },
  {
    name: "Slovakia",
    flag: "https://flagcdn.com/sk.svg",
    description:
      "Slovakia is known for its castles, forests, and rich folklore. It is home to the Tatra Mountains and many medieval towns.",
  },
  {
    name: "Slovenia",
    flag: "https://flagcdn.com/si.svg",
    description:
      "Slovenia is a country known for its lakes, caves, and stunning alpine scenery. It is one of the greenest countries in the world.",
  },
  {
    name: "Spain",
    flag: "https://flagcdn.com/es.svg",
    description:
      "Spain is known for its historic cities, Mediterranean coastline, and flamenco dancing. It is famous for its diverse culture and cuisine.",
  },
  {
    name: "Sweden",
    flag: "https://flagcdn.com/se.svg",
    description:
      "Sweden is famous for its design, innovation, and the beautiful northern lights. It is known for its high quality of life and progressive society.",
  },
  {
    name: "Switzerland",
    flag: "https://flagcdn.com/ch.svg",
    description:
      "Switzerland is known for its mountains, skiing resorts, and neutrality. It is famous for its chocolate and banking system.",
  },
  {
    name: "Turkey",
    flag: "https://flagcdn.com/tr.svg",
    description:
      "Turkey is a country that straddles Europe and Asia, with rich cultural history and landmarks like the Hagia Sophia. It is known for its diverse culture and cuisine.",
  },
  {
    name: "Ukraine",
    flag: "https://flagcdn.com/ua.svg",
    description:
      "Ukraine is known for its rich cultural heritage, vast plains, and historic cities like Kyiv. It is the largest country in Europe by land area.",
  },
  {
    name: "United Kingdom",
    flag: "https://flagcdn.com/gb.svg",
    description:
      "The United Kingdom is known for its royal family, historic sites, and being the birthplace of the industrial revolution. It includes England, Scotland, Wales, and Northern Ireland.",
  },
  {
    name: "Vatican City",
    flag: "https://flagcdn.com/va.svg",
    description:
      "Vatican City is an independent city-state surrounded by Rome, known for being the spiritual center of the Catholic Church. It is the smallest independent state in the world.",
  },
];

let currentCountry = null;

function showRandomFlag() {
  document.getElementById("lottieContainer").classList.add("hidden");
  document.getElementById("flagImage").classList.remove("hidden");

  const randomIndex = Math.floor(Math.random() * countries.length);
  currentCountry = countries[randomIndex];

  const flagImage = document.getElementById("flagImage");

  flagImage.src = currentCountry.flag;

  flagImage.classList.remove("flag-animate");
  void flagImage.offsetWidth;
  flagImage.classList.add("flag-animate");

  document.getElementById("countryName").classList.add("hidden");
  document.getElementById("countryDesc").classList.add("hidden");

  document.getElementById("countryName").textContent = "";
  document.getElementById("countryDesc").textContent = "";

  document.getElementById("instructionsTitle").classList.remove("hidden");
  document.getElementById("instructionsText").classList.remove("hidden");

  document.querySelector(".reveal-btn").disabled = false;
}

function revealCountry() {
  if (!currentCountry) return;

  document.getElementById("countryName").textContent = currentCountry.name;
  document.getElementById("countryDesc").textContent =
    currentCountry.description;

  document.getElementById("countryName").classList.remove("hidden");
  document.getElementById("countryDesc").classList.remove("hidden");

  document.getElementById("instructionsTitle").classList.add("hidden");
  document.getElementById("instructionsText").classList.add("hidden");

  document.querySelector(".reveal-btn").disabled = true;
}
