import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import HealthCard from 'react-native-health-card';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

class ReactNativeHealthCardApp extends Component {
  constructor(props) {
    super(props);
    this.state = { showBack: false, focus: 'all', cardHolderName: '' };
  }

  render() {
    return (
      <View style={styles.container}>
        <HealthCard
          showSwipeBar
          cardHolderName={this.state.cardHolderName}
          memberNumber={this.state.memberNumber}
          issueDate={this.state.issueDate}
          rank={this.state.rank}
          issueNumber={this.state.issueNumber}
          issueDateFormat="dd/mm/yy"
          focus={this.state.focus}
          type="generic"
        />
        <TextInput
          style={{ height: 40, left: 20, top: 20 }}
          maxLength={8}
          placeholder="Type member number..."
          onFocus={() => this.setState({ focus: 'memberNumber' })}
          onChangeText={memberNumber => this.setState({ memberNumber })}
        />
        <TextInput
          style={{ height: 40, left: 20, top: 20 }}
          maxLength={10}
          placeholder="Type issue date..."
          onFocus={() => this.setState({ focus: 'issueDate' })}
          onChangeText={issueDate => this.setState({ issueDate })}
        />
        <TextInput
          style={{ height: 40, left: 20, top: 20 }}
          maxLength={2}
          placeholder="Type card rank..."
          onFocus={() => this.setState({ focus: 'rank' })}
          onChangeText={rank => this.setState({ rank })}
        />
        <TextInput
          style={{ height: 40, left: 20, top: 20 }}
          maxLength={2}
          placeholder="Type issue number..."
          onFocus={() => this.setState({ focus: 'issueNumber' })}
          onChangeText={issueNumber => this.setState({ issueNumber })}
        />
        <TextInput
          style={{ height: 40, left: 20, top: 20 }}
          placeholder="Type card holder name..."
          onFocus={() => this.setState({ focus: 'cardHolderName' })}
          onChangeText={cardHolderName => this.setState({ cardHolderName })}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('ReactNativeHealthCardApp', () => ReactNativeHealthCardApp);
