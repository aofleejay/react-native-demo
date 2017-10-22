import React from 'react'
import { Text, View, Image, Linking } from 'react-native'
import Card from './Card'
import CardSection from './CardSection'
import Button from './Button'

const AlbumDetail = props => {
  const { thumbnail_image, title, artist, image, url } = props.album
  return (
    <Card>
      <CardSection>
        <View style={styles.thumbnailContainer}>
          <Image source={{ uri: thumbnail_image }} style={styles.thumbnail} />
        </View>
        <View style={styles.headerContainer}>
          <Text>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image source={{ uri: image }} style={styles.image} />
      </CardSection>
      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>
          Buy Now
        </Button>
      </CardSection>
    </Card>
  )
}

const styles = {
  headerContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  thumbnailContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  thumbnail: {
    height: 50,
    width: 50,
  },
  image: {
    width: null,
    height: 300,
    flex: 1,
  },
}

export default AlbumDetail
