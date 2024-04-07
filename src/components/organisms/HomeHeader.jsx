import { StyleSheet, View } from 'react-native'
import React from 'react'
import Header from '../atoms/Header';
import ImageButton from '../atoms/ImageButton';
import SearchBox from '../molecules/SearchBox';

const HomeHeader = (props) => {
    const { title, subtitle, showHeader, value, onChangeText, onSearch, handleSearch } = props;

    return (
        <View style={styles.homeHeader}>
            {showHeader ? <Header title={title} subtitle={subtitle} /> :
                <SearchBox
                    value={value}
                    onChangeText={onChangeText}
                    onSearch={onSearch}
                />}
            <ImageButton uri={`https://img.icons8.com/pastel-glyph/64/${showHeader ? "plus" : "minus"}--v1.png`} onPress={handleSearch} />
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