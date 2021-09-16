import React from 'react'
import { Image, Pressable, StyleSheet } from 'react-native'

export function MyButton({ onPress, source, ...props }) {
	return (
		<Pressable onPress={onPress}>
			<Image style={styles.img} source={source} />
		</Pressable>
	)
}

const styles = StyleSheet.create({
	img: {
		height: 120,
		width: 60,
		margin: 32,
	},
})
