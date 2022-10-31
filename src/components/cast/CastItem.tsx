import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { colors, constants } from '../../constants'

export default function CastItem({ item }) {

  return (
    <View className=' flex-row p-2 mx-2   '>
      <View>
        <Image
          source={{ uri: `${constants.posterUrl}${item?.profile_path}` }}
          style={{ width: 75, flex: 1, height: 75, resizeMode: 'center' }}
          className='rounded-full'
        />
      </View>
      <View className=' justify-start items-center gap-2 mx-2'>
        <Text className='font-semibold' style={styles.text}>{item?.character}</Text>
        <Text className='font-bold text-lg' style={styles.text}>{item?.original_name}</Text>
      </View>



    </View>
  )
}

const styles = StyleSheet.create({


  text: {
    color: colors.secondary_text
  },

})