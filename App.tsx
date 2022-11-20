import {SafeAreaView, StatusBar,Text, Platform} from 'react-native'
import FNavigation from './navigation';
import { useFonts } from 'expo-font';
import DataProvider from './context';
const App = ()=> {

  const [fonts] = useFonts({
    'Montserrat-Regular': require('./assets/fonts/static/Montserrat-Regular.ttf'),
    'Montserrat-Bold': require('./assets/fonts/static/Montserrat-Bold.ttf'),
  })

  if (!fonts) {
    return <SafeAreaView>
      <StatusBar barStyle={Platform.OS === 'android' ? "default":  "dark-content"}/>
        <Text>Loading...</Text>
    </SafeAreaView>
  }
  return <DataProvider>
    <StatusBar barStyle={Platform.OS === 'android' ? "default":  "dark-content"} />
    <FNavigation />
  </DataProvider>
}

export default App;