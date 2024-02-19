import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import Animated, { FadeIn, FadeInDown } from 'react-native-reanimated'
import Ionicons from 'react-native-vector-icons/FontAwesome'
import ImageSlider from '../components/ImageSlider'
import BodyParts from '../components/BodyParts'

export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-white space-y-5" edges={['top']}>
      <StatusBar style="dark" />

      {/* Punchline and Avatar */}
      <View className="flex-row justify-between items-center mx-5">
        <View className="space-y-2">
          <Text
            style={{ fontSize: hp(4.5) }}
            className="font-bold tracking-wider text-neutral-700"
          >
            READY TO
          </Text>
          <Text
            style={{ fontSize: hp(4.5) }}
            className="font-bold tracking-wider text-rose-500"
          >
            WORKOUT
          </Text>
        </View>

        <View className="justify-center items-center space-y-2">
          <Image
            source={require('../assets/images/avatar-2.jpg')}
            className="rounded-full"
            style={{ width: hp(6), height: hp(6) }}
          />

          <View
            className="bg-neutral-200 rounded-full justify-center items-center border-solid border-neutral-300"
            style={{ height: hp(5.5), width: hp(5.5) }}
          >
            <Ionicons name="bell" size={hp(3)} color="gray" />
          </View>
        </View>
      </View>

      {/* Image Slider */}
      <View>
        <ImageSlider />
      </View>

      {/* Body Parts */}
      <View className="flex-1">
        <BodyParts />
      </View>
    </SafeAreaView>
  )
}
