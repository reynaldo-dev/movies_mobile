import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../../constants'
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

export default function Filter() {
  return (
    <View className='h-full justify-center items-start'>
      <View className='flex-row '>
        <TextInput 
          style={styles.input} 
          placeholder='Find a movie' 
          placeholderTextColor={colors.primary_text}
          className='py-2 px-3 rounded-lg w-[80%] mr-5' 
        />
        <View className='h-10 w-10 rounded-lg flex justify-center items-center'style={styles.button}>
          <AntDesign name="search1" size={24} color="white" />
        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
    input:{
        backgroundColor:colors.gray
    },
    button:{
      backgroundColor:colors.orange
    }
})