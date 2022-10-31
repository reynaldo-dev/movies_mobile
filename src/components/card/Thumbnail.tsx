import { View, Text, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import { Result } from '../../redux/slices/movies.slice'
import { constants } from '../../constants';
import { Octicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigator/Navigation';


interface IProps{
    item : Result
}
export default function Thumbnail({item} : IProps ) {
  const navigation = useNavigation<RootStackParamList>()

    
  return (
    <Pressable className="w-80 rounded-xl h-full" onPress={() => navigation.navigate('Detail', {item})} >
      <ImageBackground 
        source={{uri: `${constants.posterUrl}${item.backdrop_path}`}} 
        resizeMode="cover"
        imageStyle={{borderRadius:20}}
        style={{flex:1, borderRadius:100}}
    >
     <View className=' flex-1 justify-end' >
        <View className=''>
            <Text className='font-extrabold text-white text-lg ml-4 mb-3 '>{item?.original_title}</Text>
        </View>

        <View className='flex-row ml-4 items-center mb-3'>
            <Octicons name="star" size={24} color="yellow" />
            <Text className='font-normal text-white text-lg ml-2'>{item?.vote_average}</Text>
        </View>
     </View>
      </ImageBackground>
    </Pressable>
  );
}

