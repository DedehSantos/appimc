




import React, {Component} from 'react';
import{
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  TextInput,
  View
  } from 'react-native';



type Props = {};
export default class App extends Component<Props>{
  constructor(props){
    super(props)
    this.state = {altura:0, massa:0, resultado:0,resultadoText:""}
    this.calcular = this.calcular.bind(this)
  }

calcular() {
  let imc = this.state.massa/ (this.state.altura * this.state.altura)

  let s = this.state
  s.resultado = imc
  this.setState(s)

  if(s.resultado<16){
    s.resultadoText ="Magreza Grave"

  } else if (s.resultado <17){
    s.resultadoText = "magreza Moderada"
  

} else if (s.resultado <18.5){
  s.resultadoText = "Magreza Leve"


} else if (s.resultado <25){
  s.resultadoText = "Saudável"


} else if (s.resultado <30){
  s.resultadoText = "Sobrepeso"


} else if (s.resultado <35){
  s.resultadoText = "Obsidade Grau I"

} else if (s.resultado <40){
  s.resultadoText = "Obsidade Grau II"


} else  {
  s.resultadoText = "Obsidade Grau III"}
}


  render(){
    return (
      <View style={styles.container}>
        <View style={styles.entradas}>
            <TextInput placeholder="Massa" keyboardType="numeric" style={styles.input} onChangeText={(massa)=>{this.setState({massa})}}/>
            <TextInput placeholder="Altura" keyboardType="numeric" style={styles.input} onChangeText={(altura)=>{this.setState({altura})}}/>

        </View>    
    <TouchableOpacity style={styles.button} onPress={this.calcular}><Text style={styles.buttonText}>CALCULAR</Text></TouchableOpacity>
        <Text style={styles.resultado}>{this.state.resultado.toFixed(2)}</Text>
        <Text style={[styles.resultado, {fontSize:35}]}>{this.state.resultadoText}</Text>
  
     </View>
    );
    
  }
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#FF4500',
  },
  entradas:{
    flexDirection:'row',
  },
 input:{
   height:80,
   textAlign:"center",
   width:"50%",
   fontSize:50,
   marginTop:24,
 
 },
 button:{
   backgroundColor:"#000",
  
 },
buttonText:{
  alignSelf:'center',
  padding:30,
  fontSize:40,
  color:"#fff"

},
resultado:{
  alignSelf:"center",
  color:"lightgray",
  fontSize:100,
  padding:15,
},


});









