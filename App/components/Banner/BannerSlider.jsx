import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from "react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { colors } from "../../../theme/colors/colors";

const screenWidth = Dimensions.get("screen").width;

const BannerSlider = () => {
  const flatListRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderImgData = [
    {
      id: "01",
      image: require("../../../assets/slider_1.png"),
    },
    {
      id: "02",
      image: require("../../../assets/slider_2.png"),
    },
    {
      id: "03",
      image: require("../../../assets/slider_3.png"),
    },
  ];

  useEffect(() => {
    // if activeIndex === last index => jump back to the first index
    //else activeIndex +1
    const interval = setInterval(() => {
      let nextIndex = activeIndex + 1;
      if (nextIndex >= sliderImgData.length) {
        nextIndex = 0; // Loop back to the first image
      }
      flatListRef?.current?.scrollToIndex({
        index: nextIndex,
        animated: true, // Correct property for smooth animation
      });
      setActiveIndex(nextIndex);
    }, 4000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const getItemLayout = (data, index) => ({
    length: screenWidth,
    offset: screenWidth * index,
    index: index,
  });

  //Display images
  const renderItem = useCallback(({ item }) => {
    return (
      <View key={item.id}>
        <Image source={item.image} style={styles.img} />
      </View>
    );
  }, []);

  //Render Dot Indicators
  const renderDotIndicators = useCallback(() => {
    return sliderImgData.map((dot, index) => {
      return (
        <View
          key={index}
          style={[
            styles.indicator,
            {
              backgroundColor:
                activeIndex === index ? colors.primary : colors.outline, // To display activeIndicator
            },
          ]}
        ></View>
      );
    });
  }, [activeIndex, sliderImgData.length]);

  const handleScroll = (e) => {
    //Get the scroll position
    const scrollPosition = e.nativeEvent.contentOffset.x;
    // console.log({ scrollPosition });

    //Get the index of current active item
    const index = Math.round(scrollPosition / screenWidth);
    // console.log({ index });

    //Update the index
    if (index >= 0 && index < sliderImgData.length) {
      setActiveIndex(index);
    }
  };

  return (
    <View style={styles.bannerSliderContainer}>
      <FlatList
        data={sliderImgData}
        renderItem={renderItem}
        horizontal={true}
        keyExtractor={(item) => item.id}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScroll}
        ref={flatListRef}
        getItemLayout={getItemLayout}
        scrollEventThrottle={16}
        removeClippedSubviews={true} // Good for performance
        initialNumToRender={1} // Render only one item initially
        maxToRenderPerBatch={1} // Render one image at a time
        windowSize={3} // Increase or decrease as needed
      />
      <View style={styles.indicatorContainer}>{renderDotIndicators()}</View>
    </View>
  );
};

export default React.memo(BannerSlider);

const styles = StyleSheet.create({
  bannerSliderContainer: { alignItems: "center" },
  img: {
    height: 260,
    width: screenWidth,
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 12,
    marginBottom: 12,
  },
  indicator: {
    height: 8,
    width: 8,
    borderRadius: 4,
    marginHorizontal: 2,
  },
});
