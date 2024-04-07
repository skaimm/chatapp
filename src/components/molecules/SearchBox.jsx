import { StyleSheet, View } from 'react-native'
import React from 'react'
import TextBox from '../atoms/TextBox';
import ImageButton from '../atoms/ImageButton';

const SearchBox = (props) => {
    const { value, onChangeText, onSearch } = props;

    return (
        <View style={styles.container}>
            <TextBox
                value={value}
                onChangeText={onChangeText}
                placeholder="Search Person To Chat"
                useAnimation={false}
            />
            <ImageButton uri="https://img.icons8.com/ios/50/search-more.png" onPress={onSearch} />
        </View>
    )
}

export default SearchBox

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
})