import { StyleSheet } from "react-native-web";

const myStyle = StyleSheet.create({
    viewHeader:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'orange',
        width:'80%',
        height:300
    }
})


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    viewChild:{
      flex:5, 
      backgroundColor:'yellowgreen',
      width:'80%',
    },
    alignView:{
      justifyContent:'center',
      alignItems:'center'
    }
  });

  export {myStyle, styles}