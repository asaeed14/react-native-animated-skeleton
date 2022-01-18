"use strict";
/**
 *
 * Loader
 *
 */
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
exports.useSkeletonAnimation = void 0;
// @ts-ignore
var react_1 = __importDefault(require("react"));
// @ts-ignore
var react_native_1 = require("react-native");
// @ts-ignore
var react_native_reanimated_1 = __importDefault(require("react-native-reanimated"));
var useSkeletonAnimation_1 = require("./useSkeletonAnimation");
Object.defineProperty(exports, "useSkeletonAnimation", { enumerable: true, get: function () { return useSkeletonAnimation_1.useSkeletonAnimation; } });
var Skeleton = function (_b) {
    var _c = _b.loaderStyle, loaderStyle = _c === void 0 ? {} : _c, _d = _b.numberOfItems, numberOfItems = _d === void 0 ? 3 : _d, _e = _b.direction, direction = _e === void 0 ? 'row' : _e, _f = _b.speed, speed = _f === void 0 ? 1000 : _f, _g = _b.targetOpacityValue, targetOpacityValue = _g === void 0 ? 0.2 : _g;
    var animatedStyle = useSkeletonAnimation_1.useSkeletonAnimation({ speed: speed, targetOpacityValue: targetOpacityValue });
    return (react_1.default.createElement(react_native_1.View, { style: { flexDirection: direction } }, Array.from(Array(numberOfItems), function (_a, i) {
        return (react_1.default.createElement(react_native_reanimated_1.default.View, { key: "s" + i, style: [__assign({}, loaderStyle), animatedStyle] }));
    })));
};
exports.default = Skeleton;
//# sourceMappingURL=index.js.map