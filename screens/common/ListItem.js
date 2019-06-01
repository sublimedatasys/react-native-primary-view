import React from 'react';
import { View, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Styles from '../Styles';
import Moment from 'moment';
import { Icon } from 'react-native-elements';

export const ListItem = ({item}) => {
  const {titleStyle,amountText,iconStyle,dateStyle,rowCol,textContainer,productStyle,ListItem} = Styles;
  return (
    <Animatable.View delay={25} animation="lightSpeedIn" style={ListItem}>
      <View style={textContainer}>
        <View style={{ width: '50%' }}>
          <View style={[rowCol,{justifyContent: 'flex-start',marginBottom:10}]}>
            <Icon name='calendar-o' type='font-awesome' color='black' size={15} color='gray' style={iconStyle}/>
            <Text style={dateStyle}> {Moment(item.created).format('d MMM Y')}</Text>
          </View>
          <Text style={titleStyle}>{item.terrain.charAt(0).toUpperCase() + item.terrain.slice(1)}</Text>
        </View>
        <Text style={productStyle}>{item.gravity}</Text>
        <View style={rowCol}>
          <Icon name='dollar' type='font-awesome' color='green' size={15} style={iconStyle}/> 
          <Text style={amountText}>
            {item.surface_water != 'unknown'? item.surface_water : "0"}
          </Text>
        </View>
      </View>
    </Animatable.View>
  );
};

export default ListItem;