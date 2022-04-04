# CarRental App
App used to browse data about cars for rental.

## Table of contents
* [General info](#general-info)
* [Technologies](#Technologies)
* [Screenshots](#Screenshots)
* [Further improvments](#Further-improvments)

## General info
App with 3 main screens used for the purposes of browsing through a list of cars, browsing the details of a specific car, comparing cars against one another. "SearchScreen" used for browsing cars has additional funtion of filtering by brand of the car. 

"DetailsScreen" allows for looking up pictures of a given car, it's parameters and possible PickUp locations.

"CompareScreen" allows for comapring parametrs of one car against another.

Data about cars taken from:
https://billionrent.com/en/locations/poland-en

## Technologies
* React Native Drawer Navigation
* React Native Reanimated
* Hooks: useRef, useEffect, useState, useContext, createContext

## Screenshots
![sample1](http://paulatrenuje.pl/wp-content/uploads/2022/04/Simulator-Screen-Shot-iPhone-11-2022-04-04-at-22.42.29.png)
![sample2](http://paulatrenuje.pl/wp-content/uploads/2022/04/Simulator-Screen-Shot-iPhone-11-2022-04-04-at-22.42.40.png)
![sample3](http://paulatrenuje.pl/wp-content/uploads/2022/04/Simulator-Screen-Shot-iPhone-11-2022-04-04-at-22.42.49.png)
![sample4](http://paulatrenuje.pl/wp-content/uploads/2022/04/Simulator-Screen-Shot-iPhone-11-2022-04-04-at-22.43.13.png)
![sample5](http://paulatrenuje.pl/wp-content/uploads/2022/04/Simulator-Screen-Shot-iPhone-11-2022-04-04-at-22.43.43.png)
![sample6](http://paulatrenuje.pl/wp-content/uploads/2022/04/Simulator-Screen-Shot-iPhone-11-2022-04-04-at-22.43.52.png)

## Further improvments
* "DetailsScreen" remains empty for now
* The map with Pick up locations in DetailsScreen remains static for now. The markers are universal for every car.
* The filtering options for now are limited only to the brand. Filtering can be expended into keyword searches and filtering by car parameters.
