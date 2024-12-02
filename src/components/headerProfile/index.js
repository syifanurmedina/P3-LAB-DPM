import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HeaderProfile = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Syifa Medina's Profile</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#b22222',
    padding: 15,
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default HeaderProfile;

