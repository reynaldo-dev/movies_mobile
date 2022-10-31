import React, { useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView, ImageBackground, FlatList } from 'react-native'
import { colors, constants } from '../constants'
import { useRoute } from '@react-navigation/native'
import { RootState, useAppDispatch } from '../redux/store'
import { getUpcoming } from '../redux/async/movies.async'
import { getCredits, getRecommended } from '../redux/async/movie.async'
import { useSelector } from 'react-redux'
import CastItem from '../components/cast/CastItem'
import RecommendationsList from '../components/card/RecommendationsList'

export default function MovieDetail() {
  const route = useRoute()
  const { item } = route.params
  const dispatch = useAppDispatch()
  const { recomendations, cast } = useSelector((state: RootState) => state.data)

  useEffect(() => {
    dispatch(getRecommended(item?.id))
    dispatch(getCredits(item?.id))

  }, [])

  return (
    <View style={styles.root} className="">
      {/* cover */}

      <View className="flex-1 ">
        <ImageBackground
          source={{ uri: `${constants.posterUrl}${item.poster_path}` }}
          resizeMode="stretch"
          style={{ flex: 1 }}
        ></ImageBackground>
      </View>

      {/* info */}
      <View className="h-1/2">
        <ScrollView className="pb-2">
          <View className=" items-center p-1">
            <Text style={styles.text} className=" font-bold m-2 text-lg">
              {item?.original_title}
            </Text>
            <View className="flex-row gap-3">
              <Text
                style={styles.text}
                className="text-md  font-semibold border-r-2  text-center w-1/2 border-r-gray-400"
              >
                {item?.original_language}
              </Text>
              <Text
                style={styles.text}
                className="text-md  font-semibold  text-center  w-1/2"
              >
                {item?.release_date}
              </Text>
            </View>
          </View>

          <View className=" m-3">
            <Text className="font-semibold" style={styles.title}>
              Overview
            </Text>
            <Text className=" text-left " style={styles.text}>
              {item?.overview}
            </Text>
          </View>

          <View className=" ">
            <Text className=" font-semibold m-3" style={styles.title}>
              Cast
            </Text>
            <FlatList
              horizontal
              data={cast}
              renderItem={({ item }) => <CastItem item={item} />}
            />
          </View>

          <View className="mt-5 ">
            <Text className=" font-semibold m-3" style={styles.title}>
              Recommended for you
            </Text>
            <RecommendationsList />
          </View>



        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.main,
  },

  text: {
    color: colors.secondary_text
  },
  title: {
    color: colors.primary_text,
    fontSize: 20
  }
})