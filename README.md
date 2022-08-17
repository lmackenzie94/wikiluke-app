# wikiluke - React Native App

## Updating

- update Expo SDK to latest version
- open Xcode
- open Simulator (`Xcode > Open Developer Tools > Simulator`)
  - this step may not be necessary
- `expo login` or `eas login`
- `eas build -p ios --profile preview`
- see the build in the [Expo Dashboard](https://expo.dev/)

The above didn't actually publish the app to Expo Go.

- to do so, I had to run `expo publish`

Maybe try these updates:

- https://docs.expo.dev/build-reference/migrating/
