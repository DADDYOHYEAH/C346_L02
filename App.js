import React from 'react';
import {View, Text} from 'react-native';

// Exercise 1 + 3: function component with props
const Welcome = ({code, name}) => {
  return (
    <View>
      <Text>
        Welcome to {code} - {name}
      </Text>
    </View>
  );
};

// Exercise 2 + 3: class component
class ModuleInfo extends React.Component {
  render() {
    return (
      <View style={{marginTop: 50}}>
        <Text>These are my modules this semester:</Text>
        <Welcome code="C346" name="Mobile App Development"/>
        <Welcome code="C105" name="Introduction to Programming"/>
        <Welcome code="C337" name="Immersive Technologies"/>
      </View>
    );
  }
}

export default ModuleInfo;