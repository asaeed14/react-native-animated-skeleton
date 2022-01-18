"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSkeletonAnimation = void 0;
// @ts-ignore
var react_1 = require("react");
var react_native_reanimated_1 = require("react-native-reanimated");
function useSkeletonAnimation(_a) {
    var _b = _a.speed, speed = _b === void 0 ? 1000 : _b, _c = _a.targetOpacityValue, targetOpacityValue = _c === void 0 ? 0.2 : _c;
    var shared = react_native_reanimated_1.useSharedValue(0);
    react_1.useEffect(function () {
        shared.value = react_native_reanimated_1.withRepeat(react_native_reanimated_1.withTiming(1, { duration: speed }), Infinity, true);
    }, []);
    var animatedStyle = react_native_reanimated_1.useAnimatedStyle(function () { return ({
        opacity: react_native_reanimated_1.interpolate(shared.value, [0, 1], [targetOpacityValue, 1]),
    }); });
    return animatedStyle;
}
exports.useSkeletonAnimation = useSkeletonAnimation;
//# sourceMappingURL=useSkeletonAnimation.js.map