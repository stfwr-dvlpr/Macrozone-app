import { colors, globalStyles } from '@/styles/global';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeHeader() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });
  const currentTime = new Date().toLocaleTimeString('en-IN', {
    hour: 'numeric',
    minute: 'numeric'
  })

  return (
    <View style={styles.header}>
      <Text style={styles.date}>{currentDate}</Text>
      <Text style={styles.date}>{currentTime}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  date: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 4,
    // marginBottom: 30,
  },
  header: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: 30
  }
});