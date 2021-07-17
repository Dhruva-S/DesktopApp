# A DESKTOP APP
## Four main applications
## 1. NEWS app
## 2. COVID-19 stats 
## 3. A text editor
## 4. A to-do list
![DesktopApp](https://user-images.githubusercontent.com/73852505/123472983-8c36f000-d615-11eb-9e1e-995eea33b3f8.png)

## Made using
HTML,CSS,Javascript,Bootstrap,NodeJS<br>
ejs(Embedded Javascript) used as templating engine for NodeJS.

## NEWS App
An interface for reading the latest news made using gnews API (https://gnews.io/).
## COVID stats
A covid-19 stats page made using Open Disease Data API (https://disease.sh/).<br>
User can search for stats such as total covid cases,total recovered , country-wise.

## Text editor
A texteditor that allows you to edit text and change some styles.<br>
You can search for word definition and meanings.

## To-do list
A To-do list.

## Weather
Weather using openweather API.https://openweathermap.org/api

## Packages used(npm)
 express	<br>
 ejs	<br>
 word-definition -Fetches the word definition ,type and its meaning.	<br>
 nativefier-Converts a browser-based webpage/webpages to a desktop application(electron js).	<br>

## Issues
I had problems with the  News API (https://newsapi.org/).<br>
1)The newsapi when trying out on the local computer wouldn't work when client side requests were made.<br>
It however responded to requests from a server.<br>
This is probably because of security reasons.<br>
So to solve the issue i served user the page he requested through the server(localhost).<br>

2)Another issue i had was when i hosted the website.<br>
The newsapi this time wouldn't return me the data because of it's new policy <br>
in which the users making a request for data through a hosted (live) website <br>
must have subscribed to their premium plan.<Br>
I switched to https://gnews.io/ API to solve this issue.
