## Task

- ~~Set Up Environment~~
- ~~Set Up Redux~~
- ~~Design Duck Architecture~~
- ~~Completion of API through Postman~~
- ~~Eject Expo~~
- ~~Hydrate/Persist redux store~~
- ~~Add Login Page~~
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
- Improve overall design

## How to Start Application in ios:

> This will build your code.Do this only if you have package added
> Add a build folder in ios. it means its ready to execute xcode

- yarn install
- cd ios/ && pod install
- yarn ios

> https://docs.expo.io/versions/v36.0.0/workflow/ios-simulator/
> Make sure you have the latest Xcode.
> If you don't have it already, install CocoaPods, which is a native dependency manager for iOS.
> Run pod install from your project's ios directory.
> Open your project's xcworkspace file in Xcode.
> Use Xcode to build, install and run the project on your test device or simulator. (this will happen by default if you click the big "Play" button in Xcode.)
> Once it's running, the iOS app should automatically request your JS bundle from the project you're serving from Expo CLI.

> https://github.com/jhen0409/react-native-debugger

## Reminder:

- Download X-code on Mac

## Need To Thinker: (still dabatable)

- move ducks files to /modules file with same level with screens folder
- ducks files should be independent to screens component since we can use same ducks files to different screens component. ex (movies, movie details)
- home ducks folder should be replace to movies.

## Bugs

- Currently movie details wont add new set of data once reach the bottom.

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

### Session object

- sesion id
- account id
- username
- fullname

## Article:

[api](https://medium.com/better-programming/handling-api-like-a-boss-in-react-native-364abd92dc3d) - Handle api

[persist redux store](https://itnext.io/react-native-why-you-should-be-using-redux-persist-8ad1d68fa48b) - Use to authenticate via store

[async storage](https://github.com/react-native-community/async-storage) - Need by persist redux for store

[hoc hooks](https://codeburst.io/reduce-your-boilerplate-code-for-redux-container-using-react-hoc-8c76584ccf0e?gi=2f31be2d4db) - Hooks to handle authentication

[expokit](https://docs.expo.io/versions/latest/expokit/expokit/) - Exit expo and use expokit

[xcode run and build](https://www.dummies.com/web-design-development/mobile-apps/build-and-run-your-xcode-application/) - Run xcode in react native project
