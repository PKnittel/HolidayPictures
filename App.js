import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default class App extends React.Component {
  renderText() {
    if(this.flag) {
      return (
        <View>
          <Text>Open up App.js to start working on your appoloolo!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
        </View>
        );
    } else {
      return (
        <View>
          <Image source={require('./open.jpg')} style={{width: 300, height: 200}}/>
          <Text>Öffne App.js um die Arbeit an deiner App zu beginnen!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
        </View>
        );
    }
  }

  constructor() {
    super();
    this.style = styles.container;
    this.flag = false;
    this.onClickButton = this.onClickButton.bind(this);
    this.onClickCamera = this.onClickCamera.bind(this);
  }

  onClickButton(){
    this.style = this.flag ? styles2.container : styles.container;
    this.flag = !this.flag;
    this.forceUpdate();
  }

  onClickCamera(){
    //this.canUseCamera(this.onClickButton);
  }

  render() {
    return (
      <View style={this.style}>
        {this.renderText()}
        <Button title='Button' onPress={this.onClickButton}/>
        <Button title='Camera' onPress={this.onClickCamera}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5fa',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
