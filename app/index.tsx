import { Link } from "expo-router";
import { View, Text, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "react-native";
import {images} from '../constants'

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{height: '100%'}}>
        <View className="w-full justify-center items-center h-full px-4">
          <Image 
          source={images.logo}
          className="w-[130px] h-[84px]"
          resizeMode="contain"
          />
          <Image 
          source={images.cards}
          className="w-[380px] h-[300px]"
          resizeMode="contain"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}