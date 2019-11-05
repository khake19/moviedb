import React, { useState, useImperativeHandle, forwardRef, useRef } from 'react';
import container from './container';
import { withAuth } from '../../hoc';
import Button from '../../components/Button';
import FormTextInput from '../../components/FormTextInput';
import colors from '../../config/colors';
import strings from '../../config/strings';
import logo from '../../assets/images/logo.png';
import {
  StyleSheet,
  View,
  Image,
  KeyboardAvoidingView,
  Text
} from 'react-native';


const LoginScreen = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameTouched, setUsernameTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);


  const handleSubmit = () => {
    props.auth.login({username, password})
  }

  const usernameError = !username && usernameTouched ? strings.USERNAME_REQUIRED: null;
  const passwordError = !password && passwordTouched ? strings.PASSWORD_REQUIRED: null;

  return(
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Image source={logo} style={styles.logo} />
      <View style={styles.form}>
      {props.error && <View style={styles.errorContainer}><Text style={styles.errorText}>{props.error}</Text></View>}
      <FormTextInput
        onChangeText={text => setUsername(text)}
        value={username}
        returnKeyType="done"
        placeholder={strings.USERNAME}
        onBlur={() => setUsernameTouched(true)}
        error={usernameError}
        autoCapitalize = 'none'
      />
      <FormTextInput
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
        value={password}
        placeholder={strings.PASSWORD}
        returnKeyType="done"
        onBlur={() => setPasswordTouched(true)}
        error={passwordError}
      />
      <Button
      label={strings.LOGIN}
      onPress={handleSubmit}
      disabled={!username || !password}
      />
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
    alignItems: "center",
    justifyContent: "space-between"
  },
  logo: {
    flex: 1,
    width: "80%",
    resizeMode: "contain",
    alignSelf: "center"
  },
  form: {
    flex: 1,
    justifyContent: "center",
    width: "80%"
  },
  errorContainer: {
    backgroundColor: "#FFD2D2",
    borderRadius: 4,
    marginBottom: 50,
    padding: 12
  },
  errorText: {
    color: "#D8000C",
    textAlign: "center"
  }
});

export default container(withAuth(LoginScreen));
