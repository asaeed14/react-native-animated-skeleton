"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSkeletonValue = void 0;
/**
 *
 * Loader
 *
 */
var react_1 = __importDefault(require("react"));
// @ts-ignore
var react_native_1 = require("react-native");
// @ts-ignore
var react_native_reanimated_1 = __importDefault(require("react-native-reanimated"));
var useSkeletonValue_1 = __importDefault(require("./useSkeletonValue"));
exports.useSkeletonValue = useSkeletonValue_1.default;
var interpolate = react_native_reanimated_1.default.interpolate, Extrapolate = react_native_reanimated_1.default.Extrapolate;
var Skeleton = function (_b) {
    var _c = _b.loaderStyle, loaderStyle = _c === void 0 ? {} : _c, _d = _b.numberOfItems, numberOfItems = _d === void 0 ? 3 : _d, _e = _b.direction, direction = _e === void 0 ? 'row' : _e;
    var progress = useSkeletonValue_1.default();
    var length = numberOfItems;
    var delta = 1 / length;
    return (react_1.default.createElement(react_native_1.View, { style: { flexDirection: direction } }, Array.from(Array(numberOfItems), function (_a, i) {
        var start = i * delta;
        var end = start + delta;
        var opacity = interpolate(progress, {
            inputRange: [start, end],
            outputRange: [0.5, 1],
            extrapolate: Extrapolate.CLAMP,
        });
        return (react_1.default.createElement(react_native_reanimated_1.default.View, { key: "s" + i, style: [__assign({}, loaderStyle), { opacity: opacity }] }));
    })));
};
exports.default = Skeleton;
//# sourceMappingURL=index.js.map