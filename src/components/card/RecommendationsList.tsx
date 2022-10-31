import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import PopularThumb from '../populars/PopularThumb'

export default function RecommendationsList() {
  const {recomendations} = useSelector((state:RootState) => state.data)

  return (
    <View className=' flex-1 ' >
      <FlatList
      horizontal
      data={recomendations}
      contentContainerStyle={{ }}
      renderItem={({item}) => (
        <PopularThumb item={item} />
      )}
       />
    </View>
  )
}
