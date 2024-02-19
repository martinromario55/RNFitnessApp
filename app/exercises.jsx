import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'

export default function Exercises() {
  const router = useRouter()
  const item = useLocalSearchParams()

  console.log('got item', item)

  return (
    <View className="mt-10">
      <Text>Exercises</Text>
      <TouchableOpacity onPress={() => router.back()}>
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  )
}
