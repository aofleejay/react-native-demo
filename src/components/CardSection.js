import React from 'react'
import { View } from 'react-native'

const CardSection = props => (
  <View style={styles.container}>
    {props.children}
  </View>
)

const styles = {
  container: {
    padding: 5,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  }
}

export default CardSection
