import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
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
        sectionTextId="counters"
      />
      <HomeComponents
        text="Member List"
        background="#FAB7B2"
        navigationScreen={() => navigation.navigate('Members')}
        sectionTextId="members"
      />
      <HomeComponents
        text="Cities"
        background="#D6FAB2"
        navigationScreen={() => navigation.navigate('Images')}
        sectionTextId="cities"
      />
      <HomeComponents
        text="Animation"
        background="#769FFF"
        navigationScreen={() => navigation.navigate('Animation')}
        sectionTextId="animation"
      />
      <HomeComponents
        text="Extras"
        background="#FFEB57"
        navigationScreen={() => navigation.navigate('Extras')}
        sectionTextId="extras"
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
