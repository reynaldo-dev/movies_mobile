import { View, Text, ImageBackground, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { Result } from '../../redux/slices/movies.slice'
import { constants } from '../../constants'
import { useNavigation } from '@react-navigation/native'
import { RootStackParamList } from "../../navigator/Navigation";

interface IProps {
    item : Result
}
export default function PopularThumb({item}:IProps) {
    const navigation = useNavigation<RootStackParamList>()
    
  return (
    <Pressable className=' m-1 w-40 rounded-lg h-full ' onPress={() => navigation.navigate('Detail', {item})}>
       <ImageBackground 
        source={{uri: `${constants.posterUrl}${item.backdrop_path}`}} 
        resizeMode="cover"
        imageStyle={{borderRadius:10}}
        style={{flex:1, justifyContent:'flex-end'}}
        
    >
     <View className=' justify-end backdrop-blur-md backdrop-brightness-150' >
        <View className=' mx-1'>
            <Text className='font-bold text-white text-xs  '>{item?.original_title}</Text>
        </View>

        <View className=' mx-1 my-1'>
            <Text className='font-bold text-white text-xs  '>{item?.vote_average}</Text>
        </View>
     </View>
      </ImageBackground>
    </Pressable>
  )
}

