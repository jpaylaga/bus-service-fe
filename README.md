# Bus Service Project Assignment

> ### This is the front-end side of the Bus Service test given to me.

----------

# Getting started

## Installation

Clone the repository

    git clone https://github.com/jpaylaga/bus-service-fe

Switch to the repo folder

    cd bus-service-fe

Install all the dependencies using npm

    npm install

Create a .env file

    touch .env
    
Supply the following environment variables inside .env

```
APP_API_URL=http://localhost:8000
APP_CLIENT_ID=<id here>
APP_CLIENT_SECRET=<client secret here>
APP_GRANT_TYPE=client_credentials

GOOGLE_MAPS_API_KEY=<key here>

#Optional variables - it will override device location
MOCK_LOCATION_LAT=8.496825705057368
MOCK_LOCATION_LNG=124.63419448137557
```

Start react js application

    npm run dev

You can now access the server at http://localhost:8080

**TL;DR command list**

    git clone https://github.com/jpaylaga/bus-service-fe
    cd bus-service-fe
    npm install
    touch .env
    npm run dev

## Dependencies

- [google-map-react](https://github.com/google-map-react/google-map-react) - For displaying google maps
- [dotenv](https://github.com/motdotla/dotenv) - For parsing .env variables
- [redux](https://github.com/reduxjs/redux) - For better state management
