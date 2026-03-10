import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
export default function App() {
    const [copos, setCopos] = useState(0);
    const [msg, setMsg] = useState('Toque para começar!');
    useEffect(() => {
         if (copos === 8) setMsg('🏆Meta do dia atingida!');
         if (copos === 20) setMsg('Você tem entre 6 e 7 minutos de vida');
     if (copos === 0) setMsg('Clique para iniciar o dia!')
 }, [copos]);
 return (
     <View style={styles.container}>
      <Text style={styles.titulo}>Hidratação Diária</Text>
            <Text style={styles.msg}>{msg}</Text>
            <Text style={styles.cop}>{copos}</Text>
            <TouchableOpacity style={styles.btn} onPress={() => setCopos(copos + 1)}>
                <Text style={styles.btnText}>Bebi um Copo</Text>
            </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={() => setCopos(copos === 0)}>
                <Text style={styles.btnText}>Resetar</Text>
            </TouchableOpacity>

        </View>
);
}
const styles = StyleSheet.create({
    container: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: '#550055' },

    msg: { color: '#aaa', 
    fontSize: 16, 
    marginBottom: 12 },

    cop: { color: '#fff', 
    fontSize: 72, 
    fontWeight: 'bold' },

    btn: { marginTop: 24, 
    backgroundColor: '#6c63ff', 
    paddingHorizontal: 40, 
    paddingVertical: 16, 
    borderRadius: 50},

    btnText: { color: '#fff', 
    fontSize: 20, 
    fontWeight: 'bold' },

  titulo:{
    fontSize: 50,
    fontWeight: 'bold',
    color: '#000000'

  }

});