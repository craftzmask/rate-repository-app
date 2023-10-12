import { View, Image, Text, StyleSheet } from 'react-native';

import format from '../utils/format'

import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    rowGap: theme.container.padding * 1.5,
    padding: theme.container.padding
  },
  imageSize: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  nameTag: {
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold
  },
  languageTag: {
    alignSelf: 'flex-start',
    padding: 6,
    borderRadius: 5,
    backgroundColor: theme.colors.primary,
    color: 'white',
    overflow: 'hidden',
  }
})

const RepositoryItem = ({ data }) => {
  return (
    <View style={styles.container}>
      <Top data={data} />
      <Bottom data={data} />
    </View>
  );
};

const Top = ({ data }) => {
  return (
    <View style={{ flexDirection: 'row', columnGap: 15 }}>
      <Image
        style={styles.imageSize}
        source={{ uri: data.ownerAvatarUrl }}
      />
      <View style={{ flex: 1, rowGap: 12 }}>
        <Text style={styles.nameTag}>
          {data.fullName}
        </Text>
        <Text>{data.description}</Text>
        <Text style={styles.languageTag}>
          {data.language}
        </Text>
      </View>
    </View>
  )
}

const Bottom = ({ data }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
      <Column number={data.stargazersCount} text='Starts' />
      <Column number={data.forksCount} text='Forks' />
      <Column number={data.reviewCount} text='Reviews' />
      <Column number={data.ratingAverage} text='Rating' />
    </View>
  )
}

const Column = ({ number, text }) => {
  return (
    <View style={{ rowGap: 8 }}>
      <Text style={{ fontWeight: theme.fontWeights.bold }}>
        {format(number)}
      </Text>
      <Text>{text}</Text>
    </View>
  )
}

export default RepositoryItem;