import { createAction } from 'redux-actions';
import types from './types';
// import AsyncStorage from '@react-native-community/async-storage';

const login = createAction(
  types.LOGIN,
  async (payload) => {

    try {
      const request_token = await fetch('https://api.themoviedb.org/3/authentication/token/new?api_key=f7f6f9484a1e7c9382424a4c95fb2946')

      //generate request token
      const token = await request_token.json()
      if ('status_code' in token) throw token.status_message

      //allow request token to create session id using username and password
      const data = {...payload, request_token: token.request_token}

      const validate_with_login = await fetch('https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=f7f6f9484a1e7c9382424a4c95fb2946', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const login = await validate_with_login.json()

      //create session id
      if ('status_code' in login) throw login.status_message

      const request_session = await fetch('https://api.themoviedb.org/3/authentication/session/new?api_key=f7f6f9484a1e7c9382424a4c95fb2946', {
        method: 'POST',
        body: JSON.stringify({request_token: login.request_token}),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const session = await request_session.json()
      if ('status_code' in session) throw session.status_message

      //save account to database
      const getAccount = await fetch('https://api.themoviedb.org/3/account?api_key=f7f6f9484a1e7c9382424a4c95fb2946&session_id=' + session.session_id)
      const account = await getAccount.json()
      if ('status_code' in account) throw account.status_message

      const persist_data = {
        session_id: session.session_id,
        account_id: account.id,
        username: account.username,
        fullname: account.name
      }

      // await AsyncStorage.setItem('account', JSON.stringify(persist_data));
      // const persist = await AsyncStorage.getItem('account');
    }
    catch(error) {
      console.log(error)
    }
  }
);

export default {
  login
}
