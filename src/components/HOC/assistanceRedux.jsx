"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var tool_1 = require("./tool");
function assistanceRedux(Component) {
    var AssistanceRedux = /** @class */ (function (_super) {
        tslib_1.__extends(AssistanceRedux, _super);
        function AssistanceRedux() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AssistanceRedux.prototype.commit = function (type) {
            var payload = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                payload[_i - 1] = arguments[_i];
            }
            var dispatch = this.props.dispatch;
            if (dispatch instanceof Function) {
                dispatch(tslib_1.__assign({ type: type }, payload));
            }
        };
        AssistanceRedux = tslib_1.__decorate([
            tool_1.signComponentName('AssistanceRedux', Component)
        ], AssistanceRedux);
        return AssistanceRedux;
    }(Component));
    return AssistanceRedux;
}
exports.default = assistanceRedux;
//# sourceMappingURL=assistanceRedux.jsx.map