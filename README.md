Basic Rest Api Demo
===================


Basic API demo using   **nodejs**.

How to run
-------------



> **Instructions:**

> - npm install
> - Update your Mongo db connection in server.js f
> - We recommend to use https://www.mongodb.com/
> npm start

EndPoints
-------------
**GET** http://localhost:3000/events
>[{
        "_id": "595d23e4e0cd7e4453b8dc28",
        "Title": "Evento 1",
        "Location": "Mexico City",
        "Category": "Music",
        "Start_date": "2017-12-25T00:00:00.000Z",
        "End_date": "2017-12-25T00:00:00.000Z",
        "Timing": "AllDay",
        "Time_end": "13:00\n",
        "Description": "Event description",
        "Price": 900,
        "Phone": "310-310-4563",
        "Email": "brian@gmail.com",
        "Event_url": "http://google.com",
        "Ticket_url": "http://google.com",
        "Photo": "http://URL",
        "Note_editor": "Will be Great",
        "Time_start": "09:00",
        "__v": 0,
        "status": [
            "active"
        ],
        "Created_date": "2017-07-05T17:37:40.055Z"
    },

**POST** http://localhost:3000/events
>"content-type: application/x-www-form-urlencoded",

** GET** http://localhost:3000/events/595d23e4e0cd7e4453b8dc28
> Get Event by ID
** PUT** http://localhost:3000/events/595d23e4e0cd7e4453b8dc28
> Update Event 

** DELETE ** http://localhost:3000/events/595d23e4e0cd7e4453b8dc28
> Delete Event by ID


Source
-------------
> https://www.codementor.io/olatundegaruba/nodejs-restful-apis-in-10-minutes-q0sgsfhbd
