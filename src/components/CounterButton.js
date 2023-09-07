import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

export default ({text, onPress, counter, counterTestId}) => {
  return (
    <View style={styles.view} testID="counterButton">
      <TouchableOpacity onPress={onPress}>
        <View style={styles.button} testID="counterButton">
          <Text
            style={styles.buttonText}
            testID={`counterButtonText-${counterTestId}`}>
            {text}
          </Text>
        </View>
      </TouchableOpacity>
      <View>
        <Text style={styles.text} testID={`counterTotal-${counterTestId}`}>
          {counter}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    paddingTop: 35,
    marginRight: 10,
  },
  button: {
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 10,
    height: 150,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#76D13B',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
    justifyContent: 'center',
    textAlign: 'center',
  },
  text: {
    fontSize: 60,
    alignSelf: 'center',
  },
});
