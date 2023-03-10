import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import {NumberInputProps} from './Types';

const NumberInput = ({
  innerRef,
  previousRef,
  nextRef,
  value,
  index,
  onChangeText,
  onSubmitEditing,
  autoFocus,
  style,
  keyboardType,
  maxLength,
  secureTextEntry,
}: NumberInputProps) => {
  const [focused, setFocused] = React.useState(false);

  const onKeyPress = (e: any) => {
    if (e.nativeEvent.key === 'Backspace') {
      onChangeText('', index);
      previousRef?.current?.focus();
    } else {
      nextRef?.current?.focus();
    }
  };

  const onFocus = () => {
    setFocused(true);
  };

  const onBlur = () => {
    setFocused(false);
  };

  return (
    <View style={styles.container}>
      <TextInput
        ref={innerRef}
        style={[
          styles.numberInput,
          focused && styles.numberInputFocused,
          style,
        ]}
        value={value ?? ''}
        onChangeText={text => onChangeText(text, index)}
        keyboardType={keyboardType ?? 'number-pad'}
        autoFocus={autoFocus ?? false}
        maxLength={maxLength ?? 1}
        placeholder=""
        textAlignVertical="center"
        verticalAlign="middle"
        placeholderTextColor={'#e6e6e6'}
        onKeyPress={onKeyPress}
        onFocus={onFocus}
        onBlur={onBlur}
        onSubmitEditing={onSubmitEditing ?? (() => {})}
        caretHidden={true}
        secureTextEntry={secureTextEntry ?? false}
      />
    </View>
  );
};

export default NumberInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    aspectRatio: 1,
  },
  numberInput: {
    flex: 1,
    padding: '10%',
    margin: '10%',
    textAlign: 'center',
    fontSize: 40,
    color: '#ffffff',
    borderBottomColor: '#f6c8c4',
    borderBottomWidth: 2,
  },
  numberInputFocused: {
    borderBottomWidth: 5,
  },
});
