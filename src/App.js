import React from "react";
import WeatherForm from "./WeatherForm";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <WeatherForm defaultCity="San Francisco" />
      </div>
    </div>
  );
}