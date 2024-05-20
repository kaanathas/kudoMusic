import { Tabs } from "expo-router";
import { colors, fontSize } from "../../constants/tokens";
import { BlurView } from "expo-blur";
import { View , Text ,StyleSheet} from "react-native";
const TabsNavigation = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarLabelStyle: {
          fontSize: fontSize.xs,
          fontWeight: "500",
        },
        tabBarStyle: {
            position: 'absolute',
            borderTopLeftRadius:29,
            borderTopRightRadius:20,
            borderTopWidth:0,
            paddingTop:8
        },
        headerShown: false,
        tabBarBackground: () => <BlurView intensity={95} style={{
            ...StyleSheet.absoluteFillObject,
            overflow:"hidden",
            borderTopLeftRadius:20,
            borderTopRightRadius:20
        }} />,
      }}
    >
      <Tabs.Screen name="favorites" />
      <Tabs.Screen name="playlists" />
      <Tabs.Screen name="(songs)" />
      <Tabs.Screen name="artists" />
    </Tabs>
  );
};

export default TabsNavigation;
