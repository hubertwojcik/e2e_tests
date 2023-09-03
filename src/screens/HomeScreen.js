import React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import HomeComponents from '../components/HomeComponents';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <HomeComponents
        text="Counters"
        background="#B2FADE"
        navigationScreen={() => {
          navigation.navigate('HomeTab', {screen: 'Counters'});
        }}
      />
      <HomeComponents
        text="Member List"
        background="#FAB7B2"
        navigationScreen={() => navigation.navigate('Members')}
      />
      <HomeComponents
        text="Cities"
        background="#D6FAB2"
        navigationScreen={() => navigation.navigate('Images')}
      />
      <HomeComponents
        text="Animation"
        background="#769FFF"
        navigationScreen={() => navigation.navigate('Animation')}
      />
      <HomeComponents
        text="Extras"
        background="#FFEB57"
        navigationScreen={() => navigation.navigate('Extras')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    margin: 2.5,
  },
});

export default HomeScreen;
