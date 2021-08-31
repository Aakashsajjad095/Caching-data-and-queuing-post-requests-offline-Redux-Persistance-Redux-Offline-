import React, { Fragment, useEffect } from 'react';
import { StatusBar, LogBox, } from 'react-native';
import { StyleProvider, Container, Root } from 'native-base'
import { Colors } from "./app/res/style/colors"
import StackRoute from './app/src/router/StackRoute';
import { Provider } from "react-redux"
import { store, persistor } from './app/src/redux/store/store';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {

    useEffect(()=>{
    
       
        LogBox.ignoreLogs(['Warning: ...']); 
  LogBox.ignoreAllLogs();
    },[])

    return (
        <Fragment>
              <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}></PersistGate>
                <StatusBar barStyle="light-content" backgroundColor={Colors.NewBackgroundColor} />
                <StackRoute  />
                </Provider>
        </Fragment>
    );
};

export default App;