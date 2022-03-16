import * as React from 'react';
import { Text, View, StyleSheet,Switch } from 'react-native';
import Constants from 'expo-constants';

class Counter extends React.Component{
  constructor(){
    super();
    this.state = {
      count:0
    }
  }
  shouldComponentUpdate(nextProps,nextState){
    return (nextState.count % 2 == 0)
  }
  componentDidMount(){
    this.inteval = setInterval(this.inc,1000);
  }
  inc = () => {
    this.setState(prevState => (
      {
        count:prevState.count + 1
      }
    ))
  }
  componentWillUnmount(){
    clearInterval(this.inteval);
  }
  render(){
    return (
      <View>
      <Text style={styles.counter}>{this.state.count}</Text>
      </View>
    )
  }
}

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      showCouter:true
    }
  }
  toggleShowCounter = () => {
    console.log(this.state.showCouter)
    this.setState(prev => ({
      showCouter:!prev.showCouter
    }))
  }
 render(){
    return (
 <View style={styles.container}>
 <Switch value={this.state.showCouter} onValueChange={this.toggleShowCounter} />
 <Text>Counter</Text>
 {this.state.showCouter && <Counter />}
 </View>
  );
 }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    alignItems:'center',
    padding: 8,
  },
  counter: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
