/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

$(document).foundation();

    class Movies {
      constructor(...movie) {
        this.movie = movie;
      }

      saveMv(m_name, m_station, m_year, m_ratings)
      {
        this.movie.name = m_name;
        this.movie.station = m_station;
        this.movie.year = m_year;
        this.movie.rating = m_ratings;

        if (JSON.parse(localStorage.getItem("moviefiles")) == null) {
          var movie_array = [];
          var newMovie = {
               "name":        "Favourite Movie",
               "station":     "Year Published",
               "year":        "Station Played",
               "ratings":     "rated"
           };

           movie_array.push(newMovie);
           localStorage.setItem("moviefiles", JSON.stringify(movie_array));
        }else{
          var stored = JSON.parse(localStorage.getItem("moviefiles"));

          var addedMovie = {
               "name":        this.movie.name,
               "station":     this.movie.station,
               "year":        this.movie.year,
               "ratings":     this.movie.rating
           };
          stored.push(addedMovie);
          localStorage.setItem("moviefiles", JSON.stringify(stored));

        }


      }

      load_movie(){
        load_mov();
      }

      }






        var save_A_movie = document.getElementById('save_A_movie_btn');
        save_A_movie.addEventListener('click',start_save, true);
        function start_save(){
          saveMovie();
        }



    function saveMovie(){
      var m_name = document.getElementById('name').value;
      var m_station = document.getElementById('station').value;
      var m_year = document.getElementById('year').value;
      var m_ratings = document.getElementById('ratings').value;

      var mov = new Movies();
      mov.saveMv(m_name,m_station, m_year, m_ratings);
      mov.load_movie(m_name, m_station, m_year, m_ratings);

      alert('hallo')

    }

    function load_mov() {
      var storedNames = JSON.parse(localStorage.getItem("moviefiles"));
      for (var i = 1; i < storedNames.length; i++) {
        let name = storedNames[i].name;
        let station = storedNames[i].station;
        let year = storedNames[i].year;
        let ratings = storedNames[i].ratings;

        document.getElementById('movie_list').innerHTML += `
        <tr>
          <td>${i}</td>
          <td>${name}</td>
          <td>${station}</td>
          <td>${year}</td>
          <td>${ratings}</td>
        </tr>
        `;

        let goodMovie = new Promise(function(resolve, reject) {
          if (ratings>6) {
            resolve('Good Movie');
          }else {
            reject('Not a so good movie');
          }
        });

        goodMovie.then(function(msg){
          document.getElementById('status_add').innerHTML = `<img src="img/happy_emoji.jpg" width="20%"> ${name} is A ${msg}`;
          console.log(msg);
        })
        .then(function(){
          document.getElementById('thead').className = 'happy';
        }).catch(function (error) {
          document.getElementById('status_add').innerHTML = `<img src="img/crying_emoji.png" width="20%"> ${name} is ${error}`;
          document.getElementById('thead').className = 'sad';
          console.log(error);
        });

      }
      // var storedNames = JSON.parse(localStorage.getItem("moviefiles"));
      // document.getElementById('movie_list').innerHTML += `<li>${storedNames}</li>`;
      console.log(storedNames);
    }

    load_mov()


/*-=------------0==================
    ES6 M modules
-=-------------0===================*/
// function top_trends() {
//   import {favourites} from '/js/external.js';
//
//   var top_mvs = favourites();
//   console.log(top_mvs);
// }
//
// top_trends();

function* tiMer() {
  var countDownDate = new Date("Dec 5, 2017 15:37:25").getTime();
    var now = new Date().getTime();
  while(true){
    var distance = countDownDate - now;
    return distance;
}
}
setInterval(function() {

var itm = tiMer();
var timed = itm.next().value;

var days = Math.floor(timed / (1000 * 60 * 60 * 24));
var hours = Math.floor((timed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((timed % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((timed % (1000 * 60)) / 1000);

document.getElementById("timerBanner").innerHTML = days + "d " + hours + "h "
 + minutes + "m " + seconds + "s "+" <strong>Until the Realease of STAR WARS: THE LAST JEDI 2017</strong>";

},100)


/***/ })
/******/ ]);