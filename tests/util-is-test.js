require("../util-is");
var Util = require("util");
var Assert = require("assert");

// isString tests
Assert(Util.isString(""));
Assert(Util.isString("asdfasd"));
Assert(Util.isString(''));
Assert(Util.isString('asdfasdf'));
Assert(Util.isString(new String()));
Assert(Util.isString(new String("asdfasd")));
Assert(!Util.isString({}));
Assert(!Util.isString(undefined));
Assert(!Util.isString(null));
Assert(!Util.isString(0));
Assert(!Util.isString(false));

// isFunction tests
Assert(Util.isFunction(function(){}));
Assert(Util.isFunction((function(){})));
Assert(Util.isFunction(new Function()));
Assert(!Util.isFunction({}));
Assert(!Util.isFunction(undefined));
Assert(!Util.isFunction(null));
Assert(!Util.isFunction(""));
Assert(!Util.isFunction(0));
Assert(!Util.isFunction(false));

// isNumber tests
Assert(Util.isNumber(0));
Assert(Util.isNumber(0.0));
Assert(Util.isNumber(.0));
Assert(Util.isNumber(1));
Assert(Util.isNumber(1.0));
Assert(Util.isNumber(1.1));
Assert(Util.isNumber(.1));
Assert(Util.isNumber(-1));
Assert(Util.isNumber(-1.0));
Assert(Util.isNumber(-1.1));
Assert(Util.isNumber(-.1));
Assert(Util.isNumber(Infinity));
Assert(Util.isNumber(NaN));
Assert(!Util.isNumber(undefined));
Assert(!Util.isNumber(null));
Assert(!Util.isNumber(""));
Assert(!Util.isNumber(false));

// isBoolean tests
Assert(Util.isBoolean(true));
Assert(Util.isBoolean(false));
Assert(Util.isBoolean(new Boolean(true)));
Assert(Util.isBoolean(new Boolean(false)));
Assert(Util.isBoolean(new Boolean()));
Assert(!Util.isBoolean(undefined));
Assert(!Util.isBoolean(null));
Assert(!Util.isBoolean(""));
Assert(!Util.isBoolean(0));

// isDefined tests
Assert(Util.isDefined({}));
Assert(Util.isDefined([]));
Assert(Util.isDefined(true));
Assert(Util.isDefined(false));
Assert(Util.isDefined(0));
Assert(Util.isDefined(""));
Assert(Util.isDefined(/abc/));
Assert(Util.isDefined(null));
Assert(!Util.isDefined(undefined));

// isEmpty tests
Assert(Util.isEmpty({}));
Assert(Util.isEmpty([]));
Assert(Util.isEmpty(""));
Assert(Util.isEmpty(null));
Assert(Util.isEmpty(undefined));
Assert(!Util.isEmpty(true));
Assert(!Util.isEmpty(false));
Assert(!Util.isEmpty(0));
Assert(!Util.isEmpty(/abc/));

// isUndefined tests
Assert(Util.isUndefined(undefined));
Assert(!Util.isUndefined(null));
Assert(!Util.isUndefined({}));
Assert(!Util.isUndefined([]));
Assert(!Util.isUndefined(""));
Assert(!Util.isUndefined(true));
Assert(!Util.isUndefined(false));
Assert(!Util.isUndefined(0));
Assert(!Util.isUndefined(/abc/));

// isObject tests
Assert(Util.isObject({}));
Assert(Util.isObject([]));
Assert(Util.isObject(""));
Assert(Util.isObject(null));
Assert(Util.isObject(true));
Assert(Util.isObject(false));
Assert(Util.isObject(0));
Assert(Util.isObject(/abc/));
Assert(!Util.isObject(undefined));

// isActualObject tests
Assert(Util.isPureObject({}));
Assert(Util.isPureObject(new Object()));
Assert(Util.isPureObject(Object.create({})));
Assert(!Util.isPureObject(undefined));
Assert(!Util.isPureObject(null));
Assert(!Util.isPureObject(true));
Assert(!Util.isPureObject(false));
Assert(!Util.isPureObject(0));
Assert(!Util.isPureObject(/abc/));
Assert(!Util.isPureObject([]));
Assert(!Util.isPureObject(""));
