
let city, userInput;

const $location = $("#location")
const $year = $("#year")
const $feels = $("#feels")
const $description = $("#weather")
const $input = $('input[type="text"]')

$("form").on("submit", handleGetData)

function handleGetData(event) {
  event.preventDefault()
  // calling preventDefault() on a 'submit' event will prevent a page refresh
  userInput = $input.val()
  // getting the user input
  $.ajax({
    url: "https://api.openweathermap.org/data/2.5/weather?q=London&appid=a5d102fee979748251f0095677025310&units=metric" + userInput,
  }).then(
    (data) => {
      city = data
      render()
    },
    (error) => {
      console.log("bad request", error)
    }
  )
}

function render() {
  $location.text(lsys.name)
  $temp.text(main.temp)
  $feels.text(main.feels_like)
  $weather.text(weather.description)
}