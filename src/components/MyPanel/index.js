import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

export function MyPanel({ image, ...prop }) {
	return (
		<View style={styles.panel}>
			<Image source={image} />
		</View>
	)
}

const styles = StyleSheet.create({
	panel: {
		backgroundColor: '#fff',
	},
})
