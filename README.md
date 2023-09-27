# Covid 19 Cases Tracker

**Description** 

This project is a web application that visualizes the distribution of confirmed cumulative COVID-19 cases worldwide. It includes a map where different shades of red are used to convey case severity, with darker shades representing countries with higher case counts and lighter shades indicating those with fewer cases. A legend is provided to explain the color code, and clicking on individual countries reveals pop-up content displaying the respective number of cases.

 **Purpose**

The main objective of this project is to not only provide the number of cases but also to offer a geographical representation of the pandemic's impact in terms of the global magnitude and trend.

 **Methodology**

1. Data Sources: To ensure the accuracy and reliability of COVID-19 data, reputable sources such as government health agencies and global health organizations were identified. The project used data from **[Johns Hopkins COVID-19 Data](https://github.com/CSSEGISandData/COVID-19)** for confirmed cumulative cases and **[GeoJSON Country Polygons](https://datahub.io/core/geo-countries)** for geographical information, allowing the mapping of data to specific countries.
2. Data Processing: The integration of COVID-19 data with GeoJSON map data involved associating them using the unique ISO3 codes of countries. This association enabled the linkage of retrieving country-specific data and representing their respective polygons delineating geographic boundaries.
3. User Interface: The user interface was designed to be intuitive and straightforward. Users can click on countries to access relevant information, including the country's name and the number of confirmed cumulative cases. The selected country is highlighted for clarity, and zoom-in and zoom-out functionality is available.

 **Technologies**

- Frontend: React, HTML, CSS
- Mapping: React Leaflet
- Data Parsing: PapaParse (CSV to JSON conversion)

**Note**

As of March 10, 2023, JHU has concluded data collection. Nevertheless, the website will continue to be accessible, offering information spanning from January 22, 2020, through March 10, 2023.
