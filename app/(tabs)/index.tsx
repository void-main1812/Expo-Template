import { Image } from "expo-image";
import { Link } from "expo-router";
import { Text, View } from "react-native";
import { MotiText } from "moti";

export default function TabOneScreen() {
  return (
    <>
      <View className="h-full w-full bg-white flex justify-center items-center">
        <View className="h-[100px] w-[100px] rounded-lg shadow-2xl shadow-black overflow-hidden mb-[20px]">
          <Image
            className="h-full w-full"
            source={require("../../assets/images/logo.png")}
          />
        </View>
        <MotiText
          className="text-gray-900 text-2xl font-bold p-4 text-center w-[70%]"
        >
          You can start Editing from here
        </MotiText>
        <Text className="p-4 bg-gray-100 rounded-md border border-gray-200">
          "app/(tabs)/index.tsx"
        </Text>
        <View className="text-center flex justify-center items-center absolute bottom-[40px]">
          <Text>This template was made by </Text>
          <Link href={"https://github.com/void-main1812"}>
            <Text className="text-xl font-bold underline">Sourabh Singh</Text>
          </Link>
        </View>
      </View>
    </>
  );
}
