# Weather Application

## Overview

A Flet application that presents city/location weather, forecasts and search history through an asynchronous weather-service layer.

## Objectives

- City/location weather
- Five-day forecast
- History
- Theme toggle
- Error handling

## Technologies Used

Python, Flet, HTTPX, python-dotenv, OpenWeatherMap.

## Methodology and Implementation

- Separate configuration and HTTPX service modules read OpenWeatherMap credentials from environment variables.
- Asynchronous requests retrieve current conditions and forecasts; UI handles city errors, theme and unit controls.
- Local history is stored as JSON; no private history or location screenshots are included.

## Results and Findings

- Source implements weather display, forecasts, history, error handling and theme controls. A service test script is provided.
- No live API calls or service tests were run for this portfolio update.

Historical saved results and source inspection; experiments and hardware were not rerun.

## Limitations

- An API key is required privately; .env, history and location-bearing screenshots are excluded.
- Configuration validates the API key at import time; network features depend on external service availability.

## Dataset

undefined

## Contributors

Tischia Ann R. Olivares — individual academic coursework, explicitly identified by the original lab README.
