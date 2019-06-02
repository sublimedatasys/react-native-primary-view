import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './common/Header';
import ListView from './common/ListView';
import style from './Styles';

// this is main component
export default class Index extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <View style={{flex:1, marginBottom:70}}>
        <Header title="TechFlex Solutions Challenge" />
        <Text style={style.title}>{this.props.title} Title</Text>
        <View style={style.listView}>
            <ListView />
        </View>
      </View>
    );
  }
}
