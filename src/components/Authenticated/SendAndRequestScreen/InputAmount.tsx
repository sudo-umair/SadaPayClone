import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {InputAmountProps} from './Types';

const InputAmount = ({amount, info, showInfo}: InputAmountProps) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputLabel}>Rs. {amount}</Text>
      <View style={styles.infoContainer}>
        {showInfo && (
          <>
            <Icon name="info" size={20} color="#ffffff" />
            <Text style={styles.inputInfo}>{info}</Text>
          </>
        )}
      </View>
    </View>
  );
};

export default InputAmount;

const styles = StyleSheet.create({
  inputContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    width: '100%',
    marginTop: 20,
  },
  inputLabel: {
    fontSize: 50,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    height: 20,
  },
  inputInfo: {
    color: '#ffffff',
    marginLeft: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
