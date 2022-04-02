import React from 'react';
import { StyleSheet } from 'react-native';
import { Button as ButtonNativeElement } from 'react-native-elements';

const styles = StyleSheet.create({
  style: {
    minWidth: '60%',
    borderRadius: 50
  }
});

const Button = (props) => {
  return (
    <ButtonNativeElement title={props.children} buttonStyle={{ ...styles.style, ...props.style }} onPress={props.onPress} />
  );
};

export default Button;