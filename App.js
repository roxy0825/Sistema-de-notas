import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';
  
export default function App() {
  const [ident, setIdent] = useState('');
  const [nom, setNom] = useState('');
  const [asig, setAsig] = useState('');
  const [nota1, setNota1] = useState('');
  const [nota2, setNota2] = useState('');
  const [nota3, setNota3] = useState('');
  const [defi, setDefi] = useState(0);
  const [obs, setObs] = useState('');
  const [notasGuardadas, setNotasGuardadas] = useState([]);

  const calcularNotaDefinitiva = () => {
    if (ident === '' || nom === '' || asig === '' || nota1 === '' || nota2 === '' || nota3 === '') {
      alert('Por favor, complete todos los campos');
      return;
    }

    const notas = [parseFloat(nota1), parseFloat(nota2), parseFloat(nota3)];

    for (let i = 0; i < notas.length; i++) {
      if (isNaN(notas[i]) || notas[i] < 0 || notas[i] > 5) {
        alert('Las notas deben estar en el rango de 0 a 5');
        return;
      }
    }

    const definitiva = notas.reduce((total, nota) => total + nota, 0) / notas.length;
    setDefi(definitiva);
    let mensaje ="" 

    if (definitiva >= 3) {
      mensaje ="Aprobada" 
    } else if (definitiva >= 2 && definitiva < 2.94) {
      mensaje ="Habilitada" 
    } else {
      mensaje ="Reprueba" 
    }
    setObs(mensaje)

    const nota = { ident, nom, asig, nota1, nota2, nota3, definitiva, mensaje };
    setNotasGuardadas([nota]);

    alert('La nota definitiva se ha calculado correctamente y se ha guardado en la lista de notas');
  };

  const buscarNotas = () => {
    const notas = notasGuardadas.filter(nota => nota.ident === ident);
    if (notas.length === 0) {
      alert('No se encontraron notas para la identificación ingresada');
      return;
    }

    const nota = notas[0];
    setIdent(nota.ident);
    setNom(nota.nom);
    setAsig(nota.asig);
    setNota1(nota.nota1);
    setNota2(nota.nota2);
    setNota3(nota.nota3);
    setDefi(nota.definitiva);
    setObs(nota.mensaje);

    alert('Se encontraron notas para la identificación ingresada');
  };

  const limpiarCampos = () => {
    setIdent('');
    setNom('');
    setAsig('');
    setNota1('');
    setNota2('');
    setNota3('');
    setDefi(0);
    setObs('');
  };

 return (
    <View style={styles.container}>

      <View style={[styles.container, {flex:1}]}>
        <Text style={{backgroundColor:'#9fd288',padding:"5%",width:"400%",textAlign:'center' }}>SISTEMA DE NOTAS</Text>
        </View>

         
        <View style={[styles.container, {flex:3}]}>
          <View style={[styles.boxInput]}>
            <Text>Identificacion: </Text>
            <TextInput placeholder='' style={styles.inputs} onChangeText={setIdent} value={ident}></TextInput>
          </View>

       
          <View style={[styles.boxInput]}>
            <Text>Nombres: </Text>
            <TextInput placeholder='' style={styles.inputs} onChangeText={setNom} value={nom}></TextInput>
          </View>

         
          <View style={[styles.boxInput]}>
            <Text>Asignatura: </Text>
            <TextInput placeholder='' style={styles.inputs} onChangeText={setAsig} value={asig}></TextInput>
          </View>

          
          <View style={[styles.boxInput]}>
            <Text>Nota Momento 1 (30%): </Text>
            <TextInput placeholder='' style={styles.inputs} onChangeText={setNota1} value={nota1}></TextInput>
          </View>

         
          <View style={[styles.boxInput]}>
            <Text>Nota Momento 2 (35%): </Text>
            <TextInput placeholder='' style={styles.inputs} onChangeText={setNota2} value={nota2}></TextInput>
          </View>

          
          <View style={[styles.boxInput]}>
            <Text>Nota Momento 3 (35%): </Text>
            <TextInput placeholder='' style={styles.inputs} onChangeText={setNota3} value={nota3}></TextInput>
          </View>

          
          <View style={[styles.boxInput]}>
            <Text>Definitiva: </Text>
            <TextInput placeholder='' style={styles.inputs}  value={defi}></TextInput>
          </View>

          
          <View style={[styles.boxInput]}>
            <Text>Observacion: </Text>
            <TextInput placeholder='' style={styles.inputs}  value={obs}></TextInput>
          </View>


          <View style={[styles.container,{marginTop:5,flexDirection:"row"}]}>
           <TouchableOpacity style={[styles.buttons,{backgroundColor:"green"}]}  onPress={calcularNotaDefinitiva}>
               <Text style={styles.textButtons}>Calcular/Guardar</Text>
           </TouchableOpacity>

           <TouchableOpacity style={[styles.buttons,{backgroundColor:"green"}]}onPress={limpiarCampos}>
               <Text style={styles.textButtons}>Limpiar</Text>
           </TouchableOpacity>

           <TouchableOpacity style={[styles.buttons,{backgroundColor:"green"}]} onPress={buscarNotas}>
               <Text style={styles.textButtons}>Buscar</Text>
           </TouchableOpacity>
           </View>



        </View>


   </View>

    
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  
  buttons:{
    width:150,
    padding:10,
    alignItems:'center',
    justifyContent: 'center',
    borderRadius:0,
    marginLeft:10

  },

  textButtons:{
    color:'white',
    fontWeight:'bold'


  },
  inputs:{
    color: '#555',
    paddingTop: 5,
    paddingBottom: 5,
    borderWidth: 2,
    borderColor: 'orange',
    textAlign: 'center',
    margin: 10,
    fontSize: 15,
    outline: 'none',
    borderTopWidth: 0,
    borderEndWidth: 0,
    borderStartWidth: 0,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    marginBottom: 30
  },
  boxInput:{
    flexDirection:"row",   
    textAlign: 'center',
    margin: 8,
    alignItems:'center',
    justifyContent: 'center',


    
  }


});
