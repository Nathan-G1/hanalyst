import React from 'react';
import {Text} from 'react-native';
import {withTheme} from 'react-native-elements';

function Report(props) {
  const {theme, updateTheme, replaceTheme} = props;
  return <Text style={{color: theme.colors.primary}}>Yo!</Text>;
}

export default withTheme(Report);
