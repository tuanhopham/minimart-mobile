import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Clock = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  
  useEffect(() => {
    let interval; // Declare interval variable here
  
    const countDown = () => {
      const destination = new Date('Mar 10, 2024').getTime();
      interval = setInterval(() => {
        const now = new Date().getTime();
        const difference = destination - now;
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        if (destination < 0) {
          clearInterval(interval);
        } else {
          setDays(days);
          setHours(hours);
          setMinutes(minutes);
          setSeconds(seconds);
        }
      }, 1000);
    };

    countDown();

    return () => {
      clearInterval(interval); // Clean up interval on component unmount
    };
  }, []);

  return (
    <View style={styles.clockWrapper}>
      <View style={styles.clockData}>
        <Text style={styles.text}>{days}</Text>
        <Text style={styles.text}>Days</Text>
      </View>
      <Text style={styles.colon}>:</Text>
      <View style={styles.clockData}>
        <Text style={styles.text}>{hours}</Text>
        <Text style={styles.text}>Hours</Text>
      </View>
      <Text style={styles.colon}>:</Text>
      <View style={styles.clockData}>
        <Text style={styles.text}>{minutes}</Text>
        <Text style={styles.text}>Minutes</Text>
      </View>
      <Text style={styles.colon}>:</Text>
      <View style={styles.clockData}>
        <Text style={styles.text}>{seconds}</Text>
        <Text style={styles.text}>Seconds</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  clockWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 3,
  },
  clockData: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  text: {
    fontSize: 24,
  },
  colon: {
    fontSize: 24,
  },
});

export default Clock;
