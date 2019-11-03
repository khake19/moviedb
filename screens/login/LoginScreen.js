import React, { useState } from 'react';
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
  KeyboardAvoidingView
} from 'react-native';

const LoginScreen = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    props.auth.login({username, password})
  }
  return(
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Image source={logo} style={styles.logo} />
      <View style={styles.form}>
      <FormTextInput
        onChangeText={text => setUsername(text)}
        value={username}
        placeholder={strings.USERNAME}
      />
      <FormTextInput
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
        value={password}
        placeholder={strings.PASSWORD}
      />
      <Button
      label={strings.LOGIN}
      onPress={handleSubmit}
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
  }
});

export default container(withAuth(LoginScreen));
