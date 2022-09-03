import {useState} from 'react';
import { Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import Header from './components/Header';
import {styles} from './assets/styles/Mystyles'
//const App = () =>{
export default function App(){
  // Hooks para estados con useState
  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
  const [resultado, setResultado] = useState('');
  let mostrar = ()=>{
    alert(`El valor 1 es ${valor1}`)
  }

  let sumar = function(){
    setResultado(parseFloat(valor1) + parseFloat(valor2));
  }

  let Calcular = (oper) =>{
    let mresult = 0;
    switch(oper){
      case "+":
        mresult = parseFloat(valor1) + parseFloat(valor2);
        break;
      case "-":
        mresult = parseFloat(valor1) - parseFloat(valor2);
        break;
      case "*":
        mresult = parseFloat(valor1) * parseFloat(valor2);
        break;
      case "/":
        mresult = parseFloat(valor1) / parseFloat(valor2);
        break;
    }
    setResultado(mresult)
  }

  const limpiar = ()=> {
    setValor1('');
    setValor2('');
    setResultado(0);
  }
  return (
    <View style={[styles.container,styles.alignView]}>
      <Header src="calculadora2.jpg"></Header>
      <View style={[styles.viewChild,styles.alignView,{marginTop:10}]}>
        <Image
          source={{uri:'https://www.antiguedades.es/38274-tm_large_default/antigua-calculadora-mecanica-triumphator-c-funcionando-muy-bien-alemania-circa-1930.jpg'}}
          style={{width:100, height:100}}
        />
          <Text>Valor 1</Text>
          <TextInput
            placeholder='Ingrese valor 1'
            style={{borderWidth:1, borderStyle:'solid', padding:5, textAlign:'center'}}
            onChangeText={valor1 => setValor1(valor1)}
            value={valor1}
          />
          <Text>Valor 2</Text>
          <TextInput
            placeholder='Ingrese valor 2'
            style={{borderWidth:1, borderStyle:'solid', padding:5, textAlign:'center'}}
            onChangeText={valor2 => setValor2(valor2)}
            value={valor2}
          />
          <Text>Resultado</Text>
          <Text>{new Intl.NumberFormat('es-CO').format(resultado)}</Text>
          <Text>{'\n'}</Text>
          <View style={{flexDirection:'row',flexWrap:'wrap'}}>
            <TouchableOpacity
              style={{backgroundColor:'green',padding:10,borderRadius:10, marginLeft:10}}
              onPress={()=>Calcular('+')}
            >
                <Text style={{color:'white',fontWeight:'bold'}}>+</Text>
            </TouchableOpacity>    
            <TouchableOpacity
              style={{backgroundColor:'yellow',padding:10,borderRadius:10, marginLeft:10}}
              onPress={()=>Calcular('-')}
            >
                <Text style={{color:'white',fontWeight:'bold'}}>-</Text>
            </TouchableOpacity>     
            <TouchableOpacity
              style={{backgroundColor:'red',padding:10,borderRadius:10, marginLeft:10}}
              onPress={()=>Calcular('*')}
            >
                <Text style={{color:'white',fontWeight:'bold'}}>X</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{backgroundColor:'blue',padding:10,borderRadius:10, marginLeft:10}}
              onPress={()=>Calcular('/')}
            >
                <Text style={{color:'white',fontWeight:'bold'}}>/</Text>
            </TouchableOpacity>  
            <TouchableOpacity
              style={{backgroundColor:'purple',padding:10,borderRadius:10}}
              onPress={limpiar}
            >
                <Text style={{color:'white',fontWeight:'bold'}}>limpiar</Text>
            </TouchableOpacity> 
          </View>
      </View>
    </View>
  );
}


