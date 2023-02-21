import {StyleSheet, Text, View, KeyboardAvoidingView} from 'react-native';
import React, {useState, useLayoutEffect, useEffect} from 'react';
import {type LoginScreenProps} from '../../navigation/Types';
import Button from '../../components/UI/Button';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Input from '../../components/UI/Input';

const LoginScreen = ({navigation}: LoginScreenProps) => {
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');

  const [disabled, setDisabled] = useState(true);

  useLayoutEffect(() => {
    navigation.setOptions({
      statusBarColor: '#ff7b66',
    });
  }, [navigation]);

  useEffect(() => {
    if (phone.length === 12 && phone.startsWith('92') && name.length > 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [phone, name]);

  const onContinue = () => {
    navigation.navigate('Verification', {phone});
  };

  return (
    <View style={styles.rootContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Let's get Started</Text>
        <Text style={styles.subtitle}>Please enter your mobile number</Text>
        <Input
          value={phone}
          onChangeText={text => setPhone(text)}
          autoFocus={true}
          keyboardType="phone-pad"
          maxLength={12}
          placeholder="923365554477"
        />
        <Text style={styles.subtitle}>Please enter your name</Text>
        <Input
          value={name}
          onChangeText={text => setName(text)}
          keyboardType="default"
          maxLength={20}
          placeholder="Muhammad Umair"
        />
      </View>
      <KeyboardAvoidingView behavior="height">
        <Button
          isIcon={true}
          title="Continue"
          disabled={disabled}
          onPress={onContinue}>
          <Icon name="navigate-next" size={24} color="#fff" />
        </Button>
      </KeyboardAvoidingView>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#ff7b66',
    padding: 20,
  },
  container: {
    display: 'flex',
    flex: 1,
    marginTop: 55,
  },
  title: {
    fontSize: 30,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    color: '#fffffc',
    marginTop: 30,
  },
  error: {
    marginTop: 15,
    color: '#ffffff',
    width: '100%',
    textAlign: 'center',
    fontSize: 16,
  },
});
