import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import {  useAppDispatch } from '../redux/store'
import { getLatests, getPopulars, getUpcoming } from '../redux/async/movies.async'
import { colors } from '../constants'
import Filter from '../components/filter/Filter'
import LatestsGrid from '../components/latests/LatestsGrid'
import PopularsGrid from '../components/populars/PopularsGrid'
import UpcomingsGrid from '../components/upcomings/UpcomingsGrid'

export default function Home() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getLatests())
    dispatch(getPopulars())
    dispatch(getUpcoming())
  }, [])

 
  return (
    <View style={styles.root} className="">
     
        
         

          <View style={styles.container} className=" rounded-xl items-center">
            <LatestsGrid />
          </View>

          <View style={styles.container} className="">
            <Text className="text-lg font-bold my-5 " style={styles.text}>
              Populars
            </Text>
            <PopularsGrid />
          </View>

          <View style={styles.container} className="">
            <Text className="text-lg font-bold my-5" style={styles.text}>
              Upcoming
            </Text>
            <UpcomingsGrid />
          </View>

     
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: colors.main,
    flex:1,
    
   
  },
  text: {
    color: colors.primary_text,
  },

  container:{
    margin:10,
    flex:1,
    
  }
 
})