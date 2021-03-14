import React from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './styles'

const StyledButton = ({type, content, onPress}) => {

    
    const backgroundColor = type === 'primary' ? '#171a20cc' : '#ffffff';
    const textColor = type === 'primary' ? '#ffffff' : '#171a20cc';
    return (
        <View style={styles.container}>
            <Pressable
                style={[styles.button, { backgroundColor: backgroundColor }]}
                onPress={() => onPress()}
            >
                <Text style={[styles.text, { color: textColor }]}>{content}</Text>
            </Pressable>
        </View>
    )
}

export default StyledButton