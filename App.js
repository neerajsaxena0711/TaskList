import React from 'react';
import AppNavContainer from './src/navigations'
import { Provider } from 'react-redux';
import Store from '././src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Persistor } from '././src/redux/store';
import {
  StyleSheet,
  SafeAreaView,
} from 'react-native';



const App = () => {
  return (
    <Provider store={Store}>
      <PersistGate persistor={Persistor}>
        <SafeAreaView style={styles.container}>
          <AppNavContainer></AppNavContainer>
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 15,
    flex: 1
  }
});

export default App;
