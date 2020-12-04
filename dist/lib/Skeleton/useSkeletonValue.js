"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * useSkeletonValue
 *
 */
// @ts-ignore
var react_native_reanimated_1 = __importStar(require("react-native-reanimated"));
var Clock = react_native_reanimated_1.default.Clock, Value = react_native_reanimated_1.default.Value, useCode = react_native_reanimated_1.default.useCode, set = react_native_reanimated_1.default.set, block = react_native_reanimated_1.default.block, cond = react_native_reanimated_1.default.cond, startClock = react_native_reanimated_1.default.startClock, clockRunning = react_native_reanimated_1.default.clockRunning, not = react_native_reanimated_1.default.not, eq = react_native_reanimated_1.default.eq, timing = react_native_reanimated_1.default.timing;
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
        easing: react_native_reanimated_1.Easing.inOut(react_native_reanimated_1.Easing.ease),
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
exports.default = useSkeletonValue;
//# sourceMappingURL=useSkeletonValue.js.map