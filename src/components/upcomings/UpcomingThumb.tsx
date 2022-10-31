import { View, Text, Pressable, ImageBackground } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../../navigator/Navigation'
import { constants } from '../../constants'
import { Result } from '../../redux/slices/movies.slice'

interface IProps {
    item : Result
}
export default function UpcomingThumb({item}:IProps) {
    const navigation = useNavigation<RootStackParamList>()
    
    return (
      <Pressable className=' m-1 w-40 rounded-lg' onPress={() => navigation.navigate('Detail', {item})}>
         <ImageBackground 
          source={{uri: `${constants.posterUrl}${item?.backdrop_path}`}} 
          resizeMode="cover"
          imageStyle={{borderRadius:10}}
          style={{flex:1, borderRadius:100,padding:10}}
      >
       <View className=' flex-1 justify-end ' >
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