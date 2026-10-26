
import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#171717" />

      <View style={styles.header}>
        <View style={styles.logo}>
          <Ionicons
            name="list"
            size={35}
            color="#00D4D8"
          />
          <Ionicons
            name="checkmark"
            size={25}
            color="#008FE8"
            style={styles.checkIcon}
          />
          <Text style={styles.title}>MyList</Text>
        </View>
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Adicione algo a sua lista"
          placeholderTextColor="#808080"
        />

        <TouchableOpacity style={styles.addButton}>
          <Ionicons
            name="add-circle-outline"
            size={28}
            color="#FFFFFF"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={styles.counters}>
          <View style={styles.counterGroup}>
            <Text style={styles.createdText}>Criadas</Text>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>5</Text>
            </View>
          </View>

          <View style={styles.counterGroup}>
            <Text style={styles.completedText}>Concluídas</Text>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>2</Text>
            </View>
          </View>
        </View>

        <View style={styles.divider} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171717',
  },

  header: {
    height: 275,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 25,
  },

  logo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  checkIcon: {
    marginLeft: -8,
    marginRight: 5,
    marginTop: 13,
  },

  title: {
    fontSize: 38,
    fontWeight: '900',
    color: '#00BDEB',
    letterSpacing: -1.5,
  },

  form: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    gap: 8,
    marginTop: -50,
    zIndex: 1,
  },

  input: {
    flex: 1,
    height: 84,
    backgroundColor: '#262626',
    borderColor: '#111111',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 21,
    color: '#FFFFFF',
  },

  addButton: {
    width: 82,
    height: 84,
    backgroundColor: '#0086BC',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  content: {
    flex: 1,
    backgroundColor: '#090909',
    marginTop: -35,
    paddingHorizontal: 24,
    paddingTop: 90,
  },

  counters: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  counterGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  createdText: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#00D4D8',
  },

  completedText: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#009FE3',
  },

  badge: {
    minWidth: 38,
    height: 30,
    borderRadius: 18,
    backgroundColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },

  badgeText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  divider: {
    height: 2,
    backgroundColor: '#303030',
    marginTop: 30,
  },
});
