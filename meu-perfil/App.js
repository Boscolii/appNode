import { View, Text, Image, StyleSheet } from 'react-native';

export default function App() {
  const usuario = {
    nome: "Henrique Nogueira Boscoli",
    bio: "Ciencias da computaçao - 2º",
    seguidores: "Se voce nao constesta o errado, o certo nunca vem a tona",
    avatar: "https://i.pinimg.com/control1/736x/5b/5c/d4/5b5cd4bd212103bd6dea24be53bed5ee.jpg",
  };
  return (
    <View style={styles.container}>
      {/* Avatar */}
      <Image
        source={{ uri: usuario.avatar }}
        style={styles.avatar}
      />
      {/* Nome */}
      <Text style={styles.nome}>{usuario.nome}</Text>
      {/* Bio */}
      <Text style={styles.bio}>{usuario.bio}</Text>
      {/* Stats */}
      <View style={styles.stats}>
        <Text style={styles.stat}> {usuario.seguidores} </Text>
      </View>

      <View style={styles.links}>
        <Text style={styles.link}> Github </Text>
      </View>

      <View style={styles.links}>
        <Text style={styles.link}> Linkedin </Text>
      </View>


    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#533b63',
    padding: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#0a0a0a',
    marginBottom: 16,
  },
  nome: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  bio: {
    fontSize: 14,
    color: '#aaa',
    textAlign: 'center',
    marginBottom: 16,
  },
  stats: {
    backgroundColor: '#1a1a1a',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  stat: {
    color: '#fff',
    fontSize: 14,
  },

  links:{
    backgroundColor: '#9a5aee',
    borderRadius: 60,
    borderWidth: 4,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 20,

  },

  link: {
    fontSize: 14,
    fontWeight: 'bold',

  }
});
