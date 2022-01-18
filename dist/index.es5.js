import { View } from 'react-native';
import React, { useEffect } from 'react';
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

// @ts-ignore
function useSkeletonAnimation(_a) {
    var _b = _a.speed, speed = _b === void 0 ? 1000 : _b, _c = _a.targetOpacityValue, targetOpacityValue = _c === void 0 ? 0.2 : _c;
    var shared = useSharedValue(0);
    useEffect(function () {
        shared.value = withRepeat(withTiming(1, { duration: speed }), Infinity, true);
    }, []);
    var animatedStyle = useAnimatedStyle(function () { return ({
        opacity: interpolate(shared.value, [0, 1], [targetOpacityValue, 1]),
    }); });
    return animatedStyle;
}

/**
 *
 * Loader
 *
 */
var Skeleton = function (_b) {
    var _c = _b.loaderStyle, loaderStyle = _c === void 0 ? {} : _c, _d = _b.numberOfItems, numberOfItems = _d === void 0 ? 3 : _d, _e = _b.direction, direction = _e === void 0 ? 'row' : _e, _f = _b.speed, speed = _f === void 0 ? 1000 : _f, _g = _b.targetOpacityValue, targetOpacityValue = _g === void 0 ? 0.2 : _g;
    var animatedStyle = useSkeletonAnimation({ speed: speed, targetOpacityValue: targetOpacityValue });
    return (React.createElement(View, { style: { flexDirection: direction } }, Array.from(Array(numberOfItems), function (_a, i) {
        return (React.createElement(Animated.View, { key: "s" + i, style: [__assign({}, loaderStyle), animatedStyle] }));
    })));
};

export { Skeleton, useSkeletonAnimation };
//# sourceMappingURL=index.es5.js.map
