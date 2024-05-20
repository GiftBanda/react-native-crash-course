import { View, Text, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";

import { images } from "../../constants";
import FormField from "@/components/FormField";

const SignIn = () => {
  const [form, setForm] = useState<any>({
    email: "",
    password: "",
  });

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-ful h-full justify-center px-4 my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />
          <Text className="text-2xl text-white mt-10 font-psemibold">
            Log in to Aora
          </Text>
          <FormField
            title="email"
            placeholder="Email"
            value={form.email}
            handleChangeText={(e:any) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
          />
          <FormField
            title="password"
            placeholder="Password"
            value={form.password}
            handleChangeText={(e:any) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
