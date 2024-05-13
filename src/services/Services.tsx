import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native'; // Remove GestureHandlerRootView
import serviceData from './../assets/data/serviceData';

const Services = () => {
  return (
    <View style={styles.services}>
      <ScrollView horizontal={true}>
        {serviceData.map((item, index) => (
          <View key={index} style={[styles.serviceItem, { backgroundColor: item.bg }]}>
            <View style={styles.iconContainer}>
              <Text style={styles.icon}>{item.icon}</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.subtitle}>{item.subtitle}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  services: {
    paddingVertical: 20,
  },
  serviceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
  icon: {
    fontSize: 24,
    color: '#000',
  },
  textContainer: {
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
  },
});

export default Services;
