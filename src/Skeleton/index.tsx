/**
 *
 * Loader
 *
 */

// @ts-ignore
import React from 'react';
// @ts-ignore
import { View } from 'react-native';
// @ts-ignore
import Animated from 'react-native-reanimated';

import { ISkeletonProps } from '../types';
import { useSkeletonAnimation } from './useSkeletonAnimation';


const Skeleton: React.FC<ISkeletonProps> = ({
  loaderStyle = {},
  numberOfItems = 3,
  direction = 'row',
  speed = 1000,
  targetOpacityValue=0.2,
}) => {
  const animatedStyle = useSkeletonAnimation({speed,targetOpacityValue});

  return (
    <View style={{ flexDirection: direction }}>
      {Array.from(Array(numberOfItems), (_a, i) => 
         (
          <Animated.View
            key={`s${i}`}
            style={[{ ...loaderStyle }, animatedStyle]}
          />
        )
      )}
    </View>
  );
};
export default Skeleton;

export { useSkeletonAnimation };
