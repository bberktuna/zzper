import React, { useRef, useState, useMemo } from 'react';
import { View, Text, Button, StyleSheet, Platform } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  const bottomSheetRef = useRef(null);
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);

  // Snap points for the bottom sheet
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  // Handle the bottom sheet changes
  const handleSheetChanges = (index) => {
    if (index === -1) {
      setIsBottomSheetVisible(false);
    } else {
      setIsBottomSheetVisible(true);
    }
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={[styles.container, isBottomSheetVisible && styles.containerDimmed]}>
        <Button
          title="Open Bottom Sheet"
          onPress={() => bottomSheetRef.current?.expand()}
        />
        <BottomSheet
          ref={bottomSheetRef}
          index={-1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          style={styles.bottomSheet}
        >
          <View style={styles.sheetContent}>
            <Text>Awesome 🎉</Text>
          </View>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', // Home screen background color
  },
  containerDimmed: {
    backgroundColor: 'grey', // Home screen background color when bottom sheet is visible
  },
  bottomSheet: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    borderTopWidth: 1,
    borderTopColor: '#ccc', // Border color
    elevation: 5, // Android shadow
  },
  sheetContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white', // Bottom sheet background color
  },
});
