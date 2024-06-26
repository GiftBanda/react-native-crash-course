import { router, Redirect } from "expo-router";
import { View, Text, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "react-native";
import {images} from '../constants'
import CustomButton from "../components/CustomButton";

const App = () => {
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

          <View className='relative mt-5'>
          <Text className="text-3xl text-white font-bold text-center">
            Discover Endless Possibilities with {' '}
            <Text className="text-secondary-200">Aora</Text>
          </Text>

          <Image 
            source={images.path}
            className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
            resizeMode="contain"
          />
          </View>

          <Text className="text-sm font-pregular text-gray-100 mt-7  text-center">
            Where Creativity Meets Innovation: Embark on a Journey of Limitless Exploration with Aora
          </Text>

          <CustomButton 
          title="Continue with Email"
          handlePress={() => router.push('/sign-in')}
          containerStyles="w-full mt-4"
          />

          <StatusBar backgroundColor="#161622" style="light" />

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
