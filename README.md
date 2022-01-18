# React Native Animated Skeleton

React Naive Animated Skeleton for both android and ios, Runs on native thread with smooth performance.

## Install

```
npm install react-native-animated-skeleton
```

OR

```
yarn add react-native-animated-skeleton
```

Now you need to install [`react-native-gesture-handler`](https://github.com/kmagiera/react-native-gesture-handler) and [`react-native-reanimated`](https://github.com/kmagiera/react-native-reanimated)
make sure you have installed `react-native-reanimated` v2

## Example

![Skeleton components](https://raw.githubusercontent.com/asaeed14/react-native-animated-skeleton/master/example.gif)

## How to Use

You can use direct `Skeleton` component or you can create your own loader for component by using `useSkeletonValue` hook.

```ts
import { Skeleton } from 'react-native-animated-skeleton';

const YourComponent = () => {
  if (loading) {
    return <Skeleton loaderStyle={style.loaderStyle} numberOfItems={1} />;
  }
  return <View>Your component design</View>;
};
```

OR

```ts
import Animated from 'react-native-reanimated';
import { useSkeletonAnimation } from 'react-native-animated-skeleton';

const YourComponent = () => {
  const animatedStyle = useSkeletonAnimation({ speed: 1000 });
  return (
    <View style={style.container}>
      <Animated.View style={[style.cardLoader, animatedStyle]} />
      <Animated.View style={[style.cardLoader, animatedStyle]} />
      <Animated.View style={[style.cardLoader, animatedStyle]} />
    </View>
  );
};
```

Make sure you provide a `backgroundColor` to loaderStyle to see an effect.

## Props

| Name               | Type              | Required | default |               Description               |
| ------------------ | ----------------- | :------: | :-----: | :-------------------------------------: |
| loaderStyle        | object            |   true   |    -    |    Style object for skeleton loader     |
| numberOfItems      | number            |  false   |    3    |         Number of loader items          |
| direction          | 'row' or 'column' |  false   |  'row'  |          Direction of loaders           |
| speed              | number            |  false   |  1000   |   Speed in mile seconds for animation   |
| targetOpacityValue | number            |  false   |   0.2   | Lower opacity value , 1 to "your value" |
