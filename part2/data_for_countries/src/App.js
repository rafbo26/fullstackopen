import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Para = ({ countries, weather, onClick }) => {
  if (countries.length > 10 || countries.length === 0) {
    return <p>Too many matches, specify another filter</p>
  } else if (countries.length > 1) {
    return <MultipleCountries countries={countries} onClick={onClick}/>
  } else if (countries.length === 0) {
  } else if (countries.length === 1) {
    const country = countries[0]
    return (
      <div>
        <SingleCountry  
          name={country.name} 
          capital={country.capital}
          population={country.population}
          languages={country.languages}
          flag={country.flag}
          />
        <Weather  
          capital={country.capital}
          temperature={weather.current.temperature}
          img={weather.current.weather_icons[0]}
          windSpeed={weather.current.wind_speed}
          windDirection={weather.current.wind_dir}
          />
      </div>
    )
  }
}

const MultipleCountries = ({ countries, onClick }) => {
  return countries.map(country => {
    return (
      <div key={country.name}>
        <span>{country.name}</span> 
        <button value={country.name} onClick={onClick}>show</button>
      </div>
    )
  })
}

const SingleCountry = ({ name, capital, population, languages, flag }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>capital {capital}</p>
      <p>population {population}</p>
      <h2>Languages</h2>
      <ul>
        {languages.map(lang => <li key={lang.name}>{lang.name}</li>)}
      </ul>
      <img src={flag} alt="country flag" width="100" height="100"/>
    </div>
  )
}

const Weather = ({ capital, temperature, img, windSpeed, windDirection }) => {
  return (
    <div>
      <h2>Weather in {capital}</h2>
      <p><b>temperature:</b> {temperature}</p>
      <img src={img} alt="weather_picture"/>
      <p><b>wind:</b> {windSpeed} mph direction {windDirection}</p>
    </div>
  )
}

function App() {
  const api_key = process.env.REACT_APP_API_KEY
  const [input, setInput] = useState('')
  const [countries, setCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])
  const [weather, setWeather] = useState({})
  const [url, setUrl] = useState(`http://api.weatherstack.com/current?access_key=${api_key}&query=Warsaw`)
  
  useEffect(() => {
    axios
    .get('https://restcountries.eu/rest/v2/all/')
    .then(response => {
      setCountries(response.data)
      setFilteredCountries(response.data)
    })
  },[])

  useEffect(() => {
    axios
      .get(url)
      .then(response => {
        setWeather(response.data)
      })
  },[url])

  const handleInput = ({target :{value}}) => {
    setInput(value)
    setFilteredCountries(filterCountries(value))
  }

  const handleClick = (event) => {
    const countries = filterCountries(event.target.value)
    setFilteredCountries(countries)
    setInput(event.target.value)
    setUrl(`http://api.weatherstack.com/current?access_key=${api_key}&query=${event.target.value}`)
  }
  
  const filterCountries = (input) => countries
    .filter(country => country
      .name
      .toLowerCase()
      .includes(input
        .toLowerCase()))
  
 
  return (
    <div>
        <span>find countries: </span>
        <input type="text" value={input} onChange={handleInput}/>
        <Para countries={filteredCountries} weather={weather} onClick={handleClick}/>
    </div>
  );
}

export default App;
