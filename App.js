import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { db } from './public/firebaseConfig';
import { collection, getDocs, setDoc, doc } from 'firebase/firestore';

const App = () => {
  const [seats, setSeats] = useState(Array(30).fill(false));

  // Firestore에서 좌석 상태 불러오기
  useEffect(() => {
    const fetchSeats = async () => {
      const querySnapshot = await getDocs(collection(db, "seats"));
      const newSeats = Array(30).fill(false);
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        newSeats[data.index - 1] = data.reserved;
      });
      setSeats(newSeats);
    };
    fetchSeats();
  }, []);

  // 좌석 클릭 시 Firestore에 저장
  const handlePress = async (index) => {
    const newSeats = [...seats];
    newSeats[index] = !newSeats[index];
    setSeats(newSeats);

    await setDoc(doc(db, "seats", `${index + 1}`), {
      index: index + 1,
      reserved: newSeats[index],
      status: newSeats[index] ? "pending" : "available",
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>좌석 예약</Text>
      <View style={styles.grid}>
        {seats.map((reserved, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.seat, reserved && styles.reserved]}
            onPress={() => handlePress(index)}
          >
            <Text>{index + 1}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  seat: {
    width: 50,
    height: 50,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#333',
  },
  reserved: {
    backgroundColor: '#f99',
  },
});

export default App;
