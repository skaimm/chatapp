import { StyleSheet, View } from 'react-native'
import React from 'react'
import Header from '../atoms/Header';
import ImageButton from '../atoms/ImageButton';

const HomeHeader = (props) => {
    const { title, subtitle, onStartChat } = props;
    return (
        <View style={styles.homeHeader}>
            <Header title={title} subtitle={subtitle} />
            <ImageButton uri="https://img.icons8.com/pastel-glyph/64/plus--v1.png" onPress={onStartChat} />
        </View>
    )
}

export default HomeHeader

const styles = StyleSheet.create({
    homeHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 5,
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    }
})