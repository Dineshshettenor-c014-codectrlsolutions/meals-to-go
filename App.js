import React from 'react';

import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

import { theme } from './src/infrastructure/theme';
import { Navigation } from './src/infrastructure/navigation';
import { initializeApp } from "firebase/app";
// import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
// import { LocationContextProvider } from './src/services/location/location.context';
// import { FavouritesContextProvider } from './src/services/favourites/favourites.context';

import { AuthenticationContextProvider } from './src/services/authentication/authentication.context';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDV5KgvpOxrzPAe5yiMuqf14FzRpTaBceE",
  authDomain: "mealstogo-b3d1c.firebaseapp.com",
  projectId: "mealstogo-b3d1c",
  storageBucket: "mealstogo-b3d1c.appspot.com",
  messagingSenderId: "836090928030",
  appId: "1:836090928030:web:5c4c66cc4937c70a4f548f"
};

initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);



export default function App() {

  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  // useEffect(() => {
  //   setTimeout(() => {
  //     firebase
  //       .auth()
  //       .signInWithEmailAndPassword("mo@binni.io", "test123")
  //       .then((user) => {
  //         setIsAuthenticated(true);
  //       })
  //       .catch((e) => {
  //         console.log(e);
  //       });
  //   }, 2000);
  // }, []);

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });
  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  // if (!isAuthenticated) return null;

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
        {/* <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider> */}
              <Navigation />
            {/* </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider> */}
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
