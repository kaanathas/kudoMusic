import { View } from "react-native";
import { defaultStyles } from "../../../styles";
import { Stack } from "expo-router";

const ArtistScreenLayout = () => {
  return (
    <View style={defaultStyles.container}>
      <Stack>
        <Stack.Screen name="index" options={{ headerTitle: "Artist" }} />
      </Stack>
    </View>
  );
};


export default ArtistScreenLayout