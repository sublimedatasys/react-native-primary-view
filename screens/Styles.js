import { StyleSheet,Platform } from 'react-native';
import { Constants } from 'expo';

export default StyleSheet.create({
  HeadercontainerStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    alignContent: 'center',
    width: '100%',
    height: 20,
    marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight,
    paddingBottom: 25,
    marginBottom:13,
    paddingTop: 25,
    shadowOffset: { width: 10, height: 10 },  
    shadowColor: 'black',  
    shadowOpacity: 1,  
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
    listView:{
      marginLeft:10,
      marginRight:10,
      marginBottom:10,
      padding:10,
      borderRadius:5,
      backgroundColor:'#eee'
    },
    dateStyle:{
      fontSize: 12,
      fontWeight: 'bold',
      color:'gray'
    },
    ListItem:{
      marginBottom:10,
      padding:5,
      borderWidth:1,
      borderRadius:2,
      borderColor:'#dfdfdf',
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
      marginLeft:8,
    },
    iconStyle:{
      paddingTop:10  
    },
    productStyle: {
      width: '30%',
      textAlign: 'center',
    },
  });