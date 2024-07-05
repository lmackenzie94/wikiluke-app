# wikiluke - React Native App

## Development

- Open XCode & Simulator (`Xcode > Open Developer Tools > Simulator`)
- `expo start` or `yarn ios`

## Updating

- update Expo SDK to latest version
- open Xcode
- open Simulator (`Xcode > Open Developer Tools > Simulator`)
  - this step may not be necessary
- `expo login` or `eas login`
  - install EAS CLI via `npm i --g eas-cli`
- `eas build -p ios --profile preview`
  - **July 4, 2024**: this command failed with `The "Run fastlane" step failed with an unknown error.`
- see the build in the [Expo Dashboard](https://expo.dev/)

The above didn't actually publish the app to Expo Go.

- to do so, I had to run `expo publish`

Maybe try these updates:

- https://docs.expo.dev/build-reference/migrating/
