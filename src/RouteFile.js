import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home/Home"
import SignIn from "./Pages/SignIn/signin"
import MovieDetails from "./Pages/MovieDetails/moviedetails"

const RouteFile = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/moviedetails" element={<MovieDetails />} />
            </Routes>
        </div>
    )
}

export default RouteFile