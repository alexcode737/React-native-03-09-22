import { StyleSheet, Text, View, Image } from "react-native";
import { myStyle} from '../assets/styles/Mystyles'


export default function Header (props){
    return(
        <View style={myStyle.viewHeader}>
            {/* <Text>{props.titulo}</Text>
            <Text>{props.subtitulo}</Text> */}
            <Image
                source={require(`../assets/images/${props.src}`)}
                style={{width:'100%', height:'100%', resizeMode:'stretch'}}
            />
        </View>
    );
}

