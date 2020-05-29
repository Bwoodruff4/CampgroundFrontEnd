# Happy Camper App

## Table of Contents
* [General Info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Contact](#contact)

## General Info

The Happy Camper App allows a user to search for campground's registered with the National Parks Service within a specified state within the United States. Users can sign up to login and see campgrounds in their state as well as locations that have been favorited.

## Technologies

* HTML 5.0
* CSS 3.0
* Javascript
* Materialize 1.0
* Ruby - Version 2.6.1
* Rails 6.0
* ActiveRecord - Version 6.0 
* Sinatra - Version 2.0
* Sinatra-activerecord -  Version 2.0
* SQLite3 - Version 1.4

### API

#### National Park Service
https://www.nps.gov/subjects/developer/index.htm

#### Google Maps Javascript API
https://developers.google.com/maps/documentation/javascript/tutorial

#### Rails Back End
https://github.com/Bwoodruff4/CampgroundBackEnd

## Setup

This program comes equipped with all necessary gems. To use them locally, execute the command:

`$ bundle`

To install and use the database, run the commands:

`$ rake db:seed `

and 

`$ rake db:migrate`

Run the program by: 

`rails s to start rails server`
`lite-server to serve the web app and open it in a browser`

By default, rails back end runs on localhost:3000 and front end runs on localhost:3001

    
## Features

* User login
* Find campsites based on state
* Show user favorites

## Status

Project is in first phase of development. Future iterations will be faster, mobile responsive, and have more features such as campsite information and reservation links.

## Contact
Created by [Blake Woodruff](http://www.linkedin.com/in/blakewoodruffengineer)
