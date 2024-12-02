import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const NavBarProfile = () => {
  return (
    <View style={styles.navbar}>
      <TouchableOpacity>
        <Text style={styles.navItem}>Postingan</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.navItem}>Pengikut</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.navItem}>Mengikuti</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#E0E0E0',
  },
  navItem: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#b22222',
  },
});

export default NavBarProfile;