import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import colors from '../config/colors';

const FormTextInput = (props) => {

  const { error, style, ...otherProps } = props;
  return (
    <View style={[styles.container, style]}>
    <TextInput
      selectionColor={colors.DODGER_BLUE}
      style={styles.textInput}
      {...otherProps}
    />
    <Text style={styles.errorText}>{error || ""}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10
  },
  textInput: {
    height: 40,
    borderColor: colors.SILVER,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 20
  },
  errorText: {
    height: 20,
    color: colors.TORCH_RED
  }
})

export default FormTextInput;
