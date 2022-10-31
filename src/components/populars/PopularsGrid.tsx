import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import PopularThumb from './PopularThumb'

export default function PopularsGrid() {
  const { populars } = useSelector((state: RootState) => state.movies)

  return (
    <View className=' flex-1' >
      <FlatList
        horizontal
        data={populars}
        contentContainerStyle={{}}
        renderItem={({ item }) => (
          <PopularThumb item={item} />
        )}
      />
    </View>
  )
}