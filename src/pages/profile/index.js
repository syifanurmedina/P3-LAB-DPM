import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import HeaderProfile from '../../components/headerProfile';
import NavBarProfile from '../../components/navBarProfile';
import buttonStyles from '../../style/buttonStyles';

const ProfilePage = () => {
  return (
    <View style={styles.container}>
      <HeaderProfile />
      <NavBarProfile />
      <View style={styles.content}>
        <Text style={styles.text}>Ini adalah halaman profil Anda!</Text>
        <TouchableOpacity style={buttonStyles.button}>
          <Text style={buttonStyles.buttonText}>Edit Profil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default ProfilePage;