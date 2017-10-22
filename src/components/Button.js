import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

const Button = () => (
  <TouchableOpacity style={styles.button}>
    <Text style={styles.text}>Buy now</Text>
  </TouchableOpacity>
)

const styles = {
  text: {
    alignSelf: 'center',
    color: '#007AFF',
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 10,
  },
  button: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#FFF',
    marginLeft: 5,
    marginRight: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#007AFF',
  },
}

export default Button
