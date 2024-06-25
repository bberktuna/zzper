import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import * as Calendar from 'expo-calendar';
import { useRouter } from 'expo-router';

export default function CustomCalendar() {
  const [events, setEvents] = useState([]);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const { status } = await Calendar.requestCalendarPermissionsAsync();
      if (status === 'granted') {
        const calendars = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT);
        console.log('Here are all your calendars:');
        console.log({ calendars });
        const calendarId = calendars[0].id;

        const now = new Date();
        const oneMonthLater = new Date(now.setMonth(now.getMonth() + 1));

        const events = await Calendar.getEventsAsync([calendarId], new Date(), oneMonthLater);
        setEvents(events);
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={events}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.event}>
            <Text>{item.title}</Text>
            <Text>{new Date(item.startDate).toLocaleString()}</Text>
          </View>
        )}
      />
      <Button title="Add Event" onPress={() => router.push('/eventForm')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  event: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});
