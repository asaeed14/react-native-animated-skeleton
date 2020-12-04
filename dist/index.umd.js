(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-native'), require('react-native-reanimated')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-native', 'react-native-reanimated'], factory) :
    (factory((global.index = {}),global.React,global.reactNative,global.Animated));
}(this, (function (exports,React,reactNative,Animated) { 'use strict';

    React = React && React.hasOwnProperty('default') ? React['default'] : React;
    var Animated__default = 'default' in Animated ? Animated['default'] : Animated;

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

    /**
     *
     * useSkeletonValue
     *
     */
    var Clock = Animated__default.Clock, Value = Animated__default.Value, useCode = Animated__default.useCode, set = Animated__default.set, block = Animated__default.block, cond = Animated__default.cond, startClock = Animated__default.startClock, clockRunning = Animated__default.clockRunning, not = Animated__default.not, eq = Animated__default.eq, timing = Animated__default.timing;
    var runTiming = function (_a) {
        var clock = _a.clock, speed = _a.speed;
        var state = {
            finished: new Value(0),
            position: new Value(0),
            time: new Value(0),
            frameTime: new Value(0),
        };
        var config = {
            toValue: new Value(1),
            duration: speed,
            easing: Animated.Easing.inOut(Animated.Easing.ease),
        };
        return block([
            cond(not(clockRunning(clock)), startClock(clock), timing(clock, state, config)),
            cond(eq(state.finished, 1), [
                set(state.finished, 0),
                set(state.frameTime, 0),
                set(state.time, 0),
                set(config.toValue, cond(eq(state.position, 1), 0, 1)),
            ]),
            state.position,
        ]);
    };
    var useSkeletonValue = function (_a) {
        var _b = (_a === void 0 ? {} : _a).speed, speed = _b === void 0 ? 1000 : _b;
        var progress = new Value(0);
        var clock = new Clock();
        useCode(function () { return block([set(progress, runTiming({ clock: clock, speed: speed }))]); }, [
            progress,
        ]);
        return progress;
    };

    var interpolate = Animated__default.interpolate, Extrapolate = Animated__default.Extrapolate;
    var Skeleton = function (_b) {
        var _c = _b.loaderStyle, loaderStyle = _c === void 0 ? {} : _c, _d = _b.numberOfItems, numberOfItems = _d === void 0 ? 3 : _d, _e = _b.direction, direction = _e === void 0 ? 'row' : _e, _f = _b.speed, speed = _f === void 0 ? 1000 : _f;
        var progress = useSkeletonValue({ speed: speed });
        var length = numberOfItems;
        var delta = 1 / length;
        return (React.createElement(reactNative.View, { style: { flexDirection: direction } }, Array.from(Array(numberOfItems), function (_a, i) {
            var start = i * delta;
            var end = start + delta;
            var opacity = interpolate(progress, {
                inputRange: [start, end],
                outputRange: [0.5, 1],
                extrapolate: Extrapolate.CLAMP,
            });
            return (React.createElement(Animated__default.View, { key: "s" + i, style: [__assign({}, loaderStyle), { opacity: opacity }] }));
        })));
    };

    exports.Skeleton = Skeleton;
    exports.useSkeletonValue = useSkeletonValue;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.umd.js.map
