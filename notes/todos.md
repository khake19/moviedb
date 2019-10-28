
##Task
- ~~Set Up Environment~~
- ~~Set Up Redux~~
- ~~Design Duck Architecture~~
- ~~Add Login Page~~
- ~~Completion of API through Postman~~
- ~~Eject Expo~~
- ~~Authentication~~
- ~~Navigation~~
- ~~Display Movie List~~
- ~~Add Search~~
- Show Movie Details
- Show Movie Review
- Show Rating
- Post Rating
- Delete Rating
- Add to Watchlist
- ~~Listing of movies in watchlist~~


##Reminder:
  - Download X-code on Mac

## Need To Thinker: (still dabatable)
  - move ducks files to /modules file with same level with screens folder
  - ducks files should be independent to screens component since we can use same ducks files to different screens component. ex (movies, movie details)
  - home ducks folder should be replace to movies.


## Planning

### Redux Structure
  - Read more article on how ducks architecture works

### Redux Persist
  - Used this to store our sessions
  - Identify reducers on what to whitelist or blacklist

### Authentication  
  - aquire api key in themoviedb website
  - use api key to request for request key
  - login using username and password to validate our request key
  - using validated key, now we can request session id to be used as authorisation

### Navigation
  - use hoc hooks to authenticate all screens

Article:

handling api:
https://medium.com/better-programming/handling-api-like-a-boss-in-react-native-364abd92dc3d

config environments:
https://dev.to/calintamas/how-to-manage-staging-and-production-environments-in-a-react-native-app-4naa

persist store:
https://itnext.io/react-native-why-you-should-be-using-redux-persist-8ad1d68fa48b
https://github.com/react-native-community/async-storage

how to use hoc using hooks:
https://codeburst.io/reduce-your-boilerplate-code-for-redux-container-using-react-hoc-8c76584ccf0e?gi=2f31be2d4db

eject from expo to expokit:
https://docs.expo.io/versions/latest/expokit/expokit/
https://freakycoder.com/react-native-notes-1-eject-expo-with-expokit-fe1181a55f60

how to run xcode project:
https://www.dummies.com/web-design-development/mobile-apps/build-and-run-your-xcode-application/

install async-storage natively:
https://github.com/react-native-community/async-storage

gitignore file:
https://github.com/facebook/react-native/blob/master/.gitignore

use this link to display poster path:
https://image.tmdb.org/t/p/original/
https://www.themoviedb.org/talk/5aeaaf56c3a3682ddf0010de?language=en-US

themoviedb api return value:
##request token expired or invalid

`{
    "status_code": 33,
    "status_message": "Invalid request token: The request token is either expired or invalid."
}`

##request token validated successfully
`{
    "success": true,
    "expires_at": "2019-10-26 07:45:49 UTC",
    "request_token": "5d472f0dda67589752285fe5c251a6a26a8c512a"
}`

##session denied response:

`{
    "failure": true,
    "status_code": 17,
    "status_message": "Session denied."
}`

##session success
`{
    "success": true,
    "session_id": "df0d744c135fe156b9f4994ef128d8fd931549af"
}`


##get account successfully
`{
    "avatar": {
        "gravatar": {
            "hash": "ac6db47007d7d67eb86a8e53ebeb5517"
        }
    },
    "id": 8763122,
    "iso_639_1": "en",
    "iso_3166_1": "US",
    "name": "",
    "include_adult": false,
    "username": "krk"
}`

##get account wrong api key
`{
    "status_code": 7,
    "status_message": "Invalid API key: You must be granted a valid key.",
    "success": false
}`

##get account wrong session id
`{
    "status_code": 3,
    "status_message": "Authentication failed: You do not have permissions to access the service."
}`

## need to add to localstorage
- sesion id
- account id
- username
- avatar
