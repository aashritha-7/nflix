import React from 'react';
import "./HomeScreen.css";
import Nav from  "../Nav";
import Banner from "../Banner";
import requests from '../Requests';
import Row from '../Row';

function HomeScreen() {
    return (
        <div className="homeScreen">
            <Nav />
            <Banner />
            <Row
                title='Netflix Originals'
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow
            />
            <Row title='Trending' fetchUrl={requests.fetchTrending} />
            <Row title='Popular' fetchUrl={requests.fetchPopular} />
            <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
            <Row title='Upcoming' fetchUrl={requests.fetchUpcoming} />
            <Row title='Action' fetchUrl={requests.fetchActionMovies} />
            <Row title='Comedy' fetchUrl={requests.fetchComedyMovies} />
            <Row title='Horror' fetchUrl={requests.fetchHorrorMovies} />
            <Row title='Romance' fetchUrl={requests.fetchRomanceMovies} />
            <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
        </div>
    )
}

export default HomeScreen
