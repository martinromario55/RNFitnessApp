import { View, Text, Image } from 'react-native'
import React from 'react'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import { StatusBar } from 'expo-status-bar'
import { LinearGradient } from 'expo-linear-gradient'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Animated, { FadeIn, FadeInDown } from 'react-native-reanimated'
import { useRouter } from 'expo-router'

export default function Index() {
  const router = useRouter()

  return (
    <View className="flex-1 justify-end items-center">
      <StatusBar style="light" />
      {/* Welcome Image */}
      <Image
        className="h-full w-full absolute"
        source={require('../assets/images/welcome.jpg')}
      />
      {/* LinearGradient */}
      <LinearGradient
        colors={['transparent', '#18181b']}
        style={{ width: wp(100), height: hp(70) }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.8 }}
        className="justify-end pb-12 space-y-8"
      >
        {/* Welcome Text */}
        <Animated.View
          entering={FadeInDown.delay(100).springify()}
          className="items-center"
        >
          <Text
            style={{ fontSize: hp(5) }}
            className="text-white font-bold tracking-wide"
          >
            Best <Text className="text-rose-500">Workouts</Text>
          </Text>
          <Text
            style={{ fontSize: hp(5) }}
            className="text-white font-bold tracking-wide"
          >
            For you
          </Text>
        </Animated.View>

        {/* Button */}
        <Animated.View entering={FadeInDown.delay(200).springify()}>
          <TouchableOpacity
            onPress={() => {
              router.push('home')
            }}
            style={{ height: hp(7), width: wp(80) }}
            className="bg-rose-500 items-center justify-center mx-auto rounded-full border-[2px] border-neutral-200"
          >
            <Text className="text-white font-bold tracking-widest">
              Get Started
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </LinearGradient>
    </View>
  )
}
