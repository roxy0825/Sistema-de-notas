import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-web';




export default function App() {
  return (
    <View style={styles.container }>
      <View style={[styles.container ,{ flex:1}]}>
        <Text style={{fontWeight:'bold'}}>Sistema de notas</Text>
      </View>


      <View >
     <Text style={{fontWeight:'bold'}}>Identificacion</Text>
     <Text style={{fontWeight:'bold'}}>Identificacion</Text>
     <Text style={{fontWeight:'bold'}}>Identificacion</Text>
     <Text style={{fontWeight:'bold'}}>Identificacion</Text>
     <Text style={{fontWeight:'bold'}}>Identificacion</Text>
     </View>
     
      
      
      <StatusBar style="auto" />
    </View>
    
    
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
   
    

  },
});
