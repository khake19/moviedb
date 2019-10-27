import React, { useEffect } from 'react';

export default withAuth = (Component) => (props) => {
  useEffect(() => {
    const { session, navigation } = props;
    navigation.navigate(session.sessionId?'SignedIn':'SignedOut');
  });
  return <Component {...props} />
}
