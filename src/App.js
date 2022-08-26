import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
function App() {
  return (
    <div className="App">     
    
      <Row title="Netflix Originals" fetchUrl = {requests.fetchNetflixOriginals} isLargeRow={true}/>
      <Row title="Trending Now" fetchUrl = {requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl = {requests.fetchTopRated} />
      <Row title="Horror Movies" fetchUrl = {requests.fetchHorrorMovies} />
      <Row title="Action Movies" fetchUrl = {requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl = {requests.fetchComedyMovies} />
      <Row title="Romance Movies" fetchUrl = {requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl = {requests.fetchDocumentaries} />
       
    </div>
    
  );
} 

export default App;
