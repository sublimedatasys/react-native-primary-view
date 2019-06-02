import { StyleSheet,Platform } from 'react-native';
import { Constants } from 'expo';

export default StyleSheet.create({
  HeadercontainerStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 45,
    marginTop: Platform.OS === 'ios' ? 30 : Constants.statusBarHeight,
    paddingBottom: 5,
    marginBottom:13,
    paddingTop: 5,
    elevation: 3,  
    zIndex:999,  
    backgroundColor: "#00a1d7",
  },
  HeadertitleStyle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',
    alignSelf: 'center',
  },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title:{
      fontSize:15,
      marginLeft:10,
      marginRight:10,
      fontWeight:'bold',
      marginBottom:10,
      padding:10,
    },
    listView:{
      marginLeft:10,
      marginRight:10,
      marginBottom:50,
      padding:10,
      borderRadius:5,
      backgroundColor:'#fafafb'
    },
    dateStyle:{
      fontSize: 12,
      fontWeight: 'bold',
      color:'gray'
    },
    ListItem:{
      marginBottom:10,
      padding:8,
      borderWidth:1,
      borderRadius:2,
      borderColor:'#ffeb9c',
    },
    textContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    titleStyle: {
      fontWeight: '400',
      fontSize: 15,
    },
    rowCol: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    amountText:{
      lineHeight:19,
      fontSize:19,
      marginLeft:4,
    },
    iconStyle:{
      paddingTop:10  
    },
    productStyle: {
      width: '30%',
      textAlign: 'center',
    },
  });