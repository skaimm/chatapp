import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = (props) => {
    const { title, subtitle, isSubTitleBold } = props;

    return (
        <View style={styles.headerContent}>
            <Text style={styles.headerTitle}>{title}</Text>
            {subtitle && <Text style={styles.headerSubtitle(isSubTitleBold)}>{subtitle}</Text>}
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    headerContent: {
        marginLeft: 10,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    headerSubtitle: (isSubTitleBold) => ({
        color: isSubTitleBold ? '#000' : '#ccc',
        fontWeight: isSubTitleBold ? 'bold' : 'normal',
    }),
})