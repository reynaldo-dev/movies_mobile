import { View, Text,FlatList } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import UpcomingThumb from './UpcomingThumb'

export default function UpcomingsGrid() {
    const {upcomings} = useSelector((state:RootState) => state.movies)

    return (
      <View className=' flex-1' >
        <FlatList
        horizontal
        data={upcomings}
        contentContainerStyle={{ }}
        renderItem={({item}) => (
          <UpcomingThumb item={item} />
        )}
         />
      </View>
    )
}