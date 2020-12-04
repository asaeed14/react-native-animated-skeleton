/**
 *
 * Loader
 *
 */
import React from 'react';
// @ts-ignore
import { View } from 'react-native';
// @ts-ignore
import Animated from 'react-native-reanimated';

import { ISkeletonProps } from '../types';
import useSkeletonValue from './useSkeletonValue';

const { interpolate, Extrapolate } = Animated;

const Skeleton: React.FC<ISkeletonProps> = ({
  loaderStyle = {},
  numberOfItems = 3,
  direction = 'row',
}) => {
  const progress: Animated.Value<number> = useSkeletonValue();
  const length = numberOfItems;
  const delta = 1 / length;

  return (
    <View style={{ flexDirection: direction }}>
      {Array.from(Array(numberOfItems), (_a, i) => {
        const start = i * delta;
        const end = start + delta;
        const opacity = interpolate(progress, {
          inputRange: [start, end],
          outputRange: [0.5, 1],
          extrapolate: Extrapolate.CLAMP,
        });
        return (
          <Animated.View
            key={`s${i}`}
            style={[{ ...loaderStyle }, { opacity }]}
          />
        );
      })}
    </View>
  );
};
export default Skeleton;

export { useSkeletonValue };
