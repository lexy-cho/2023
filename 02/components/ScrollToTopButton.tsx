import React, { useRef } from 'react';
import { FlatList, TouchableOpacity, Text, View, Image, StyleSheet } from 'react-native';
import { NativeScrollEvent, NativeSyntheticEvent } from 'react-native';
import { FlatListProps } from '@types/react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { IC_ARROW02 } from '../assets/images';

interface ScrollToTopButtonProps {
    flatListRef: React.RefObject<FlatList>;
}

const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({ flatListRef }) => {
    const handleScrollToTop = () => {
        if (flatListRef.current) {
            flatListRef.current.scrollToOffset({ offset: 0, animated: true });
        }
    };

    return (
        <TouchableOpacity style={styles.button} onPress={handleScrollToTop}>
            <Image source={IC_ARROW02} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        bottom: 10,
        right: 20,
        backgroundColor: '#FFFFFF',
        width: 38,
        height: 38,
        padding: 10,
        borderRadius: 50,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
});


export default ScrollToTopButton;
