import { colors } from '@/styles/global';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { FloatingTabBar } from '@/components/FloatingTabBar';

export default function TabLayout() {
  return (
    <Tabs
      tabBar = {(props: any) => <FloatingTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textSecondary,
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='home' size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='add-meal'
        options={{
          title: 'Add Meal',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='add-circle' size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='meals'
        options={{
          title: 'All Meals',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='list' size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
