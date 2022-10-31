import { View, Text,FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import Thumbnail from '../card/Thumbnail'
import { RootObjectLatest } from "../../redux/slices/movies.slice";

export default function LatestsGrid() {
  const {latests, populars} = useSelector((state:RootState) => state.movies)
  
  return (
    <View className=' flex-1 items-start '>

        {
            populars.length > 0 &&  <Thumbnail item={populars[6]} key={`movie-${populars[0]?.id}`}  />
        }
     

    </View>
  )
}


const styles = StyleSheet.create({
    list:{
       
       alignItems: 'center',
    }
})