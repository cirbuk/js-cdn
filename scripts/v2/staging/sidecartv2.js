/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 38);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"k\", function() { return isUndefined; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"d\", function() { return isFunction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"e\", function() { return isNull; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"f\", function() { return isNullOrUndefined; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"o\", function() { return safeParseJSON; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"h\", function() { return isObject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"c\", function() { return get; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"g\", function() { return isNumber; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"j\", function() { return isString; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"l\", function() { return isValidString; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"p\", function() { return set; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"b\", function() { return debounce; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return convertToSnakeCase; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"n\", function() { return resolvePromiseMap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"m\", function() { return mapValues; });\n/* unused harmony export isObjectLike */\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"i\", function() { return isPlainObject; });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nfunction isUndefined(val) {\n    return typeof val === \"undefined\";\n}\nfunction isFunction(val) {\n    return typeof val === \"function\";\n}\nfunction isNull(val) {\n    return val === null;\n}\nfunction isNullOrUndefined(val) {\n    return isNull(val) || isUndefined(val);\n}\nconst safeParseJSON = (str, defaultValue = {}) => {\n    if (Number.isFinite(+str)) {\n        return defaultValue;\n    }\n    try {\n        return JSON.parse(str);\n    }\n    catch (_err) {\n    }\n    return defaultValue;\n};\nfunction isObject(val) {\n    const AsyncFunction = function () {\n        return __awaiter(this, void 0, void 0, function* () { });\n    }.constructor;\n    return (typeof val === \"object\" &&\n        !isNull(val) &&\n        !Array.isArray(val) &&\n        !(val instanceof AsyncFunction) &&\n        val.constructor !== \"function\" &&\n        Object.prototype.toString.call(val) === \"[object Object]\");\n}\nfunction get(from, selector, defaultValue = undefined) {\n    if (isNull(from) || isUndefined(from)) {\n        return defaultValue;\n    }\n    const validSelector = selector !== null && selector !== void 0 ? selector : \"\";\n    const value = validSelector\n        .replace(/\\[([^[\\]]*)]/g, \".$1.\")\n        .split(\".\")\n        .filter((t) => t !== \"\")\n        .reduce((prev, curr) => prev && prev[curr], from);\n    return !isUndefined(value) ? value : defaultValue;\n}\nfunction isNumber(value) {\n    return typeof value === \"number\" && Number.isFinite(value);\n}\nfunction isString(value) {\n    return typeof value === \"string\";\n}\nfunction isValidString(value) {\n    return isString(value) && value.length > 0;\n}\nconst set = (object, path = \"\", value) => {\n    const splits = path && path.length > 0 ? path.split(\".\") : [];\n    let objectPointer = object;\n    splits.slice(0, splits.length - 1).forEach((spilt) => {\n        let currentObject = objectPointer[spilt];\n        if (isNull(currentObject) || isUndefined(currentObject)) {\n            currentObject = {};\n        }\n        objectPointer[spilt] = currentObject;\n        objectPointer = objectPointer[spilt];\n    });\n    objectPointer[splits.pop()] = value;\n    return object;\n};\nfunction debounce(func, timeout = 100) {\n    let timer;\n    return (...args) => {\n        clearTimeout(timer);\n        timer = setTimeout(() => {\n            func(...args);\n        }, timeout);\n    };\n}\nconst convertToSnakeCase = (str) => {\n    var _a, _b, _c;\n    return ((_c = (_b = (_a = str\n        .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)) === null || _a === void 0 ? void 0 : _a.map((x) => x.toLowerCase())) === null || _b === void 0 ? void 0 : _b.join(\"_\")) !== null && _c !== void 0 ? _c : str);\n};\nconst resolvePromiseMap = (promises) => {\n    const keys = Object.keys(promises);\n    const promiseArr = [];\n    const keyMap = keys.reduce((acc, key, index) => {\n        acc[index] = key;\n        promiseArr.push(promises[key]);\n        return acc;\n    }, {});\n    return Promise.all(promiseArr).then((respArr) => {\n        return respArr.reduce((acc, resp, index) => {\n            acc[keyMap[index]] = resp;\n            return acc;\n        }, {});\n    });\n};\nconst mapValues = (obj, func) => {\n    let keys;\n    try {\n        keys = Object.keys(obj);\n    }\n    catch (ex) {\n        throw new Error(\"Unable to extract keys from provided object\");\n    }\n    return keys.reduce((results, key) => {\n        const value = func(obj[key], key);\n        const modified = Object.assign({}, results);\n        if (!isUndefined(value)) {\n            modified[key] = value;\n        }\n        return modified;\n    }, {});\n};\nconst isObjectLike = (val) => typeof val === \"object\" && !isNull(val);\nfunction isPlainObject(val) {\n    if (!isObjectLike(val) || val.toString() !== \"[object Object]\") {\n        return false;\n    }\n    if (Object.getPrototypeOf(val) === null) {\n        return true;\n    }\n    let proto = val;\n    while (Object.getPrototypeOf(proto) !== null) {\n        proto = Object.getPrototypeOf(proto);\n    }\n    return Object.getPrototypeOf(val) === proto;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvbG9kYXNoLnRzPzFkMTkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3QiwyQkFBMkIsK0RBQStELGdCQUFnQixFQUFFLEVBQUU7QUFDOUc7QUFDQSxtQ0FBbUMsTUFBTSw2QkFBNkIsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNqRyxrQ0FBa0MsTUFBTSxpQ0FBaUMsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNwRywrQkFBK0IscUZBQXFGO0FBQ3BIO0FBQ0EsS0FBSztBQUNMO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ08sNkNBQTZDO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBLDZEQUE2RCxFQUFFO0FBQy9ELEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0Esc0JBQXNCLEdBQUc7QUFDekI7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssSUFBSTtBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxJQUFJO0FBQ2IsS0FBSztBQUNMO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLElBQUk7QUFDVDtBQUNPO0FBQ0E7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIGlzVW5kZWZpbmVkKHZhbCkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsID09PSBcInVuZGVmaW5lZFwiO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWwgPT09IFwiZnVuY3Rpb25cIjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc051bGwodmFsKSB7XG4gICAgcmV0dXJuIHZhbCA9PT0gbnVsbDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc051bGxPclVuZGVmaW5lZCh2YWwpIHtcbiAgICByZXR1cm4gaXNOdWxsKHZhbCkgfHwgaXNVbmRlZmluZWQodmFsKTtcbn1cbmV4cG9ydCBjb25zdCBzYWZlUGFyc2VKU09OID0gKHN0ciwgZGVmYXVsdFZhbHVlID0ge30pID0+IHtcbiAgICBpZiAoTnVtYmVyLmlzRmluaXRlKCtzdHIpKSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKHN0cik7XG4gICAgfVxuICAgIGNhdGNoIChfZXJyKSB7XG4gICAgfVxuICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIGlzT2JqZWN0KHZhbCkge1xuICAgIGNvbnN0IEFzeW5jRnVuY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7IH0pO1xuICAgIH0uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuICh0eXBlb2YgdmFsID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICFpc051bGwodmFsKSAmJlxuICAgICAgICAhQXJyYXkuaXNBcnJheSh2YWwpICYmXG4gICAgICAgICEodmFsIGluc3RhbmNlb2YgQXN5bmNGdW5jdGlvbikgJiZcbiAgICAgICAgdmFsLmNvbnN0cnVjdG9yICE9PSBcImZ1bmN0aW9uXCIgJiZcbiAgICAgICAgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbCkgPT09IFwiW29iamVjdCBPYmplY3RdXCIpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldChmcm9tLCBzZWxlY3RvciwgZGVmYXVsdFZhbHVlID0gdW5kZWZpbmVkKSB7XG4gICAgaWYgKGlzTnVsbChmcm9tKSB8fCBpc1VuZGVmaW5lZChmcm9tKSkge1xuICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgIH1cbiAgICBjb25zdCB2YWxpZFNlbGVjdG9yID0gc2VsZWN0b3IgIT09IG51bGwgJiYgc2VsZWN0b3IgIT09IHZvaWQgMCA/IHNlbGVjdG9yIDogXCJcIjtcbiAgICBjb25zdCB2YWx1ZSA9IHZhbGlkU2VsZWN0b3JcbiAgICAgICAgLnJlcGxhY2UoL1xcWyhbXltcXF1dKildL2csIFwiLiQxLlwiKVxuICAgICAgICAuc3BsaXQoXCIuXCIpXG4gICAgICAgIC5maWx0ZXIoKHQpID0+IHQgIT09IFwiXCIpXG4gICAgICAgIC5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHByZXYgJiYgcHJldltjdXJyXSwgZnJvbSk7XG4gICAgcmV0dXJuICFpc1VuZGVmaW5lZCh2YWx1ZSkgPyB2YWx1ZSA6IGRlZmF1bHRWYWx1ZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc051bWJlcih2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIgJiYgTnVtYmVyLmlzRmluaXRlKHZhbHVlKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1N0cmluZyh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCI7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNWYWxpZFN0cmluZyh2YWx1ZSkge1xuICAgIHJldHVybiBpc1N0cmluZyh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID4gMDtcbn1cbmV4cG9ydCBjb25zdCBzZXQgPSAob2JqZWN0LCBwYXRoID0gXCJcIiwgdmFsdWUpID0+IHtcbiAgICBjb25zdCBzcGxpdHMgPSBwYXRoICYmIHBhdGgubGVuZ3RoID4gMCA/IHBhdGguc3BsaXQoXCIuXCIpIDogW107XG4gICAgbGV0IG9iamVjdFBvaW50ZXIgPSBvYmplY3Q7XG4gICAgc3BsaXRzLnNsaWNlKDAsIHNwbGl0cy5sZW5ndGggLSAxKS5mb3JFYWNoKChzcGlsdCkgPT4ge1xuICAgICAgICBsZXQgY3VycmVudE9iamVjdCA9IG9iamVjdFBvaW50ZXJbc3BpbHRdO1xuICAgICAgICBpZiAoaXNOdWxsKGN1cnJlbnRPYmplY3QpIHx8IGlzVW5kZWZpbmVkKGN1cnJlbnRPYmplY3QpKSB7XG4gICAgICAgICAgICBjdXJyZW50T2JqZWN0ID0ge307XG4gICAgICAgIH1cbiAgICAgICAgb2JqZWN0UG9pbnRlcltzcGlsdF0gPSBjdXJyZW50T2JqZWN0O1xuICAgICAgICBvYmplY3RQb2ludGVyID0gb2JqZWN0UG9pbnRlcltzcGlsdF07XG4gICAgfSk7XG4gICAgb2JqZWN0UG9pbnRlcltzcGxpdHMucG9wKCldID0gdmFsdWU7XG4gICAgcmV0dXJuIG9iamVjdDtcbn07XG5leHBvcnQgZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgdGltZW91dCA9IDEwMCkge1xuICAgIGxldCB0aW1lcjtcbiAgICByZXR1cm4gKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGZ1bmMoLi4uYXJncyk7XG4gICAgICAgIH0sIHRpbWVvdXQpO1xuICAgIH07XG59XG5leHBvcnQgY29uc3QgY29udmVydFRvU25ha2VDYXNlID0gKHN0cikgPT4ge1xuICAgIHZhciBfYSwgX2IsIF9jO1xuICAgIHJldHVybiAoKF9jID0gKF9iID0gKF9hID0gc3RyXG4gICAgICAgIC5tYXRjaCgvW0EtWl17Mix9KD89W0EtWl1bYS16XStbMC05XSp8XFxiKXxbQS1aXT9bYS16XStbMC05XSp8W0EtWl18WzAtOV0rL2cpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EubWFwKCh4KSA9PiB4LnRvTG93ZXJDYXNlKCkpKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Iuam9pbihcIl9cIikpICE9PSBudWxsICYmIF9jICE9PSB2b2lkIDAgPyBfYyA6IHN0cik7XG59O1xuZXhwb3J0IGNvbnN0IHJlc29sdmVQcm9taXNlTWFwID0gKHByb21pc2VzKSA9PiB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHByb21pc2VzKTtcbiAgICBjb25zdCBwcm9taXNlQXJyID0gW107XG4gICAgY29uc3Qga2V5TWFwID0ga2V5cy5yZWR1Y2UoKGFjYywga2V5LCBpbmRleCkgPT4ge1xuICAgICAgICBhY2NbaW5kZXhdID0ga2V5O1xuICAgICAgICBwcm9taXNlQXJyLnB1c2gocHJvbWlzZXNba2V5XSk7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30pO1xuICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlQXJyKS50aGVuKChyZXNwQXJyKSA9PiB7XG4gICAgICAgIHJldHVybiByZXNwQXJyLnJlZHVjZSgoYWNjLCByZXNwLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgYWNjW2tleU1hcFtpbmRleF1dID0gcmVzcDtcbiAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgIH0sIHt9KTtcbiAgICB9KTtcbn07XG5leHBvcnQgY29uc3QgbWFwVmFsdWVzID0gKG9iaiwgZnVuYykgPT4ge1xuICAgIGxldCBrZXlzO1xuICAgIHRyeSB7XG4gICAgICAgIGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICAgIH1cbiAgICBjYXRjaCAoZXgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5hYmxlIHRvIGV4dHJhY3Qga2V5cyBmcm9tIHByb3ZpZGVkIG9iamVjdFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIGtleXMucmVkdWNlKChyZXN1bHRzLCBrZXkpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBmdW5jKG9ialtrZXldLCBrZXkpO1xuICAgICAgICBjb25zdCBtb2RpZmllZCA9IE9iamVjdC5hc3NpZ24oe30sIHJlc3VsdHMpO1xuICAgICAgICBpZiAoIWlzVW5kZWZpbmVkKHZhbHVlKSkge1xuICAgICAgICAgICAgbW9kaWZpZWRba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtb2RpZmllZDtcbiAgICB9LCB7fSk7XG59O1xuZXhwb3J0IGNvbnN0IGlzT2JqZWN0TGlrZSA9ICh2YWwpID0+IHR5cGVvZiB2YWwgPT09IFwib2JqZWN0XCIgJiYgIWlzTnVsbCh2YWwpO1xuZXhwb3J0IGZ1bmN0aW9uIGlzUGxhaW5PYmplY3QodmFsKSB7XG4gICAgaWYgKCFpc09iamVjdExpa2UodmFsKSB8fCB2YWwudG9TdHJpbmcoKSAhPT0gXCJbb2JqZWN0IE9iamVjdF1cIikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChPYmplY3QuZ2V0UHJvdG90eXBlT2YodmFsKSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgbGV0IHByb3RvID0gdmFsO1xuICAgIHdoaWxlIChPYmplY3QuZ2V0UHJvdG90eXBlT2YocHJvdG8pICE9PSBudWxsKSB7XG4gICAgICAgIHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHByb3RvKTtcbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC5nZXRQcm90b3R5cGVPZih2YWwpID09PSBwcm90bztcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?t(exports):undefined}(this,(function(e){"use strict";var t,i,o,E,T,a,n,d,r,A,_,s,O,l,I;e.AlignValue=void 0,(t=e.AlignValue||(e.AlignValue={})).LEFT="left",t.RIGHT="right",t.CENTER="center",e.AlignPosition=void 0,(i=e.AlignPosition||(e.AlignPosition={})).NATURAL="natural",i.CANVAS="canvas",e.ShapeKind=void 0,(o=e.ShapeKind||(e.ShapeKind={})).CIRCLE="circle",o.RECTANGLE="rectangle",o.POLYGON="polygon",e.ObjectType=void 0,(E=e.ObjectType||(e.ObjectType={})).TEXT="text",E.SHAPE="shape",E.IMAGE="image",E.GROUP="group",e.SizeUnit=void 0,(T=e.SizeUnit||(e.SizeUnit={})).PX="px",T.PERCENT="%",e.LogicalOp=void 0,(a=e.LogicalOp||(e.LogicalOp={})).AND="and",a.OR="or",e.ComparisonOp=void 0,(n=e.ComparisonOp||(e.ComparisonOp={})).GT="gt",n.LT="lt",n.GE="ge",n.LE="le",n.EQ="eq",n.NE="ne",e.ConditionVariable=void 0,(d=e.ConditionVariable||(e.ConditionVariable={})).H="h",d.W="w",d.AR="ar",e.CartUpdateAction=void 0,(r=e.CartUpdateAction||(e.CartUpdateAction={})).ADD_TO_CART="addToCart",r.INCREMENT_QUANTITY="increaseQuantity",r.DECREMENT_QUANTITY="decreaseQuantity",r.UPDATE_QUANTITY="updateQuantity",r.CHANGE_QUANTITY="changeQuantity",r.CHANGE_CART="changeCart",e.WidgetFeature=void 0,(A=e.WidgetFeature||(e.WidgetFeature={})).AUTOMATED_DISCOUNTS="cart_discounts_inclusion",A.MANUAL_DISCOUNT_ALLOCATIONS="allow_manual_discount_allocations",A.DISABLE_COUPON_CODES="disable_coupon_codes",A.PRODUCT_VARIANTS="product_variants",A.EXCLUDE_OOS="exclude_oos",A.TIMER="timer",A.EMBEDDED_PRICE_DROP="embed-price-drop",A.PRODUCT_SELECTION="product_selection",A.RECOMMENDATION_REMINDER="recommendation_reminder",A.QUIZ_TIMER="quiz-timer",A.FS_FLOATING="fullscreen-floating",A.FLOATING_LAUNCHER="floating-launcher",A.SINGLE_SELECTION_DISCOUNT="single_selection_discount",A.EXCLUDE_DOUBLE_SELECTION_DISCOUNT="exclude_double_selection_discount",A.TIERED_DISCOUNT="tiered_discount",A.NO_DEFAULT_SELECTION="no_default_selection",A.PRODUCT_DISCOUNT="product_discount",A.NEW_USER_VIEW="new_user_view",A.TIMED_VIEW="timed_view",A.MOBILE_BOTTOM_DRAWER="mobile_bottom_drawer",A.USER_SPECIFIC="user-specific",A.COD_HIDDEN="cod_hidden",e.WidgetCategory=void 0,(_=e.WidgetCategory||(e.WidgetCategory={})).CUSTOM_QUIZ="custom_recommendation-quiz",_.QUIZ="quiz",_.PRODUCT_BUNDLE="bundle",_.AB_CART="cart",_.SIDE_CART="side-cart",_.FORM="form",_.PRICE_DROP="price-drop",_.NEW_ARRIVALS="newarrivals",_.BESTSELLER="recommended",_.GENERIC="generic",_.FBT="fbt",_.REWARD_QUIZ="reward-quiz",_.BULK_BUY="bulk-buy",_.SPIN_WHEEL="spin-the-wheel",_.STICKY_CART_BUTTON="sticky-cart-button",_.PLAYBOOK="playbook",_.PRODUCT_INFO="info",e.WidgetType=void 0,(s=e.WidgetType||(e.WidgetType={})).STORE_BANNER="store",s.PRODUCT_BANNER="product",s.WIDGET="widget",e.InsertType=void 0,(O=e.InsertType||(e.InsertType={})).ABOVE="above",O.BELOW="below",O.REPLACE_CHILDREN="replaceChildren",O.LAST_CHILD="lastChild",O.FIRST_CHILD="firstChild",O.PAGE_TOP="pageTop",O.PAGE_BOTTOM="pageBottom",O.PAGE_HOVER_TOP="pageHoverTop",O.PAGE_HOVER_BOTTOM="pageHoverBottom",O.FLOATING="floating",O.SLIDE_IN="slideIn",e.WidgetTimingAction=void 0,(l=e.WidgetTimingAction||(e.WidgetTimingAction={})).CLICK="click",l.SCROLL="scroll",l.DELAY="delay",l.AB_CART="abcart",e.TargetType=void 0,(I=e.TargetType||(e.TargetType={})).PAGES="pages",I.PRODUCTS="products",I.COLLECTIONS="collections";var C,p,R,c,D,u,S,N,g,L;e.BreakpointId=void 0,(C=e.BreakpointId||(e.BreakpointId={})).XS="xs",C.M="m",C.L="l",C.XL="xl",e.FloatingPositionTypes=void 0,(p=e.FloatingPositionTypes||(e.FloatingPositionTypes={})).TOP="top",p.RIGHT="right",p.BOTTOM="bottom",p.LEFT="left",e.AddOn=void 0,(R=e.AddOn||(e.AddOn={})).RECOMMENDED="recommended",R.UPSELL="upsell",R.FBT="fbt",R.BXGY="bxgy",e.WidgetEntityState=void 0,(c=e.WidgetEntityState||(e.WidgetEntityState={})).ENABLED="enabled",c.DISABLED="disabled",c.SYSTEM_DISABLED="system_disabled",c.DELETED="deleted",e.ApplyType=void 0,(D=e.ApplyType||(e.ApplyType={})).MANUAL="manual",D.AUTOMATION="automation",e.PublishAs=void 0,(u=e.PublishAs||(e.PublishAs={})).BADGE="badge",u.FEATURE_CARD="feature-card",u.TRUST_BADGE="trust-badges",u.STORE_BANNER="store-banner",u.PRODUCT_BANNER="product-banner",u.STANDALONE="standalone",u.WIDGET="widget",e.AddonStatus=void 0,(S=e.AddonStatus||(e.AddonStatus={})).ENABLED="enabled",S.DISABLED="disabled",e.DiscountType=void 0,(N=e.DiscountType||(e.DiscountType={})).FIXED="fixed_amount",N.PERCENTAGE="percentage",N.TIERED="tiered",N.BXGY_PRODUCTS="bxgy::products",e.ChannelMethod=void 0,(g=e.ChannelMethod||(e.ChannelMethod={})).INITIALIZE="initialize",g.RESIZE="resize",g.TIMER_EXPIRED="timerExpired",g.CART_UPDATE="onCartUpdate",g.ORDER_CREATED="orderCreated",g.DISCOUNT_UPDATION="discountUpdation",g.FETCH_CART="getCart",g.CLOSE="closeWidget",g.CHANGE_VARIANT="onChangeVariant",g.SELECT_PRODUCT="onProductSelect",g.FORM_SUBMIT="onFormSubmit",g.FORM_RESET="onFormReset",g.UPDATE_WIDGET="update",g.URL_CHANGE="urlchange",g.WINDOW_RESIZED="window-resized",g.TIMER_STATE_UPDATE="timer-state-update",g.SPIN_WHEEL_STATE_UPDATE="spin-wheel-state-update",g.QUIZ_STATE_UPDATE="quiz-state-update",g.IN_VIEW="in-view",g.OUT_OF_VIEW="out-of-view",g.GET_QUERY_PARAMS="get-query-params",g.LINK_DATA_UPDATE="link-data-update",g.GET_STOREFRONT_DATA="get-storefront-data",e.CheckoutType=void 0,(L=e.CheckoutType||(e.CheckoutType={})).SWIFT="swift",L.FASTRR="fastrr",L.GOKWIK="gokwik",L.DEFAULT="default";var U,P,y,m;e.ScriptName=void 0,(U=e.ScriptName||(e.ScriptName={})).ANALYTICS="analytics",U.LOADER="loader",U.LOFOODS="lofoods",U.OVERLAY="overlay",U.PREVIEW="preview",U.REPLACE="replace",U.SIDECART="sidecart",U.THANKYOU="thankyou",U.TRUSTBADGES="trustbadges",U.WIDGETS="widgets",U.QUIZ="quiz",e.FeaturesAPIApp=void 0,(P=e.FeaturesAPIApp||(e.FeaturesAPIApp={})).MODEMAGIC="modemagic",P.QUIZ_MASTER="quizmaster",e.CacheEntryVersion=void 0,(y=e.CacheEntryVersion||(e.CacheEntryVersion={})).ONE="1.0",y.TWO="2.0",e.TBAlign=void 0,(m=e.TBAlign||(e.TBAlign={})).CENTER="center",m.RIGHT="right",m.LEFT="left",e.LauncherPositions={BOTTOM_LEFT:"bottomLeft",BOTTOM_RIGHT:"bottomRight"},e.Platforms={SHOPIFY:"shopify",BIGCOMMERCE:"bigcommerce",UNKNOWN:"--unknown--"}}));


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return console; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"b\", function() { return debugLog; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);\n\nconst fns = [\n    \"info\",\n    \"debug\",\n    \"error\",\n    \"log\",\n    \"group\",\n    \"groupEnd\",\n];\nconst console = fns.reduce((acc, fn) => {\n    acc[fn] = (...args) => {\n        if (!_constants__WEBPACK_IMPORTED_MODULE_0__[/* isProduction */ \"b\"]) {\n            window.console[fn](...args);\n        }\n    };\n    return acc;\n}, {});\nconst debugLog = (message, data) => {\n    if (!_constants__WEBPACK_IMPORTED_MODULE_0__[/* isProduction */ \"b\"]) {\n        console.debug(`%c [Scripts] ${message}`, \"background: #222; color: #d97b09\", data !== null && data !== void 0 ? data : \"\");\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvY29uc29sZS50cz9mOTU1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBLGFBQWEsK0RBQVk7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLElBQUk7QUFDRTtBQUNQLFNBQVMsK0RBQVk7QUFDckIsc0NBQXNDLFFBQVEscUJBQXFCO0FBQ25FO0FBQ0EiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzUHJvZHVjdGlvbiB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuY29uc3QgZm5zID0gW1xuICAgIFwiaW5mb1wiLFxuICAgIFwiZGVidWdcIixcbiAgICBcImVycm9yXCIsXG4gICAgXCJsb2dcIixcbiAgICBcImdyb3VwXCIsXG4gICAgXCJncm91cEVuZFwiLFxuXTtcbmV4cG9ydCBjb25zdCBjb25zb2xlID0gZm5zLnJlZHVjZSgoYWNjLCBmbikgPT4ge1xuICAgIGFjY1tmbl0gPSAoLi4uYXJncykgPT4ge1xuICAgICAgICBpZiAoIWlzUHJvZHVjdGlvbikge1xuICAgICAgICAgICAgd2luZG93LmNvbnNvbGVbZm5dKC4uLmFyZ3MpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gYWNjO1xufSwge30pO1xuZXhwb3J0IGNvbnN0IGRlYnVnTG9nID0gKG1lc3NhZ2UsIGRhdGEpID0+IHtcbiAgICBpZiAoIWlzUHJvZHVjdGlvbikge1xuICAgICAgICBjb25zb2xlLmRlYnVnKGAlYyBbU2NyaXB0c10gJHttZXNzYWdlfWAsIFwiYmFja2dyb3VuZDogIzIyMjsgY29sb3I6ICNkOTdiMDlcIiwgZGF0YSAhPT0gbnVsbCAmJiBkYXRhICE9PSB2b2lkIDAgPyBkYXRhIDogXCJcIik7XG4gICAgfVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"f\", function() { return imageExtensionsRegex; });\n/* unused harmony export shopifyImageFiltersRegex */\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"i\", function() { return parseImageUrl; });\n/* unused harmony export trimExtensionAndParams */\n/* unused harmony export matchStrings */\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"d\", function() { return getMatchedUrl; });\n/* unused harmony export getFileName */\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return getCDNFilePath; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"b\", function() { return getCDNOrigin; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"c\", function() { return getCurrentPage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"h\", function() { return modeMagicSettings; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"g\", function() { return isElementInViewport; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"j\", function() { return proxify; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"e\", function() { return getQueryObject; });\n/* harmony import */ var utils_console__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);\n/* harmony import */ var utils_lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);\n/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);\n/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);\nvar _a;\n\n\n\n\nconst isTest = ((_a = process === null || process === void 0 ? void 0 : {\"USER_FEATURES_API\":\"https://mm.beta.getmason.io/api/features\",\"APP_URL\":\"https://mm.beta.getmason.io/widgets/view\",\"NODE_ENV\":\"staging\"}) === null || _a === void 0 ? void 0 : _a.NODE_ENV) === \"test\";\nconst imageExtensions = [\n    \"ase\",\n    \"art\",\n    \"bmp\",\n    \"blp\",\n    \"cd5\",\n    \"cit\",\n    \"cpt\",\n    \"cr2\",\n    \"cut\",\n    \"dds\",\n    \"dib\",\n    \"djvu\",\n    \"egt\",\n    \"exif\",\n    \"gif\",\n    \"gpl\",\n    \"grf\",\n    \"icns\",\n    \"ico\",\n    \"iff\",\n    \"jng\",\n    \"jpeg\",\n    \"jpg\",\n    \"jfif\",\n    \"jp2\",\n    \"jps\",\n    \"lbm\",\n    \"max\",\n    \"miff\",\n    \"mng\",\n    \"msp\",\n    \"nef\",\n    \"nitf\",\n    \"ota\",\n    \"pbm\",\n    \"pc1\",\n    \"pc2\",\n    \"pc3\",\n    \"pcf\",\n    \"pcx\",\n    \"pdn\",\n    \"pgm\",\n    \"PI1\",\n    \"PI2\",\n    \"PI3\",\n    \"pict\",\n    \"pct\",\n    \"pnm\",\n    \"pns\",\n    \"ppm\",\n    \"psb\",\n    \"psd\",\n    \"pdd\",\n    \"psp\",\n    \"px\",\n    \"pxm\",\n    \"pxr\",\n    \"qfx\",\n    \"raw\",\n    \"rle\",\n    \"sct\",\n    \"sgi\",\n    \"rgb\",\n    \"int\",\n    \"bw\",\n    \"tga\",\n    \"tiff\",\n    \"tif\",\n    \"vtf\",\n    \"xbm\",\n    \"xcf\",\n    \"xpm\",\n    \"3dv\",\n    \"amf\",\n    \"ai\",\n    \"awg\",\n    \"cgm\",\n    \"cdr\",\n    \"cmx\",\n    \"dxf\",\n    \"e2d\",\n    \"egt\",\n    \"eps\",\n    \"fs\",\n    \"gbr\",\n    \"odg\",\n    \"svg\",\n    \"stl\",\n    \"vrml\",\n    \"x3d\",\n    \"sxd\",\n    \"v2d\",\n    \"vnd\",\n    \"wmf\",\n    \"emf\",\n    \"art\",\n    \"xar\",\n    \"png\",\n    \"webp\",\n    \"jxr\",\n    \"hdp\",\n    \"wdp\",\n    \"cur\",\n    \"ecw\",\n    \"iff\",\n    \"lbm\",\n    \"liff\",\n    \"nrrd\",\n    \"pam\",\n    \"pcx\",\n    \"pgf\",\n    \"sgi\",\n    \"rgb\",\n    \"rgba\",\n    \"bw\",\n    \"int\",\n    \"inta\",\n    \"sid\",\n    \"ras\",\n    \"sun\",\n    \"tga\",\n    \"heic\",\n    \"heif\",\n];\nconst extnSet = new Set(imageExtensions);\nconst imageExtensionsRegex = new RegExp(`((.${imageExtensions.join(\"|.\")})+)$`, \"i\");\nconst urlSizes = [\n    \"pico\",\n    \"icon\",\n    \"thumb\",\n    \"small\",\n    \"compact\",\n    \"medium\",\n    \"large\",\n    \"grande\",\n    \"original\",\n    \"master\",\n];\nconst urlCrops = [\"center\", \"top\", \"right\", \"bottom\", \"left\"];\nconst urlScales = [\"progressive\"];\nconst shopifyImageFiltersRegex = new RegExp(`((?:_(?:x|X)?)(?:(?:\\\\d{1,4}(?:x|X)\\\\d{0,4}|(?:x|X)\\\\d{1,4})|(?:${urlSizes.join(\"|\")})))?(_crop_(?:${urlCrops.join(\"|\")}))?(@[23]x)?(.(?:${urlScales.join(\"|\")}))?$`);\nconst removeExtn = (() => {\n    let splits = [];\n    return (imageUrl) => {\n        let replacedUrl = imageUrl\n            .replace(/\\.([^.]+?)$/, \"\");\n        splits = replacedUrl.split(\".\");\n        let stopIndex = -1;\n        for (let i = 0; i < splits.length; i += 1) {\n            if (extnSet.has(splits[i])) {\n                stopIndex = i;\n                break;\n            }\n        }\n        replacedUrl = splits\n            .slice(0, stopIndex > 0 ? stopIndex : undefined)\n            .join(\".\");\n        return replacedUrl;\n    };\n})();\nconst parseImageUrl = (() => {\n    const cache = {};\n    return (src) => {\n        const result = cache[src];\n        if (typeof result === \"string\") {\n            return result;\n        }\n        let parsedSrc = src;\n        parsedSrc = parsedSrc.replace(/\\?v=.*/g, \"\");\n        const extnRemovedSrc = removeExtn(parsedSrc);\n        const match = extnRemovedSrc.match(shopifyImageFiltersRegex);\n        if (match) {\n            const { index = 0 } = match;\n            const firstSplit = parsedSrc.slice(0, index);\n            const lastSplit = parsedSrc.slice(index + match[0].length);\n            parsedSrc = `${firstSplit}${lastSplit}`;\n        }\n        cache[src] = parsedSrc;\n        return parsedSrc;\n    };\n})();\nconst trimExtensionAndParams = (() => {\n    const trimCache = {};\n    return (url) => {\n        let result = trimCache[url];\n        if (typeof result === \"string\") {\n            return result;\n        }\n        result = removeExtn(url);\n        trimCache[url] = result;\n        return result;\n    };\n})();\nfunction matchStrings(sourceSrc, src) {\n    return trimExtensionAndParams(sourceSrc) === trimExtensionAndParams(src);\n}\nfunction getMatchedUrl(sourceSrc, srcs) {\n    return srcs.find((src) => matchStrings(sourceSrc, src)) || \"\";\n}\nfunction getFileName(fileURL) {\n    var _a, _b;\n    return (_b = (_a = fileURL.split(\"/\").pop()) === null || _a === void 0 ? void 0 : _a.split(\"?\")) === null || _b === void 0 ? void 0 : _b[0];\n}\nconst getCDNFilePath = (() => {\n    const map = new Map([]);\n    return (url, cdnPath) => {\n        var _a;\n        if (map.has(url)) {\n            return map.get(url);\n        }\n        const parsedUrl = parseImageUrl(url);\n        const extensions = parsedUrl.match(imageExtensionsRegex);\n        if (!url.startsWith(\"/\") &&\n            Array.isArray(extensions) &&\n            extensions.length > 0) {\n            const fileName = getFileName(parsedUrl);\n            if (typeof fileName === \"string\") {\n                const cdnFileURL = `${cdnPath}/${fileName}`;\n                map.set(url, cdnFileURL);\n            }\n        }\n        return (_a = map.get(url)) !== null && _a !== void 0 ? _a : url;\n    };\n})();\nfunction getCDNOrigin(origin, cdnPrefix = \"/cdn\") {\n    return `${origin}${cdnPrefix}`;\n}\nfunction getCurrentPage() {\n    const { store } = Object(_platform__WEBPACK_IMPORTED_MODULE_3__[/* getPlatformData */ \"a\"])();\n    const currentPath = window.location.pathname;\n    if (currentPath.match(/^\\/(?:[a-z]{2})?$/)) {\n        return \"home\";\n    }\n    if (currentPath.match(/\\/products\\/.+?$/)) {\n        return \"product\";\n    }\n    if (currentPath.match(/\\/pages\\/.+?$/)) {\n        return \"page\";\n    }\n    if (currentPath.includes(\"collection\") || currentPath.includes(\"search\")) {\n        return \"collection\";\n    }\n    if (store === \"venustahome\" && currentPath.includes(\"campaign\")) {\n        return \"home\";\n    }\n    return \"_not_supported_\";\n}\nconst modeMagicSettings = window.modeMagicPreviewSettings || window.modeMagicSettings || {};\nconst isElementVisible = (el) => {\n    const isVisible = (elmt) => {\n        const { visibility, display, opacity } = getComputedStyle(elmt);\n        return !((document.hidden ||\n            visibility === \"hidden\" ||\n            display === \"none\" ||\n            +opacity === 0));\n    };\n    let pointer = el;\n    let visible = isVisible(pointer);\n    while (visible && !!pointer.parentElement) {\n        pointer = pointer.parentElement;\n        visible = isVisible(pointer);\n    }\n    return visible;\n};\nconst isElementInViewport = (el, { areaCheck } = { areaCheck: true }) => {\n    if (!isElementVisible(el)) {\n        return false;\n    }\n    const { top, left, bottom, right } = el.getBoundingClientRect();\n    const minMap = {\n        x: 0,\n        y: 0,\n    };\n    const maxMap = {\n        x: window.innerWidth || document.documentElement.clientWidth,\n        y: window.innerHeight || document.documentElement.clientHeight,\n    };\n    const getNormalized = (dim, val) => {\n        const min = minMap[dim];\n        const max = maxMap[dim];\n        if (val < min) {\n            return min;\n        }\n        if (val > max) {\n            return max;\n        }\n        return val;\n    };\n    const visibleHeight = getNormalized(\"y\", bottom) - getNormalized(\"y\", top);\n    const visibleWidth = getNormalized(\"x\", right) - getNormalized(\"x\", left);\n    const visibleArea = visibleHeight * visibleWidth;\n    return areaCheck ? visibleArea > 0 : visibleHeight > 0 || visibleWidth > 0;\n};\nconst proxify = (obj) => {\n    let { logs: logCss } = obj !== null && obj !== void 0 ? obj : {};\n    if (!logCss) {\n        ({ logs: logCss } = obj === null || obj === void 0 ? void 0 : obj.constructor);\n    }\n    let cssStrings = [\"\", \"\"];\n    if (logCss) {\n        cssStrings = [\n            Object.keys(logCss).reduce((acc, key) => `${acc}${key}: ${logCss[key]}; `, \"\"),\n            \"background-color: rgb(76, 136, 255);color:white;\",\n            \"color: rgb(76, 136, 255)\",\n        ];\n    }\n    return utils_constants__WEBPACK_IMPORTED_MODULE_2__[/* isProduction */ \"b\"] || isTest\n        ? obj\n        : new Proxy(obj, {\n            get(target, propKey, receiver) {\n                const originalMethod = Reflect.get(target, propKey, receiver);\n                if (typeof originalMethod === \"function\") {\n                    return function (...args) {\n                        var _a, _b;\n                        const prefix = `%c[${(_a = obj === null || obj === void 0 ? void 0 : obj.name) !== null && _a !== void 0 ? _a : (_b = obj === null || obj === void 0 ? void 0 : obj.constructor) === null || _b === void 0 ? void 0 : _b.name}]%c[${propKey.toString()}]%c: `;\n                        utils_console__WEBPACK_IMPORTED_MODULE_0__[/* console */ \"a\"].group(prefix, ...cssStrings);\n                        if (args.length > 0) {\n                            utils_console__WEBPACK_IMPORTED_MODULE_0__[/* console */ \"a\"].debug(`Called with: `, ...args);\n                        }\n                        const returns = originalMethod.apply(this, args);\n                        utils_console__WEBPACK_IMPORTED_MODULE_0__[/* console */ \"a\"].debug(`Returning`, returns);\n                        utils_console__WEBPACK_IMPORTED_MODULE_0__[/* console */ \"a\"].groupEnd();\n                        return returns;\n                    };\n                }\n                return originalMethod;\n            },\n        });\n};\nconst getQueryObject = () => {\n    const { search } = window.location;\n    if (!Object(utils_lodash__WEBPACK_IMPORTED_MODULE_1__[/* isValidString */ \"l\"])(search)) {\n        return {};\n    }\n    return JSON.parse(`{\"${search.slice(1).replace(/&/g, '\",\"').replace(/=/g, '\":\"')}\"}`, (key, value) => (key === \"\" ? value : decodeURIComponent(value)));\n};\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(16)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvY29tbW9uLnRzPzQ5NmMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDd0M7QUFDSztBQUNFO0FBQ0Y7QUFDN0Msd0VBQXdFLDBJQUFXO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLDhDQUE4QywyQkFBMkI7QUFDaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLHFFQUFxRSxJQUFJLFdBQVcsSUFBSSxZQUFZLElBQUksT0FBTyxtQkFBbUIsZ0JBQWdCLG1CQUFtQixtQkFBbUIsb0JBQW9CO0FBQ25OO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG1CQUFtQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDTTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsWUFBWTtBQUMvQjtBQUNBO0FBQ0EsMkJBQTJCLFdBQVcsRUFBRSxVQUFVO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNNO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ007QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLFFBQVEsR0FBRyxTQUFTO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ007QUFDUCxjQUFjLE9BQU8sRUFBRSxVQUFVO0FBQ2pDO0FBQ087QUFDUCxXQUFXLFFBQVEsR0FBRyx5RUFBZTtBQUNyQztBQUNBLHVDQUF1QyxFQUFFO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EsZUFBZSwrQkFBK0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxrQ0FBa0MsWUFBWSxJQUFJLGtCQUFrQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDJCQUEyQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLFNBQVMsZUFBZTtBQUN4QjtBQUNBLFVBQVUsZUFBZTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCxJQUFJLEVBQUUsSUFBSSxJQUFJLGFBQWE7QUFDbkYsaURBQWlELFlBQVk7QUFDN0Q7QUFDQTtBQUNBO0FBQ0EsV0FBVyxvRUFBWTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2Qyx5TUFBeU0sTUFBTSxtQkFBbUI7QUFDL1Esd0JBQXdCLDZEQUFPO0FBQy9CO0FBQ0EsNEJBQTRCLDZEQUFPO0FBQ25DO0FBQ0E7QUFDQSx3QkFBd0IsNkRBQU87QUFDL0Isd0JBQXdCLDZEQUFPO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNPO0FBQ1AsV0FBVyxTQUFTO0FBQ3BCLFNBQVMsMEVBQWE7QUFDdEI7QUFDQTtBQUNBLHdCQUF3QixHQUFHLDBEQUEwRCxFQUFFO0FBQ3ZGIiwiZmlsZSI6IjQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX2E7XG5pbXBvcnQgeyBjb25zb2xlIH0gZnJvbSBcInV0aWxzL2NvbnNvbGVcIjtcbmltcG9ydCB7IGlzVmFsaWRTdHJpbmcgfSBmcm9tIFwidXRpbHMvbG9kYXNoXCI7XG5pbXBvcnQgeyBpc1Byb2R1Y3Rpb24gfSBmcm9tIFwidXRpbHMvY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBnZXRQbGF0Zm9ybURhdGEgfSBmcm9tIFwiLi9wbGF0Zm9ybVwiO1xuY29uc3QgaXNUZXN0ID0gKChfYSA9IHByb2Nlc3MgPT09IG51bGwgfHwgcHJvY2VzcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcHJvY2Vzcy5lbnYpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5OT0RFX0VOVikgPT09IFwidGVzdFwiO1xuY29uc3QgaW1hZ2VFeHRlbnNpb25zID0gW1xuICAgIFwiYXNlXCIsXG4gICAgXCJhcnRcIixcbiAgICBcImJtcFwiLFxuICAgIFwiYmxwXCIsXG4gICAgXCJjZDVcIixcbiAgICBcImNpdFwiLFxuICAgIFwiY3B0XCIsXG4gICAgXCJjcjJcIixcbiAgICBcImN1dFwiLFxuICAgIFwiZGRzXCIsXG4gICAgXCJkaWJcIixcbiAgICBcImRqdnVcIixcbiAgICBcImVndFwiLFxuICAgIFwiZXhpZlwiLFxuICAgIFwiZ2lmXCIsXG4gICAgXCJncGxcIixcbiAgICBcImdyZlwiLFxuICAgIFwiaWNuc1wiLFxuICAgIFwiaWNvXCIsXG4gICAgXCJpZmZcIixcbiAgICBcImpuZ1wiLFxuICAgIFwianBlZ1wiLFxuICAgIFwianBnXCIsXG4gICAgXCJqZmlmXCIsXG4gICAgXCJqcDJcIixcbiAgICBcImpwc1wiLFxuICAgIFwibGJtXCIsXG4gICAgXCJtYXhcIixcbiAgICBcIm1pZmZcIixcbiAgICBcIm1uZ1wiLFxuICAgIFwibXNwXCIsXG4gICAgXCJuZWZcIixcbiAgICBcIm5pdGZcIixcbiAgICBcIm90YVwiLFxuICAgIFwicGJtXCIsXG4gICAgXCJwYzFcIixcbiAgICBcInBjMlwiLFxuICAgIFwicGMzXCIsXG4gICAgXCJwY2ZcIixcbiAgICBcInBjeFwiLFxuICAgIFwicGRuXCIsXG4gICAgXCJwZ21cIixcbiAgICBcIlBJMVwiLFxuICAgIFwiUEkyXCIsXG4gICAgXCJQSTNcIixcbiAgICBcInBpY3RcIixcbiAgICBcInBjdFwiLFxuICAgIFwicG5tXCIsXG4gICAgXCJwbnNcIixcbiAgICBcInBwbVwiLFxuICAgIFwicHNiXCIsXG4gICAgXCJwc2RcIixcbiAgICBcInBkZFwiLFxuICAgIFwicHNwXCIsXG4gICAgXCJweFwiLFxuICAgIFwicHhtXCIsXG4gICAgXCJweHJcIixcbiAgICBcInFmeFwiLFxuICAgIFwicmF3XCIsXG4gICAgXCJybGVcIixcbiAgICBcInNjdFwiLFxuICAgIFwic2dpXCIsXG4gICAgXCJyZ2JcIixcbiAgICBcImludFwiLFxuICAgIFwiYndcIixcbiAgICBcInRnYVwiLFxuICAgIFwidGlmZlwiLFxuICAgIFwidGlmXCIsXG4gICAgXCJ2dGZcIixcbiAgICBcInhibVwiLFxuICAgIFwieGNmXCIsXG4gICAgXCJ4cG1cIixcbiAgICBcIjNkdlwiLFxuICAgIFwiYW1mXCIsXG4gICAgXCJhaVwiLFxuICAgIFwiYXdnXCIsXG4gICAgXCJjZ21cIixcbiAgICBcImNkclwiLFxuICAgIFwiY214XCIsXG4gICAgXCJkeGZcIixcbiAgICBcImUyZFwiLFxuICAgIFwiZWd0XCIsXG4gICAgXCJlcHNcIixcbiAgICBcImZzXCIsXG4gICAgXCJnYnJcIixcbiAgICBcIm9kZ1wiLFxuICAgIFwic3ZnXCIsXG4gICAgXCJzdGxcIixcbiAgICBcInZybWxcIixcbiAgICBcIngzZFwiLFxuICAgIFwic3hkXCIsXG4gICAgXCJ2MmRcIixcbiAgICBcInZuZFwiLFxuICAgIFwid21mXCIsXG4gICAgXCJlbWZcIixcbiAgICBcImFydFwiLFxuICAgIFwieGFyXCIsXG4gICAgXCJwbmdcIixcbiAgICBcIndlYnBcIixcbiAgICBcImp4clwiLFxuICAgIFwiaGRwXCIsXG4gICAgXCJ3ZHBcIixcbiAgICBcImN1clwiLFxuICAgIFwiZWN3XCIsXG4gICAgXCJpZmZcIixcbiAgICBcImxibVwiLFxuICAgIFwibGlmZlwiLFxuICAgIFwibnJyZFwiLFxuICAgIFwicGFtXCIsXG4gICAgXCJwY3hcIixcbiAgICBcInBnZlwiLFxuICAgIFwic2dpXCIsXG4gICAgXCJyZ2JcIixcbiAgICBcInJnYmFcIixcbiAgICBcImJ3XCIsXG4gICAgXCJpbnRcIixcbiAgICBcImludGFcIixcbiAgICBcInNpZFwiLFxuICAgIFwicmFzXCIsXG4gICAgXCJzdW5cIixcbiAgICBcInRnYVwiLFxuICAgIFwiaGVpY1wiLFxuICAgIFwiaGVpZlwiLFxuXTtcbmNvbnN0IGV4dG5TZXQgPSBuZXcgU2V0KGltYWdlRXh0ZW5zaW9ucyk7XG5leHBvcnQgY29uc3QgaW1hZ2VFeHRlbnNpb25zUmVnZXggPSBuZXcgUmVnRXhwKGAoKC4ke2ltYWdlRXh0ZW5zaW9ucy5qb2luKFwifC5cIil9KSspJGAsIFwiaVwiKTtcbmNvbnN0IHVybFNpemVzID0gW1xuICAgIFwicGljb1wiLFxuICAgIFwiaWNvblwiLFxuICAgIFwidGh1bWJcIixcbiAgICBcInNtYWxsXCIsXG4gICAgXCJjb21wYWN0XCIsXG4gICAgXCJtZWRpdW1cIixcbiAgICBcImxhcmdlXCIsXG4gICAgXCJncmFuZGVcIixcbiAgICBcIm9yaWdpbmFsXCIsXG4gICAgXCJtYXN0ZXJcIixcbl07XG5jb25zdCB1cmxDcm9wcyA9IFtcImNlbnRlclwiLCBcInRvcFwiLCBcInJpZ2h0XCIsIFwiYm90dG9tXCIsIFwibGVmdFwiXTtcbmNvbnN0IHVybFNjYWxlcyA9IFtcInByb2dyZXNzaXZlXCJdO1xuZXhwb3J0IGNvbnN0IHNob3BpZnlJbWFnZUZpbHRlcnNSZWdleCA9IG5ldyBSZWdFeHAoYCgoPzpfKD86eHxYKT8pKD86KD86XFxcXGR7MSw0fSg/Onh8WClcXFxcZHswLDR9fCg/Onh8WClcXFxcZHsxLDR9KXwoPzoke3VybFNpemVzLmpvaW4oXCJ8XCIpfSkpKT8oX2Nyb3BfKD86JHt1cmxDcm9wcy5qb2luKFwifFwiKX0pKT8oQFsyM114KT8oLig/OiR7dXJsU2NhbGVzLmpvaW4oXCJ8XCIpfSkpPyRgKTtcbmNvbnN0IHJlbW92ZUV4dG4gPSAoKCkgPT4ge1xuICAgIGxldCBzcGxpdHMgPSBbXTtcbiAgICByZXR1cm4gKGltYWdlVXJsKSA9PiB7XG4gICAgICAgIGxldCByZXBsYWNlZFVybCA9IGltYWdlVXJsXG4gICAgICAgICAgICAucmVwbGFjZSgvXFwuKFteLl0rPykkLywgXCJcIik7XG4gICAgICAgIHNwbGl0cyA9IHJlcGxhY2VkVXJsLnNwbGl0KFwiLlwiKTtcbiAgICAgICAgbGV0IHN0b3BJbmRleCA9IC0xO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNwbGl0cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgaWYgKGV4dG5TZXQuaGFzKHNwbGl0c1tpXSkpIHtcbiAgICAgICAgICAgICAgICBzdG9wSW5kZXggPSBpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlcGxhY2VkVXJsID0gc3BsaXRzXG4gICAgICAgICAgICAuc2xpY2UoMCwgc3RvcEluZGV4ID4gMCA/IHN0b3BJbmRleCA6IHVuZGVmaW5lZClcbiAgICAgICAgICAgIC5qb2luKFwiLlwiKTtcbiAgICAgICAgcmV0dXJuIHJlcGxhY2VkVXJsO1xuICAgIH07XG59KSgpO1xuZXhwb3J0IGNvbnN0IHBhcnNlSW1hZ2VVcmwgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNhY2hlID0ge307XG4gICAgcmV0dXJuIChzcmMpID0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gY2FjaGVbc3JjXTtcbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHBhcnNlZFNyYyA9IHNyYztcbiAgICAgICAgcGFyc2VkU3JjID0gcGFyc2VkU3JjLnJlcGxhY2UoL1xcP3Y9LiovZywgXCJcIik7XG4gICAgICAgIGNvbnN0IGV4dG5SZW1vdmVkU3JjID0gcmVtb3ZlRXh0bihwYXJzZWRTcmMpO1xuICAgICAgICBjb25zdCBtYXRjaCA9IGV4dG5SZW1vdmVkU3JjLm1hdGNoKHNob3BpZnlJbWFnZUZpbHRlcnNSZWdleCk7XG4gICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgICAgY29uc3QgeyBpbmRleCA9IDAgfSA9IG1hdGNoO1xuICAgICAgICAgICAgY29uc3QgZmlyc3RTcGxpdCA9IHBhcnNlZFNyYy5zbGljZSgwLCBpbmRleCk7XG4gICAgICAgICAgICBjb25zdCBsYXN0U3BsaXQgPSBwYXJzZWRTcmMuc2xpY2UoaW5kZXggKyBtYXRjaFswXS5sZW5ndGgpO1xuICAgICAgICAgICAgcGFyc2VkU3JjID0gYCR7Zmlyc3RTcGxpdH0ke2xhc3RTcGxpdH1gO1xuICAgICAgICB9XG4gICAgICAgIGNhY2hlW3NyY10gPSBwYXJzZWRTcmM7XG4gICAgICAgIHJldHVybiBwYXJzZWRTcmM7XG4gICAgfTtcbn0pKCk7XG5leHBvcnQgY29uc3QgdHJpbUV4dGVuc2lvbkFuZFBhcmFtcyA9ICgoKSA9PiB7XG4gICAgY29uc3QgdHJpbUNhY2hlID0ge307XG4gICAgcmV0dXJuICh1cmwpID0+IHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IHRyaW1DYWNoZVt1cmxdO1xuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQgPSByZW1vdmVFeHRuKHVybCk7XG4gICAgICAgIHRyaW1DYWNoZVt1cmxdID0gcmVzdWx0O1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG59KSgpO1xuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoU3RyaW5ncyhzb3VyY2VTcmMsIHNyYykge1xuICAgIHJldHVybiB0cmltRXh0ZW5zaW9uQW5kUGFyYW1zKHNvdXJjZVNyYykgPT09IHRyaW1FeHRlbnNpb25BbmRQYXJhbXMoc3JjKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRNYXRjaGVkVXJsKHNvdXJjZVNyYywgc3Jjcykge1xuICAgIHJldHVybiBzcmNzLmZpbmQoKHNyYykgPT4gbWF0Y2hTdHJpbmdzKHNvdXJjZVNyYywgc3JjKSkgfHwgXCJcIjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRGaWxlTmFtZShmaWxlVVJMKSB7XG4gICAgdmFyIF9hLCBfYjtcbiAgICByZXR1cm4gKF9iID0gKF9hID0gZmlsZVVSTC5zcGxpdChcIi9cIikucG9wKCkpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zcGxpdChcIj9cIikpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYlswXTtcbn1cbmV4cG9ydCBjb25zdCBnZXRDRE5GaWxlUGF0aCA9ICgoKSA9PiB7XG4gICAgY29uc3QgbWFwID0gbmV3IE1hcChbXSk7XG4gICAgcmV0dXJuICh1cmwsIGNkblBhdGgpID0+IHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAobWFwLmhhcyh1cmwpKSB7XG4gICAgICAgICAgICByZXR1cm4gbWFwLmdldCh1cmwpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcnNlZFVybCA9IHBhcnNlSW1hZ2VVcmwodXJsKTtcbiAgICAgICAgY29uc3QgZXh0ZW5zaW9ucyA9IHBhcnNlZFVybC5tYXRjaChpbWFnZUV4dGVuc2lvbnNSZWdleCk7XG4gICAgICAgIGlmICghdXJsLnN0YXJ0c1dpdGgoXCIvXCIpICYmXG4gICAgICAgICAgICBBcnJheS5pc0FycmF5KGV4dGVuc2lvbnMpICYmXG4gICAgICAgICAgICBleHRlbnNpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IGZpbGVOYW1lID0gZ2V0RmlsZU5hbWUocGFyc2VkVXJsKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZmlsZU5hbWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjZG5GaWxlVVJMID0gYCR7Y2RuUGF0aH0vJHtmaWxlTmFtZX1gO1xuICAgICAgICAgICAgICAgIG1hcC5zZXQodXJsLCBjZG5GaWxlVVJMKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKF9hID0gbWFwLmdldCh1cmwpKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiB1cmw7XG4gICAgfTtcbn0pKCk7XG5leHBvcnQgZnVuY3Rpb24gZ2V0Q0ROT3JpZ2luKG9yaWdpbiwgY2RuUHJlZml4ID0gXCIvY2RuXCIpIHtcbiAgICByZXR1cm4gYCR7b3JpZ2lufSR7Y2RuUHJlZml4fWA7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudFBhZ2UoKSB7XG4gICAgY29uc3QgeyBzdG9yZSB9ID0gZ2V0UGxhdGZvcm1EYXRhKCk7XG4gICAgY29uc3QgY3VycmVudFBhdGggPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XG4gICAgaWYgKGN1cnJlbnRQYXRoLm1hdGNoKC9eXFwvKD86W2Etel17Mn0pPyQvKSkge1xuICAgICAgICByZXR1cm4gXCJob21lXCI7XG4gICAgfVxuICAgIGlmIChjdXJyZW50UGF0aC5tYXRjaCgvXFwvcHJvZHVjdHNcXC8uKz8kLykpIHtcbiAgICAgICAgcmV0dXJuIFwicHJvZHVjdFwiO1xuICAgIH1cbiAgICBpZiAoY3VycmVudFBhdGgubWF0Y2goL1xcL3BhZ2VzXFwvLis/JC8pKSB7XG4gICAgICAgIHJldHVybiBcInBhZ2VcIjtcbiAgICB9XG4gICAgaWYgKGN1cnJlbnRQYXRoLmluY2x1ZGVzKFwiY29sbGVjdGlvblwiKSB8fCBjdXJyZW50UGF0aC5pbmNsdWRlcyhcInNlYXJjaFwiKSkge1xuICAgICAgICByZXR1cm4gXCJjb2xsZWN0aW9uXCI7XG4gICAgfVxuICAgIGlmIChzdG9yZSA9PT0gXCJ2ZW51c3RhaG9tZVwiICYmIGN1cnJlbnRQYXRoLmluY2x1ZGVzKFwiY2FtcGFpZ25cIikpIHtcbiAgICAgICAgcmV0dXJuIFwiaG9tZVwiO1xuICAgIH1cbiAgICByZXR1cm4gXCJfbm90X3N1cHBvcnRlZF9cIjtcbn1cbmV4cG9ydCBjb25zdCBtb2RlTWFnaWNTZXR0aW5ncyA9IHdpbmRvdy5tb2RlTWFnaWNQcmV2aWV3U2V0dGluZ3MgfHwgd2luZG93Lm1vZGVNYWdpY1NldHRpbmdzIHx8IHt9O1xuY29uc3QgaXNFbGVtZW50VmlzaWJsZSA9IChlbCkgPT4ge1xuICAgIGNvbnN0IGlzVmlzaWJsZSA9IChlbG10KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgdmlzaWJpbGl0eSwgZGlzcGxheSwgb3BhY2l0eSB9ID0gZ2V0Q29tcHV0ZWRTdHlsZShlbG10KTtcbiAgICAgICAgcmV0dXJuICEoKGRvY3VtZW50LmhpZGRlbiB8fFxuICAgICAgICAgICAgdmlzaWJpbGl0eSA9PT0gXCJoaWRkZW5cIiB8fFxuICAgICAgICAgICAgZGlzcGxheSA9PT0gXCJub25lXCIgfHxcbiAgICAgICAgICAgICtvcGFjaXR5ID09PSAwKSk7XG4gICAgfTtcbiAgICBsZXQgcG9pbnRlciA9IGVsO1xuICAgIGxldCB2aXNpYmxlID0gaXNWaXNpYmxlKHBvaW50ZXIpO1xuICAgIHdoaWxlICh2aXNpYmxlICYmICEhcG9pbnRlci5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgIHBvaW50ZXIgPSBwb2ludGVyLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIHZpc2libGUgPSBpc1Zpc2libGUocG9pbnRlcik7XG4gICAgfVxuICAgIHJldHVybiB2aXNpYmxlO1xufTtcbmV4cG9ydCBjb25zdCBpc0VsZW1lbnRJblZpZXdwb3J0ID0gKGVsLCB7IGFyZWFDaGVjayB9ID0geyBhcmVhQ2hlY2s6IHRydWUgfSkgPT4ge1xuICAgIGlmICghaXNFbGVtZW50VmlzaWJsZShlbCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCB7IHRvcCwgbGVmdCwgYm90dG9tLCByaWdodCB9ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgbWluTWFwID0ge1xuICAgICAgICB4OiAwLFxuICAgICAgICB5OiAwLFxuICAgIH07XG4gICAgY29uc3QgbWF4TWFwID0ge1xuICAgICAgICB4OiB3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgsXG4gICAgICAgIHk6IHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LFxuICAgIH07XG4gICAgY29uc3QgZ2V0Tm9ybWFsaXplZCA9IChkaW0sIHZhbCkgPT4ge1xuICAgICAgICBjb25zdCBtaW4gPSBtaW5NYXBbZGltXTtcbiAgICAgICAgY29uc3QgbWF4ID0gbWF4TWFwW2RpbV07XG4gICAgICAgIGlmICh2YWwgPCBtaW4pIHtcbiAgICAgICAgICAgIHJldHVybiBtaW47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbCA+IG1heCkge1xuICAgICAgICAgICAgcmV0dXJuIG1heDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsO1xuICAgIH07XG4gICAgY29uc3QgdmlzaWJsZUhlaWdodCA9IGdldE5vcm1hbGl6ZWQoXCJ5XCIsIGJvdHRvbSkgLSBnZXROb3JtYWxpemVkKFwieVwiLCB0b3ApO1xuICAgIGNvbnN0IHZpc2libGVXaWR0aCA9IGdldE5vcm1hbGl6ZWQoXCJ4XCIsIHJpZ2h0KSAtIGdldE5vcm1hbGl6ZWQoXCJ4XCIsIGxlZnQpO1xuICAgIGNvbnN0IHZpc2libGVBcmVhID0gdmlzaWJsZUhlaWdodCAqIHZpc2libGVXaWR0aDtcbiAgICByZXR1cm4gYXJlYUNoZWNrID8gdmlzaWJsZUFyZWEgPiAwIDogdmlzaWJsZUhlaWdodCA+IDAgfHwgdmlzaWJsZVdpZHRoID4gMDtcbn07XG5leHBvcnQgY29uc3QgcHJveGlmeSA9IChvYmopID0+IHtcbiAgICBsZXQgeyBsb2dzOiBsb2dDc3MgfSA9IG9iaiAhPT0gbnVsbCAmJiBvYmogIT09IHZvaWQgMCA/IG9iaiA6IHt9O1xuICAgIGlmICghbG9nQ3NzKSB7XG4gICAgICAgICh7IGxvZ3M6IGxvZ0NzcyB9ID0gb2JqID09PSBudWxsIHx8IG9iaiA9PT0gdm9pZCAwID8gdm9pZCAwIDogb2JqLmNvbnN0cnVjdG9yKTtcbiAgICB9XG4gICAgbGV0IGNzc1N0cmluZ3MgPSBbXCJcIiwgXCJcIl07XG4gICAgaWYgKGxvZ0Nzcykge1xuICAgICAgICBjc3NTdHJpbmdzID0gW1xuICAgICAgICAgICAgT2JqZWN0LmtleXMobG9nQ3NzKS5yZWR1Y2UoKGFjYywga2V5KSA9PiBgJHthY2N9JHtrZXl9OiAke2xvZ0Nzc1trZXldfTsgYCwgXCJcIiksXG4gICAgICAgICAgICBcImJhY2tncm91bmQtY29sb3I6IHJnYig3NiwgMTM2LCAyNTUpO2NvbG9yOndoaXRlO1wiLFxuICAgICAgICAgICAgXCJjb2xvcjogcmdiKDc2LCAxMzYsIDI1NSlcIixcbiAgICAgICAgXTtcbiAgICB9XG4gICAgcmV0dXJuIGlzUHJvZHVjdGlvbiB8fCBpc1Rlc3RcbiAgICAgICAgPyBvYmpcbiAgICAgICAgOiBuZXcgUHJveHkob2JqLCB7XG4gICAgICAgICAgICBnZXQodGFyZ2V0LCBwcm9wS2V5LCByZWNlaXZlcikge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsTWV0aG9kID0gUmVmbGVjdC5nZXQodGFyZ2V0LCBwcm9wS2V5LCByZWNlaXZlcik7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvcmlnaW5hbE1ldGhvZCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByZWZpeCA9IGAlY1skeyhfYSA9IG9iaiA9PT0gbnVsbCB8fCBvYmogPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9iai5uYW1lKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAoX2IgPSBvYmogPT09IG51bGwgfHwgb2JqID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvYmouY29uc3RydWN0b3IpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5uYW1lfV0lY1ske3Byb3BLZXkudG9TdHJpbmcoKX1dJWM6IGA7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmdyb3VwKHByZWZpeCwgLi4uY3NzU3RyaW5ncyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhgQ2FsbGVkIHdpdGg6IGAsIC4uLmFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmV0dXJucyA9IG9yaWdpbmFsTWV0aG9kLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhgUmV0dXJuaW5nYCwgcmV0dXJucyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmdyb3VwRW5kKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV0dXJucztcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9yaWdpbmFsTWV0aG9kO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG59O1xuZXhwb3J0IGNvbnN0IGdldFF1ZXJ5T2JqZWN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgc2VhcmNoIH0gPSB3aW5kb3cubG9jYXRpb247XG4gICAgaWYgKCFpc1ZhbGlkU3RyaW5nKHNlYXJjaCkpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICByZXR1cm4gSlNPTi5wYXJzZShge1wiJHtzZWFyY2guc2xpY2UoMSkucmVwbGFjZSgvJi9nLCAnXCIsXCInKS5yZXBsYWNlKC89L2csICdcIjpcIicpfVwifWAsIChrZXksIHZhbHVlKSA9PiAoa2V5ID09PSBcIlwiID8gdmFsdWUgOiBkZWNvZGVVUklDb21wb25lbnQodmFsdWUpKSk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return getPlatformData; });\n/* harmony import */ var _kubric_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);\n/* harmony import */ var _kubric_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_kubric_types__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var utils_lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);\n/* harmony import */ var _dataset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);\n\n\n\nconst getPlatformData = () => {\n    var _a, _b, _c;\n    const defaultContext = {\n        cart: null,\n        platform: _kubric_types__WEBPACK_IMPORTED_MODULE_0__[\"Platforms\"].UNKNOWN,\n        product: \"\",\n        store: \"\",\n        currency: {\n            active_currency_code: \"\",\n            active_currency_id: 1,\n        },\n        settings: {\n            store_hash: \"\",\n            secure_host: \"\",\n            cdn_url: \"\",\n            secure_base_url: \"\",\n            channel_id: 1,\n        },\n        customer: null,\n        dumps: {},\n        urls: {\n            home: \"\",\n        },\n    };\n    if (typeof window !== \"undefined\") {\n        if (typeof window.__store_context__ === \"undefined\") {\n            window.__store_context__ = {};\n        }\n        Object.assign(window.__store_context__, Object.assign(Object.assign({}, defaultContext), window.__store_context__));\n        if (Object(utils_lodash__WEBPACK_IMPORTED_MODULE_1__[/* isValidString */ \"l\"])(window.__mmStore)) {\n            Object.assign(window.__store_context__, {\n                store: window.__mmStore.split(\".\")[0],\n            });\n        }\n        if (Object(utils_lodash__WEBPACK_IMPORTED_MODULE_1__[/* isObject */ \"h\"])(window.Shopify)) {\n            const dataset = Object(_dataset__WEBPACK_IMPORTED_MODULE_2__[/* getDataset */ \"a\"])();\n            const store = window.Shopify.shop.split(\".\")[0];\n            Object.assign(window.__store_context__, {\n                platform: _kubric_types__WEBPACK_IMPORTED_MODULE_0__[\"Platforms\"].SHOPIFY,\n                store,\n                dumps: {},\n                currency: {\n                    active_currency_code: (_b = (_a = window.Shopify.currency) === null || _a === void 0 ? void 0 : _a.active) !== null && _b !== void 0 ? _b : \"USD\",\n                    active_currency_id: 1,\n                },\n                settings: {\n                    secure_base_url: `https://${window.Shopify.shop}`,\n                    secure_host: window.Shopify.shop,\n                    cdn_url: window.Shopify.cdnHost,\n                    store_hash: store,\n                    channel_id: 1,\n                },\n                cart: null,\n                urls: {\n                    home: (_c = window.Shopify.routes) === null || _c === void 0 ? void 0 : _c.root,\n                },\n                product: dataset.product,\n            });\n        }\n        return window.__store_context__;\n    }\n    return defaultContext;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvcGxhdGZvcm0udHM/NzU3ZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBDO0FBQ2E7QUFDaEI7QUFDaEM7QUFDUDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsdURBQVM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEVBQThFO0FBQzlFLFlBQVksMEVBQWE7QUFDekI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFlBQVkscUVBQVE7QUFDcEIsNEJBQTRCLG1FQUFVO0FBQ3RDO0FBQ0E7QUFDQSwwQkFBMEIsdURBQVM7QUFDbkM7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsZ0RBQWdELG9CQUFvQjtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxhdGZvcm1zIH0gZnJvbSBcIkBrdWJyaWMvdHlwZXNcIjtcbmltcG9ydCB7IGlzT2JqZWN0LCBpc1ZhbGlkU3RyaW5nIH0gZnJvbSBcInV0aWxzL2xvZGFzaFwiO1xuaW1wb3J0IHsgZ2V0RGF0YXNldCB9IGZyb20gXCIuL2RhdGFzZXRcIjtcbmV4cG9ydCBjb25zdCBnZXRQbGF0Zm9ybURhdGEgPSAoKSA9PiB7XG4gICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgY29uc3QgZGVmYXVsdENvbnRleHQgPSB7XG4gICAgICAgIGNhcnQ6IG51bGwsXG4gICAgICAgIHBsYXRmb3JtOiBQbGF0Zm9ybXMuVU5LTk9XTixcbiAgICAgICAgcHJvZHVjdDogXCJcIixcbiAgICAgICAgc3RvcmU6IFwiXCIsXG4gICAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgICBhY3RpdmVfY3VycmVuY3lfY29kZTogXCJcIixcbiAgICAgICAgICAgIGFjdGl2ZV9jdXJyZW5jeV9pZDogMSxcbiAgICAgICAgfSxcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgIHN0b3JlX2hhc2g6IFwiXCIsXG4gICAgICAgICAgICBzZWN1cmVfaG9zdDogXCJcIixcbiAgICAgICAgICAgIGNkbl91cmw6IFwiXCIsXG4gICAgICAgICAgICBzZWN1cmVfYmFzZV91cmw6IFwiXCIsXG4gICAgICAgICAgICBjaGFubmVsX2lkOiAxLFxuICAgICAgICB9LFxuICAgICAgICBjdXN0b21lcjogbnVsbCxcbiAgICAgICAgZHVtcHM6IHt9LFxuICAgICAgICB1cmxzOiB7XG4gICAgICAgICAgICBob21lOiBcIlwiLFxuICAgICAgICB9LFxuICAgIH07XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuX19zdG9yZV9jb250ZXh0X18gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIHdpbmRvdy5fX3N0b3JlX2NvbnRleHRfXyA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIE9iamVjdC5hc3NpZ24od2luZG93Ll9fc3RvcmVfY29udGV4dF9fLCBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRDb250ZXh0KSwgd2luZG93Ll9fc3RvcmVfY29udGV4dF9fKSk7XG4gICAgICAgIGlmIChpc1ZhbGlkU3RyaW5nKHdpbmRvdy5fX21tU3RvcmUpKSB7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHdpbmRvdy5fX3N0b3JlX2NvbnRleHRfXywge1xuICAgICAgICAgICAgICAgIHN0b3JlOiB3aW5kb3cuX19tbVN0b3JlLnNwbGl0KFwiLlwiKVswXSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc09iamVjdCh3aW5kb3cuU2hvcGlmeSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGFzZXQgPSBnZXREYXRhc2V0KCk7XG4gICAgICAgICAgICBjb25zdCBzdG9yZSA9IHdpbmRvdy5TaG9waWZ5LnNob3Auc3BsaXQoXCIuXCIpWzBdO1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih3aW5kb3cuX19zdG9yZV9jb250ZXh0X18sIHtcbiAgICAgICAgICAgICAgICBwbGF0Zm9ybTogUGxhdGZvcm1zLlNIT1BJRlksXG4gICAgICAgICAgICAgICAgc3RvcmUsXG4gICAgICAgICAgICAgICAgZHVtcHM6IHt9LFxuICAgICAgICAgICAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZV9jdXJyZW5jeV9jb2RlOiAoX2IgPSAoX2EgPSB3aW5kb3cuU2hvcGlmeS5jdXJyZW5jeSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmFjdGl2ZSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogXCJVU0RcIixcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlX2N1cnJlbmN5X2lkOiAxLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgc2VjdXJlX2Jhc2VfdXJsOiBgaHR0cHM6Ly8ke3dpbmRvdy5TaG9waWZ5LnNob3B9YCxcbiAgICAgICAgICAgICAgICAgICAgc2VjdXJlX2hvc3Q6IHdpbmRvdy5TaG9waWZ5LnNob3AsXG4gICAgICAgICAgICAgICAgICAgIGNkbl91cmw6IHdpbmRvdy5TaG9waWZ5LmNkbkhvc3QsXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlX2hhc2g6IHN0b3JlLFxuICAgICAgICAgICAgICAgICAgICBjaGFubmVsX2lkOiAxLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY2FydDogbnVsbCxcbiAgICAgICAgICAgICAgICB1cmxzOiB7XG4gICAgICAgICAgICAgICAgICAgIGhvbWU6IChfYyA9IHdpbmRvdy5TaG9waWZ5LnJvdXRlcykgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLnJvb3QsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwcm9kdWN0OiBkYXRhc2V0LnByb2R1Y3QsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gd2luZG93Ll9fc3RvcmVfY29udGV4dF9fO1xuICAgIH1cbiAgICByZXR1cm4gZGVmYXVsdENvbnRleHQ7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"b\", function() { return isProduction; });\n/* unused harmony export isTest */\n/* unused harmony export env */\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return EVENT_API_URL; });\nvar _a, _b, _c, _d;\nconst isProduction = ((_a = process === null || process === void 0 ? void 0 : {\"USER_FEATURES_API\":\"https://mm.beta.getmason.io/api/features\",\"APP_URL\":\"https://mm.beta.getmason.io/widgets/view\",\"NODE_ENV\":\"staging\"}) === null || _a === void 0 ? void 0 : _a.NODE_ENV) === \"production\";\nconst isTest = ((_b = process === null || process === void 0 ? void 0 : {\"USER_FEATURES_API\":\"https://mm.beta.getmason.io/api/features\",\"APP_URL\":\"https://mm.beta.getmason.io/widgets/view\",\"NODE_ENV\":\"staging\"}) === null || _b === void 0 ? void 0 : _b.NODE_ENV) === \"test\";\nconst env = (_d = (_c = process === null || process === void 0 ? void 0 : {\"USER_FEATURES_API\":\"https://mm.beta.getmason.io/api/features\",\"APP_URL\":\"https://mm.beta.getmason.io/widgets/view\",\"NODE_ENV\":\"staging\"}) === null || _c === void 0 ? void 0 : _c.NODE_ENV) !== null && _d !== void 0 ? _d : \"development\";\nconst eventAPI = {\n    development: \"https://cf-events-passthrough.kubric-blog.workers.dev\",\n    staging: \"https://cf-events-passthrough.kubric-blog.workers.dev\",\n    production: \"https://events.getmodemagic.com\",\n};\nconst EVENT_API_URL = eventAPI[env];\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(16)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvY29uc3RhbnRzLnRzPzhmOGEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNPLDhFQUE4RSwwSUFBVztBQUN6Rix3RUFBd0UsMElBQVc7QUFDbkYsMEVBQTBFLDBJQUFXO0FBQzVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyIsImZpbGUiOiI2LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIF9hLCBfYiwgX2MsIF9kO1xuZXhwb3J0IGNvbnN0IGlzUHJvZHVjdGlvbiA9ICgoX2EgPSBwcm9jZXNzID09PSBudWxsIHx8IHByb2Nlc3MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHByb2Nlc3MuZW52KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuTk9ERV9FTlYpID09PSBcInByb2R1Y3Rpb25cIjtcbmV4cG9ydCBjb25zdCBpc1Rlc3QgPSAoKF9iID0gcHJvY2VzcyA9PT0gbnVsbCB8fCBwcm9jZXNzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwcm9jZXNzLmVudikgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLk5PREVfRU5WKSA9PT0gXCJ0ZXN0XCI7XG5leHBvcnQgY29uc3QgZW52ID0gKF9kID0gKF9jID0gcHJvY2VzcyA9PT0gbnVsbCB8fCBwcm9jZXNzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwcm9jZXNzLmVudikgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLk5PREVfRU5WKSAhPT0gbnVsbCAmJiBfZCAhPT0gdm9pZCAwID8gX2QgOiBcImRldmVsb3BtZW50XCI7XG5jb25zdCBldmVudEFQSSA9IHtcbiAgICBkZXZlbG9wbWVudDogXCJodHRwczovL2NmLWV2ZW50cy1wYXNzdGhyb3VnaC5rdWJyaWMtYmxvZy53b3JrZXJzLmRldlwiLFxuICAgIHN0YWdpbmc6IFwiaHR0cHM6Ly9jZi1ldmVudHMtcGFzc3Rocm91Z2gua3VicmljLWJsb2cud29ya2Vycy5kZXZcIixcbiAgICBwcm9kdWN0aW9uOiBcImh0dHBzOi8vZXZlbnRzLmdldG1vZGVtYWdpYy5jb21cIixcbn07XG5leHBvcnQgY29uc3QgRVZFTlRfQVBJX1VSTCA9IGV2ZW50QVBJW2Vudl07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ EventType; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ PerfEntity; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ CFEvent_instance; });

// EXTERNAL MODULE: ./src/utils/Cache.ts
var Cache = __webpack_require__(17);

// EXTERNAL MODULE: ./src/utils/constants.ts
var constants = __webpack_require__(6);

// CONCATENATED MODULE: ./src/types/window.ts
const INTERNALS = "__SECRET_INTERNALS_DO_NOT_USE__";

// EXTERNAL MODULE: ./src/utils/common.ts
var common = __webpack_require__(4);

// EXTERNAL MODULE: ./src/utils/console.ts
var console = __webpack_require__(2);

// EXTERNAL MODULE: ./src/utils/deviceID.ts
var deviceID = __webpack_require__(9);

// EXTERNAL MODULE: ./src/utils/lodash.ts
var lodash = __webpack_require__(0);

// EXTERNAL MODULE: ./src/utils/order.ts
var utils_order = __webpack_require__(12);

// EXTERNAL MODULE: ./src/features/constants.ts
var features_constants = __webpack_require__(19);

// EXTERNAL MODULE: ./src/utils/platform.ts
var platform = __webpack_require__(5);

// CONCATENATED MODULE: ./src/utils/CFEvent.ts
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};










const enabledTPASet = new Set(Object.keys(utils_order["a" /* enabledTPAs */]));
const QUEUE_MAX = 20;
var EventType;
(function (EventType) {
    EventType["CLICK"] = "click";
    EventType["IMPRESSION"] = "impression";
    EventType["VIEW"] = "view";
    EventType["CONVERSION"] = "conversion";
    EventType["HIDE"] = "hide";
    EventType["PAGE_VIEW"] = "page_view";
})(EventType || (EventType = {}));
var PerfEntity;
(function (PerfEntity) {
    PerfEntity["PRODUCT_BANNER"] = "product-banner";
    PerfEntity["STORE_BANNER"] = "store-banner";
    PerfEntity["WIDGET"] = "widget";
    PerfEntity["BADGE"] = "badge";
})(PerfEntity || (PerfEntity = {}));
const DEFAULT_STATS = {
    impression: 0,
    view: 0,
    click: 0,
    conversion: 0,
    hide: 0,
    page_view: 0,
};
const QueueIdentifiers = {
    ACTIVE_QUEUE: "active_queue",
    FLUSH_QUEUE: "flush_queue",
};
class CFEvent_CFEvent {
    constructor() {
        this.impressionsCache = new Set();
        this.viewsCache = new Set();
        this.stats = DEFAULT_STATS;
        this.eventQueue = new Cache["a" /* Cache */](true);
        this.queTimeout = -1;
        this.queWaitTime = 8 * 1000;
        this.retryQueTimeout = -1;
        this.maxRetries = 3;
    }
    static getInstance() {
        if (typeof window !== "undefined") {
            if (typeof window.mm === "undefined") {
                window.mm = {};
            }
            if (typeof window.mm[INTERNALS] === "undefined") {
                window.mm[INTERNALS] = {
                    CFEvent: new CFEvent_CFEvent(),
                };
            }
            if (typeof window.mm[INTERNALS].CFEvent === "undefined") {
                window.mm[INTERNALS].CFEvent = new CFEvent_CFEvent();
            }
            return window.mm[INTERNALS].CFEvent;
        }
        return new CFEvent_CFEvent();
    }
    init() {
        const instance = CFEvent_CFEvent.getInstance();
        instance.eventQueue.init("mm__analytics");
        instance.flushQueue();
        window.addEventListener("popstate", () => {
            console["a" /* console */].debug("MM:Clearing impressions cache");
            instance.impressionsCache = new Set();
            instance.viewsCache = new Set();
            instance.stats = DEFAULT_STATS;
        });
        instance.addOrderCompletionListener();
    }
    addOrderCompletionListener() {
        window.addEventListener("message", (event) => {
            const { data } = event;
            const { messageType, messageData: { actionType } = {} } = data;
            const source = Object(lodash["c" /* get */])(data, "messageAuth.source", null);
            const order = Object(lodash["c" /* get */])(data, "messageData.payload.order", null);
            const { id: orderId, line_items: lineItems = [], cart_token: cartToken = "", email = "", customer, customer_locale: customerLocale = "", } = order !== null && order !== void 0 ? order : {};
            const { id: customerId = -1 } = customer !== null && customer !== void 0 ? customer : {};
            if (messageType === "MODEMAGIC_CONVERSION_EVENT" &&
                actionType === "ORDER_CREATE" &&
                !Object(lodash["e" /* isNull */])(source) &&
                enabledTPASet.has(source) &&
                !Object(lodash["k" /* isUndefined */])(orderId)) {
                Object(utils_order["b" /* registerConversionEvent */])({
                    email,
                    orderId,
                    customerId,
                    cartToken,
                    customerLocale,
                    source: source !== null && source !== void 0 ? source : undefined,
                    lineItems,
                });
            }
        });
    }
    flushQueue() {
        var _a, _b, _c;
        const instance = CFEvent_CFEvent.getInstance();
        const previousQueue = instance.eventQueue.get(QueueIdentifiers.FLUSH_QUEUE);
        if (!Object(lodash["e" /* isNull */])(previousQueue) && !Object(lodash["k" /* isUndefined */])(previousQueue)) {
            const now = new Date().getTime();
            if (now - previousQueue.queued > instance.queWaitTime) {
                if (previousQueue.counter >= instance.maxRetries) {
                    instance.eventQueue.set(QueueIdentifiers.ACTIVE_QUEUE, [
                        ...((_a = instance.eventQueue.get(QueueIdentifiers.ACTIVE_QUEUE)) !== null && _a !== void 0 ? _a : []),
                        ...previousQueue.events,
                    ]);
                    instance.eventQueue.set(QueueIdentifiers.FLUSH_QUEUE, undefined);
                    instance.flushQueue();
                    return;
                }
                instance.eventQueue.set(QueueIdentifiers.FLUSH_QUEUE, Object.assign(Object.assign({}, previousQueue), { queued: new Date().getTime(), counter: previousQueue.counter + 1 }));
            }
            else {
                if (instance.retryQueTimeout !== -1) {
                    return;
                }
                const nextTimerIn = instance.queWaitTime -
                    (now - previousQueue.queued) +
                    1000;
                instance.retryQueTimeout = window.setTimeout(() => {
                    instance.retryQueTimeout = -1;
                    instance.flushQueue();
                }, nextTimerIn);
                return;
            }
        }
        else {
            const events = (_b = instance.eventQueue.get(QueueIdentifiers.ACTIVE_QUEUE)) !== null && _b !== void 0 ? _b : [];
            if (Array.isArray(events) && events.length > 0) {
                instance.eventQueue.set(QueueIdentifiers.ACTIVE_QUEUE, []);
                instance.eventQueue.set(QueueIdentifiers.FLUSH_QUEUE, {
                    events,
                    queued: new Date().getTime(),
                    counter: 1,
                });
            }
        }
        const events = (_c = instance.eventQueue.get(QueueIdentifiers.FLUSH_QUEUE)) === null || _c === void 0 ? void 0 : _c.events;
        if (Array.isArray(events) && events.length > 0) {
            const reqBody = JSON.stringify(events);
            fetch(constants["a" /* EVENT_API_URL */], {
                method: "POST",
                body: reqBody,
            })
                .then(() => {
                instance.eventQueue.set(QueueIdentifiers.FLUSH_QUEUE, undefined);
            })
                .catch(() => {
            });
        }
    }
    queueEvent(request) {
        var _a;
        const instance = CFEvent_CFEvent.getInstance();
        const events = [
            ...((_a = instance.eventQueue.get(QueueIdentifiers.ACTIVE_QUEUE)) !== null && _a !== void 0 ? _a : []),
            request,
        ];
        instance.eventQueue.set(QueueIdentifiers.ACTIVE_QUEUE, events);
        if (instance.queTimeout > 0) {
            window.clearTimeout(instance.queTimeout);
            instance.queTimeout = -1;
        }
        if (events.length >= QUEUE_MAX) {
            instance.flushQueue();
        }
        else {
            instance.queTimeout = window.setTimeout(() => {
                instance.flushQueue();
            }, 1000);
        }
    }
    raiseEvent(payload) {
        const { store } = Object(platform["a" /* getPlatformData */])();
        const { appName = features_constants["a" /* DEFAULT_APP */], entity, eventType, data, element } = payload;
        const url = window.location.href;
        const queryObject = Object(common["e" /* getQueryObject */])();
        const _a = data !== null && data !== void 0 ? data : {}, { product, storyboard, template, impressionsData, widgets, playbookId } = _a, restData = __rest(_a, ["product", "storyboard", "template", "impressionsData", "widgets", "playbookId"]);
        const timeSinceEpoch = new Date().getTime() / 1000;
        const instance = CFEvent_CFEvent.getInstance();
        instance.stats[eventType] += 1;
        instance.log(entity, eventType, data, element);
        instance.queueEvent(Object.assign(Object.assign({ app_name: appName, store_id: store, product_id: product, storyboard_id: storyboard, widget_ids: widgets, template_id: template, category: entity, action: eventType, time: timeSinceEpoch, playbook_id: playbookId, device_id: Object(deviceID["a" /* getDeviceID */])(), full_url: url, query: queryObject }, restData), impressionsData));
    }
    log(entity, eventType, data, element) {
        console["a" /* console */].debug(`MM:${entity}:${eventType}`);
        if (element) {
            console["a" /* console */].debug(`src element: `, element);
        }
        console["a" /* console */].debug(`data: `, JSON.stringify(data));
        console["a" /* console */].debug(`stats: `, JSON.stringify(CFEvent_CFEvent.getInstance().stats));
    }
    click(payload) {
        const { entity, element, data, appName } = payload;
        CFEvent_CFEvent.getInstance().raiseEvent({
            appName,
            entity,
            eventType: EventType.CLICK,
            data,
            element,
        });
    }
    impression(payload) {
        const { entity, element, data, appName } = payload;
        const instance = CFEvent_CFEvent.getInstance();
        const isCached = instance.impressionsCache.has(element);
        if (!isCached) {
            instance.raiseEvent({
                appName,
                entity,
                eventType: EventType.IMPRESSION,
                data,
                element,
            });
            instance.impressionsCache.add(element);
        }
    }
    view(payload) {
        const { entity, element, data, appName } = payload;
        const instance = CFEvent_CFEvent.getInstance();
        const isCached = instance.viewsCache.has(element);
        if (!isCached) {
            instance.raiseEvent({
                appName,
                entity,
                eventType: EventType.VIEW,
                data,
                element,
            });
            instance.viewsCache.add(element);
        }
    }
    hide(payload) {
        const { entity, element, data, appName } = payload;
        CFEvent_CFEvent.getInstance().raiseEvent({
            appName,
            entity,
            eventType: EventType.HIDE,
            data,
            element,
        });
    }
    conversion(payload) {
        const { data, appName } = payload;
        CFEvent_CFEvent.getInstance().raiseEvent({
            appName,
            entity: PerfEntity.WIDGET,
            eventType: EventType.CONVERSION,
            data,
        });
    }
}
const CFEvent_instance = CFEvent_CFEvent.getInstance();



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* unused harmony export CART_ROOT */\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"b\", function() { return INVALID_DISCOUNT_CODE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return CHECKOUT_URL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"c\", function() { return ajaxCartAPIs; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"d\", function() { return themeCartAPIs; });\n/* harmony import */ var utils_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);\n/* harmony import */ var utils_lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);\n\n\nlet { urls: { home: root }, } = Object(utils_platform__WEBPACK_IMPORTED_MODULE_0__[/* getPlatformData */ \"a\"])();\nroot = Object(utils_lodash__WEBPACK_IMPORTED_MODULE_1__[/* isValidString */ \"l\"])(root) ? root : \"/\";\nroot = root.endsWith(\"/\") ? root : `${root}/`;\nconst CART_ROOT = `${root}cart`;\nconst INVALID_DISCOUNT_CODE = \"((INVALID_DISCOUNT_CODE++\";\nconst CHECKOUT_URL = `${root}checkout`;\nconst ajaxCartAPIs = {\n    fetch: `${CART_ROOT}.js`,\n    add: `${CART_ROOT}/add.js`,\n    update: `${CART_ROOT}/update.js`,\n    change: `${CART_ROOT}/change.js`,\n    clear: `${CART_ROOT}/clear.js`,\n    applyDiscountPrefix: `${root}discount/`,\n};\nconst themeCartAPIs = {\n    add: `${CART_ROOT}/add`,\n    update: `${CART_ROOT}/update`,\n    change: `${CART_ROOT}/change`,\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvc2hvcGlmeS9hcGlzLnRzPzA3ZTgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBaUQ7QUFDSjtBQUM3QyxLQUFLLFFBQVEsYUFBYSxHQUFHLEdBQUcsOEVBQWU7QUFDL0MsT0FBTywwRUFBYTtBQUNwQixzQ0FBc0MsS0FBSztBQUNwQyxxQkFBcUIsS0FBSztBQUMxQjtBQUNBLHdCQUF3QixLQUFLO0FBQzdCO0FBQ1AsY0FBYyxVQUFVO0FBQ3hCLFlBQVksVUFBVTtBQUN0QixlQUFlLFVBQVU7QUFDekIsZUFBZSxVQUFVO0FBQ3pCLGNBQWMsVUFBVTtBQUN4Qiw0QkFBNEIsS0FBSztBQUNqQztBQUNPO0FBQ1AsWUFBWSxVQUFVO0FBQ3RCLGVBQWUsVUFBVTtBQUN6QixlQUFlLFVBQVU7QUFDekIiLCJmaWxlIjoiOC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFBsYXRmb3JtRGF0YSB9IGZyb20gXCJ1dGlscy9wbGF0Zm9ybVwiO1xuaW1wb3J0IHsgaXNWYWxpZFN0cmluZyB9IGZyb20gXCJ1dGlscy9sb2Rhc2hcIjtcbmxldCB7IHVybHM6IHsgaG9tZTogcm9vdCB9LCB9ID0gZ2V0UGxhdGZvcm1EYXRhKCk7XG5yb290ID0gaXNWYWxpZFN0cmluZyhyb290KSA/IHJvb3QgOiBcIi9cIjtcbnJvb3QgPSByb290LmVuZHNXaXRoKFwiL1wiKSA/IHJvb3QgOiBgJHtyb290fS9gO1xuZXhwb3J0IGNvbnN0IENBUlRfUk9PVCA9IGAke3Jvb3R9Y2FydGA7XG5leHBvcnQgY29uc3QgSU5WQUxJRF9ESVNDT1VOVF9DT0RFID0gXCIoKElOVkFMSURfRElTQ09VTlRfQ09ERSsrXCI7XG5leHBvcnQgY29uc3QgQ0hFQ0tPVVRfVVJMID0gYCR7cm9vdH1jaGVja291dGA7XG5leHBvcnQgY29uc3QgYWpheENhcnRBUElzID0ge1xuICAgIGZldGNoOiBgJHtDQVJUX1JPT1R9LmpzYCxcbiAgICBhZGQ6IGAke0NBUlRfUk9PVH0vYWRkLmpzYCxcbiAgICB1cGRhdGU6IGAke0NBUlRfUk9PVH0vdXBkYXRlLmpzYCxcbiAgICBjaGFuZ2U6IGAke0NBUlRfUk9PVH0vY2hhbmdlLmpzYCxcbiAgICBjbGVhcjogYCR7Q0FSVF9ST09UfS9jbGVhci5qc2AsXG4gICAgYXBwbHlEaXNjb3VudFByZWZpeDogYCR7cm9vdH1kaXNjb3VudC9gLFxufTtcbmV4cG9ydCBjb25zdCB0aGVtZUNhcnRBUElzID0ge1xuICAgIGFkZDogYCR7Q0FSVF9ST09UfS9hZGRgLFxuICAgIHVwZGF0ZTogYCR7Q0FSVF9ST09UfS91cGRhdGVgLFxuICAgIGNoYW5nZTogYCR7Q0FSVF9ST09UfS9jaGFuZ2VgLFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return getDeviceID; });\n/* harmony import */ var _lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);\n\nconst SESSION_KEY = \"mm.userDeviceID\";\nconst getDeviceID = () => {\n    const deviceID = window.localStorage.getItem(SESSION_KEY);\n    if (Object(_lodash__WEBPACK_IMPORTED_MODULE_0__[/* isNull */ \"e\"])(deviceID)) {\n        const newDeviceID = JSON.stringify(performance.now()) +\n            Math.random().toString(36).substring(2, 11);\n        window.localStorage.setItem(SESSION_KEY, newDeviceID);\n        return newDeviceID;\n    }\n    return deviceID;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvZGV2aWNlSUQudHM/ZTg1NCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQWtDO0FBQ2xDO0FBQ087QUFDUDtBQUNBLFFBQVEsOERBQU07QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiI5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNOdWxsIH0gZnJvbSBcIi4vbG9kYXNoXCI7XG5jb25zdCBTRVNTSU9OX0tFWSA9IFwibW0udXNlckRldmljZUlEXCI7XG5leHBvcnQgY29uc3QgZ2V0RGV2aWNlSUQgPSAoKSA9PiB7XG4gICAgY29uc3QgZGV2aWNlSUQgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oU0VTU0lPTl9LRVkpO1xuICAgIGlmIChpc051bGwoZGV2aWNlSUQpKSB7XG4gICAgICAgIGNvbnN0IG5ld0RldmljZUlEID0gSlNPTi5zdHJpbmdpZnkocGVyZm9ybWFuY2Uubm93KCkpICtcbiAgICAgICAgICAgIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZygyLCAxMSk7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShTRVNTSU9OX0tFWSwgbmV3RGV2aWNlSUQpO1xuICAgICAgICByZXR1cm4gbmV3RGV2aWNlSUQ7XG4gICAgfVxuICAgIHJldHVybiBkZXZpY2VJRDtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///9\n");

/***/ }),
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?t(exports):undefined}(this,(function(e){"use strict";var t;e.CartObjectStatus=void 0,(t=e.CartObjectStatus||(e.CartObjectStatus={})).DRAFT="DRAFT",t.PUBLISHED="PUBLISHED",t.UPDATE_FAILED="UPDATE_FAILED",t.ARCHIVED="ARCHIVED",e.CartFeature=void 0,(e.CartFeature||(e.CartFeature={})).BXGY_BANNER="bxgyBanner";var T,E,o;e.DiscountType=void 0,(T=e.DiscountType||(e.DiscountType={})).FIXED="fixed_amount",T.PERCENTAGE="percentage",T.BXGY_PRODUCTS="bxgy::products",T.FREE_SHIPPING="free_shipping",e.DiscountConditionType=void 0,(E=e.DiscountConditionType||(e.DiscountConditionType={})).MIN_CART_VALUE="MIN_CART_VALUE",E.MIN_QUANTITY="MIN_QUANTITY",E.TIMED="TIMED",E.EACH_TARGET="EACH_TARGET",e.DiscountName=void 0,(o=e.DiscountName||(e.DiscountName={})).TIERED="tiered",o.CODES="codes",o.BXGY="bxgy",o.UPSELL="upsell",o.ORDER="order";var n,C;e.UpsellDisplay=void 0,(n=e.UpsellDisplay||(e.UpsellDisplay={})).VERTICAL="vertical",n.HORIZONTAL="horizontal",e.UpsellRecommendationType=void 0,(C=e.UpsellRecommendationType||(e.UpsellRecommendationType={})).CUSTOM="custom",C.ALGORITHM="algorithm";var a,i,_;e.ChannelMethod=void 0,(a=e.ChannelMethod||(e.ChannelMethod={})).HELLO="HELLO",a.CART="CART",a.OPEN_CART="OPEN_CART",a.CLOSE_CART="CLOSE_CART",a.UPDATE_CART="UPDATE_CART",a.CHECKOUT="CHECKOUT",a.GET_QUERY="GET_QUERY",a.GET_PRODUCTS="GET_PRODUCTS",a.CART_STATS="CART_STATS",e.CartEventAction=void 0,(i=e.CartEventAction||(e.CartEventAction={})).OPEN_CART="openCart",i.CHANGE_TRIGGER="changeTrigger",i.UPDATE_TRIGGER="updateTrigger",i.CLEAR_TRIGGER="clearTrigger",i.ADD_TRIGGER="addTrigger",i.ADD_ITEM="addItem",i.CLEAR_CART="clearCart",i.REMOVE_ITEM="removeItem",i.UPDATE_ITEM="updateItem",i.UPDATE_DISCOUNT="updateDiscount",i.UPDATE_CART_PROPERTIES="updateCartProperties",i.UPDATE_ITEM_PROPERTIES="updateItemProperties",i.LAUNCHER_CLICK="launcherClick",e.UpdateIntent=void 0,(_=e.UpdateIntent||(e.UpdateIntent={})).UPSELL_SELECTED="upsell_selected",_.RECOMMENDATION_SELECTED="recommendation_selected",_.BXGY_SELECTED="bxgy_selected";var A,R,r,d;e.Addon=void 0,(A=e.Addon||(e.Addon={})).SCROLL_BANNER="scrollBanner",A.LAUNCHER="launcher",A.BXGY_BANNER="bxgyBanner",e.BannerType=void 0,(R=e.BannerType||(e.BannerType={})).STATIC="STATIC",R.SCROLLING="SCROLLING",e.CheckoutType=void 0,(r=e.CheckoutType||(e.CheckoutType={})).SWIFT="swift",r.FASTRR="fastrr",r.GOKWIK="gokwik",r.SHOPIFY="shopify",r.SHOPFLO="shopflo",e.CheckoutStatus=void 0,(d=e.CheckoutStatus||(e.CheckoutStatus={})).ENABLED="enabled",d.DISABLED="disabled";e.ACK_HELLO_MESSAGE="Major Tom",e.ATTRIBUTION_PROP="__mmWidget",e.GLOBAL_FOREX_KEY="global",e.HELLO_MESSAGE="Ground control",e.ITEM_BXGY_PROP="__mmBXGY",e.ITEM_TIER_PROP="__mmTier",e.ITEM_UPSELL_PROP="__mmUpsell",e.SIDECART_V2_APP="sidecart",e.SIDECART_V2_VERSION="2.0",e.deprecatedMMProps=["tier","_mmTier","_mmBXGY"]}));


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return enabledTPAs; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"b\", function() { return registerConversionEvent; });\n/* harmony import */ var _CFEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);\n/* harmony import */ var _lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);\n\n\nconst enabledTPAs = {\n    swift: true,\n    shopflo: true,\n    fastrr: true,\n};\nfunction registerConversionEvent(payload) {\n    const { customerLocale, customerId, orderId, lineItems, email, cartToken, source, } = payload;\n    const widgetsInOrder = lineItems.reduce((acc, { properties = {} }) => {\n        const widgetPropertiesStr = properties.__mmWidget;\n        const widgetProperties = Object(_lodash__WEBPACK_IMPORTED_MODULE_1__[/* safeParseJSON */ \"o\"])(widgetPropertiesStr, null);\n        if (widgetProperties !== null &&\n            !Array.isArray(widgetProperties) &&\n            typeof widgetProperties === \"object\") {\n            acc.push(widgetProperties);\n        }\n        return acc;\n    }, []);\n    _CFEvent__WEBPACK_IMPORTED_MODULE_0__[/* CFEvent */ \"a\"].conversion({\n        appName: \"shopify\",\n        data: {\n            widgets: widgetsInOrder,\n            meta: {\n                source,\n                line_items: lineItems,\n                order: orderId,\n                cartToken,\n                src: window.location.href,\n                customer: {\n                    id: customerId,\n                    locale: customerLocale,\n                    email,\n                },\n            },\n            impressionsData: {\n                apply_type: \"manual\",\n            },\n        },\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvb3JkZXIudHM/MmI0NiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFvQztBQUNLO0FBQ2xDO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLFdBQVcsNEVBQTRFO0FBQ3ZGLG1EQUFtRCxnQkFBZ0IsRUFBRTtBQUNyRTtBQUNBLGlDQUFpQyxxRUFBYTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSSx3REFBTztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVCxLQUFLO0FBQ0wiLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDRkV2ZW50IH0gZnJvbSBcIi4vQ0ZFdmVudFwiO1xuaW1wb3J0IHsgc2FmZVBhcnNlSlNPTiB9IGZyb20gXCIuL2xvZGFzaFwiO1xuZXhwb3J0IGNvbnN0IGVuYWJsZWRUUEFzID0ge1xuICAgIHN3aWZ0OiB0cnVlLFxuICAgIHNob3BmbG86IHRydWUsXG4gICAgZmFzdHJyOiB0cnVlLFxufTtcbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlckNvbnZlcnNpb25FdmVudChwYXlsb2FkKSB7XG4gICAgY29uc3QgeyBjdXN0b21lckxvY2FsZSwgY3VzdG9tZXJJZCwgb3JkZXJJZCwgbGluZUl0ZW1zLCBlbWFpbCwgY2FydFRva2VuLCBzb3VyY2UsIH0gPSBwYXlsb2FkO1xuICAgIGNvbnN0IHdpZGdldHNJbk9yZGVyID0gbGluZUl0ZW1zLnJlZHVjZSgoYWNjLCB7IHByb3BlcnRpZXMgPSB7fSB9KSA9PiB7XG4gICAgICAgIGNvbnN0IHdpZGdldFByb3BlcnRpZXNTdHIgPSBwcm9wZXJ0aWVzLl9fbW1XaWRnZXQ7XG4gICAgICAgIGNvbnN0IHdpZGdldFByb3BlcnRpZXMgPSBzYWZlUGFyc2VKU09OKHdpZGdldFByb3BlcnRpZXNTdHIsIG51bGwpO1xuICAgICAgICBpZiAod2lkZ2V0UHJvcGVydGllcyAhPT0gbnVsbCAmJlxuICAgICAgICAgICAgIUFycmF5LmlzQXJyYXkod2lkZ2V0UHJvcGVydGllcykgJiZcbiAgICAgICAgICAgIHR5cGVvZiB3aWRnZXRQcm9wZXJ0aWVzID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBhY2MucHVzaCh3aWRnZXRQcm9wZXJ0aWVzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIFtdKTtcbiAgICBDRkV2ZW50LmNvbnZlcnNpb24oe1xuICAgICAgICBhcHBOYW1lOiBcInNob3BpZnlcIixcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgd2lkZ2V0czogd2lkZ2V0c0luT3JkZXIsXG4gICAgICAgICAgICBtZXRhOiB7XG4gICAgICAgICAgICAgICAgc291cmNlLFxuICAgICAgICAgICAgICAgIGxpbmVfaXRlbXM6IGxpbmVJdGVtcyxcbiAgICAgICAgICAgICAgICBvcmRlcjogb3JkZXJJZCxcbiAgICAgICAgICAgICAgICBjYXJ0VG9rZW4sXG4gICAgICAgICAgICAgICAgc3JjOiB3aW5kb3cubG9jYXRpb24uaHJlZixcbiAgICAgICAgICAgICAgICBjdXN0b21lcjoge1xuICAgICAgICAgICAgICAgICAgICBpZDogY3VzdG9tZXJJZCxcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlOiBjdXN0b21lckxvY2FsZSxcbiAgICAgICAgICAgICAgICAgICAgZW1haWwsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbXByZXNzaW9uc0RhdGE6IHtcbiAgICAgICAgICAgICAgICBhcHBseV90eXBlOiBcIm1hbnVhbFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///12\n");

/***/ }),
/* 13 */,
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return getDataset; });\nconst getDataset = () => {\n    const appElements = document.querySelectorAll(\"[data-app='mm']\");\n    let dataset = {};\n    appElements.forEach((el) => {\n        dataset = Object.assign(Object.assign({}, dataset), el.dataset);\n    });\n    return dataset;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvZGF0YXNldC50cz9hZWU3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQsS0FBSztBQUNMO0FBQ0EiLCJmaWxlIjoiMTQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZ2V0RGF0YXNldCA9ICgpID0+IHtcbiAgICBjb25zdCBhcHBFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1hcHA9J21tJ11cIik7XG4gICAgbGV0IGRhdGFzZXQgPSB7fTtcbiAgICBhcHBFbGVtZW50cy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICBkYXRhc2V0ID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBkYXRhc2V0KSwgZWwuZGF0YXNldCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGRhdGFzZXQ7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///14\n");

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* unused harmony export getAvailableProducts */\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Product; });\n/* harmony import */ var utils_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);\n/* harmony import */ var _console__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);\n/* harmony import */ var _lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __rest = (undefined && undefined.__rest) || function (s, e) {\n    var t = {};\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\n        t[p] = s[p];\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\n            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))\n                t[p[i]] = s[p[i]];\n        }\n    return t;\n};\n\n\n\nconst getAvailableProducts = (products) => {\n    return products\n        .filter((product) => product.available)\n        .map((product) => (Object.assign(Object.assign({}, product), { variants: product.variants.filter((variant) => variant.available) })));\n};\nclass ProductClass {\n    static getCacheKey(productSlug) {\n        let slug = productSlug;\n        if (!productSlug) {\n            slug = window.location.pathname.split(\"/\").pop();\n        }\n        return {\n            slug: slug,\n            key: `product::${slug}`,\n        };\n    }\n    static isAvailable(product, availableSet) {\n        return product.variants.some(({ inventory_quantity: qty, id }) => !Object(_lodash__WEBPACK_IMPORTED_MODULE_2__[/* isUndefined */ \"k\"])(availableSet) ? availableSet.has(id.toString()) : qty > 0);\n    }\n    static toShopifyAPIVariants(linkDataVariants, availableSet) {\n        return linkDataVariants.map((v) => {\n            const { id, price, compare_at_price: cap, product_id: productId, available } = v, rest = __rest(v, [\"id\", \"price\", \"compare_at_price\", \"product_id\", \"available\"]);\n            return Object.assign(Object.assign({}, rest), { id, product_id: `${productId}`, price: +price, compare_at_price: +cap, available: !Object(_lodash__WEBPACK_IMPORTED_MODULE_2__[/* isUndefined */ \"k\"])(availableSet)\n                    ? availableSet.has(id.toString())\n                    : available, option3: null, option2: null, option1: null });\n        });\n    }\n    static toShopifyAPIProduct(linkDataProduct, availableSet) {\n        const { price, compare_at_price: cap, variants, images } = linkDataProduct;\n        return Object.assign(Object.assign({}, linkDataProduct), { available: ProductClass.isAvailable(linkDataProduct, availableSet), vendor: \"\", type: \"\", price: +price, compare_at_price: +cap, variants: ProductClass.toShopifyAPIVariants(variants, availableSet), images: images.map(({ url }) => url) });\n    }\n    static toShopifyAPIProducts(linkDataProducts, availableSet) {\n        return linkDataProducts.map((p) => ProductClass.toShopifyAPIProduct(p, availableSet));\n    }\n    static load(productSlug, { reload } = { reload: false }) {\n        var _a;\n        const currentPage = Object(utils_common__WEBPACK_IMPORTED_MODULE_0__[/* getCurrentPage */ \"c\"])();\n        if (currentPage === \"product\" || productSlug) {\n            const { key: cacheKey, slug } = ProductClass.getCacheKey(productSlug);\n            const { promise: cachedPromise } = (_a = ProductClass.cache[cacheKey]) !== null && _a !== void 0 ? _a : {};\n            if (reload || !cachedPromise) {\n                const productUrl = (slug === null || slug === void 0 ? void 0 : slug.startsWith(\"https\")) || (slug === null || slug === void 0 ? void 0 : slug.startsWith(\"/\"))\n                    ? `${slug}.js`\n                    : `/products/${slug}.js`;\n                const fetchPromise = fetch(productUrl)\n                    .then((response) => {\n                    try {\n                        return response.json();\n                    }\n                    catch (ex) {\n                        _console__WEBPACK_IMPORTED_MODULE_1__[/* console */ \"a\"].debug(`${window.location.pathname} is not a product page`);\n                        return undefined;\n                    }\n                })\n                    .then((productResponse) => {\n                    if (productResponse) {\n                        const cacheData = Object.assign({}, productResponse);\n                        const { variants } = cacheData;\n                        delete cacheData.media;\n                        cacheData.variants = (variants !== null && variants !== void 0 ? variants : []).map(({ id, available, options, price, name, compare_at_price, option1, option2, option3, }) => ({\n                            id,\n                            available,\n                            options,\n                            price,\n                            name,\n                            product_id: productResponse.id.toString(),\n                            compare_at_price,\n                            option3,\n                            option2,\n                            option1,\n                        }));\n                        ProductClass.cache[cacheKey].results = cacheData;\n                        return cacheData;\n                    }\n                    return undefined;\n                });\n                ProductClass.cache[cacheKey] = {\n                    promise: fetchPromise,\n                };\n            }\n            return ProductClass.cache[cacheKey].promise;\n        }\n        return Promise.resolve(undefined);\n    }\n    static getCurrentProduct() {\n        var _a;\n        const { key } = ProductClass.getCacheKey();\n        const { results: product } = (_a = ProductClass.cache[key]) !== null && _a !== void 0 ? _a : {};\n        return product;\n    }\n    static getStockCheckedProduct(productObject, { firstVariantOnly = false, } = {}) {\n        var _a, _b;\n        return __awaiter(this, void 0, void 0, function* () {\n            let selectedVariant;\n            if (firstVariantOnly) {\n                selectedVariant = (_a = productObject.variants) === null || _a === void 0 ? void 0 : _a[0].id.toString();\n            }\n            const { url } = productObject;\n            const product = yield ProductClass.load(url, {\n                reload: true,\n            });\n            const { variants } = product !== null && product !== void 0 ? product : {};\n            const availableVariants = (variants !== null && variants !== void 0 ? variants : [])\n                .filter(({ available }) => !!available)\n                .map(({ id }) => id.toString());\n            const availableSet = new Set(availableVariants);\n            if (availableVariants.length === 0 ||\n                (!Object(_lodash__WEBPACK_IMPORTED_MODULE_2__[/* isUndefined */ \"k\"])(selectedVariant) && !availableSet.has(selectedVariant))) {\n                return undefined;\n            }\n            return Object.assign(Object.assign({}, productObject), { variants: (_b = productObject.variants) === null || _b === void 0 ? void 0 : _b.map((_a) => {\n                    var { id } = _a, rest = __rest(_a, [\"id\"]);\n                    return (Object.assign(Object.assign({ id }, rest), { available: availableSet.has(id.toString()) }));\n                }) });\n        });\n    }\n    static getProducts(products, filterAvailable = false) {\n        return __awaiter(this, void 0, void 0, function* () {\n            const promises = products.map((handle) => ProductClass.load(handle, {\n                reload: true,\n            }));\n            const productObjects = yield Promise.all(promises);\n            if (filterAvailable) {\n                return getAvailableProducts(productObjects);\n            }\n            return productObjects;\n        });\n    }\n}\nProductClass.cache = {};\nProductClass.logs = {\n    color: \"black\",\n    \"background-color\": \"#aad922\",\n};\nconst Product = Object(utils_common__WEBPACK_IMPORTED_MODULE_0__[/* proxify */ \"j\"])(ProductClass);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvUHJvZHVjdC50cz84NGJjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBaUIsU0FBSSxJQUFJLFNBQUk7QUFDN0IsMkJBQTJCLCtEQUErRCxnQkFBZ0IsRUFBRSxFQUFFO0FBQzlHO0FBQ0EsbUNBQW1DLE1BQU0sNkJBQTZCLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDakcsa0NBQWtDLE1BQU0saUNBQWlDLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDcEcsK0JBQStCLHFGQUFxRjtBQUNwSDtBQUNBLEtBQUs7QUFDTDtBQUNBLGNBQWMsU0FBSSxJQUFJLFNBQUk7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQsY0FBYztBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3VEO0FBQ25CO0FBQ0c7QUFDaEM7QUFDUDtBQUNBO0FBQ0EseURBQXlELGFBQWEsb0VBQW9FO0FBQzFJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixLQUFLO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLHVDQUF1Qyw4QkFBOEIsTUFBTSxtRUFBVztBQUN0RjtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIscUVBQXFFO0FBQ3hGLGlEQUFpRCxVQUFVLG9CQUFvQixVQUFVLHNEQUFzRCxtRUFBVztBQUMxSjtBQUNBLDhFQUE4RTtBQUM5RSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLGVBQWUsaURBQWlEO0FBQ2hFLDZDQUE2QyxxQkFBcUIsNE5BQTROLE1BQU0sV0FBVztBQUMvUztBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixTQUFTLElBQUksZ0JBQWdCO0FBQzNEO0FBQ0EsNEJBQTRCLDJFQUFjO0FBQzFDO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6QyxtQkFBbUIseUJBQXlCO0FBQzVDO0FBQ0E7QUFDQSx5QkFBeUIsS0FBSztBQUM5QixtQ0FBbUMsS0FBSztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isd0RBQU8sVUFBVSx5QkFBeUI7QUFDbEU7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsMERBQTBEO0FBQzFELCtCQUErQixXQUFXO0FBQzFDO0FBQ0EsOEdBQThHLG9GQUFvRjtBQUNsTTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsTUFBTTtBQUNyQixlQUFlLG1CQUFtQjtBQUNsQztBQUNBO0FBQ0Esa0RBQWtELDRCQUE0QixLQUFLO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixNQUFNO0FBQ3pCO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsbUJBQW1CLFdBQVc7QUFDOUI7QUFDQSwwQkFBMEIsWUFBWTtBQUN0Qyx1QkFBdUIsS0FBSztBQUM1QjtBQUNBO0FBQ0Esa0JBQWtCLG1FQUFXO0FBQzdCO0FBQ0E7QUFDQSxpREFBaUQsbUJBQW1CO0FBQ3BFLHlCQUF5QixLQUFLO0FBQzlCLHlEQUF5RCxLQUFLLFVBQVUsNkNBQTZDO0FBQ3JILGlCQUFpQixHQUFHO0FBQ3BCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxnQkFBZ0Isb0VBQU8iLCJmaWxlIjoiMTUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgICB0W3BdID0gc1twXTtcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgICAgfVxuICAgIHJldHVybiB0O1xufTtcbmltcG9ydCB7IGdldEN1cnJlbnRQYWdlLCBwcm94aWZ5IH0gZnJvbSBcInV0aWxzL2NvbW1vblwiO1xuaW1wb3J0IHsgY29uc29sZSB9IGZyb20gXCIuL2NvbnNvbGVcIjtcbmltcG9ydCB7IGlzVW5kZWZpbmVkIH0gZnJvbSBcIi4vbG9kYXNoXCI7XG5leHBvcnQgY29uc3QgZ2V0QXZhaWxhYmxlUHJvZHVjdHMgPSAocHJvZHVjdHMpID0+IHtcbiAgICByZXR1cm4gcHJvZHVjdHNcbiAgICAgICAgLmZpbHRlcigocHJvZHVjdCkgPT4gcHJvZHVjdC5hdmFpbGFibGUpXG4gICAgICAgIC5tYXAoKHByb2R1Y3QpID0+IChPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHByb2R1Y3QpLCB7IHZhcmlhbnRzOiBwcm9kdWN0LnZhcmlhbnRzLmZpbHRlcigodmFyaWFudCkgPT4gdmFyaWFudC5hdmFpbGFibGUpIH0pKSk7XG59O1xuY2xhc3MgUHJvZHVjdENsYXNzIHtcbiAgICBzdGF0aWMgZ2V0Q2FjaGVLZXkocHJvZHVjdFNsdWcpIHtcbiAgICAgICAgbGV0IHNsdWcgPSBwcm9kdWN0U2x1ZztcbiAgICAgICAgaWYgKCFwcm9kdWN0U2x1Zykge1xuICAgICAgICAgICAgc2x1ZyA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIi9cIikucG9wKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNsdWc6IHNsdWcsXG4gICAgICAgICAgICBrZXk6IGBwcm9kdWN0Ojoke3NsdWd9YCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgc3RhdGljIGlzQXZhaWxhYmxlKHByb2R1Y3QsIGF2YWlsYWJsZVNldCkge1xuICAgICAgICByZXR1cm4gcHJvZHVjdC52YXJpYW50cy5zb21lKCh7IGludmVudG9yeV9xdWFudGl0eTogcXR5LCBpZCB9KSA9PiAhaXNVbmRlZmluZWQoYXZhaWxhYmxlU2V0KSA/IGF2YWlsYWJsZVNldC5oYXMoaWQudG9TdHJpbmcoKSkgOiBxdHkgPiAwKTtcbiAgICB9XG4gICAgc3RhdGljIHRvU2hvcGlmeUFQSVZhcmlhbnRzKGxpbmtEYXRhVmFyaWFudHMsIGF2YWlsYWJsZVNldCkge1xuICAgICAgICByZXR1cm4gbGlua0RhdGFWYXJpYW50cy5tYXAoKHYpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgaWQsIHByaWNlLCBjb21wYXJlX2F0X3ByaWNlOiBjYXAsIHByb2R1Y3RfaWQ6IHByb2R1Y3RJZCwgYXZhaWxhYmxlIH0gPSB2LCByZXN0ID0gX19yZXN0KHYsIFtcImlkXCIsIFwicHJpY2VcIiwgXCJjb21wYXJlX2F0X3ByaWNlXCIsIFwicHJvZHVjdF9pZFwiLCBcImF2YWlsYWJsZVwiXSk7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCByZXN0KSwgeyBpZCwgcHJvZHVjdF9pZDogYCR7cHJvZHVjdElkfWAsIHByaWNlOiArcHJpY2UsIGNvbXBhcmVfYXRfcHJpY2U6ICtjYXAsIGF2YWlsYWJsZTogIWlzVW5kZWZpbmVkKGF2YWlsYWJsZVNldClcbiAgICAgICAgICAgICAgICAgICAgPyBhdmFpbGFibGVTZXQuaGFzKGlkLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAgICAgICAgIDogYXZhaWxhYmxlLCBvcHRpb24zOiBudWxsLCBvcHRpb24yOiBudWxsLCBvcHRpb24xOiBudWxsIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIHRvU2hvcGlmeUFQSVByb2R1Y3QobGlua0RhdGFQcm9kdWN0LCBhdmFpbGFibGVTZXQpIHtcbiAgICAgICAgY29uc3QgeyBwcmljZSwgY29tcGFyZV9hdF9wcmljZTogY2FwLCB2YXJpYW50cywgaW1hZ2VzIH0gPSBsaW5rRGF0YVByb2R1Y3Q7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGxpbmtEYXRhUHJvZHVjdCksIHsgYXZhaWxhYmxlOiBQcm9kdWN0Q2xhc3MuaXNBdmFpbGFibGUobGlua0RhdGFQcm9kdWN0LCBhdmFpbGFibGVTZXQpLCB2ZW5kb3I6IFwiXCIsIHR5cGU6IFwiXCIsIHByaWNlOiArcHJpY2UsIGNvbXBhcmVfYXRfcHJpY2U6ICtjYXAsIHZhcmlhbnRzOiBQcm9kdWN0Q2xhc3MudG9TaG9waWZ5QVBJVmFyaWFudHModmFyaWFudHMsIGF2YWlsYWJsZVNldCksIGltYWdlczogaW1hZ2VzLm1hcCgoeyB1cmwgfSkgPT4gdXJsKSB9KTtcbiAgICB9XG4gICAgc3RhdGljIHRvU2hvcGlmeUFQSVByb2R1Y3RzKGxpbmtEYXRhUHJvZHVjdHMsIGF2YWlsYWJsZVNldCkge1xuICAgICAgICByZXR1cm4gbGlua0RhdGFQcm9kdWN0cy5tYXAoKHApID0+IFByb2R1Y3RDbGFzcy50b1Nob3BpZnlBUElQcm9kdWN0KHAsIGF2YWlsYWJsZVNldCkpO1xuICAgIH1cbiAgICBzdGF0aWMgbG9hZChwcm9kdWN0U2x1ZywgeyByZWxvYWQgfSA9IHsgcmVsb2FkOiBmYWxzZSB9KSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgY29uc3QgY3VycmVudFBhZ2UgPSBnZXRDdXJyZW50UGFnZSgpO1xuICAgICAgICBpZiAoY3VycmVudFBhZ2UgPT09IFwicHJvZHVjdFwiIHx8IHByb2R1Y3RTbHVnKSB7XG4gICAgICAgICAgICBjb25zdCB7IGtleTogY2FjaGVLZXksIHNsdWcgfSA9IFByb2R1Y3RDbGFzcy5nZXRDYWNoZUtleShwcm9kdWN0U2x1Zyk7XG4gICAgICAgICAgICBjb25zdCB7IHByb21pc2U6IGNhY2hlZFByb21pc2UgfSA9IChfYSA9IFByb2R1Y3RDbGFzcy5jYWNoZVtjYWNoZUtleV0pICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IHt9O1xuICAgICAgICAgICAgaWYgKHJlbG9hZCB8fCAhY2FjaGVkUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RVcmwgPSAoc2x1ZyA9PT0gbnVsbCB8fCBzbHVnID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzbHVnLnN0YXJ0c1dpdGgoXCJodHRwc1wiKSkgfHwgKHNsdWcgPT09IG51bGwgfHwgc2x1ZyA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2x1Zy5zdGFydHNXaXRoKFwiL1wiKSlcbiAgICAgICAgICAgICAgICAgICAgPyBgJHtzbHVnfS5qc2BcbiAgICAgICAgICAgICAgICAgICAgOiBgL3Byb2R1Y3RzLyR7c2x1Z30uanNgO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZldGNoUHJvbWlzZSA9IGZldGNoKHByb2R1Y3RVcmwpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoYCR7d2luZG93LmxvY2F0aW9uLnBhdGhuYW1lfSBpcyBub3QgYSBwcm9kdWN0IHBhZ2VgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocHJvZHVjdFJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9kdWN0UmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhY2hlRGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIHByb2R1Y3RSZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHZhcmlhbnRzIH0gPSBjYWNoZURhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgY2FjaGVEYXRhLm1lZGlhO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FjaGVEYXRhLnZhcmlhbnRzID0gKHZhcmlhbnRzICE9PSBudWxsICYmIHZhcmlhbnRzICE9PSB2b2lkIDAgPyB2YXJpYW50cyA6IFtdKS5tYXAoKHsgaWQsIGF2YWlsYWJsZSwgb3B0aW9ucywgcHJpY2UsIG5hbWUsIGNvbXBhcmVfYXRfcHJpY2UsIG9wdGlvbjEsIG9wdGlvbjIsIG9wdGlvbjMsIH0pID0+ICh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXZhaWxhYmxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X2lkOiBwcm9kdWN0UmVzcG9uc2UuaWQudG9TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wYXJlX2F0X3ByaWNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbjMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24xLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgUHJvZHVjdENsYXNzLmNhY2hlW2NhY2hlS2V5XS5yZXN1bHRzID0gY2FjaGVEYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhY2hlRGF0YTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIFByb2R1Y3RDbGFzcy5jYWNoZVtjYWNoZUtleV0gPSB7XG4gICAgICAgICAgICAgICAgICAgIHByb21pc2U6IGZldGNoUHJvbWlzZSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFByb2R1Y3RDbGFzcy5jYWNoZVtjYWNoZUtleV0ucHJvbWlzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHVuZGVmaW5lZCk7XG4gICAgfVxuICAgIHN0YXRpYyBnZXRDdXJyZW50UHJvZHVjdCgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBjb25zdCB7IGtleSB9ID0gUHJvZHVjdENsYXNzLmdldENhY2hlS2V5KCk7XG4gICAgICAgIGNvbnN0IHsgcmVzdWx0czogcHJvZHVjdCB9ID0gKF9hID0gUHJvZHVjdENsYXNzLmNhY2hlW2tleV0pICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IHt9O1xuICAgICAgICByZXR1cm4gcHJvZHVjdDtcbiAgICB9XG4gICAgc3RhdGljIGdldFN0b2NrQ2hlY2tlZFByb2R1Y3QocHJvZHVjdE9iamVjdCwgeyBmaXJzdFZhcmlhbnRPbmx5ID0gZmFsc2UsIH0gPSB7fSkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgbGV0IHNlbGVjdGVkVmFyaWFudDtcbiAgICAgICAgICAgIGlmIChmaXJzdFZhcmlhbnRPbmx5KSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRWYXJpYW50ID0gKF9hID0gcHJvZHVjdE9iamVjdC52YXJpYW50cykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hWzBdLmlkLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB7IHVybCB9ID0gcHJvZHVjdE9iamVjdDtcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3QgPSB5aWVsZCBQcm9kdWN0Q2xhc3MubG9hZCh1cmwsIHtcbiAgICAgICAgICAgICAgICByZWxvYWQ6IHRydWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IHsgdmFyaWFudHMgfSA9IHByb2R1Y3QgIT09IG51bGwgJiYgcHJvZHVjdCAhPT0gdm9pZCAwID8gcHJvZHVjdCA6IHt9O1xuICAgICAgICAgICAgY29uc3QgYXZhaWxhYmxlVmFyaWFudHMgPSAodmFyaWFudHMgIT09IG51bGwgJiYgdmFyaWFudHMgIT09IHZvaWQgMCA/IHZhcmlhbnRzIDogW10pXG4gICAgICAgICAgICAgICAgLmZpbHRlcigoeyBhdmFpbGFibGUgfSkgPT4gISFhdmFpbGFibGUpXG4gICAgICAgICAgICAgICAgLm1hcCgoeyBpZCB9KSA9PiBpZC50b1N0cmluZygpKTtcbiAgICAgICAgICAgIGNvbnN0IGF2YWlsYWJsZVNldCA9IG5ldyBTZXQoYXZhaWxhYmxlVmFyaWFudHMpO1xuICAgICAgICAgICAgaWYgKGF2YWlsYWJsZVZhcmlhbnRzLmxlbmd0aCA9PT0gMCB8fFxuICAgICAgICAgICAgICAgICghaXNVbmRlZmluZWQoc2VsZWN0ZWRWYXJpYW50KSAmJiAhYXZhaWxhYmxlU2V0LmhhcyhzZWxlY3RlZFZhcmlhbnQpKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBwcm9kdWN0T2JqZWN0KSwgeyB2YXJpYW50czogKF9iID0gcHJvZHVjdE9iamVjdC52YXJpYW50cykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLm1hcCgoX2EpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHsgaWQgfSA9IF9hLCByZXN0ID0gX19yZXN0KF9hLCBbXCJpZFwiXSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHsgaWQgfSwgcmVzdCksIHsgYXZhaWxhYmxlOiBhdmFpbGFibGVTZXQuaGFzKGlkLnRvU3RyaW5nKCkpIH0pKTtcbiAgICAgICAgICAgICAgICB9KSB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXRpYyBnZXRQcm9kdWN0cyhwcm9kdWN0cywgZmlsdGVyQXZhaWxhYmxlID0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb21pc2VzID0gcHJvZHVjdHMubWFwKChoYW5kbGUpID0+IFByb2R1Y3RDbGFzcy5sb2FkKGhhbmRsZSwge1xuICAgICAgICAgICAgICAgIHJlbG9hZDogdHJ1ZSxcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RPYmplY3RzID0geWllbGQgUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuICAgICAgICAgICAgaWYgKGZpbHRlckF2YWlsYWJsZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBnZXRBdmFpbGFibGVQcm9kdWN0cyhwcm9kdWN0T2JqZWN0cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcHJvZHVjdE9iamVjdHM7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblByb2R1Y3RDbGFzcy5jYWNoZSA9IHt9O1xuUHJvZHVjdENsYXNzLmxvZ3MgPSB7XG4gICAgY29sb3I6IFwiYmxhY2tcIixcbiAgICBcImJhY2tncm91bmQtY29sb3JcIjogXCIjYWFkOTIyXCIsXG59O1xuZXhwb3J0IGNvbnN0IFByb2R1Y3QgPSBwcm94aWZ5KFByb2R1Y3RDbGFzcyk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///15\n");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Cache; });\n/* harmony import */ var _lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);\n\nclass Cache {\n    constructor(persistent = true) {\n        this.sessionKey = \"\";\n        this.cache = new Map();\n        this.persistent = true;\n        this.persistent = !!persistent;\n    }\n    init(cacheKey) {\n        this.sessionKey = `${cacheKey}-cache`;\n        this.cache = new Map(Object(_lodash__WEBPACK_IMPORTED_MODULE_0__[/* safeParseJSON */ \"o\"])(this.persistent\n            ? window.localStorage.getItem(this.sessionKey)\n            : window.sessionStorage.getItem(this.sessionKey), []));\n    }\n    get(key) {\n        return this.cache.get(key);\n    }\n    set(key, data) {\n        this.cache.set(key, data);\n        if (this.persistent) {\n            window.localStorage.setItem(this.sessionKey, JSON.stringify(Array.from(this.cache.entries())));\n            return;\n        }\n        window.sessionStorage.setItem(this.sessionKey, JSON.stringify(Array.from(this.cache.entries())));\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvQ2FjaGUudHM/MTI1NyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQXlDO0FBQ2xDO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsU0FBUztBQUN0Qyw2QkFBNkIscUVBQWE7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjE3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2FmZVBhcnNlSlNPTiB9IGZyb20gXCIuL2xvZGFzaFwiO1xuZXhwb3J0IGNsYXNzIENhY2hlIHtcbiAgICBjb25zdHJ1Y3RvcihwZXJzaXN0ZW50ID0gdHJ1ZSkge1xuICAgICAgICB0aGlzLnNlc3Npb25LZXkgPSBcIlwiO1xuICAgICAgICB0aGlzLmNhY2hlID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLnBlcnNpc3RlbnQgPSB0cnVlO1xuICAgICAgICB0aGlzLnBlcnNpc3RlbnQgPSAhIXBlcnNpc3RlbnQ7XG4gICAgfVxuICAgIGluaXQoY2FjaGVLZXkpIHtcbiAgICAgICAgdGhpcy5zZXNzaW9uS2V5ID0gYCR7Y2FjaGVLZXl9LWNhY2hlYDtcbiAgICAgICAgdGhpcy5jYWNoZSA9IG5ldyBNYXAoc2FmZVBhcnNlSlNPTih0aGlzLnBlcnNpc3RlbnRcbiAgICAgICAgICAgID8gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMuc2Vzc2lvbktleSlcbiAgICAgICAgICAgIDogd2luZG93LnNlc3Npb25TdG9yYWdlLmdldEl0ZW0odGhpcy5zZXNzaW9uS2V5KSwgW10pKTtcbiAgICB9XG4gICAgZ2V0KGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jYWNoZS5nZXQoa2V5KTtcbiAgICB9XG4gICAgc2V0KGtleSwgZGF0YSkge1xuICAgICAgICB0aGlzLmNhY2hlLnNldChrZXksIGRhdGEpO1xuICAgICAgICBpZiAodGhpcy5wZXJzaXN0ZW50KSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5zZXNzaW9uS2V5LCBKU09OLnN0cmluZ2lmeShBcnJheS5mcm9tKHRoaXMuY2FjaGUuZW50cmllcygpKSkpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHRoaXMuc2Vzc2lvbktleSwgSlNPTi5zdHJpbmdpZnkoQXJyYXkuZnJvbSh0aGlzLmNhY2hlLmVudHJpZXMoKSkpKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///17\n");

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Event; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"c\", function() { return getInterceptDisabledFetch; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"b\", function() { return Interceptor; });\n/* harmony import */ var utils_console__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);\n/* harmony import */ var utils_lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);\n\n\nconst getRequestBody = (body) => {\n    if (!body) {\n        return null;\n    }\n    if (Object(utils_lodash__WEBPACK_IMPORTED_MODULE_1__[/* isString */ \"j\"])(body)) {\n        try {\n            return JSON.parse(body);\n        }\n        catch (_) {\n            return body;\n        }\n    }\n    if (body instanceof FormData) {\n        const formDataObj = {};\n        body.forEach((value, key) => {\n            formDataObj[key] = value;\n        });\n        return formDataObj;\n    }\n    if (body instanceof URLSearchParams) {\n        const paramsObj = {};\n        body.forEach((value, key) => {\n            paramsObj[key] = value;\n        });\n        return paramsObj;\n    }\n    return body;\n};\nconst triggerCallbacks = (callbacks = [], requestData, data) => {\n    const { url } = requestData;\n    const { searchParams } = new URL(url);\n    const isMMEnabled = searchParams.get(\"mm\") !== \"false\";\n    if (isMMEnabled) {\n        callbacks.forEach((c) => c(Object.assign(Object.assign({}, requestData), { response: data })));\n    }\n};\nconst getCallbackKey = (method, path) => `${method}:${path}`;\nconst getResponseJSON = (responseText) => {\n    let response;\n    try {\n        if (Object(utils_lodash__WEBPACK_IMPORTED_MODULE_1__[/* isPlainObject */ \"i\"])(responseText)) {\n            response = responseText;\n        }\n        else {\n            response = JSON.parse(responseText);\n        }\n    }\n    catch (_) {\n        response = {\n            body: responseText,\n        };\n    }\n    return response;\n};\nvar Event;\n(function (Event) {\n    Event[\"RESPONSE\"] = \"response\";\n    Event[\"REQUEST\"] = \"request\";\n    Event[\"ERROR\"] = \"error\";\n})(Event || (Event = {}));\nconst getInterceptDisabledFetch = () => (input, init) => {\n    return window.fetch(input, Object.assign(Object.assign({}, init), { disableInterceptor: true }));\n};\nclass Interceptor {\n    static getCallbacks(method, url, event) {\n        const path = url.replace(window.location.origin, \"\").replace(/\\?.*$/, \"\");\n        const callbackMap = Interceptor.callbacks[event];\n        const callbacks = callbackMap[getCallbackKey(method, path)];\n        return {\n            path,\n            callbacks: callbacks !== null && callbacks !== void 0 ? callbacks : [],\n        };\n    }\n    static interceptXHR() {\n        function formatResponse(xhr) {\n            const contentTypeHeader = xhr.getResponseHeader(\"content-type\");\n            if (contentTypeHeader &&\n                xhr.responseType === \"json\" &&\n                contentTypeHeader.indexOf(\"json\") !== -1) {\n                return xhr.response;\n            }\n            if (xhr.response && typeof xhr.response === \"object\") {\n                return xhr.response;\n            }\n            if (xhr.response && typeof xhr.response === \"string\") {\n                return JSON.parse(xhr.response);\n            }\n            if (xhr.responseText) {\n                return JSON.parse(xhr.responseText);\n            }\n            return null;\n        }\n        const originalOpen = XMLHttpRequest.prototype.open;\n        const originalSend = XMLHttpRequest.prototype.send;\n        const originalXHR = XMLHttpRequest;\n        XMLHttpRequest.prototype.send = function (body) {\n            this.requestBody = getRequestBody(body);\n            originalSend.call(this, body);\n        };\n        const customXHRListener = function (method) {\n            const { status, readyState, responseURL } = this;\n            const { path, callbacks } = Interceptor.getCallbacks(method, responseURL, Event.RESPONSE);\n            if (callbacks.length > 0 &&\n                readyState === originalXHR.DONE &&\n                (status === 0 ||\n                    (status >= 200 && status < 400))) {\n                triggerCallbacks(callbacks, {\n                    method,\n                    status,\n                    url: responseURL,\n                    path,\n                    request: this.requestBody,\n                }, getResponseJSON(formatResponse(this)));\n            }\n        };\n        XMLHttpRequest.prototype.open = function (...args) {\n            const [method] = args;\n            const { disableInterceptor } = this;\n            if (!disableInterceptor) {\n                const boundListener = customXHRListener.bind(this, method);\n                this.addEventListener(\"readystatechange\", boundListener);\n                this.addEventListener(\"loadend\", () => {\n                    this.removeEventListener(\"readystatechange\", boundListener);\n                });\n            }\n            originalOpen.apply(this, args);\n        };\n    }\n    static interceptFetch() {\n        const originalFetch = window.fetch;\n        window.fetch = (input, init) => {\n            const { method = \"GET\", disableInterceptor = false, body } = init !== null && init !== void 0 ? init : {};\n            const requestBody = getRequestBody(body);\n            return (originalFetch(input, init)\n                .then((response) => {\n                var _a;\n                try {\n                    const { url, status } = response;\n                    let { path, callbacks = [] } = (_a = Interceptor.getCallbacks(method, url, Event.RESPONSE)) !== null && _a !== void 0 ? _a : {};\n                    if (disableInterceptor) {\n                        callbacks = [];\n                    }\n                    const requestData = {\n                        method,\n                        path,\n                        url,\n                        status,\n                        request: requestBody,\n                    };\n                    if (callbacks.length > 0) {\n                        const clonedResponse = response.clone();\n                        return (clonedResponse\n                            .text()\n                            .then((responseText) => {\n                            triggerCallbacks(callbacks, requestData, getResponseJSON(responseText));\n                            return response;\n                        })\n                            .catch((_) => {\n                            utils_console__WEBPACK_IMPORTED_MODULE_0__[/* console */ \"a\"].error(\"[interceptor][fetch] Unable to trigger callbacks. Reading response stream failed\");\n                            return response;\n                        }));\n                    }\n                }\n                catch (e) {\n                    utils_console__WEBPACK_IMPORTED_MODULE_0__[/* console */ \"a\"].error(e);\n                }\n                return response;\n            }));\n        };\n    }\n    static init() {\n        if (!Interceptor.initialised) {\n            Interceptor.interceptXHR();\n            Interceptor.interceptFetch();\n            Interceptor.initialised = true;\n        }\n    }\n    static listen(event, { method, path } = {\n        method: \"GET\",\n        path: \"\",\n    }, callback) {\n        if (path.length > 0) {\n            Interceptor.init();\n            const methodArray = Array.isArray(method) ? method : [method];\n            const pathArray = Array.isArray(path) ? path : [path];\n            const keysUpdated = [];\n            methodArray.forEach((methodEntry) => {\n                pathArray.forEach((pathEntry) => {\n                    var _a;\n                    const callbackKey = getCallbackKey(methodEntry, pathEntry);\n                    let newCallbacks = (_a = Interceptor.callbacks[event][callbackKey]) !== null && _a !== void 0 ? _a : [];\n                    newCallbacks = newCallbacks.filter((c) => c !== callback);\n                    newCallbacks.push(callback);\n                    Interceptor.callbacks[event][callbackKey] = newCallbacks;\n                    keysUpdated.push(callbackKey);\n                });\n            });\n            return () => {\n                keysUpdated.forEach((key) => {\n                    const currentCallbacks = Interceptor.callbacks[event][key];\n                    Interceptor.callbacks[event][key] = currentCallbacks.filter((c) => c !== callback);\n                });\n            };\n        }\n        return () => { };\n    }\n}\nInterceptor.initialised = false;\nInterceptor.callbacks = {\n    [Event.RESPONSE]: {},\n    [Event.REQUEST]: {},\n    [Event.ERROR]: {},\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvSW50ZXJjZXB0b3IudHM/N2YyZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXdDO0FBQ2U7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHFFQUFRO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxlQUFlO0FBQzFCO0FBQ0E7QUFDQSxpRUFBaUUsaUJBQWlCLGlCQUFpQjtBQUNuRztBQUNBO0FBQ0EsNENBQTRDLE9BQU8sR0FBRyxLQUFLO0FBQzNEO0FBQ0E7QUFDQTtBQUNBLFlBQVksMEVBQWE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxzQkFBc0I7QUFDaEI7QUFDUCw2REFBNkQsVUFBVSwyQkFBMkI7QUFDbEc7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixrQ0FBa0M7QUFDckQsbUJBQW1CLGtCQUFrQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixxQkFBcUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixtREFBbUQ7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixjQUFjO0FBQ3pDLHlCQUF5Qix1QkFBdUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBLDRCQUE0Qiw2REFBTztBQUNuQztBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNkRBQU87QUFDM0I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsZUFBZTtBQUN6QztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEIsdUJBQXVCO0FBQ3ZCLHFCQUFxQjtBQUNyQiIsImZpbGUiOiIxOC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbnNvbGUgfSBmcm9tIFwidXRpbHMvY29uc29sZVwiO1xuaW1wb3J0IHsgaXNQbGFpbk9iamVjdCwgaXNTdHJpbmcgfSBmcm9tIFwidXRpbHMvbG9kYXNoXCI7XG5jb25zdCBnZXRSZXF1ZXN0Qm9keSA9IChib2R5KSA9PiB7XG4gICAgaWYgKCFib2R5KSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAoaXNTdHJpbmcoYm9keSkpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKGJvZHkpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChfKSB7XG4gICAgICAgICAgICByZXR1cm4gYm9keTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoYm9keSBpbnN0YW5jZW9mIEZvcm1EYXRhKSB7XG4gICAgICAgIGNvbnN0IGZvcm1EYXRhT2JqID0ge307XG4gICAgICAgIGJvZHkuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICAgICAgZm9ybURhdGFPYmpba2V5XSA9IHZhbHVlO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZvcm1EYXRhT2JqO1xuICAgIH1cbiAgICBpZiAoYm9keSBpbnN0YW5jZW9mIFVSTFNlYXJjaFBhcmFtcykge1xuICAgICAgICBjb25zdCBwYXJhbXNPYmogPSB7fTtcbiAgICAgICAgYm9keS5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgICAgICBwYXJhbXNPYmpba2V5XSA9IHZhbHVlO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHBhcmFtc09iajtcbiAgICB9XG4gICAgcmV0dXJuIGJvZHk7XG59O1xuY29uc3QgdHJpZ2dlckNhbGxiYWNrcyA9IChjYWxsYmFja3MgPSBbXSwgcmVxdWVzdERhdGEsIGRhdGEpID0+IHtcbiAgICBjb25zdCB7IHVybCB9ID0gcmVxdWVzdERhdGE7XG4gICAgY29uc3QgeyBzZWFyY2hQYXJhbXMgfSA9IG5ldyBVUkwodXJsKTtcbiAgICBjb25zdCBpc01NRW5hYmxlZCA9IHNlYXJjaFBhcmFtcy5nZXQoXCJtbVwiKSAhPT0gXCJmYWxzZVwiO1xuICAgIGlmIChpc01NRW5hYmxlZCkge1xuICAgICAgICBjYWxsYmFja3MuZm9yRWFjaCgoYykgPT4gYyhPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHJlcXVlc3REYXRhKSwgeyByZXNwb25zZTogZGF0YSB9KSkpO1xuICAgIH1cbn07XG5jb25zdCBnZXRDYWxsYmFja0tleSA9IChtZXRob2QsIHBhdGgpID0+IGAke21ldGhvZH06JHtwYXRofWA7XG5jb25zdCBnZXRSZXNwb25zZUpTT04gPSAocmVzcG9uc2VUZXh0KSA9PiB7XG4gICAgbGV0IHJlc3BvbnNlO1xuICAgIHRyeSB7XG4gICAgICAgIGlmIChpc1BsYWluT2JqZWN0KHJlc3BvbnNlVGV4dCkpIHtcbiAgICAgICAgICAgIHJlc3BvbnNlID0gcmVzcG9uc2VUZXh0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmVzcG9uc2UgPSBKU09OLnBhcnNlKHJlc3BvbnNlVGV4dCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2F0Y2ggKF8pIHtcbiAgICAgICAgcmVzcG9uc2UgPSB7XG4gICAgICAgICAgICBib2R5OiByZXNwb25zZVRleHQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiByZXNwb25zZTtcbn07XG5leHBvcnQgdmFyIEV2ZW50O1xuKGZ1bmN0aW9uIChFdmVudCkge1xuICAgIEV2ZW50W1wiUkVTUE9OU0VcIl0gPSBcInJlc3BvbnNlXCI7XG4gICAgRXZlbnRbXCJSRVFVRVNUXCJdID0gXCJyZXF1ZXN0XCI7XG4gICAgRXZlbnRbXCJFUlJPUlwiXSA9IFwiZXJyb3JcIjtcbn0pKEV2ZW50IHx8IChFdmVudCA9IHt9KSk7XG5leHBvcnQgY29uc3QgZ2V0SW50ZXJjZXB0RGlzYWJsZWRGZXRjaCA9ICgpID0+IChpbnB1dCwgaW5pdCkgPT4ge1xuICAgIHJldHVybiB3aW5kb3cuZmV0Y2goaW5wdXQsIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgaW5pdCksIHsgZGlzYWJsZUludGVyY2VwdG9yOiB0cnVlIH0pKTtcbn07XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnRlcmNlcHRvciB7XG4gICAgc3RhdGljIGdldENhbGxiYWNrcyhtZXRob2QsIHVybCwgZXZlbnQpIHtcbiAgICAgICAgY29uc3QgcGF0aCA9IHVybC5yZXBsYWNlKHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpO1xuICAgICAgICBjb25zdCBjYWxsYmFja01hcCA9IEludGVyY2VwdG9yLmNhbGxiYWNrc1tldmVudF07XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrcyA9IGNhbGxiYWNrTWFwW2dldENhbGxiYWNrS2V5KG1ldGhvZCwgcGF0aCldO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcGF0aCxcbiAgICAgICAgICAgIGNhbGxiYWNrczogY2FsbGJhY2tzICE9PSBudWxsICYmIGNhbGxiYWNrcyAhPT0gdm9pZCAwID8gY2FsbGJhY2tzIDogW10sXG4gICAgICAgIH07XG4gICAgfVxuICAgIHN0YXRpYyBpbnRlcmNlcHRYSFIoKSB7XG4gICAgICAgIGZ1bmN0aW9uIGZvcm1hdFJlc3BvbnNlKHhocikge1xuICAgICAgICAgICAgY29uc3QgY29udGVudFR5cGVIZWFkZXIgPSB4aHIuZ2V0UmVzcG9uc2VIZWFkZXIoXCJjb250ZW50LXR5cGVcIik7XG4gICAgICAgICAgICBpZiAoY29udGVudFR5cGVIZWFkZXIgJiZcbiAgICAgICAgICAgICAgICB4aHIucmVzcG9uc2VUeXBlID09PSBcImpzb25cIiAmJlxuICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlSGVhZGVyLmluZGV4T2YoXCJqc29uXCIpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB4aHIucmVzcG9uc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoeGhyLnJlc3BvbnNlICYmIHR5cGVvZiB4aHIucmVzcG9uc2UgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4geGhyLnJlc3BvbnNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHhoci5yZXNwb25zZSAmJiB0eXBlb2YgeGhyLnJlc3BvbnNlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh4aHIucmVzcG9uc2VUZXh0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBvcmlnaW5hbE9wZW4gPSBYTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUub3BlbjtcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxTZW5kID0gWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlLnNlbmQ7XG4gICAgICAgIGNvbnN0IG9yaWdpbmFsWEhSID0gWE1MSHR0cFJlcXVlc3Q7XG4gICAgICAgIFhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gKGJvZHkpIHtcbiAgICAgICAgICAgIHRoaXMucmVxdWVzdEJvZHkgPSBnZXRSZXF1ZXN0Qm9keShib2R5KTtcbiAgICAgICAgICAgIG9yaWdpbmFsU2VuZC5jYWxsKHRoaXMsIGJvZHkpO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBjdXN0b21YSFJMaXN0ZW5lciA9IGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgc3RhdHVzLCByZWFkeVN0YXRlLCByZXNwb25zZVVSTCB9ID0gdGhpcztcbiAgICAgICAgICAgIGNvbnN0IHsgcGF0aCwgY2FsbGJhY2tzIH0gPSBJbnRlcmNlcHRvci5nZXRDYWxsYmFja3MobWV0aG9kLCByZXNwb25zZVVSTCwgRXZlbnQuUkVTUE9OU0UpO1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrcy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICAgICAgcmVhZHlTdGF0ZSA9PT0gb3JpZ2luYWxYSFIuRE9ORSAmJlxuICAgICAgICAgICAgICAgIChzdGF0dXMgPT09IDAgfHxcbiAgICAgICAgICAgICAgICAgICAgKHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgNDAwKSkpIHtcbiAgICAgICAgICAgICAgICB0cmlnZ2VyQ2FsbGJhY2tzKGNhbGxiYWNrcywge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2QsXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgdXJsOiByZXNwb25zZVVSTCxcbiAgICAgICAgICAgICAgICAgICAgcGF0aCxcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdDogdGhpcy5yZXF1ZXN0Qm9keSxcbiAgICAgICAgICAgICAgICB9LCBnZXRSZXNwb25zZUpTT04oZm9ybWF0UmVzcG9uc2UodGhpcykpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgICAgICAgY29uc3QgW21ldGhvZF0gPSBhcmdzO1xuICAgICAgICAgICAgY29uc3QgeyBkaXNhYmxlSW50ZXJjZXB0b3IgfSA9IHRoaXM7XG4gICAgICAgICAgICBpZiAoIWRpc2FibGVJbnRlcmNlcHRvcikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJvdW5kTGlzdGVuZXIgPSBjdXN0b21YSFJMaXN0ZW5lci5iaW5kKHRoaXMsIG1ldGhvZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwicmVhZHlzdGF0ZWNoYW5nZVwiLCBib3VuZExpc3RlbmVyKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkZW5kXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVhZHlzdGF0ZWNoYW5nZVwiLCBib3VuZExpc3RlbmVyKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9yaWdpbmFsT3Blbi5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgc3RhdGljIGludGVyY2VwdEZldGNoKCkge1xuICAgICAgICBjb25zdCBvcmlnaW5hbEZldGNoID0gd2luZG93LmZldGNoO1xuICAgICAgICB3aW5kb3cuZmV0Y2ggPSAoaW5wdXQsIGluaXQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgbWV0aG9kID0gXCJHRVRcIiwgZGlzYWJsZUludGVyY2VwdG9yID0gZmFsc2UsIGJvZHkgfSA9IGluaXQgIT09IG51bGwgJiYgaW5pdCAhPT0gdm9pZCAwID8gaW5pdCA6IHt9O1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdEJvZHkgPSBnZXRSZXF1ZXN0Qm9keShib2R5KTtcbiAgICAgICAgICAgIHJldHVybiAob3JpZ2luYWxGZXRjaChpbnB1dCwgaW5pdClcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyB1cmwsIHN0YXR1cyB9ID0gcmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgICAgIGxldCB7IHBhdGgsIGNhbGxiYWNrcyA9IFtdIH0gPSAoX2EgPSBJbnRlcmNlcHRvci5nZXRDYWxsYmFja3MobWV0aG9kLCB1cmwsIEV2ZW50LlJFU1BPTlNFKSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDoge307XG4gICAgICAgICAgICAgICAgICAgIGlmIChkaXNhYmxlSW50ZXJjZXB0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVlc3REYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3Q6IHJlcXVlc3RCb2R5LFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2tzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNsb25lZFJlc3BvbnNlID0gcmVzcG9uc2UuY2xvbmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoY2xvbmVkUmVzcG9uc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGV4dCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlVGV4dCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXJDYWxsYmFja3MoY2FsbGJhY2tzLCByZXF1ZXN0RGF0YSwgZ2V0UmVzcG9uc2VKU09OKHJlc3BvbnNlVGV4dCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChfKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIltpbnRlcmNlcHRvcl1bZmV0Y2hdIFVuYWJsZSB0byB0cmlnZ2VyIGNhbGxiYWNrcy4gUmVhZGluZyByZXNwb25zZSBzdHJlYW0gZmFpbGVkXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIHN0YXRpYyBpbml0KCkge1xuICAgICAgICBpZiAoIUludGVyY2VwdG9yLmluaXRpYWxpc2VkKSB7XG4gICAgICAgICAgICBJbnRlcmNlcHRvci5pbnRlcmNlcHRYSFIoKTtcbiAgICAgICAgICAgIEludGVyY2VwdG9yLmludGVyY2VwdEZldGNoKCk7XG4gICAgICAgICAgICBJbnRlcmNlcHRvci5pbml0aWFsaXNlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIGxpc3RlbihldmVudCwgeyBtZXRob2QsIHBhdGggfSA9IHtcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICBwYXRoOiBcIlwiLFxuICAgIH0sIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmIChwYXRoLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIEludGVyY2VwdG9yLmluaXQoKTtcbiAgICAgICAgICAgIGNvbnN0IG1ldGhvZEFycmF5ID0gQXJyYXkuaXNBcnJheShtZXRob2QpID8gbWV0aG9kIDogW21ldGhvZF07XG4gICAgICAgICAgICBjb25zdCBwYXRoQXJyYXkgPSBBcnJheS5pc0FycmF5KHBhdGgpID8gcGF0aCA6IFtwYXRoXTtcbiAgICAgICAgICAgIGNvbnN0IGtleXNVcGRhdGVkID0gW107XG4gICAgICAgICAgICBtZXRob2RBcnJheS5mb3JFYWNoKChtZXRob2RFbnRyeSkgPT4ge1xuICAgICAgICAgICAgICAgIHBhdGhBcnJheS5mb3JFYWNoKChwYXRoRW50cnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjYWxsYmFja0tleSA9IGdldENhbGxiYWNrS2V5KG1ldGhvZEVudHJ5LCBwYXRoRW50cnkpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmV3Q2FsbGJhY2tzID0gKF9hID0gSW50ZXJjZXB0b3IuY2FsbGJhY2tzW2V2ZW50XVtjYWxsYmFja0tleV0pICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IFtdO1xuICAgICAgICAgICAgICAgICAgICBuZXdDYWxsYmFja3MgPSBuZXdDYWxsYmFja3MuZmlsdGVyKChjKSA9PiBjICE9PSBjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgICAgIG5ld0NhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICAgICAgSW50ZXJjZXB0b3IuY2FsbGJhY2tzW2V2ZW50XVtjYWxsYmFja0tleV0gPSBuZXdDYWxsYmFja3M7XG4gICAgICAgICAgICAgICAgICAgIGtleXNVcGRhdGVkLnB1c2goY2FsbGJhY2tLZXkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGtleXNVcGRhdGVkLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50Q2FsbGJhY2tzID0gSW50ZXJjZXB0b3IuY2FsbGJhY2tzW2V2ZW50XVtrZXldO1xuICAgICAgICAgICAgICAgICAgICBJbnRlcmNlcHRvci5jYWxsYmFja3NbZXZlbnRdW2tleV0gPSBjdXJyZW50Q2FsbGJhY2tzLmZpbHRlcigoYykgPT4gYyAhPT0gY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKCkgPT4geyB9O1xuICAgIH1cbn1cbkludGVyY2VwdG9yLmluaXRpYWxpc2VkID0gZmFsc2U7XG5JbnRlcmNlcHRvci5jYWxsYmFja3MgPSB7XG4gICAgW0V2ZW50LlJFU1BPTlNFXToge30sXG4gICAgW0V2ZW50LlJFUVVFU1RdOiB7fSxcbiAgICBbRXZlbnQuRVJST1JdOiB7fSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///18\n");

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return DEFAULT_APP; });\nconst DEFAULT_APP = \"-- empty --\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZmVhdHVyZXMvY29uc3RhbnRzLnRzP2YzN2QiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBTyIsImZpbGUiOiIxOS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBERUZBVUxUX0FQUCA9IFwiLS0gZW1wdHkgLS1cIjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///19\n");

/***/ }),
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n * js_channel is a very lightweight abstraction on top of\n * postMessage which defines message formats and semantics\n * to support interactions more rich than just message passing\n * js_channel supports:\n *  + query/response - traditional rpc\n *  + query/update/response - incremental async return of results\n *    to a query\n *  + notifications - fire and forget\n *  + error handling\n *\n * js_channel is based heavily on json-rpc, but is focused at the\n * problem of inter-iframe RPC.\n *\n * Message types:\n *  There are 5 types of messages that can flow over this channel,\n *  and you may determine what type of message an object is by\n *  examining its parameters:\n *  1. Requests\n *    + integer id\n *    + string method\n *    + (optional) any params\n *  2. Callback Invocations (or just \"Callbacks\")\n *    + integer id\n *    + string callback\n *    + (optional) params\n *  3. Error Responses (or just \"Errors)\n *    + integer id\n *    + string error\n *    + (optional) string message\n *  4. Responses\n *    + integer id\n *    + (optional) any result\n *  5. Notifications\n *    + string method\n *    + (optional) any params\n */\n\n// Universal module definition //\n(function (root, factory) {\n  if (true) {\n    // CommonJS\n    module.exports = factory();\n  } else {}\n}(this, function () {\n  \"use strict\";\n  var Channel = (function() {\n\n    // current transaction id, start out at a random *odd* number between 1 and a million\n    // There is one current transaction counter id per page, and it's shared between\n    // channel instances.  That means of all messages posted from a single javascript\n    // evaluation context, we'll never have two with the same id.\n    var s_curTranId = Math.floor(Math.random()*1000001);\n\n    // no two bound channels in the same javascript evaluation context may have the same origin, scope, and window.\n    // further if two bound channels have the same window and scope, they may not have *overlapping* origins\n    // (either one or both support '*').  This restriction allows a single onMessage handler to efficiently\n    // route messages based on origin and scope.  The s_boundChans maps origins to scopes, to message\n    // handlers.  Request and Notification messages are routed using this table.\n    // Finally, channels are inserted into this table when built, and removed when destroyed.\n    var s_boundChans = { };\n\n    // add a channel to s_boundChans, throwing if a dup exists\n    function s_addBoundChan(win, origin, scope, handler) {\n        function hasWin(arr) {\n            for (var i = 0; i < arr.length; i++) if (arr[i].win === win) return true;\n            return false;\n        }\n\n        // does she exist?\n        var exists = false;\n\n        if (origin === '*') {\n            // we must check all other origins, sadly.\n            for (var k in s_boundChans) {\n                if (!s_boundChans.hasOwnProperty(k)) continue;\n                if (k === '*') continue;\n                if (typeof s_boundChans[k][scope] === 'object') {\n                    exists = hasWin(s_boundChans[k][scope]);\n                    if (exists) break;\n                }\n            }\n        } else {\n            // we must check only '*'\n            if ((s_boundChans['*'] && s_boundChans['*'][scope])) {\n                exists = hasWin(s_boundChans['*'][scope]);\n            }\n            if (!exists && s_boundChans[origin] && s_boundChans[origin][scope])\n            {\n                exists = hasWin(s_boundChans[origin][scope]);\n            }\n        }\n        if (exists) throw \"A channel is already bound to the same window which overlaps with origin '\"+ origin +\"' and has scope '\"+scope+\"'\";\n\n        if (typeof s_boundChans[origin] != 'object') s_boundChans[origin] = { };\n        if (typeof s_boundChans[origin][scope] != 'object') s_boundChans[origin][scope] = [ ];\n        s_boundChans[origin][scope].push({win: win, handler: handler});\n    }\n\n    function s_removeBoundChan(win, origin, scope) {\n        var arr = s_boundChans[origin][scope];\n        for (var i = 0; i < arr.length; i++) {\n            if (arr[i].win === win) {\n                arr.splice(i,1);\n            }\n        }\n        if (s_boundChans[origin][scope].length === 0) {\n            delete s_boundChans[origin][scope];\n        }\n    }\n\n    function s_isArray(obj) {\n        if (Array.isArray) return Array.isArray(obj);\n        else {\n            return (obj.constructor.toString().indexOf(\"Array\") != -1);\n        }\n    }\n\n    // No two outstanding outbound messages may have the same id, period.  Given that, a single table\n    // mapping \"transaction ids\" to message handlers, allows efficient routing of Callback, Error, and\n    // Response messages.  Entries are added to this table when requests are sent, and removed when\n    // responses are received.\n    var s_transIds = { };\n\n    // class singleton onMessage handler\n    // this function is registered once and all incoming messages route through here.  This\n    // arrangement allows certain efficiencies, message data is only parsed once and dispatch\n    // is more efficient, especially for large numbers of simultaneous channels.\n    var s_onMessage = function(e) {\n        try {\n          var m = JSON.parse(e.data);\n          if (typeof m !== 'object' || m === null) throw \"malformed\";\n        } catch(e) {\n          // just ignore any posted messages that do not consist of valid JSON\n          return;\n        }\n\n        var w = e.source;\n        var o = e.origin;\n        var s, i, meth;\n\n        if (typeof m.method === 'string') {\n            var ar = m.method.split('::');\n            if (ar.length == 2) {\n                s = ar[0];\n                meth = ar[1];\n            } else {\n                meth = m.method;\n            }\n        }\n\n        if (typeof m.id !== 'undefined') i = m.id;\n\n        // w is message source window\n        // o is message origin\n        // m is parsed message\n        // s is message scope\n        // i is message id (or undefined)\n        // meth is unscoped method name\n        // ^^ based on these factors we can route the message\n\n        // if it has a method it's either a notification or a request,\n        // route using s_boundChans\n        if (typeof meth === 'string') {\n            var delivered = false;\n            if (s_boundChans[o] && s_boundChans[o][s]) {\n                for (var j = 0; j < s_boundChans[o][s].length; j++) {\n                    if (s_boundChans[o][s][j].win === w) {\n                        s_boundChans[o][s][j].handler(o, meth, m);\n                        delivered = true;\n                        break;\n                    }\n                }\n            }\n\n            if (!delivered && s_boundChans['*'] && s_boundChans['*'][s]) {\n                for (var j = 0; j < s_boundChans['*'][s].length; j++) {\n                    if (s_boundChans['*'][s][j].win === w) {\n                        s_boundChans['*'][s][j].handler(o, meth, m);\n                        break;\n                    }\n                }\n            }\n        }\n        // otherwise it must have an id (or be poorly formed\n        else if (typeof i != 'undefined') {\n            if (s_transIds[i]) s_transIds[i](o, meth, m);\n        }\n    };\n\n    // Setup postMessage event listeners\n    if (window.addEventListener) window.addEventListener('message', s_onMessage, false);\n    else if(window.attachEvent) window.attachEvent('onmessage', s_onMessage);\n\n    /* a messaging channel is constructed from a window and an origin.\n     * the channel will assert that all messages received over the\n     * channel match the origin\n     *\n     * Arguments to Channel.build(cfg):\n     *\n     *   cfg.window - the remote window with which we'll communicate\n     *   cfg.origin - the expected origin of the remote window, may be '*'\n     *                which matches any origin\n     *   cfg.scope  - the 'scope' of messages.  a scope string that is\n     *                prepended to message names.  local and remote endpoints\n     *                of a single channel must agree upon scope. Scope may\n     *                not contain double colons ('::').\n     *   cfg.debugOutput - A boolean value.  If true and window.console.log is\n     *                a function, then debug strings will be emitted to that\n     *                function.\n     *   cfg.postMessageObserver - A function that will be passed two arguments,\n     *                an origin and a message.  It will be passed these immediately\n     *                before messages are posted.\n     *   cfg.gotMessageObserver - A function that will be passed two arguments,\n     *                an origin and a message.  It will be passed these arguments\n     *                immediately after they pass scope and origin checks, but before\n     *                they are processed.\n     *   cfg.onReady - A function that will be invoked when a channel becomes \"ready\",\n     *                this occurs once both sides of the channel have been\n     *                instantiated and an application level handshake is exchanged.\n     *                the onReady function will be passed a single argument which is\n     *                the channel object that was returned from build().\n     *   cfg.reconnect - A boolean value - if true, the channel allows reconnection\n     *                useful when the page in a child frame is reloaded and wants\n     *                to re-establish connection with parent window using the same\n     *                origin, scope and bindings.\n     *   cfg.publish - A boolean value. If true, bind will automatically publish\n     *                the method on the remote side. The method will be published under\n     *                channelObject.remote, but it will not be available before the onReady\n     *                callback is called on the other side.\n     *   cfg.remote - An array of method names for which stubs should be generated without\n     *                waiting for remote end to publish them. A string (for a single method name)\n     *                is also accepted. This allows methods under channelObject.remote to be called\n     *                also before onReady callback is called; the invocations will be queued until\n     *                the channel is ready. If the methods do not exist on remote side, the\n     *                error callback will be called.\n     */\n    return {\n        build: function(cfg) {\n            var debug = function(m) {\n                if (cfg.debugOutput && window.console && window.console.log) {\n                    // try to stringify, if it doesn't work we'll let javascript's built in toString do its magic\n                    try {\n                        if (typeof m !== 'string') {\n                            m = JSON.stringify(m);\n                        }\n                    }\n                    catch(e) {\n                    }\n                    window.console.log(\"[\"+chanId+\"] \" + m);\n                }\n            };\n\n            /* browser capabilities check */\n            if (!window.postMessage) throw(\"jschannel cannot run this browser, no postMessage\");\n            if (!window.JSON || !window.JSON.stringify || ! window.JSON.parse) {\n                throw(\"jschannel cannot run this browser, no JSON parsing/serialization\");\n            }\n\n            /* basic argument validation */\n            if (typeof cfg != 'object') throw(\"Channel build invoked without a proper object argument\");\n\n            if (!cfg.window || !cfg.window.postMessage) throw(\"Channel.build() called without a valid window argument\");\n\n            /* we'd have to do a little more work to be able to run multiple channels that intercommunicate the same\n             * window...  Not sure if we care to support that */\n            if (window === cfg.window) debug(\"target window is same as present window -- use at your own risk\");\n\n            // let's require that the client specify an origin.  if we just assume '*' we'll be\n            // propagating unsafe practices.  that would be lame.\n            var validOrigin = false;\n            if (typeof cfg.origin === 'string') {\n                var oMatch;\n                if (cfg.origin === \"*\") validOrigin = true;\n                // allow valid domains under http and https.  Also, trim paths off otherwise valid origins.\n                else if (null !== (oMatch = cfg.origin.match(/^https?:\\/\\/(?:[-a-zA-Z0-9_\\.])+(?::\\d+)?/))) {\n                    cfg.origin = oMatch[0].toLowerCase();\n                    validOrigin = true;\n                }\n            }\n\n            if (!validOrigin) throw (\"Channel.build() called with an invalid origin\");\n\n            if (typeof cfg.scope !== 'undefined') {\n                if (typeof cfg.scope !== 'string') throw 'scope, when specified, must be a string';\n                if (cfg.scope.split('::').length > 1) throw \"scope may not contain double colons: '::'\";\n            } else {\n                cfg.scope = \"__default\";\n            }\n\n            /* private variables */\n            // generate a random and psuedo unique id for this channel\n            var chanId = (function () {\n                var text = \"\";\n                var alpha = \"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789\";\n                for(var i=0; i < 5; i++) text += alpha.charAt(Math.floor(Math.random() * alpha.length));\n                return text;\n            })();\n\n            // registrations: mapping method names to call objects\n            var regTbl = { };\n            // current oustanding sent requests\n            var outTbl = { };\n            // current oustanding received requests\n            var inTbl = { };\n            // are we ready yet?  when false we will block outbound messages.\n            var ready = false;\n            var pendingQueue = [ ];\n            var publishQueue = [ ];\n\n            var createTransaction = function(id,origin,callbacks) {\n                var shouldDelayReturn = false;\n                var completed = false;\n\n                return {\n                    origin: origin,\n                    invoke: function(cbName, v) {\n                        // verify in table\n                        if (!inTbl[id]) throw \"attempting to invoke a callback of a nonexistent transaction: \" + id;\n                        // verify that the callback name is valid\n                        var valid = false;\n                        for (var i = 0; i < callbacks.length; i++) if (cbName === callbacks[i]) { valid = true; break; }\n                        if (!valid) throw \"request supports no such callback '\" + cbName + \"'\";\n\n                        // send callback invocation\n                        postMessage({ id: id, callback: cbName, params: v});\n                    },\n                    error: function(error, message) {\n                        completed = true;\n                        // verify in table\n                        if (!inTbl[id]) throw \"error called for nonexistent message: \" + id;\n\n                        // remove transaction from table\n                        delete inTbl[id];\n\n                        // send error\n                        postMessage({ id: id, error: error, message: message });\n                    },\n                    complete: function(v) {\n                        completed = true;\n                        // verify in table\n                        if (!inTbl[id]) throw \"complete called for nonexistent message: \" + id;\n                        // remove transaction from table\n                        delete inTbl[id];\n                        // send complete\n                        postMessage({ id: id, result: v });\n                    },\n                    delayReturn: function(delay) {\n                        if (typeof delay === 'boolean') {\n                            shouldDelayReturn = (delay === true);\n                        }\n                        return shouldDelayReturn;\n                    },\n                    completed: function() {\n                        return completed;\n                    }\n                };\n            };\n\n            var setTransactionTimeout = function(transId, timeout, method) {\n              return window.setTimeout(function() {\n                if (outTbl[transId]) {\n                  // XXX: what if client code raises an exception here?\n                  var msg = \"timeout (\" + timeout + \"ms) exceeded on method '\" + method + \"'\";\n                  if (outTbl[transId].error) {\n                      outTbl[transId].error(\"timeout_error\", msg);\n                  }\n                  delete outTbl[transId];\n                  delete s_transIds[transId];\n                }\n              }, timeout);\n            };\n\n            var onMessage = function(origin, method, m) {\n                // if an observer was specified at allocation time, invoke it\n                if (typeof cfg.gotMessageObserver === 'function') {\n                    // pass observer a clone of the object so that our\n                    // manipulations are not visible (i.e. method unscoping).\n                    // This is not particularly efficient, but then we expect\n                    // that message observers are primarily for debugging anyway.\n                    try {\n                        cfg.gotMessageObserver(origin, m);\n                    } catch (e) {\n                        debug(\"gotMessageObserver() raised an exception: \" + e.toString());\n                    }\n                }\n\n                // now, what type of message is this?\n                if (m.id && method) {\n                    inTbl[m.id] = { };\n                    var trans = createTransaction(m.id, origin, m.callbacks ? m.callbacks : [ ]);\n                    // a request!  do we have a registered handler for this request?\n                    if (regTbl[method]) {\n                        try {\n                            // callback handling.  we'll magically create functions inside the parameter list for each\n                            // callback\n                            if (m.callbacks && s_isArray(m.callbacks) && m.callbacks.length > 0) {\n                                for (var i = 0; i < m.callbacks.length; i++) {\n                                    var path = m.callbacks[i];\n                                    var obj = m.params;\n                                    var pathItems = path.split('/');\n                                    for (var j = 0; j < pathItems.length - 1; j++) {\n                                        var cp = pathItems[j];\n                                        if (typeof obj[cp] !== 'object') obj[cp] = { };\n                                        obj = obj[cp];\n                                    }\n                                    obj[pathItems[pathItems.length - 1]] = (function() {\n                                        var cbName = path;\n                                        return function(params) {\n                                            return trans.invoke(cbName, params);\n                                        };\n                                    })();\n                                }\n                            }\n                            var resp = regTbl[method](trans, m.params);\n                            if (!trans.delayReturn() && !trans.completed()) trans.complete(resp);\n                        } catch(e) {\n                            // automagic handling of exceptions:\n                            var error = \"runtime_error\";\n                            var message = null;\n                            // * if it's a string then it gets an error code of 'runtime_error' and string is the message\n                            if (typeof e === 'string') {\n                                message = e;\n                            } else if (typeof e === 'object') {\n                                // if it's an Error instance we use the constructor name to set the error property\n                                // and we just copy the error message\n                                if (e instanceof Error) {\n                                    error = e.constructor.name;\n                                    message = e.message;\n                                }\n                                // Otherwise, it's either an array or an object\n                                // * if it's an array of length two, then  array[0] is the code, array[1] is the error message\n                                else if (e && s_isArray(e) && e.length == 2) {\n                                    error = e[0];\n                                    message = e[1];\n                                }\n                                // * if it's an object then we'll look form error and message parameters\n                                else if (typeof e.error === 'string') {\n                                    error = e.error;\n                                    if (!e.message) message = \"\";\n                                    else if (typeof e.message === 'string') message = e.message;\n                                    else e = e.message; // let the stringify/toString message give us a reasonable verbose error string\n                                }\n                            }\n\n                            // message is *still* null, let's try harder\n                            if (message === null) {\n                                try {\n                                    message = JSON.stringify(e);\n                                    /* On MSIE8, this can result in 'out of memory', which\n                                     * leaves message undefined. */\n                                    if (typeof(message) == 'undefined')\n                                      message = e.toString();\n                                } catch (e2) {\n                                    message = e.toString();\n                                }\n                            }\n\n                            trans.error(error,message);\n                        }\n                    } else { // if no method found, send error\n                        trans.error(\"method_not_found\", \"No method '\" + method + \"' was (yet) bound by the provider\");\n                    }\n                } else if (m.id && m.callback) {\n                    if (!outTbl[m.id] ||!outTbl[m.id].callbacks || !outTbl[m.id].callbacks[m.callback])\n                    {\n                        debug(\"ignoring invalid callback, id:\"+m.id+ \" (\" + m.callback +\")\");\n                    } else {\n                        // XXX: what if client code raises an exception here?\n                        outTbl[m.id].callbacks[m.callback](m.params);\n                    }\n                } else if (m.id) {\n                    if (!outTbl[m.id]) {\n                        debug(\"ignoring invalid response: \" + m.id);\n                    } else {\n                        // XXX: what if client code raises an exception here?\n                        if (m.error) {\n                            // We might not have an error callback\n                            if(outTbl[m.id].error) {\n                                outTbl[m.id].error(m.error, m.message);\n                            }\n                        } else {\n                            // But we always have a success callback\n                            if (m.result !== undefined) {\n                                outTbl[m.id].success(m.result);\n                            } else {\n                                outTbl[m.id].success();\n                            }\n                        }\n                        delete outTbl[m.id];\n                        delete s_transIds[m.id];\n                    }\n                } else if (method) {\n                    // tis a notification.\n                    if (regTbl[method]) {\n                        // yep, there's a handler for that.\n                        // transaction has only origin for notifications.\n                        regTbl[method]({ origin: origin }, m.params);\n                        // if the client throws, we'll just let it bubble out\n                        // what can we do?  Also, here we'll ignore return values\n                    }\n                }\n            };\n\n            // now register our bound channel for msg routing\n            s_addBoundChan(cfg.window, cfg.origin, cfg.scope, onMessage);\n\n            // scope method names based on cfg.scope specified when the Channel was instantiated\n            var scopeMethod = function(m) {\n                return [cfg.scope, m].join(\"::\");\n            };\n\n            // a small wrapper around postmessage whose primary function is to handle the\n            // case that clients start sending messages before the other end is \"ready\"\n            var postMessage = function(msg, force) {\n                if (!msg) throw \"postMessage called with null message\";\n\n                // delay posting if we're not ready yet.\n                if (!force && !ready) {\n                    debug(\"queue message: \" + JSON.stringify(msg));\n                    pendingQueue.push(msg);\n                } else {\n                    if (typeof cfg.postMessageObserver === 'function') {\n                        try {\n                            cfg.postMessageObserver(cfg.origin, msg);\n                        } catch (e) {\n                            debug(\"postMessageObserver() raised an exception: \" + e.toString());\n                        }\n                    }\n                    debug(\"post message: \" + JSON.stringify(msg) + \" with origin \" + cfg.origin);\n                    cfg.window.postMessage(JSON.stringify(msg), cfg.origin);\n                }\n            };\n\n            var onReady = function(trans, params) {\n                debug('ready msg received');\n                if (ready && !cfg.reconnect) {\n                    throw \"received ready message while in ready state.\";\n                }\n                ready = true;\n\n                // only append suffix to chanId once:\n                if (chanId.length < 6) {\n\t                if (params.type === 'publish-request') {\n\t                    chanId += '-R';\n\t                } else {\n\t                    chanId += '-L';\n\t                }\n                }\n                debug('ready msg accepted.');\n\n                if (params.type === 'publish-request') {\n                    obj.notify({ method: '__ready', params: {\n                        type:'publish-reply',\n                        publish: publishQueue\n                    } });\n                }\n\n                for (var i = 0; i < params.publish.length; i++) {\n                    if (params.publish[i].action === \"bind\") {\n                        createStubs([params.publish[i].method], obj.remote);\n                    } else { // unbind\n                        delete obj.remote[params.publish[i].method];\n                    }\n                }\n\n                //unbind ready handler unless we allow reconnecting:\n                if (!cfg.reconnect) {\n                    obj.unbind('__ready', true); // now this handler isn't needed any more.\n                }\n\n                // flush queue\n                while (pendingQueue.length) {\n                    postMessage(pendingQueue.splice(0, 1)[0]);\n                }\n                publishQueue = [];\n                // invoke onReady observer if provided\n                if (typeof cfg.onReady === 'function') cfg.onReady(obj);\n\n            };\n\n            var createStubs = function(stubList, targetObj) {\n                stubList = [].concat(stubList); // Coerce into array, allows string to be used for single-item array\n                var method;\n                for(var i=0; i < stubList.length; i++) {\n                    method = stubList[i].toString();\n                    targetObj[method] = function(m) {\n                        return function(params, success, error) {\n                            if (success) {\n                                obj.call({\n                                    method: m,\n                                    params: params,\n                                    success: success,\n                                    error: error\n                                });\n                            } else {\n                                obj.notify({\n                                    method: m,\n                                    params: params\n                                });\n                            }\n                        };\n                    }(method);\n                }\n            }\n\n            // Dynamic publish from remote\n            var onBind = function(trans, method) {\n                createStubs([method], obj.remote);\n            };\n\n            // Dynamic unpublish from remote\n            var onUnbind = function(trans, method) {\n                if (obj.remote[method]) {\n                    delete obj.remote[method];\n                }\n            };\n\n            var obj = {\n\n                remote: {},\n\n                // tries to unbind a bound message handler.  returns false if not possible\n                unbind: function (method, doNotPublish) {\n                    if (regTbl[method]) {\n                        if (!(delete regTbl[method])) throw (\"can't delete method: \" + method);\n                        if (cfg.publish && ! doNotPublish) {\n                            if (ready) {\n                                obj.notify({ method: '__unbind', params: method });\n                            } else {\n                                publishQueue.push({ action: 'unbind', method: method });\n                            }\n                        }\n                        return true;\n                    }\n                    return false;\n                },\n                bind: function (method, cb, doNotPublish) {\n                    if (!method || typeof method !== 'string') throw \"'method' argument to bind must be string\";\n                    if (!cb || typeof cb !== 'function') throw \"callback missing from bind params\";\n\n                    if (regTbl[method]) throw \"method '\"+method+\"' is already bound!\";\n                    regTbl[method] = cb;\n                    if (cfg.publish && ! doNotPublish) {\n                        if (ready) {\n                            obj.notify({ method: '__bind', params: method });\n                        } else {\n                            publishQueue.push({ action: 'bind', method: method });\n                        }\n                    }\n                    return this;\n                },\n                call: function(m) {\n                    if (!m) throw 'missing arguments to call function';\n                    if (!m.method || typeof m.method !== 'string') throw \"'method' argument to call must be string\";\n                    if (!m.success || typeof m.success !== 'function') throw \"'success' callback missing from call\";\n\n                    // now it's time to support the 'callback' feature of jschannel.  We'll traverse the argument\n                    // object and pick out all of the functions that were passed as arguments.\n                    var callbacks = { };\n                    var callbackNames = [ ];\n                    var seen = [ ];\n\n                    var pruneFunctions = function (path, obj) {\n                        if (seen.indexOf(obj) >= 0) {\n                            throw \"params cannot be a recursive data structure\"\n                        }\n                        if(obj) {\n                            seen.push(obj);\n                        }\n\n                        if (typeof obj === 'object') {\n                            for (var k in obj) {\n                                if (!obj.hasOwnProperty(k)) continue;\n                                var np = path + (path.length ? '/' : '') + k;\n                                if (typeof obj[k] === 'function') {\n                                    callbacks[np] = obj[k];\n                                    callbackNames.push(np);\n                                    delete obj[k];\n                                } else if (typeof obj[k] === 'object') {\n                                    pruneFunctions(np, obj[k]);\n                                }\n                            }\n                        }\n                    };\n                    pruneFunctions(\"\", m.params);\n\n                    // build a 'request' message and send it\n                    var msg = { id: s_curTranId, method: scopeMethod(m.method), params: m.params };\n                    if (callbackNames.length) msg.callbacks = callbackNames;\n\n                    if (m.timeout)\n                      // XXX: This function returns a timeout ID, but we don't do anything with it.\n                      // We might want to keep track of it so we can cancel it using clearTimeout()\n                      // when the transaction completes.\n                      setTransactionTimeout(s_curTranId, m.timeout, scopeMethod(m.method));\n\n                    // insert into the transaction table\n                    outTbl[s_curTranId] = { callbacks: callbacks, error: m.error, success: m.success };\n                    s_transIds[s_curTranId] = onMessage;\n\n                    // increment current id\n                    s_curTranId++;\n\n                    postMessage(msg);\n                },\n                notify: function(m) {\n                    if (!m) throw 'missing arguments to notify function';\n                    if (!m.method || typeof m.method !== 'string') throw \"'method' argument to notify must be string\";\n\n                    // no need to go into any transaction table\n                    postMessage({ method: scopeMethod(m.method), params: m.params });\n                },\n                destroy: function () {\n                    s_removeBoundChan(cfg.window, cfg.origin, cfg.scope);\n                    if (window.removeEventListener) window.removeEventListener('message', onMessage, false);\n                    else if(window.detachEvent) window.detachEvent('onmessage', onMessage);\n                    ready = false;\n                    regTbl = { };\n                    inTbl = { };\n                    outTbl = { };\n                    cfg.origin = null;\n                    pendingQueue = [ ];\n                    debug(\"channel destroyed\");\n                    chanId = \"\";\n                }\n            };\n\n            obj.bind('__ready', onReady, true);\n            obj.bind('__bind', onBind, true);\n            obj.bind('__unbind', onUnbind, true);\n            if (cfg.remote) {\n                createStubs(cfg.remote, obj.remote);\n            }\n            setTimeout(function() {\n                if (chanId.length > 0) { // The channel might already have been destroyed\n                    postMessage({ method: scopeMethod('__ready'), params: {\n                        type: \"publish-request\",\n                        publish: publishQueue\n                    } }, true);\n                }\n\n            }, 0);\n\n            return obj;\n        }\n    };\n  })();\n\n\n  return Channel;\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvanNjaGFubmVsL3NyYy9qc2NoYW5uZWwuanM/ZTg4MyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTSxJQUEyQjtBQUNqQztBQUNBO0FBQ0EsR0FBRyxNQUFNLEVBUU47QUFDSCxDQUFDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qjs7QUFFeEI7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGdCQUFnQjtBQUMzQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNkVBQTZFO0FBQzdFO0FBQ0EsMENBQTBDLDJCQUEyQjtBQUNyRTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCLGdCQUFnQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjs7QUFFdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsK0JBQStCO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0JBQStCLGlDQUFpQztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RDtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixPQUFPO0FBQ25DO0FBQ0EsYUFBYTs7QUFFYjtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsc0JBQXNCLG9DQUFvQyxjQUFjLE9BQU87QUFDdEg7O0FBRUE7QUFDQSxxQ0FBcUMscUNBQXFDO0FBQzFFLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EscUNBQXFDLHlDQUF5QztBQUM5RSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsb0JBQW9CO0FBQ3pELHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0Msd0JBQXdCO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCwwQkFBMEI7QUFDN0U7QUFDQSxvRkFBb0Y7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLE9BQU87QUFDNUI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsaUJBQWlCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQSxxQkFBcUIsRUFBRTtBQUN2Qjs7QUFFQSwrQkFBK0IsMkJBQTJCO0FBQzFEO0FBQ0E7QUFDQSxxQkFBcUIsT0FBTztBQUM1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLCtDQUErQztBQUMvQztBQUNBLDRCQUE0QixxQkFBcUI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSwwQkFBMEI7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxxQ0FBcUM7QUFDakYsNkJBQTZCO0FBQzdCLG1EQUFtRCxtQ0FBbUM7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsbUNBQW1DO0FBQzNFLHlCQUF5QjtBQUN6QiwrQ0FBK0MsaUNBQWlDO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQkFBK0I7QUFDL0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJDQUEyQztBQUMzQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlDQUFpQyxrREFBa0Q7QUFDbkYsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUIsNkJBQTZCO0FBQzdCLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEMsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQSxxQkFBcUIsRUFBRTtBQUN2Qjs7QUFFQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0EsQ0FBQyIsImZpbGUiOiIyNS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBqc19jaGFubmVsIGlzIGEgdmVyeSBsaWdodHdlaWdodCBhYnN0cmFjdGlvbiBvbiB0b3Agb2ZcbiAqIHBvc3RNZXNzYWdlIHdoaWNoIGRlZmluZXMgbWVzc2FnZSBmb3JtYXRzIGFuZCBzZW1hbnRpY3NcbiAqIHRvIHN1cHBvcnQgaW50ZXJhY3Rpb25zIG1vcmUgcmljaCB0aGFuIGp1c3QgbWVzc2FnZSBwYXNzaW5nXG4gKiBqc19jaGFubmVsIHN1cHBvcnRzOlxuICogICsgcXVlcnkvcmVzcG9uc2UgLSB0cmFkaXRpb25hbCBycGNcbiAqICArIHF1ZXJ5L3VwZGF0ZS9yZXNwb25zZSAtIGluY3JlbWVudGFsIGFzeW5jIHJldHVybiBvZiByZXN1bHRzXG4gKiAgICB0byBhIHF1ZXJ5XG4gKiAgKyBub3RpZmljYXRpb25zIC0gZmlyZSBhbmQgZm9yZ2V0XG4gKiAgKyBlcnJvciBoYW5kbGluZ1xuICpcbiAqIGpzX2NoYW5uZWwgaXMgYmFzZWQgaGVhdmlseSBvbiBqc29uLXJwYywgYnV0IGlzIGZvY3VzZWQgYXQgdGhlXG4gKiBwcm9ibGVtIG9mIGludGVyLWlmcmFtZSBSUEMuXG4gKlxuICogTWVzc2FnZSB0eXBlczpcbiAqICBUaGVyZSBhcmUgNSB0eXBlcyBvZiBtZXNzYWdlcyB0aGF0IGNhbiBmbG93IG92ZXIgdGhpcyBjaGFubmVsLFxuICogIGFuZCB5b3UgbWF5IGRldGVybWluZSB3aGF0IHR5cGUgb2YgbWVzc2FnZSBhbiBvYmplY3QgaXMgYnlcbiAqICBleGFtaW5pbmcgaXRzIHBhcmFtZXRlcnM6XG4gKiAgMS4gUmVxdWVzdHNcbiAqICAgICsgaW50ZWdlciBpZFxuICogICAgKyBzdHJpbmcgbWV0aG9kXG4gKiAgICArIChvcHRpb25hbCkgYW55IHBhcmFtc1xuICogIDIuIENhbGxiYWNrIEludm9jYXRpb25zIChvciBqdXN0IFwiQ2FsbGJhY2tzXCIpXG4gKiAgICArIGludGVnZXIgaWRcbiAqICAgICsgc3RyaW5nIGNhbGxiYWNrXG4gKiAgICArIChvcHRpb25hbCkgcGFyYW1zXG4gKiAgMy4gRXJyb3IgUmVzcG9uc2VzIChvciBqdXN0IFwiRXJyb3JzKVxuICogICAgKyBpbnRlZ2VyIGlkXG4gKiAgICArIHN0cmluZyBlcnJvclxuICogICAgKyAob3B0aW9uYWwpIHN0cmluZyBtZXNzYWdlXG4gKiAgNC4gUmVzcG9uc2VzXG4gKiAgICArIGludGVnZXIgaWRcbiAqICAgICsgKG9wdGlvbmFsKSBhbnkgcmVzdWx0XG4gKiAgNS4gTm90aWZpY2F0aW9uc1xuICogICAgKyBzdHJpbmcgbWV0aG9kXG4gKiAgICArIChvcHRpb25hbCkgYW55IHBhcmFtc1xuICovXG5cbi8vIFVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvbiAvL1xuKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcbiAgICAvLyBDb21tb25KU1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIC8vIEFNRFxuICAgIGRlZmluZShbXSwgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIChyb290LkNoYW5uZWwgPSBmYWN0b3J5KCkpO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIC8vIEdsb2JhbCBWYXJpYWJsZXNcbiAgICByb290LkNoYW5uZWwgPSBmYWN0b3J5KCk7XG4gIH1cbn0odGhpcywgZnVuY3Rpb24gKCkge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgdmFyIENoYW5uZWwgPSAoZnVuY3Rpb24oKSB7XG5cbiAgICAvLyBjdXJyZW50IHRyYW5zYWN0aW9uIGlkLCBzdGFydCBvdXQgYXQgYSByYW5kb20gKm9kZCogbnVtYmVyIGJldHdlZW4gMSBhbmQgYSBtaWxsaW9uXG4gICAgLy8gVGhlcmUgaXMgb25lIGN1cnJlbnQgdHJhbnNhY3Rpb24gY291bnRlciBpZCBwZXIgcGFnZSwgYW5kIGl0J3Mgc2hhcmVkIGJldHdlZW5cbiAgICAvLyBjaGFubmVsIGluc3RhbmNlcy4gIFRoYXQgbWVhbnMgb2YgYWxsIG1lc3NhZ2VzIHBvc3RlZCBmcm9tIGEgc2luZ2xlIGphdmFzY3JpcHRcbiAgICAvLyBldmFsdWF0aW9uIGNvbnRleHQsIHdlJ2xsIG5ldmVyIGhhdmUgdHdvIHdpdGggdGhlIHNhbWUgaWQuXG4gICAgdmFyIHNfY3VyVHJhbklkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjEwMDAwMDEpO1xuXG4gICAgLy8gbm8gdHdvIGJvdW5kIGNoYW5uZWxzIGluIHRoZSBzYW1lIGphdmFzY3JpcHQgZXZhbHVhdGlvbiBjb250ZXh0IG1heSBoYXZlIHRoZSBzYW1lIG9yaWdpbiwgc2NvcGUsIGFuZCB3aW5kb3cuXG4gICAgLy8gZnVydGhlciBpZiB0d28gYm91bmQgY2hhbm5lbHMgaGF2ZSB0aGUgc2FtZSB3aW5kb3cgYW5kIHNjb3BlLCB0aGV5IG1heSBub3QgaGF2ZSAqb3ZlcmxhcHBpbmcqIG9yaWdpbnNcbiAgICAvLyAoZWl0aGVyIG9uZSBvciBib3RoIHN1cHBvcnQgJyonKS4gIFRoaXMgcmVzdHJpY3Rpb24gYWxsb3dzIGEgc2luZ2xlIG9uTWVzc2FnZSBoYW5kbGVyIHRvIGVmZmljaWVudGx5XG4gICAgLy8gcm91dGUgbWVzc2FnZXMgYmFzZWQgb24gb3JpZ2luIGFuZCBzY29wZS4gIFRoZSBzX2JvdW5kQ2hhbnMgbWFwcyBvcmlnaW5zIHRvIHNjb3BlcywgdG8gbWVzc2FnZVxuICAgIC8vIGhhbmRsZXJzLiAgUmVxdWVzdCBhbmQgTm90aWZpY2F0aW9uIG1lc3NhZ2VzIGFyZSByb3V0ZWQgdXNpbmcgdGhpcyB0YWJsZS5cbiAgICAvLyBGaW5hbGx5LCBjaGFubmVscyBhcmUgaW5zZXJ0ZWQgaW50byB0aGlzIHRhYmxlIHdoZW4gYnVpbHQsIGFuZCByZW1vdmVkIHdoZW4gZGVzdHJveWVkLlxuICAgIHZhciBzX2JvdW5kQ2hhbnMgPSB7IH07XG5cbiAgICAvLyBhZGQgYSBjaGFubmVsIHRvIHNfYm91bmRDaGFucywgdGhyb3dpbmcgaWYgYSBkdXAgZXhpc3RzXG4gICAgZnVuY3Rpb24gc19hZGRCb3VuZENoYW4od2luLCBvcmlnaW4sIHNjb3BlLCBoYW5kbGVyKSB7XG4gICAgICAgIGZ1bmN0aW9uIGhhc1dpbihhcnIpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSBpZiAoYXJyW2ldLndpbiA9PT0gd2luKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGRvZXMgc2hlIGV4aXN0P1xuICAgICAgICB2YXIgZXhpc3RzID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKG9yaWdpbiA9PT0gJyonKSB7XG4gICAgICAgICAgICAvLyB3ZSBtdXN0IGNoZWNrIGFsbCBvdGhlciBvcmlnaW5zLCBzYWRseS5cbiAgICAgICAgICAgIGZvciAodmFyIGsgaW4gc19ib3VuZENoYW5zKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFzX2JvdW5kQ2hhbnMuaGFzT3duUHJvcGVydHkoaykpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGlmIChrID09PSAnKicpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygc19ib3VuZENoYW5zW2tdW3Njb3BlXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZXhpc3RzID0gaGFzV2luKHNfYm91bmRDaGFuc1trXVtzY29wZV0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXhpc3RzKSBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyB3ZSBtdXN0IGNoZWNrIG9ubHkgJyonXG4gICAgICAgICAgICBpZiAoKHNfYm91bmRDaGFuc1snKiddICYmIHNfYm91bmRDaGFuc1snKiddW3Njb3BlXSkpIHtcbiAgICAgICAgICAgICAgICBleGlzdHMgPSBoYXNXaW4oc19ib3VuZENoYW5zWycqJ11bc2NvcGVdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghZXhpc3RzICYmIHNfYm91bmRDaGFuc1tvcmlnaW5dICYmIHNfYm91bmRDaGFuc1tvcmlnaW5dW3Njb3BlXSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBleGlzdHMgPSBoYXNXaW4oc19ib3VuZENoYW5zW29yaWdpbl1bc2NvcGVdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZXhpc3RzKSB0aHJvdyBcIkEgY2hhbm5lbCBpcyBhbHJlYWR5IGJvdW5kIHRvIHRoZSBzYW1lIHdpbmRvdyB3aGljaCBvdmVybGFwcyB3aXRoIG9yaWdpbiAnXCIrIG9yaWdpbiArXCInIGFuZCBoYXMgc2NvcGUgJ1wiK3Njb3BlK1wiJ1wiO1xuXG4gICAgICAgIGlmICh0eXBlb2Ygc19ib3VuZENoYW5zW29yaWdpbl0gIT0gJ29iamVjdCcpIHNfYm91bmRDaGFuc1tvcmlnaW5dID0geyB9O1xuICAgICAgICBpZiAodHlwZW9mIHNfYm91bmRDaGFuc1tvcmlnaW5dW3Njb3BlXSAhPSAnb2JqZWN0Jykgc19ib3VuZENoYW5zW29yaWdpbl1bc2NvcGVdID0gWyBdO1xuICAgICAgICBzX2JvdW5kQ2hhbnNbb3JpZ2luXVtzY29wZV0ucHVzaCh7d2luOiB3aW4sIGhhbmRsZXI6IGhhbmRsZXJ9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzX3JlbW92ZUJvdW5kQ2hhbih3aW4sIG9yaWdpbiwgc2NvcGUpIHtcbiAgICAgICAgdmFyIGFyciA9IHNfYm91bmRDaGFuc1tvcmlnaW5dW3Njb3BlXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChhcnJbaV0ud2luID09PSB3aW4pIHtcbiAgICAgICAgICAgICAgICBhcnIuc3BsaWNlKGksMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNfYm91bmRDaGFuc1tvcmlnaW5dW3Njb3BlXS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGRlbGV0ZSBzX2JvdW5kQ2hhbnNbb3JpZ2luXVtzY29wZV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzX2lzQXJyYXkob2JqKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KSByZXR1cm4gQXJyYXkuaXNBcnJheShvYmopO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAob2JqLmNvbnN0cnVjdG9yLnRvU3RyaW5nKCkuaW5kZXhPZihcIkFycmF5XCIpICE9IC0xKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIE5vIHR3byBvdXRzdGFuZGluZyBvdXRib3VuZCBtZXNzYWdlcyBtYXkgaGF2ZSB0aGUgc2FtZSBpZCwgcGVyaW9kLiAgR2l2ZW4gdGhhdCwgYSBzaW5nbGUgdGFibGVcbiAgICAvLyBtYXBwaW5nIFwidHJhbnNhY3Rpb24gaWRzXCIgdG8gbWVzc2FnZSBoYW5kbGVycywgYWxsb3dzIGVmZmljaWVudCByb3V0aW5nIG9mIENhbGxiYWNrLCBFcnJvciwgYW5kXG4gICAgLy8gUmVzcG9uc2UgbWVzc2FnZXMuICBFbnRyaWVzIGFyZSBhZGRlZCB0byB0aGlzIHRhYmxlIHdoZW4gcmVxdWVzdHMgYXJlIHNlbnQsIGFuZCByZW1vdmVkIHdoZW5cbiAgICAvLyByZXNwb25zZXMgYXJlIHJlY2VpdmVkLlxuICAgIHZhciBzX3RyYW5zSWRzID0geyB9O1xuXG4gICAgLy8gY2xhc3Mgc2luZ2xldG9uIG9uTWVzc2FnZSBoYW5kbGVyXG4gICAgLy8gdGhpcyBmdW5jdGlvbiBpcyByZWdpc3RlcmVkIG9uY2UgYW5kIGFsbCBpbmNvbWluZyBtZXNzYWdlcyByb3V0ZSB0aHJvdWdoIGhlcmUuICBUaGlzXG4gICAgLy8gYXJyYW5nZW1lbnQgYWxsb3dzIGNlcnRhaW4gZWZmaWNpZW5jaWVzLCBtZXNzYWdlIGRhdGEgaXMgb25seSBwYXJzZWQgb25jZSBhbmQgZGlzcGF0Y2hcbiAgICAvLyBpcyBtb3JlIGVmZmljaWVudCwgZXNwZWNpYWxseSBmb3IgbGFyZ2UgbnVtYmVycyBvZiBzaW11bHRhbmVvdXMgY2hhbm5lbHMuXG4gICAgdmFyIHNfb25NZXNzYWdlID0gZnVuY3Rpb24oZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHZhciBtID0gSlNPTi5wYXJzZShlLmRhdGEpO1xuICAgICAgICAgIGlmICh0eXBlb2YgbSAhPT0gJ29iamVjdCcgfHwgbSA9PT0gbnVsbCkgdGhyb3cgXCJtYWxmb3JtZWRcIjtcbiAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgLy8ganVzdCBpZ25vcmUgYW55IHBvc3RlZCBtZXNzYWdlcyB0aGF0IGRvIG5vdCBjb25zaXN0IG9mIHZhbGlkIEpTT05cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdyA9IGUuc291cmNlO1xuICAgICAgICB2YXIgbyA9IGUub3JpZ2luO1xuICAgICAgICB2YXIgcywgaSwgbWV0aDtcblxuICAgICAgICBpZiAodHlwZW9mIG0ubWV0aG9kID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdmFyIGFyID0gbS5tZXRob2Quc3BsaXQoJzo6Jyk7XG4gICAgICAgICAgICBpZiAoYXIubGVuZ3RoID09IDIpIHtcbiAgICAgICAgICAgICAgICBzID0gYXJbMF07XG4gICAgICAgICAgICAgICAgbWV0aCA9IGFyWzFdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtZXRoID0gbS5tZXRob2Q7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIG0uaWQgIT09ICd1bmRlZmluZWQnKSBpID0gbS5pZDtcblxuICAgICAgICAvLyB3IGlzIG1lc3NhZ2Ugc291cmNlIHdpbmRvd1xuICAgICAgICAvLyBvIGlzIG1lc3NhZ2Ugb3JpZ2luXG4gICAgICAgIC8vIG0gaXMgcGFyc2VkIG1lc3NhZ2VcbiAgICAgICAgLy8gcyBpcyBtZXNzYWdlIHNjb3BlXG4gICAgICAgIC8vIGkgaXMgbWVzc2FnZSBpZCAob3IgdW5kZWZpbmVkKVxuICAgICAgICAvLyBtZXRoIGlzIHVuc2NvcGVkIG1ldGhvZCBuYW1lXG4gICAgICAgIC8vIF5eIGJhc2VkIG9uIHRoZXNlIGZhY3RvcnMgd2UgY2FuIHJvdXRlIHRoZSBtZXNzYWdlXG5cbiAgICAgICAgLy8gaWYgaXQgaGFzIGEgbWV0aG9kIGl0J3MgZWl0aGVyIGEgbm90aWZpY2F0aW9uIG9yIGEgcmVxdWVzdCxcbiAgICAgICAgLy8gcm91dGUgdXNpbmcgc19ib3VuZENoYW5zXG4gICAgICAgIGlmICh0eXBlb2YgbWV0aCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHZhciBkZWxpdmVyZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmIChzX2JvdW5kQ2hhbnNbb10gJiYgc19ib3VuZENoYW5zW29dW3NdKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBzX2JvdW5kQ2hhbnNbb11bc10ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNfYm91bmRDaGFuc1tvXVtzXVtqXS53aW4gPT09IHcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNfYm91bmRDaGFuc1tvXVtzXVtqXS5oYW5kbGVyKG8sIG1ldGgsIG0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsaXZlcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWRlbGl2ZXJlZCAmJiBzX2JvdW5kQ2hhbnNbJyonXSAmJiBzX2JvdW5kQ2hhbnNbJyonXVtzXSkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgc19ib3VuZENoYW5zWycqJ11bc10ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNfYm91bmRDaGFuc1snKiddW3NdW2pdLndpbiA9PT0gdykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc19ib3VuZENoYW5zWycqJ11bc11bal0uaGFuZGxlcihvLCBtZXRoLCBtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIG90aGVyd2lzZSBpdCBtdXN0IGhhdmUgYW4gaWQgKG9yIGJlIHBvb3JseSBmb3JtZWRcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGkgIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGlmIChzX3RyYW5zSWRzW2ldKSBzX3RyYW5zSWRzW2ldKG8sIG1ldGgsIG0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIFNldHVwIHBvc3RNZXNzYWdlIGV2ZW50IGxpc3RlbmVyc1xuICAgIGlmICh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcikgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBzX29uTWVzc2FnZSwgZmFsc2UpO1xuICAgIGVsc2UgaWYod2luZG93LmF0dGFjaEV2ZW50KSB3aW5kb3cuYXR0YWNoRXZlbnQoJ29ubWVzc2FnZScsIHNfb25NZXNzYWdlKTtcblxuICAgIC8qIGEgbWVzc2FnaW5nIGNoYW5uZWwgaXMgY29uc3RydWN0ZWQgZnJvbSBhIHdpbmRvdyBhbmQgYW4gb3JpZ2luLlxuICAgICAqIHRoZSBjaGFubmVsIHdpbGwgYXNzZXJ0IHRoYXQgYWxsIG1lc3NhZ2VzIHJlY2VpdmVkIG92ZXIgdGhlXG4gICAgICogY2hhbm5lbCBtYXRjaCB0aGUgb3JpZ2luXG4gICAgICpcbiAgICAgKiBBcmd1bWVudHMgdG8gQ2hhbm5lbC5idWlsZChjZmcpOlxuICAgICAqXG4gICAgICogICBjZmcud2luZG93IC0gdGhlIHJlbW90ZSB3aW5kb3cgd2l0aCB3aGljaCB3ZSdsbCBjb21tdW5pY2F0ZVxuICAgICAqICAgY2ZnLm9yaWdpbiAtIHRoZSBleHBlY3RlZCBvcmlnaW4gb2YgdGhlIHJlbW90ZSB3aW5kb3csIG1heSBiZSAnKidcbiAgICAgKiAgICAgICAgICAgICAgICB3aGljaCBtYXRjaGVzIGFueSBvcmlnaW5cbiAgICAgKiAgIGNmZy5zY29wZSAgLSB0aGUgJ3Njb3BlJyBvZiBtZXNzYWdlcy4gIGEgc2NvcGUgc3RyaW5nIHRoYXQgaXNcbiAgICAgKiAgICAgICAgICAgICAgICBwcmVwZW5kZWQgdG8gbWVzc2FnZSBuYW1lcy4gIGxvY2FsIGFuZCByZW1vdGUgZW5kcG9pbnRzXG4gICAgICogICAgICAgICAgICAgICAgb2YgYSBzaW5nbGUgY2hhbm5lbCBtdXN0IGFncmVlIHVwb24gc2NvcGUuIFNjb3BlIG1heVxuICAgICAqICAgICAgICAgICAgICAgIG5vdCBjb250YWluIGRvdWJsZSBjb2xvbnMgKCc6OicpLlxuICAgICAqICAgY2ZnLmRlYnVnT3V0cHV0IC0gQSBib29sZWFuIHZhbHVlLiAgSWYgdHJ1ZSBhbmQgd2luZG93LmNvbnNvbGUubG9nIGlzXG4gICAgICogICAgICAgICAgICAgICAgYSBmdW5jdGlvbiwgdGhlbiBkZWJ1ZyBzdHJpbmdzIHdpbGwgYmUgZW1pdHRlZCB0byB0aGF0XG4gICAgICogICAgICAgICAgICAgICAgZnVuY3Rpb24uXG4gICAgICogICBjZmcucG9zdE1lc3NhZ2VPYnNlcnZlciAtIEEgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIHBhc3NlZCB0d28gYXJndW1lbnRzLFxuICAgICAqICAgICAgICAgICAgICAgIGFuIG9yaWdpbiBhbmQgYSBtZXNzYWdlLiAgSXQgd2lsbCBiZSBwYXNzZWQgdGhlc2UgaW1tZWRpYXRlbHlcbiAgICAgKiAgICAgICAgICAgICAgICBiZWZvcmUgbWVzc2FnZXMgYXJlIHBvc3RlZC5cbiAgICAgKiAgIGNmZy5nb3RNZXNzYWdlT2JzZXJ2ZXIgLSBBIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBwYXNzZWQgdHdvIGFyZ3VtZW50cyxcbiAgICAgKiAgICAgICAgICAgICAgICBhbiBvcmlnaW4gYW5kIGEgbWVzc2FnZS4gIEl0IHdpbGwgYmUgcGFzc2VkIHRoZXNlIGFyZ3VtZW50c1xuICAgICAqICAgICAgICAgICAgICAgIGltbWVkaWF0ZWx5IGFmdGVyIHRoZXkgcGFzcyBzY29wZSBhbmQgb3JpZ2luIGNoZWNrcywgYnV0IGJlZm9yZVxuICAgICAqICAgICAgICAgICAgICAgIHRoZXkgYXJlIHByb2Nlc3NlZC5cbiAgICAgKiAgIGNmZy5vblJlYWR5IC0gQSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgaW52b2tlZCB3aGVuIGEgY2hhbm5lbCBiZWNvbWVzIFwicmVhZHlcIixcbiAgICAgKiAgICAgICAgICAgICAgICB0aGlzIG9jY3VycyBvbmNlIGJvdGggc2lkZXMgb2YgdGhlIGNoYW5uZWwgaGF2ZSBiZWVuXG4gICAgICogICAgICAgICAgICAgICAgaW5zdGFudGlhdGVkIGFuZCBhbiBhcHBsaWNhdGlvbiBsZXZlbCBoYW5kc2hha2UgaXMgZXhjaGFuZ2VkLlxuICAgICAqICAgICAgICAgICAgICAgIHRoZSBvblJlYWR5IGZ1bmN0aW9uIHdpbGwgYmUgcGFzc2VkIGEgc2luZ2xlIGFyZ3VtZW50IHdoaWNoIGlzXG4gICAgICogICAgICAgICAgICAgICAgdGhlIGNoYW5uZWwgb2JqZWN0IHRoYXQgd2FzIHJldHVybmVkIGZyb20gYnVpbGQoKS5cbiAgICAgKiAgIGNmZy5yZWNvbm5lY3QgLSBBIGJvb2xlYW4gdmFsdWUgLSBpZiB0cnVlLCB0aGUgY2hhbm5lbCBhbGxvd3MgcmVjb25uZWN0aW9uXG4gICAgICogICAgICAgICAgICAgICAgdXNlZnVsIHdoZW4gdGhlIHBhZ2UgaW4gYSBjaGlsZCBmcmFtZSBpcyByZWxvYWRlZCBhbmQgd2FudHNcbiAgICAgKiAgICAgICAgICAgICAgICB0byByZS1lc3RhYmxpc2ggY29ubmVjdGlvbiB3aXRoIHBhcmVudCB3aW5kb3cgdXNpbmcgdGhlIHNhbWVcbiAgICAgKiAgICAgICAgICAgICAgICBvcmlnaW4sIHNjb3BlIGFuZCBiaW5kaW5ncy5cbiAgICAgKiAgIGNmZy5wdWJsaXNoIC0gQSBib29sZWFuIHZhbHVlLiBJZiB0cnVlLCBiaW5kIHdpbGwgYXV0b21hdGljYWxseSBwdWJsaXNoXG4gICAgICogICAgICAgICAgICAgICAgdGhlIG1ldGhvZCBvbiB0aGUgcmVtb3RlIHNpZGUuIFRoZSBtZXRob2Qgd2lsbCBiZSBwdWJsaXNoZWQgdW5kZXJcbiAgICAgKiAgICAgICAgICAgICAgICBjaGFubmVsT2JqZWN0LnJlbW90ZSwgYnV0IGl0IHdpbGwgbm90IGJlIGF2YWlsYWJsZSBiZWZvcmUgdGhlIG9uUmVhZHlcbiAgICAgKiAgICAgICAgICAgICAgICBjYWxsYmFjayBpcyBjYWxsZWQgb24gdGhlIG90aGVyIHNpZGUuXG4gICAgICogICBjZmcucmVtb3RlIC0gQW4gYXJyYXkgb2YgbWV0aG9kIG5hbWVzIGZvciB3aGljaCBzdHVicyBzaG91bGQgYmUgZ2VuZXJhdGVkIHdpdGhvdXRcbiAgICAgKiAgICAgICAgICAgICAgICB3YWl0aW5nIGZvciByZW1vdGUgZW5kIHRvIHB1Ymxpc2ggdGhlbS4gQSBzdHJpbmcgKGZvciBhIHNpbmdsZSBtZXRob2QgbmFtZSlcbiAgICAgKiAgICAgICAgICAgICAgICBpcyBhbHNvIGFjY2VwdGVkLiBUaGlzIGFsbG93cyBtZXRob2RzIHVuZGVyIGNoYW5uZWxPYmplY3QucmVtb3RlIHRvIGJlIGNhbGxlZFxuICAgICAqICAgICAgICAgICAgICAgIGFsc28gYmVmb3JlIG9uUmVhZHkgY2FsbGJhY2sgaXMgY2FsbGVkOyB0aGUgaW52b2NhdGlvbnMgd2lsbCBiZSBxdWV1ZWQgdW50aWxcbiAgICAgKiAgICAgICAgICAgICAgICB0aGUgY2hhbm5lbCBpcyByZWFkeS4gSWYgdGhlIG1ldGhvZHMgZG8gbm90IGV4aXN0IG9uIHJlbW90ZSBzaWRlLCB0aGVcbiAgICAgKiAgICAgICAgICAgICAgICBlcnJvciBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZC5cbiAgICAgKi9cbiAgICByZXR1cm4ge1xuICAgICAgICBidWlsZDogZnVuY3Rpb24oY2ZnKSB7XG4gICAgICAgICAgICB2YXIgZGVidWcgPSBmdW5jdGlvbihtKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNmZy5kZWJ1Z091dHB1dCAmJiB3aW5kb3cuY29uc29sZSAmJiB3aW5kb3cuY29uc29sZS5sb2cpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdHJ5IHRvIHN0cmluZ2lmeSwgaWYgaXQgZG9lc24ndCB3b3JrIHdlJ2xsIGxldCBqYXZhc2NyaXB0J3MgYnVpbHQgaW4gdG9TdHJpbmcgZG8gaXRzIG1hZ2ljXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG0gIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbSA9IEpTT04uc3RyaW5naWZ5KG0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuY29uc29sZS5sb2coXCJbXCIrY2hhbklkK1wiXSBcIiArIG0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8qIGJyb3dzZXIgY2FwYWJpbGl0aWVzIGNoZWNrICovXG4gICAgICAgICAgICBpZiAoIXdpbmRvdy5wb3N0TWVzc2FnZSkgdGhyb3coXCJqc2NoYW5uZWwgY2Fubm90IHJ1biB0aGlzIGJyb3dzZXIsIG5vIHBvc3RNZXNzYWdlXCIpO1xuICAgICAgICAgICAgaWYgKCF3aW5kb3cuSlNPTiB8fCAhd2luZG93LkpTT04uc3RyaW5naWZ5IHx8ICEgd2luZG93LkpTT04ucGFyc2UpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyhcImpzY2hhbm5lbCBjYW5ub3QgcnVuIHRoaXMgYnJvd3Nlciwgbm8gSlNPTiBwYXJzaW5nL3NlcmlhbGl6YXRpb25cIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qIGJhc2ljIGFyZ3VtZW50IHZhbGlkYXRpb24gKi9cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2ZnICE9ICdvYmplY3QnKSB0aHJvdyhcIkNoYW5uZWwgYnVpbGQgaW52b2tlZCB3aXRob3V0IGEgcHJvcGVyIG9iamVjdCBhcmd1bWVudFwiKTtcblxuICAgICAgICAgICAgaWYgKCFjZmcud2luZG93IHx8ICFjZmcud2luZG93LnBvc3RNZXNzYWdlKSB0aHJvdyhcIkNoYW5uZWwuYnVpbGQoKSBjYWxsZWQgd2l0aG91dCBhIHZhbGlkIHdpbmRvdyBhcmd1bWVudFwiKTtcblxuICAgICAgICAgICAgLyogd2UnZCBoYXZlIHRvIGRvIGEgbGl0dGxlIG1vcmUgd29yayB0byBiZSBhYmxlIHRvIHJ1biBtdWx0aXBsZSBjaGFubmVscyB0aGF0IGludGVyY29tbXVuaWNhdGUgdGhlIHNhbWVcbiAgICAgICAgICAgICAqIHdpbmRvdy4uLiAgTm90IHN1cmUgaWYgd2UgY2FyZSB0byBzdXBwb3J0IHRoYXQgKi9cbiAgICAgICAgICAgIGlmICh3aW5kb3cgPT09IGNmZy53aW5kb3cpIGRlYnVnKFwidGFyZ2V0IHdpbmRvdyBpcyBzYW1lIGFzIHByZXNlbnQgd2luZG93IC0tIHVzZSBhdCB5b3VyIG93biByaXNrXCIpO1xuXG4gICAgICAgICAgICAvLyBsZXQncyByZXF1aXJlIHRoYXQgdGhlIGNsaWVudCBzcGVjaWZ5IGFuIG9yaWdpbi4gIGlmIHdlIGp1c3QgYXNzdW1lICcqJyB3ZSdsbCBiZVxuICAgICAgICAgICAgLy8gcHJvcGFnYXRpbmcgdW5zYWZlIHByYWN0aWNlcy4gIHRoYXQgd291bGQgYmUgbGFtZS5cbiAgICAgICAgICAgIHZhciB2YWxpZE9yaWdpbiA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjZmcub3JpZ2luID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHZhciBvTWF0Y2g7XG4gICAgICAgICAgICAgICAgaWYgKGNmZy5vcmlnaW4gPT09IFwiKlwiKSB2YWxpZE9yaWdpbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgLy8gYWxsb3cgdmFsaWQgZG9tYWlucyB1bmRlciBodHRwIGFuZCBodHRwcy4gIEFsc28sIHRyaW0gcGF0aHMgb2ZmIG90aGVyd2lzZSB2YWxpZCBvcmlnaW5zLlxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG51bGwgIT09IChvTWF0Y2ggPSBjZmcub3JpZ2luLm1hdGNoKC9eaHR0cHM/OlxcL1xcLyg/OlstYS16QS1aMC05X1xcLl0pKyg/OjpcXGQrKT8vKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2ZnLm9yaWdpbiA9IG9NYXRjaFswXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgICAgICB2YWxpZE9yaWdpbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXZhbGlkT3JpZ2luKSB0aHJvdyAoXCJDaGFubmVsLmJ1aWxkKCkgY2FsbGVkIHdpdGggYW4gaW52YWxpZCBvcmlnaW5cIik7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2ZnLnNjb3BlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY2ZnLnNjb3BlICE9PSAnc3RyaW5nJykgdGhyb3cgJ3Njb3BlLCB3aGVuIHNwZWNpZmllZCwgbXVzdCBiZSBhIHN0cmluZyc7XG4gICAgICAgICAgICAgICAgaWYgKGNmZy5zY29wZS5zcGxpdCgnOjonKS5sZW5ndGggPiAxKSB0aHJvdyBcInNjb3BlIG1heSBub3QgY29udGFpbiBkb3VibGUgY29sb25zOiAnOjonXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNmZy5zY29wZSA9IFwiX19kZWZhdWx0XCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qIHByaXZhdGUgdmFyaWFibGVzICovXG4gICAgICAgICAgICAvLyBnZW5lcmF0ZSBhIHJhbmRvbSBhbmQgcHN1ZWRvIHVuaXF1ZSBpZCBmb3IgdGhpcyBjaGFubmVsXG4gICAgICAgICAgICB2YXIgY2hhbklkID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGV4dCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgdmFyIGFscGhhID0gXCJhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ekFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaMDEyMzQ1Njc4OVwiO1xuICAgICAgICAgICAgICAgIGZvcih2YXIgaT0wOyBpIDwgNTsgaSsrKSB0ZXh0ICs9IGFscGhhLmNoYXJBdChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhbHBoYS5sZW5ndGgpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGV4dDtcbiAgICAgICAgICAgIH0pKCk7XG5cbiAgICAgICAgICAgIC8vIHJlZ2lzdHJhdGlvbnM6IG1hcHBpbmcgbWV0aG9kIG5hbWVzIHRvIGNhbGwgb2JqZWN0c1xuICAgICAgICAgICAgdmFyIHJlZ1RibCA9IHsgfTtcbiAgICAgICAgICAgIC8vIGN1cnJlbnQgb3VzdGFuZGluZyBzZW50IHJlcXVlc3RzXG4gICAgICAgICAgICB2YXIgb3V0VGJsID0geyB9O1xuICAgICAgICAgICAgLy8gY3VycmVudCBvdXN0YW5kaW5nIHJlY2VpdmVkIHJlcXVlc3RzXG4gICAgICAgICAgICB2YXIgaW5UYmwgPSB7IH07XG4gICAgICAgICAgICAvLyBhcmUgd2UgcmVhZHkgeWV0PyAgd2hlbiBmYWxzZSB3ZSB3aWxsIGJsb2NrIG91dGJvdW5kIG1lc3NhZ2VzLlxuICAgICAgICAgICAgdmFyIHJlYWR5ID0gZmFsc2U7XG4gICAgICAgICAgICB2YXIgcGVuZGluZ1F1ZXVlID0gWyBdO1xuICAgICAgICAgICAgdmFyIHB1Ymxpc2hRdWV1ZSA9IFsgXTtcblxuICAgICAgICAgICAgdmFyIGNyZWF0ZVRyYW5zYWN0aW9uID0gZnVuY3Rpb24oaWQsb3JpZ2luLGNhbGxiYWNrcykge1xuICAgICAgICAgICAgICAgIHZhciBzaG91bGREZWxheVJldHVybiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHZhciBjb21wbGV0ZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbjogb3JpZ2luLFxuICAgICAgICAgICAgICAgICAgICBpbnZva2U6IGZ1bmN0aW9uKGNiTmFtZSwgdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdmVyaWZ5IGluIHRhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWluVGJsW2lkXSkgdGhyb3cgXCJhdHRlbXB0aW5nIHRvIGludm9rZSBhIGNhbGxiYWNrIG9mIGEgbm9uZXhpc3RlbnQgdHJhbnNhY3Rpb246IFwiICsgaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB2ZXJpZnkgdGhhdCB0aGUgY2FsbGJhY2sgbmFtZSBpcyB2YWxpZFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykgaWYgKGNiTmFtZSA9PT0gY2FsbGJhY2tzW2ldKSB7IHZhbGlkID0gdHJ1ZTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdmFsaWQpIHRocm93IFwicmVxdWVzdCBzdXBwb3J0cyBubyBzdWNoIGNhbGxiYWNrICdcIiArIGNiTmFtZSArIFwiJ1wiO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzZW5kIGNhbGxiYWNrIGludm9jYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RNZXNzYWdlKHsgaWQ6IGlkLCBjYWxsYmFjazogY2JOYW1lLCBwYXJhbXM6IHZ9KTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKGVycm9yLCBtZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdmVyaWZ5IGluIHRhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWluVGJsW2lkXSkgdGhyb3cgXCJlcnJvciBjYWxsZWQgZm9yIG5vbmV4aXN0ZW50IG1lc3NhZ2U6IFwiICsgaWQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSB0cmFuc2FjdGlvbiBmcm9tIHRhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgaW5UYmxbaWRdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzZW5kIGVycm9yXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3N0TWVzc2FnZSh7IGlkOiBpZCwgZXJyb3I6IGVycm9yLCBtZXNzYWdlOiBtZXNzYWdlIH0pO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24odikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHZlcmlmeSBpbiB0YWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpblRibFtpZF0pIHRocm93IFwiY29tcGxldGUgY2FsbGVkIGZvciBub25leGlzdGVudCBtZXNzYWdlOiBcIiArIGlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIHRyYW5zYWN0aW9uIGZyb20gdGFibGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBpblRibFtpZF07XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzZW5kIGNvbXBsZXRlXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3N0TWVzc2FnZSh7IGlkOiBpZCwgcmVzdWx0OiB2IH0pO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBkZWxheVJldHVybjogZnVuY3Rpb24oZGVsYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZGVsYXkgPT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3VsZERlbGF5UmV0dXJuID0gKGRlbGF5ID09PSB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzaG91bGREZWxheVJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGVkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjb21wbGV0ZWQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdmFyIHNldFRyYW5zYWN0aW9uVGltZW91dCA9IGZ1bmN0aW9uKHRyYW5zSWQsIHRpbWVvdXQsIG1ldGhvZCkge1xuICAgICAgICAgICAgICByZXR1cm4gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKG91dFRibFt0cmFuc0lkXSkge1xuICAgICAgICAgICAgICAgICAgLy8gWFhYOiB3aGF0IGlmIGNsaWVudCBjb2RlIHJhaXNlcyBhbiBleGNlcHRpb24gaGVyZT9cbiAgICAgICAgICAgICAgICAgIHZhciBtc2cgPSBcInRpbWVvdXQgKFwiICsgdGltZW91dCArIFwibXMpIGV4Y2VlZGVkIG9uIG1ldGhvZCAnXCIgKyBtZXRob2QgKyBcIidcIjtcbiAgICAgICAgICAgICAgICAgIGlmIChvdXRUYmxbdHJhbnNJZF0uZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICBvdXRUYmxbdHJhbnNJZF0uZXJyb3IoXCJ0aW1lb3V0X2Vycm9yXCIsIG1zZyk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBkZWxldGUgb3V0VGJsW3RyYW5zSWRdO1xuICAgICAgICAgICAgICAgICAgZGVsZXRlIHNfdHJhbnNJZHNbdHJhbnNJZF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LCB0aW1lb3V0KTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHZhciBvbk1lc3NhZ2UgPSBmdW5jdGlvbihvcmlnaW4sIG1ldGhvZCwgbSkge1xuICAgICAgICAgICAgICAgIC8vIGlmIGFuIG9ic2VydmVyIHdhcyBzcGVjaWZpZWQgYXQgYWxsb2NhdGlvbiB0aW1lLCBpbnZva2UgaXRcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNmZy5nb3RNZXNzYWdlT2JzZXJ2ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gcGFzcyBvYnNlcnZlciBhIGNsb25lIG9mIHRoZSBvYmplY3Qgc28gdGhhdCBvdXJcbiAgICAgICAgICAgICAgICAgICAgLy8gbWFuaXB1bGF0aW9ucyBhcmUgbm90IHZpc2libGUgKGkuZS4gbWV0aG9kIHVuc2NvcGluZykuXG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgbm90IHBhcnRpY3VsYXJseSBlZmZpY2llbnQsIGJ1dCB0aGVuIHdlIGV4cGVjdFxuICAgICAgICAgICAgICAgICAgICAvLyB0aGF0IG1lc3NhZ2Ugb2JzZXJ2ZXJzIGFyZSBwcmltYXJpbHkgZm9yIGRlYnVnZ2luZyBhbnl3YXkuXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjZmcuZ290TWVzc2FnZU9ic2VydmVyKG9yaWdpbiwgbSk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlYnVnKFwiZ290TWVzc2FnZU9ic2VydmVyKCkgcmFpc2VkIGFuIGV4Y2VwdGlvbjogXCIgKyBlLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gbm93LCB3aGF0IHR5cGUgb2YgbWVzc2FnZSBpcyB0aGlzP1xuICAgICAgICAgICAgICAgIGlmIChtLmlkICYmIG1ldGhvZCkge1xuICAgICAgICAgICAgICAgICAgICBpblRibFttLmlkXSA9IHsgfTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRyYW5zID0gY3JlYXRlVHJhbnNhY3Rpb24obS5pZCwgb3JpZ2luLCBtLmNhbGxiYWNrcyA/IG0uY2FsbGJhY2tzIDogWyBdKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gYSByZXF1ZXN0ISAgZG8gd2UgaGF2ZSBhIHJlZ2lzdGVyZWQgaGFuZGxlciBmb3IgdGhpcyByZXF1ZXN0P1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVnVGJsW21ldGhvZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2FsbGJhY2sgaGFuZGxpbmcuICB3ZSdsbCBtYWdpY2FsbHkgY3JlYXRlIGZ1bmN0aW9ucyBpbnNpZGUgdGhlIHBhcmFtZXRlciBsaXN0IGZvciBlYWNoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2FsbGJhY2tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobS5jYWxsYmFja3MgJiYgc19pc0FycmF5KG0uY2FsbGJhY2tzKSAmJiBtLmNhbGxiYWNrcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbS5jYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYXRoID0gbS5jYWxsYmFja3NbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb2JqID0gbS5wYXJhbXM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGF0aEl0ZW1zID0gcGF0aC5zcGxpdCgnLycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBwYXRoSXRlbXMubGVuZ3RoIC0gMTsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNwID0gcGF0aEl0ZW1zW2pdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqW2NwXSAhPT0gJ29iamVjdCcpIG9ialtjcF0gPSB7IH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqID0gb2JqW2NwXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ialtwYXRoSXRlbXNbcGF0aEl0ZW1zLmxlbmd0aCAtIDFdXSA9IChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2JOYW1lID0gcGF0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24ocGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cmFucy5pbnZva2UoY2JOYW1lLCBwYXJhbXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXNwID0gcmVnVGJsW21ldGhvZF0odHJhbnMsIG0ucGFyYW1zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRyYW5zLmRlbGF5UmV0dXJuKCkgJiYgIXRyYW5zLmNvbXBsZXRlZCgpKSB0cmFucy5jb21wbGV0ZShyZXNwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGF1dG9tYWdpYyBoYW5kbGluZyBvZiBleGNlcHRpb25zOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlcnJvciA9IFwicnVudGltZV9lcnJvclwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtZXNzYWdlID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAqIGlmIGl0J3MgYSBzdHJpbmcgdGhlbiBpdCBnZXRzIGFuIGVycm9yIGNvZGUgb2YgJ3J1bnRpbWVfZXJyb3InIGFuZCBzdHJpbmcgaXMgdGhlIG1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIGl0J3MgYW4gRXJyb3IgaW5zdGFuY2Ugd2UgdXNlIHRoZSBjb25zdHJ1Y3RvciBuYW1lIHRvIHNldCB0aGUgZXJyb3IgcHJvcGVydHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYW5kIHdlIGp1c3QgY29weSB0aGUgZXJyb3IgbWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9IGUuY29uc3RydWN0b3IubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBlLm1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCBpdCdzIGVpdGhlciBhbiBhcnJheSBvciBhbiBvYmplY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gKiBpZiBpdCdzIGFuIGFycmF5IG9mIGxlbmd0aCB0d28sIHRoZW4gIGFycmF5WzBdIGlzIHRoZSBjb2RlLCBhcnJheVsxXSBpcyB0aGUgZXJyb3IgbWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChlICYmIHNfaXNBcnJheShlKSAmJiBlLmxlbmd0aCA9PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9IGVbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gZVsxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAqIGlmIGl0J3MgYW4gb2JqZWN0IHRoZW4gd2UnbGwgbG9vayBmb3JtIGVycm9yIGFuZCBtZXNzYWdlIHBhcmFtZXRlcnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIGUuZXJyb3IgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9IGUuZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWUubWVzc2FnZSkgbWVzc2FnZSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgZS5tZXNzYWdlID09PSAnc3RyaW5nJykgbWVzc2FnZSA9IGUubWVzc2FnZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgZSA9IGUubWVzc2FnZTsgLy8gbGV0IHRoZSBzdHJpbmdpZnkvdG9TdHJpbmcgbWVzc2FnZSBnaXZlIHVzIGEgcmVhc29uYWJsZSB2ZXJib3NlIGVycm9yIHN0cmluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWVzc2FnZSBpcyAqc3RpbGwqIG51bGwsIGxldCdzIHRyeSBoYXJkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWVzc2FnZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IEpTT04uc3RyaW5naWZ5KGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogT24gTVNJRTgsIHRoaXMgY2FuIHJlc3VsdCBpbiAnb3V0IG9mIG1lbW9yeScsIHdoaWNoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKiBsZWF2ZXMgbWVzc2FnZSB1bmRlZmluZWQuICovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mKG1lc3NhZ2UpID09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gZS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IGUudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zLmVycm9yKGVycm9yLG1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgeyAvLyBpZiBubyBtZXRob2QgZm91bmQsIHNlbmQgZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zLmVycm9yKFwibWV0aG9kX25vdF9mb3VuZFwiLCBcIk5vIG1ldGhvZCAnXCIgKyBtZXRob2QgKyBcIicgd2FzICh5ZXQpIGJvdW5kIGJ5IHRoZSBwcm92aWRlclwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobS5pZCAmJiBtLmNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghb3V0VGJsW20uaWRdIHx8IW91dFRibFttLmlkXS5jYWxsYmFja3MgfHwgIW91dFRibFttLmlkXS5jYWxsYmFja3NbbS5jYWxsYmFja10pXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlYnVnKFwiaWdub3JpbmcgaW52YWxpZCBjYWxsYmFjaywgaWQ6XCIrbS5pZCsgXCIgKFwiICsgbS5jYWxsYmFjayArXCIpXCIpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gWFhYOiB3aGF0IGlmIGNsaWVudCBjb2RlIHJhaXNlcyBhbiBleGNlcHRpb24gaGVyZT9cbiAgICAgICAgICAgICAgICAgICAgICAgIG91dFRibFttLmlkXS5jYWxsYmFja3NbbS5jYWxsYmFja10obS5wYXJhbXMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghb3V0VGJsW20uaWRdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWJ1ZyhcImlnbm9yaW5nIGludmFsaWQgcmVzcG9uc2U6IFwiICsgbS5pZCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBYWFg6IHdoYXQgaWYgY2xpZW50IGNvZGUgcmFpc2VzIGFuIGV4Y2VwdGlvbiBoZXJlP1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG0uZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBXZSBtaWdodCBub3QgaGF2ZSBhbiBlcnJvciBjYWxsYmFja1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG91dFRibFttLmlkXS5lcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRUYmxbbS5pZF0uZXJyb3IobS5lcnJvciwgbS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEJ1dCB3ZSBhbHdheXMgaGF2ZSBhIHN1Y2Nlc3MgY2FsbGJhY2tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobS5yZXN1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRUYmxbbS5pZF0uc3VjY2VzcyhtLnJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0VGJsW20uaWRdLnN1Y2Nlc3MoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgb3V0VGJsW20uaWRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHNfdHJhbnNJZHNbbS5pZF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1ldGhvZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyB0aXMgYSBub3RpZmljYXRpb24uXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWdUYmxbbWV0aG9kXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8geWVwLCB0aGVyZSdzIGEgaGFuZGxlciBmb3IgdGhhdC5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRyYW5zYWN0aW9uIGhhcyBvbmx5IG9yaWdpbiBmb3Igbm90aWZpY2F0aW9ucy5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZ1RibFttZXRob2RdKHsgb3JpZ2luOiBvcmlnaW4gfSwgbS5wYXJhbXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlIGNsaWVudCB0aHJvd3MsIHdlJ2xsIGp1c3QgbGV0IGl0IGJ1YmJsZSBvdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdoYXQgY2FuIHdlIGRvPyAgQWxzbywgaGVyZSB3ZSdsbCBpZ25vcmUgcmV0dXJuIHZhbHVlc1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8gbm93IHJlZ2lzdGVyIG91ciBib3VuZCBjaGFubmVsIGZvciBtc2cgcm91dGluZ1xuICAgICAgICAgICAgc19hZGRCb3VuZENoYW4oY2ZnLndpbmRvdywgY2ZnLm9yaWdpbiwgY2ZnLnNjb3BlLCBvbk1lc3NhZ2UpO1xuXG4gICAgICAgICAgICAvLyBzY29wZSBtZXRob2QgbmFtZXMgYmFzZWQgb24gY2ZnLnNjb3BlIHNwZWNpZmllZCB3aGVuIHRoZSBDaGFubmVsIHdhcyBpbnN0YW50aWF0ZWRcbiAgICAgICAgICAgIHZhciBzY29wZU1ldGhvZCA9IGZ1bmN0aW9uKG0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW2NmZy5zY29wZSwgbV0uam9pbihcIjo6XCIpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8gYSBzbWFsbCB3cmFwcGVyIGFyb3VuZCBwb3N0bWVzc2FnZSB3aG9zZSBwcmltYXJ5IGZ1bmN0aW9uIGlzIHRvIGhhbmRsZSB0aGVcbiAgICAgICAgICAgIC8vIGNhc2UgdGhhdCBjbGllbnRzIHN0YXJ0IHNlbmRpbmcgbWVzc2FnZXMgYmVmb3JlIHRoZSBvdGhlciBlbmQgaXMgXCJyZWFkeVwiXG4gICAgICAgICAgICB2YXIgcG9zdE1lc3NhZ2UgPSBmdW5jdGlvbihtc2csIGZvcmNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFtc2cpIHRocm93IFwicG9zdE1lc3NhZ2UgY2FsbGVkIHdpdGggbnVsbCBtZXNzYWdlXCI7XG5cbiAgICAgICAgICAgICAgICAvLyBkZWxheSBwb3N0aW5nIGlmIHdlJ3JlIG5vdCByZWFkeSB5ZXQuXG4gICAgICAgICAgICAgICAgaWYgKCFmb3JjZSAmJiAhcmVhZHkpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVidWcoXCJxdWV1ZSBtZXNzYWdlOiBcIiArIEpTT04uc3RyaW5naWZ5KG1zZykpO1xuICAgICAgICAgICAgICAgICAgICBwZW5kaW5nUXVldWUucHVzaChtc2cpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY2ZnLnBvc3RNZXNzYWdlT2JzZXJ2ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2ZnLnBvc3RNZXNzYWdlT2JzZXJ2ZXIoY2ZnLm9yaWdpbiwgbXNnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWJ1ZyhcInBvc3RNZXNzYWdlT2JzZXJ2ZXIoKSByYWlzZWQgYW4gZXhjZXB0aW9uOiBcIiArIGUudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZGVidWcoXCJwb3N0IG1lc3NhZ2U6IFwiICsgSlNPTi5zdHJpbmdpZnkobXNnKSArIFwiIHdpdGggb3JpZ2luIFwiICsgY2ZnLm9yaWdpbik7XG4gICAgICAgICAgICAgICAgICAgIGNmZy53aW5kb3cucG9zdE1lc3NhZ2UoSlNPTi5zdHJpbmdpZnkobXNnKSwgY2ZnLm9yaWdpbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdmFyIG9uUmVhZHkgPSBmdW5jdGlvbih0cmFucywgcGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgZGVidWcoJ3JlYWR5IG1zZyByZWNlaXZlZCcpO1xuICAgICAgICAgICAgICAgIGlmIChyZWFkeSAmJiAhY2ZnLnJlY29ubmVjdCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBcInJlY2VpdmVkIHJlYWR5IG1lc3NhZ2Ugd2hpbGUgaW4gcmVhZHkgc3RhdGUuXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlYWR5ID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIC8vIG9ubHkgYXBwZW5kIHN1ZmZpeCB0byBjaGFuSWQgb25jZTpcbiAgICAgICAgICAgICAgICBpZiAoY2hhbklkLmxlbmd0aCA8IDYpIHtcblx0ICAgICAgICAgICAgICAgIGlmIChwYXJhbXMudHlwZSA9PT0gJ3B1Ymxpc2gtcmVxdWVzdCcpIHtcblx0ICAgICAgICAgICAgICAgICAgICBjaGFuSWQgKz0gJy1SJztcblx0ICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICAgICAgY2hhbklkICs9ICctTCc7XG5cdCAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRlYnVnKCdyZWFkeSBtc2cgYWNjZXB0ZWQuJyk7XG5cbiAgICAgICAgICAgICAgICBpZiAocGFyYW1zLnR5cGUgPT09ICdwdWJsaXNoLXJlcXVlc3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIG9iai5ub3RpZnkoeyBtZXRob2Q6ICdfX3JlYWR5JywgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOidwdWJsaXNoLXJlcGx5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1Ymxpc2g6IHB1Ymxpc2hRdWV1ZVxuICAgICAgICAgICAgICAgICAgICB9IH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFyYW1zLnB1Ymxpc2gubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmFtcy5wdWJsaXNoW2ldLmFjdGlvbiA9PT0gXCJiaW5kXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZVN0dWJzKFtwYXJhbXMucHVibGlzaFtpXS5tZXRob2RdLCBvYmoucmVtb3RlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHsgLy8gdW5iaW5kXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgb2JqLnJlbW90ZVtwYXJhbXMucHVibGlzaFtpXS5tZXRob2RdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy91bmJpbmQgcmVhZHkgaGFuZGxlciB1bmxlc3Mgd2UgYWxsb3cgcmVjb25uZWN0aW5nOlxuICAgICAgICAgICAgICAgIGlmICghY2ZnLnJlY29ubmVjdCkge1xuICAgICAgICAgICAgICAgICAgICBvYmoudW5iaW5kKCdfX3JlYWR5JywgdHJ1ZSk7IC8vIG5vdyB0aGlzIGhhbmRsZXIgaXNuJ3QgbmVlZGVkIGFueSBtb3JlLlxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGZsdXNoIHF1ZXVlXG4gICAgICAgICAgICAgICAgd2hpbGUgKHBlbmRpbmdRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zdE1lc3NhZ2UocGVuZGluZ1F1ZXVlLnNwbGljZSgwLCAxKVswXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHB1Ymxpc2hRdWV1ZSA9IFtdO1xuICAgICAgICAgICAgICAgIC8vIGludm9rZSBvblJlYWR5IG9ic2VydmVyIGlmIHByb3ZpZGVkXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjZmcub25SZWFkeSA9PT0gJ2Z1bmN0aW9uJykgY2ZnLm9uUmVhZHkob2JqKTtcblxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdmFyIGNyZWF0ZVN0dWJzID0gZnVuY3Rpb24oc3R1Ykxpc3QsIHRhcmdldE9iaikge1xuICAgICAgICAgICAgICAgIHN0dWJMaXN0ID0gW10uY29uY2F0KHN0dWJMaXN0KTsgLy8gQ29lcmNlIGludG8gYXJyYXksIGFsbG93cyBzdHJpbmcgdG8gYmUgdXNlZCBmb3Igc2luZ2xlLWl0ZW0gYXJyYXlcbiAgICAgICAgICAgICAgICB2YXIgbWV0aG9kO1xuICAgICAgICAgICAgICAgIGZvcih2YXIgaT0wOyBpIDwgc3R1Ykxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kID0gc3R1Ykxpc3RbaV0udG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0T2JqW21ldGhvZF0gPSBmdW5jdGlvbihtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24ocGFyYW1zLCBzdWNjZXNzLCBlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iai5jYWxsKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczogcGFyYW1zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2Vzczogc3VjY2VzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmoubm90aWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczogcGFyYW1zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH0obWV0aG9kKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIER5bmFtaWMgcHVibGlzaCBmcm9tIHJlbW90ZVxuICAgICAgICAgICAgdmFyIG9uQmluZCA9IGZ1bmN0aW9uKHRyYW5zLCBtZXRob2QpIHtcbiAgICAgICAgICAgICAgICBjcmVhdGVTdHVicyhbbWV0aG9kXSwgb2JqLnJlbW90ZSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyBEeW5hbWljIHVucHVibGlzaCBmcm9tIHJlbW90ZVxuICAgICAgICAgICAgdmFyIG9uVW5iaW5kID0gZnVuY3Rpb24odHJhbnMsIG1ldGhvZCkge1xuICAgICAgICAgICAgICAgIGlmIChvYmoucmVtb3RlW21ldGhvZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG9iai5yZW1vdGVbbWV0aG9kXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB2YXIgb2JqID0ge1xuXG4gICAgICAgICAgICAgICAgcmVtb3RlOiB7fSxcblxuICAgICAgICAgICAgICAgIC8vIHRyaWVzIHRvIHVuYmluZCBhIGJvdW5kIG1lc3NhZ2UgaGFuZGxlci4gIHJldHVybnMgZmFsc2UgaWYgbm90IHBvc3NpYmxlXG4gICAgICAgICAgICAgICAgdW5iaW5kOiBmdW5jdGlvbiAobWV0aG9kLCBkb05vdFB1Ymxpc2gpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlZ1RibFttZXRob2RdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShkZWxldGUgcmVnVGJsW21ldGhvZF0pKSB0aHJvdyAoXCJjYW4ndCBkZWxldGUgbWV0aG9kOiBcIiArIG1ldGhvZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2ZnLnB1Ymxpc2ggJiYgISBkb05vdFB1Ymxpc2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVhZHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqLm5vdGlmeSh7IG1ldGhvZDogJ19fdW5iaW5kJywgcGFyYW1zOiBtZXRob2QgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHVibGlzaFF1ZXVlLnB1c2goeyBhY3Rpb246ICd1bmJpbmQnLCBtZXRob2Q6IG1ldGhvZCB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBiaW5kOiBmdW5jdGlvbiAobWV0aG9kLCBjYiwgZG9Ob3RQdWJsaXNoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghbWV0aG9kIHx8IHR5cGVvZiBtZXRob2QgIT09ICdzdHJpbmcnKSB0aHJvdyBcIidtZXRob2QnIGFyZ3VtZW50IHRvIGJpbmQgbXVzdCBiZSBzdHJpbmdcIjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjYiB8fCB0eXBlb2YgY2IgIT09ICdmdW5jdGlvbicpIHRocm93IFwiY2FsbGJhY2sgbWlzc2luZyBmcm9tIGJpbmQgcGFyYW1zXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlZ1RibFttZXRob2RdKSB0aHJvdyBcIm1ldGhvZCAnXCIrbWV0aG9kK1wiJyBpcyBhbHJlYWR5IGJvdW5kIVwiO1xuICAgICAgICAgICAgICAgICAgICByZWdUYmxbbWV0aG9kXSA9IGNiO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2ZnLnB1Ymxpc2ggJiYgISBkb05vdFB1Ymxpc2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWFkeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iai5ub3RpZnkoeyBtZXRob2Q6ICdfX2JpbmQnLCBwYXJhbXM6IG1ldGhvZCB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHVibGlzaFF1ZXVlLnB1c2goeyBhY3Rpb246ICdiaW5kJywgbWV0aG9kOiBtZXRob2QgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjYWxsOiBmdW5jdGlvbihtKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghbSkgdGhyb3cgJ21pc3NpbmcgYXJndW1lbnRzIHRvIGNhbGwgZnVuY3Rpb24nO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIW0ubWV0aG9kIHx8IHR5cGVvZiBtLm1ldGhvZCAhPT0gJ3N0cmluZycpIHRocm93IFwiJ21ldGhvZCcgYXJndW1lbnQgdG8gY2FsbCBtdXN0IGJlIHN0cmluZ1wiO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIW0uc3VjY2VzcyB8fCB0eXBlb2YgbS5zdWNjZXNzICE9PSAnZnVuY3Rpb24nKSB0aHJvdyBcIidzdWNjZXNzJyBjYWxsYmFjayBtaXNzaW5nIGZyb20gY2FsbFwiO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIG5vdyBpdCdzIHRpbWUgdG8gc3VwcG9ydCB0aGUgJ2NhbGxiYWNrJyBmZWF0dXJlIG9mIGpzY2hhbm5lbC4gIFdlJ2xsIHRyYXZlcnNlIHRoZSBhcmd1bWVudFxuICAgICAgICAgICAgICAgICAgICAvLyBvYmplY3QgYW5kIHBpY2sgb3V0IGFsbCBvZiB0aGUgZnVuY3Rpb25zIHRoYXQgd2VyZSBwYXNzZWQgYXMgYXJndW1lbnRzLlxuICAgICAgICAgICAgICAgICAgICB2YXIgY2FsbGJhY2tzID0geyB9O1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2FsbGJhY2tOYW1lcyA9IFsgXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlZW4gPSBbIF07XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIHBydW5lRnVuY3Rpb25zID0gZnVuY3Rpb24gKHBhdGgsIG9iaikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlZW4uaW5kZXhPZihvYmopID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBcInBhcmFtcyBjYW5ub3QgYmUgYSByZWN1cnNpdmUgZGF0YSBzdHJ1Y3R1cmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYob2JqKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vlbi5wdXNoKG9iaik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGsgaW4gb2JqKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghb2JqLmhhc093blByb3BlcnR5KGspKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5wID0gcGF0aCArIChwYXRoLmxlbmd0aCA/ICcvJyA6ICcnKSArIGs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqW2tdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja3NbbnBdID0gb2JqW2tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tOYW1lcy5wdXNoKG5wKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBvYmpba107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG9ialtrXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBydW5lRnVuY3Rpb25zKG5wLCBvYmpba10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBwcnVuZUZ1bmN0aW9ucyhcIlwiLCBtLnBhcmFtcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gYnVpbGQgYSAncmVxdWVzdCcgbWVzc2FnZSBhbmQgc2VuZCBpdFxuICAgICAgICAgICAgICAgICAgICB2YXIgbXNnID0geyBpZDogc19jdXJUcmFuSWQsIG1ldGhvZDogc2NvcGVNZXRob2QobS5tZXRob2QpLCBwYXJhbXM6IG0ucGFyYW1zIH07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFja05hbWVzLmxlbmd0aCkgbXNnLmNhbGxiYWNrcyA9IGNhbGxiYWNrTmFtZXM7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG0udGltZW91dClcbiAgICAgICAgICAgICAgICAgICAgICAvLyBYWFg6IFRoaXMgZnVuY3Rpb24gcmV0dXJucyBhIHRpbWVvdXQgSUQsIGJ1dCB3ZSBkb24ndCBkbyBhbnl0aGluZyB3aXRoIGl0LlxuICAgICAgICAgICAgICAgICAgICAgIC8vIFdlIG1pZ2h0IHdhbnQgdG8ga2VlcCB0cmFjayBvZiBpdCBzbyB3ZSBjYW4gY2FuY2VsIGl0IHVzaW5nIGNsZWFyVGltZW91dCgpXG4gICAgICAgICAgICAgICAgICAgICAgLy8gd2hlbiB0aGUgdHJhbnNhY3Rpb24gY29tcGxldGVzLlxuICAgICAgICAgICAgICAgICAgICAgIHNldFRyYW5zYWN0aW9uVGltZW91dChzX2N1clRyYW5JZCwgbS50aW1lb3V0LCBzY29wZU1ldGhvZChtLm1ldGhvZCkpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGluc2VydCBpbnRvIHRoZSB0cmFuc2FjdGlvbiB0YWJsZVxuICAgICAgICAgICAgICAgICAgICBvdXRUYmxbc19jdXJUcmFuSWRdID0geyBjYWxsYmFja3M6IGNhbGxiYWNrcywgZXJyb3I6IG0uZXJyb3IsIHN1Y2Nlc3M6IG0uc3VjY2VzcyB9O1xuICAgICAgICAgICAgICAgICAgICBzX3RyYW5zSWRzW3NfY3VyVHJhbklkXSA9IG9uTWVzc2FnZTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBpbmNyZW1lbnQgY3VycmVudCBpZFxuICAgICAgICAgICAgICAgICAgICBzX2N1clRyYW5JZCsrO1xuXG4gICAgICAgICAgICAgICAgICAgIHBvc3RNZXNzYWdlKG1zZyk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBub3RpZnk6IGZ1bmN0aW9uKG0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFtKSB0aHJvdyAnbWlzc2luZyBhcmd1bWVudHMgdG8gbm90aWZ5IGZ1bmN0aW9uJztcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFtLm1ldGhvZCB8fCB0eXBlb2YgbS5tZXRob2QgIT09ICdzdHJpbmcnKSB0aHJvdyBcIidtZXRob2QnIGFyZ3VtZW50IHRvIG5vdGlmeSBtdXN0IGJlIHN0cmluZ1wiO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIG5vIG5lZWQgdG8gZ28gaW50byBhbnkgdHJhbnNhY3Rpb24gdGFibGVcbiAgICAgICAgICAgICAgICAgICAgcG9zdE1lc3NhZ2UoeyBtZXRob2Q6IHNjb3BlTWV0aG9kKG0ubWV0aG9kKSwgcGFyYW1zOiBtLnBhcmFtcyB9KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgc19yZW1vdmVCb3VuZENoYW4oY2ZnLndpbmRvdywgY2ZnLm9yaWdpbiwgY2ZnLnNjb3BlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKSB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIG9uTWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKHdpbmRvdy5kZXRhY2hFdmVudCkgd2luZG93LmRldGFjaEV2ZW50KCdvbm1lc3NhZ2UnLCBvbk1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICByZWFkeSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICByZWdUYmwgPSB7IH07XG4gICAgICAgICAgICAgICAgICAgIGluVGJsID0geyB9O1xuICAgICAgICAgICAgICAgICAgICBvdXRUYmwgPSB7IH07XG4gICAgICAgICAgICAgICAgICAgIGNmZy5vcmlnaW4gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBwZW5kaW5nUXVldWUgPSBbIF07XG4gICAgICAgICAgICAgICAgICAgIGRlYnVnKFwiY2hhbm5lbCBkZXN0cm95ZWRcIik7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5JZCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgb2JqLmJpbmQoJ19fcmVhZHknLCBvblJlYWR5LCB0cnVlKTtcbiAgICAgICAgICAgIG9iai5iaW5kKCdfX2JpbmQnLCBvbkJpbmQsIHRydWUpO1xuICAgICAgICAgICAgb2JqLmJpbmQoJ19fdW5iaW5kJywgb25VbmJpbmQsIHRydWUpO1xuICAgICAgICAgICAgaWYgKGNmZy5yZW1vdGUpIHtcbiAgICAgICAgICAgICAgICBjcmVhdGVTdHVicyhjZmcucmVtb3RlLCBvYmoucmVtb3RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNoYW5JZC5sZW5ndGggPiAwKSB7IC8vIFRoZSBjaGFubmVsIG1pZ2h0IGFscmVhZHkgaGF2ZSBiZWVuIGRlc3Ryb3llZFxuICAgICAgICAgICAgICAgICAgICBwb3N0TWVzc2FnZSh7IG1ldGhvZDogc2NvcGVNZXRob2QoJ19fcmVhZHknKSwgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInB1Ymxpc2gtcmVxdWVzdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHVibGlzaDogcHVibGlzaFF1ZXVlXG4gICAgICAgICAgICAgICAgICAgIH0gfSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9LCAwKTtcblxuICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgfVxuICAgIH07XG4gIH0pKCk7XG5cblxuICByZXR1cm4gQ2hhbm5lbDtcbn0pKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///25\n");

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return processCheckout; });\n/* harmony import */ var utils_shopify_apis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);\n/* harmony import */ var _kubric_sidecart_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);\n/* harmony import */ var _kubric_sidecart_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_kubric_sidecart_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var utils_lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);\n\n\n\nconst processCheckout = ({ checkoutType, orderData, invoiceUrl, }) => {\n    var _a, _b;\n    if (Object(utils_lodash__WEBPACK_IMPORTED_MODULE_2__[/* isValidString */ \"l\"])(invoiceUrl)) {\n        window.open(invoiceUrl, \"_self\");\n    }\n    else if (checkoutType === _kubric_sidecart_types__WEBPACK_IMPORTED_MODULE_1__[\"CheckoutType\"].SWIFT ||\n        checkoutType === _kubric_sidecart_types__WEBPACK_IMPORTED_MODULE_1__[\"CheckoutType\"].GOKWIK) {\n        window.postMessage(orderData, window.location.origin);\n    }\n    else if (checkoutType === _kubric_sidecart_types__WEBPACK_IMPORTED_MODULE_1__[\"CheckoutType\"].FASTRR) {\n        (_b = (_a = window.HeadlessCheckout) === null || _a === void 0 ? void 0 : _a.InitiateMasonCheckout) === null || _b === void 0 ? void 0 : _b.call(_a, orderData);\n    }\n    else {\n        window.open(utils_shopify_apis__WEBPACK_IMPORTED_MODULE_0__[/* CHECKOUT_URL */ \"a\"], \"_self\");\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvY2hlY2tvdXQudHM/ZTZiZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtEO0FBQ0k7QUFDVDtBQUN0QywwQkFBMEIsdUNBQXVDO0FBQ3hFO0FBQ0EsUUFBUSwwRUFBYTtBQUNyQjtBQUNBO0FBQ0EsOEJBQThCLG1FQUFZO0FBQzFDLHlCQUF5QixtRUFBWTtBQUNyQztBQUNBO0FBQ0EsOEJBQThCLG1FQUFZO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix1RUFBWTtBQUNoQztBQUNBIiwiZmlsZSI6IjI2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ0hFQ0tPVVRfVVJMIH0gZnJvbSBcInV0aWxzL3Nob3BpZnkvYXBpc1wiO1xuaW1wb3J0IHsgQ2hlY2tvdXRUeXBlIH0gZnJvbSBcIkBrdWJyaWMvc2lkZWNhcnQtdHlwZXNcIjtcbmltcG9ydCB7IGlzVmFsaWRTdHJpbmcgfSBmcm9tIFwidXRpbHMvbG9kYXNoXCI7XG5leHBvcnQgY29uc3QgcHJvY2Vzc0NoZWNrb3V0ID0gKHsgY2hlY2tvdXRUeXBlLCBvcmRlckRhdGEsIGludm9pY2VVcmwsIH0pID0+IHtcbiAgICB2YXIgX2EsIF9iO1xuICAgIGlmIChpc1ZhbGlkU3RyaW5nKGludm9pY2VVcmwpKSB7XG4gICAgICAgIHdpbmRvdy5vcGVuKGludm9pY2VVcmwsIFwiX3NlbGZcIik7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNoZWNrb3V0VHlwZSA9PT0gQ2hlY2tvdXRUeXBlLlNXSUZUIHx8XG4gICAgICAgIGNoZWNrb3V0VHlwZSA9PT0gQ2hlY2tvdXRUeXBlLkdPS1dJSykge1xuICAgICAgICB3aW5kb3cucG9zdE1lc3NhZ2Uob3JkZXJEYXRhLCB3aW5kb3cubG9jYXRpb24ub3JpZ2luKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoY2hlY2tvdXRUeXBlID09PSBDaGVja291dFR5cGUuRkFTVFJSKSB7XG4gICAgICAgIChfYiA9IChfYSA9IHdpbmRvdy5IZWFkbGVzc0NoZWNrb3V0KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuSW5pdGlhdGVNYXNvbkNoZWNrb3V0KSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbChfYSwgb3JkZXJEYXRhKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHdpbmRvdy5vcGVuKENIRUNLT1VUX1VSTCwgXCJfc2VsZlwiKTtcbiAgICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///26\n");

/***/ }),
/* 27 */,
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* unused harmony export PAGE_SELECTORS */\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return setupCartOpenListeners; });\n/* harmony import */ var utils_console__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);\n/* harmony import */ var utils_lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);\n\n\nconst getViewCartSelectors = () => {\n    var _a;\n    const { routes: { root = \"\" } = {} } = (_a = window.Shopify) !== null && _a !== void 0 ? _a : {};\n    const selectors = {\n        GENERIC_VIEW_CART: '[href=\"/cart\"]',\n        MINI_SIDE_CART_DESKTOP_TRIGGER: \"cart-drawer #cart-icon-bubble\",\n        MINI_SIDE_CART_MOBILE_TRIGGER: \"cart-drawer #mobile-cart-icon-bubble\",\n    };\n    if (Object(utils_lodash__WEBPACK_IMPORTED_MODULE_1__[/* isValidString */ \"l\"])(root) && root !== \"/\") {\n        selectors.LOCALE_CART = `[href=\"${root}cart\"]`;\n    }\n    return selectors;\n};\nconst SIDE_CART_SELECTORS = {\n    GENERIC_SIDE_CART_DRAWER: 'cart-drawer[class*=\"drawer\"]',\n    MINI_SIDE_CART_DRAWER: \"cart-drawer mini-cart\",\n};\nconst QUANTITY_INPUT_SELECTORS = {\n    GENERIC_QUANTITY: \"quantity-input\",\n};\nconst PAGE_SELECTORS = {\n    VIEW_CART: getViewCartSelectors(),\n    SIDE_CART: SIDE_CART_SELECTORS,\n    QUANTITY_INPUT: QUANTITY_INPUT_SELECTORS,\n};\nconst setupViewCartButton = (onCartOpen, selector) => {\n    let observers = [];\n    let viewCartButtons = [];\n    const cartClickHandler = (e) => {\n        Object(utils_console__WEBPACK_IMPORTED_MODULE_0__[/* debugLog */ \"b\"])(\"Cart click handler triggered\");\n        e.stopImmediatePropagation();\n        Object(utils_console__WEBPACK_IMPORTED_MODULE_0__[/* debugLog */ \"b\"])(`Opening from add to cart button`);\n        onCartOpen();\n    };\n    const disconnectAll = () => {\n        observers.forEach((ob) => ob.disconnect());\n        observers = [];\n        viewCartButtons.forEach((e) => e.removeEventListener(\"click\", cartClickHandler));\n        viewCartButtons = [];\n    };\n    document.querySelectorAll(selector).forEach((btn) => {\n        var _a, _b;\n        viewCartButtons.push(btn);\n        btn.setAttribute(\"type\", \"button\");\n        btn.setAttribute(\"data-mm-identifier\", \"view-cart\");\n        btn.setAttribute(\"href\", \"javascript:void(0)\");\n        btn.removeAttribute(\"role\");\n        btn.removeAttribute(\"aria-haspopup\");\n        btn.addEventListener(\"click\", cartClickHandler, {\n            capture: true,\n        });\n        const targetParent = (_b = (_a = btn.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) !== null && _b !== void 0 ? _b : btn.parentElement;\n        if (!Object(utils_lodash__WEBPACK_IMPORTED_MODULE_1__[/* isNull */ \"e\"])(targetParent)) {\n            const dmMutationHandler = Object(utils_lodash__WEBPACK_IMPORTED_MODULE_1__[/* debounce */ \"b\"])((mutations) => {\n                mutations.forEach((mutation) => {\n                    const { type, removedNodes } = mutation;\n                    if (type === \"childList\" && removedNodes.length > 0) {\n                        const nonTextNodes = Array.from(removedNodes).filter((n) => n.nodeType !== Node.TEXT_NODE);\n                        if (nonTextNodes.length > 0) {\n                            Object(utils_console__WEBPACK_IMPORTED_MODULE_0__[/* debugLog */ \"b\"])(\"Disconnecting and reattaching handlers\");\n                            disconnectAll();\n                            setupViewCartButton(onCartOpen, selector);\n                        }\n                    }\n                });\n            }, 500);\n            const observer = new MutationObserver(dmMutationHandler);\n            observers.push(observer);\n            observer.observe(targetParent, {\n                attributes: false,\n                childList: true,\n                subtree: true,\n            });\n        }\n    });\n};\nconst setupCartOpenListeners = (onCartOpen) => {\n    Object.values(PAGE_SELECTORS.VIEW_CART).forEach(setupViewCartButton.bind(null, onCartOpen));\n    Object.values(PAGE_SELECTORS.SIDE_CART).forEach((selector) => {\n        document.querySelectorAll(selector).forEach((element) => {\n            if (element instanceof HTMLElement) {\n                const customElement = element;\n                if (typeof customElement.open === \"function\") {\n                    const observer = new MutationObserver((mutations) => {\n                        mutations.forEach((mutation) => {\n                            var _a, _b;\n                            if (mutation.attributeName === \"class\" &&\n                                mutation.target instanceof HTMLElement &&\n                                mutation.target.classList.contains(\"active\") &&\n                                typeof mutation.target.close ===\n                                    \"function\") {\n                                Object(utils_console__WEBPACK_IMPORTED_MODULE_0__[/* debugLog */ \"b\"])(`Closing default Side-Cart`);\n                                (_b = (_a = mutation.target).close) === null || _b === void 0 ? void 0 : _b.call(_a);\n                            }\n                        });\n                    });\n                    observer.observe(customElement, {\n                        attributes: true,\n                        attributeFilter: [\"class\"],\n                        childList: false,\n                        subtree: false,\n                    });\n                    customElement.open = function disobey() {\n                        if (typeof customElement.close === \"function\") {\n                            customElement.close();\n                        }\n                        Object(utils_console__WEBPACK_IMPORTED_MODULE_0__[/* debugLog */ \"b\"])(`Prevented default Side-Cart from opening`);\n                    };\n                }\n                element.setAttribute(\"data-mm-identifier\", \"side-cart\");\n                element.setAttribute(`data-element-styles`, JSON.stringify([\n                    \"display\",\n                    \"position\",\n                    \"visibility\",\n                    \"opacity\",\n                    \"top\",\n                    \"left\",\n                ].reduce((acc, curr) => {\n                    acc[curr] = element.style.getPropertyValue(curr);\n                    return acc;\n                }, {})));\n                element.style.setProperty(\"display\", \"none\", \"important\");\n                element.style.setProperty(\"position\", \"absolute\", \"important\");\n                element.style.setProperty(\"visibility\", \"hidden\", \"important\");\n                element.style.setProperty(\"opacity\", \"0\", \"important\");\n                element.style.setProperty(\"top\", \"0\", \"important\");\n                element.style.setProperty(\"left\", \"-9999px\", \"important\");\n            }\n        });\n    });\n    const normalizedPathname = window.location.pathname.endsWith(\"/\")\n        ? window.location.pathname\n        : `${window.location.pathname}/`;\n    if (normalizedPathname === \"/cart/\") {\n        onCartOpen();\n        Object.values(PAGE_SELECTORS.QUANTITY_INPUT).forEach((selector) => {\n            document.querySelectorAll(selector).forEach((element) => {\n                var _a;\n                if (element instanceof HTMLElement) {\n                    element.setAttribute(\"data-mm-identifier\", \"quantity-input\");\n                    element.style.setProperty(\"cursor\", \"pointer\", \"important\");\n                    element.addEventListener(\"click\", (e) => {\n                        e.stopImmediatePropagation();\n                        Object(utils_console__WEBPACK_IMPORTED_MODULE_0__[/* debugLog */ \"b\"])(`Opening from quantity input`);\n                        onCartOpen(\"quantity_selector\");\n                    }, {\n                        capture: true,\n                    });\n                    const customElement = element;\n                    const disobey = (e) => {\n                        e.preventDefault();\n                        e.stopImmediatePropagation();\n                        Object(utils_console__WEBPACK_IMPORTED_MODULE_0__[/* debugLog */ \"b\"])(`Prevented Quantity Input from updating`);\n                    };\n                    if (customElement.input instanceof HTMLInputElement) {\n                        customElement.input.setAttribute(\"disabled\", \"disabled\");\n                        customElement.input.setAttribute(\"data-mm-identifier\", \"quantity-input-input\");\n                        customElement.input.style.setProperty(\"cursor\", \"none\", \"important\");\n                        customElement.input.style.setProperty(\"pointer-events\", \"none\", \"important\");\n                        customElement.input.addEventListener(\"change\", disobey, {\n                            capture: true,\n                        });\n                        customElement.input.addEventListener(\"keypress\", (e) => {\n                            if (e.key === \"Enter\") {\n                                disobey(e);\n                            }\n                        }, {\n                            capture: true,\n                        });\n                        const index = (_a = customElement.input.getAttribute(\"data-index\")) !== null && _a !== void 0 ? _a : -1;\n                        customElement.setAttribute(\"data-mm-identifier-index\", String(index));\n                    }\n                    customElement.querySelectorAll(\"button\").forEach((button) => {\n                        button.setAttribute(\"disabled\", \"disabled\");\n                        button.setAttribute(\"data-mm-identifier\", \"quantity-input-button\");\n                        button.style.setProperty(\"cursor\", \"none\", \"important\");\n                        button.style.setProperty(\"pointer-events\", \"none\", \"important\");\n                        button.addEventListener(\"click\", disobey, {\n                            capture: true,\n                        });\n                    });\n                }\n            });\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvc2hvcGlmeS9saXN0ZW5lcnMudHM/MDRkMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5QztBQUNzQjtBQUMvRDtBQUNBO0FBQ0EsV0FBVyxVQUFVLFlBQVksS0FBSyxFQUFFO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDBFQUFhO0FBQ3JCLDBDQUEwQyxLQUFLO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzRUFBUTtBQUNoQjtBQUNBLFFBQVEsc0VBQVE7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsYUFBYSxtRUFBTTtBQUNuQixzQ0FBc0MscUVBQVE7QUFDOUM7QUFDQSwyQkFBMkIscUJBQXFCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixzRUFBUTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHNFQUFRO0FBQ3hDO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isc0VBQVE7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsSUFBSTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBLGFBQWEseUJBQXlCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHNFQUFRO0FBQ2hDO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHNFQUFRO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIscUJBQXFCO0FBQ3JCO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBIiwiZmlsZSI6IjI4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGVidWdMb2cgfSBmcm9tIFwidXRpbHMvY29uc29sZVwiO1xuaW1wb3J0IHsgZGVib3VuY2UsIGlzTnVsbCwgaXNWYWxpZFN0cmluZyB9IGZyb20gXCJ1dGlscy9sb2Rhc2hcIjtcbmNvbnN0IGdldFZpZXdDYXJ0U2VsZWN0b3JzID0gKCkgPT4ge1xuICAgIHZhciBfYTtcbiAgICBjb25zdCB7IHJvdXRlczogeyByb290ID0gXCJcIiB9ID0ge30gfSA9IChfYSA9IHdpbmRvdy5TaG9waWZ5KSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiB7fTtcbiAgICBjb25zdCBzZWxlY3RvcnMgPSB7XG4gICAgICAgIEdFTkVSSUNfVklFV19DQVJUOiAnW2hyZWY9XCIvY2FydFwiXScsXG4gICAgICAgIE1JTklfU0lERV9DQVJUX0RFU0tUT1BfVFJJR0dFUjogXCJjYXJ0LWRyYXdlciAjY2FydC1pY29uLWJ1YmJsZVwiLFxuICAgICAgICBNSU5JX1NJREVfQ0FSVF9NT0JJTEVfVFJJR0dFUjogXCJjYXJ0LWRyYXdlciAjbW9iaWxlLWNhcnQtaWNvbi1idWJibGVcIixcbiAgICB9O1xuICAgIGlmIChpc1ZhbGlkU3RyaW5nKHJvb3QpICYmIHJvb3QgIT09IFwiL1wiKSB7XG4gICAgICAgIHNlbGVjdG9ycy5MT0NBTEVfQ0FSVCA9IGBbaHJlZj1cIiR7cm9vdH1jYXJ0XCJdYDtcbiAgICB9XG4gICAgcmV0dXJuIHNlbGVjdG9ycztcbn07XG5jb25zdCBTSURFX0NBUlRfU0VMRUNUT1JTID0ge1xuICAgIEdFTkVSSUNfU0lERV9DQVJUX0RSQVdFUjogJ2NhcnQtZHJhd2VyW2NsYXNzKj1cImRyYXdlclwiXScsXG4gICAgTUlOSV9TSURFX0NBUlRfRFJBV0VSOiBcImNhcnQtZHJhd2VyIG1pbmktY2FydFwiLFxufTtcbmNvbnN0IFFVQU5USVRZX0lOUFVUX1NFTEVDVE9SUyA9IHtcbiAgICBHRU5FUklDX1FVQU5USVRZOiBcInF1YW50aXR5LWlucHV0XCIsXG59O1xuZXhwb3J0IGNvbnN0IFBBR0VfU0VMRUNUT1JTID0ge1xuICAgIFZJRVdfQ0FSVDogZ2V0Vmlld0NhcnRTZWxlY3RvcnMoKSxcbiAgICBTSURFX0NBUlQ6IFNJREVfQ0FSVF9TRUxFQ1RPUlMsXG4gICAgUVVBTlRJVFlfSU5QVVQ6IFFVQU5USVRZX0lOUFVUX1NFTEVDVE9SUyxcbn07XG5jb25zdCBzZXR1cFZpZXdDYXJ0QnV0dG9uID0gKG9uQ2FydE9wZW4sIHNlbGVjdG9yKSA9PiB7XG4gICAgbGV0IG9ic2VydmVycyA9IFtdO1xuICAgIGxldCB2aWV3Q2FydEJ1dHRvbnMgPSBbXTtcbiAgICBjb25zdCBjYXJ0Q2xpY2tIYW5kbGVyID0gKGUpID0+IHtcbiAgICAgICAgZGVidWdMb2coXCJDYXJ0IGNsaWNrIGhhbmRsZXIgdHJpZ2dlcmVkXCIpO1xuICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICBkZWJ1Z0xvZyhgT3BlbmluZyBmcm9tIGFkZCB0byBjYXJ0IGJ1dHRvbmApO1xuICAgICAgICBvbkNhcnRPcGVuKCk7XG4gICAgfTtcbiAgICBjb25zdCBkaXNjb25uZWN0QWxsID0gKCkgPT4ge1xuICAgICAgICBvYnNlcnZlcnMuZm9yRWFjaCgob2IpID0+IG9iLmRpc2Nvbm5lY3QoKSk7XG4gICAgICAgIG9ic2VydmVycyA9IFtdO1xuICAgICAgICB2aWV3Q2FydEJ1dHRvbnMuZm9yRWFjaCgoZSkgPT4gZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2FydENsaWNrSGFuZGxlcikpO1xuICAgICAgICB2aWV3Q2FydEJ1dHRvbnMgPSBbXTtcbiAgICB9O1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpLmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICB2aWV3Q2FydEJ1dHRvbnMucHVzaChidG4pO1xuICAgICAgICBidG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgICAgICAgYnRuLnNldEF0dHJpYnV0ZShcImRhdGEtbW0taWRlbnRpZmllclwiLCBcInZpZXctY2FydFwiKTtcbiAgICAgICAgYnRuLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCJqYXZhc2NyaXB0OnZvaWQoMClcIik7XG4gICAgICAgIGJ0bi5yZW1vdmVBdHRyaWJ1dGUoXCJyb2xlXCIpO1xuICAgICAgICBidG4ucmVtb3ZlQXR0cmlidXRlKFwiYXJpYS1oYXNwb3B1cFwiKTtcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjYXJ0Q2xpY2tIYW5kbGVyLCB7XG4gICAgICAgICAgICBjYXB0dXJlOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgdGFyZ2V0UGFyZW50ID0gKF9iID0gKF9hID0gYnRuLnBhcmVudEVsZW1lbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5wYXJlbnRFbGVtZW50KSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiBidG4ucGFyZW50RWxlbWVudDtcbiAgICAgICAgaWYgKCFpc051bGwodGFyZ2V0UGFyZW50KSkge1xuICAgICAgICAgICAgY29uc3QgZG1NdXRhdGlvbkhhbmRsZXIgPSBkZWJvdW5jZSgobXV0YXRpb25zKSA9PiB7XG4gICAgICAgICAgICAgICAgbXV0YXRpb25zLmZvckVhY2goKG11dGF0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgdHlwZSwgcmVtb3ZlZE5vZGVzIH0gPSBtdXRhdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09IFwiY2hpbGRMaXN0XCIgJiYgcmVtb3ZlZE5vZGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5vblRleHROb2RlcyA9IEFycmF5LmZyb20ocmVtb3ZlZE5vZGVzKS5maWx0ZXIoKG4pID0+IG4ubm9kZVR5cGUgIT09IE5vZGUuVEVYVF9OT0RFKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub25UZXh0Tm9kZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlYnVnTG9nKFwiRGlzY29ubmVjdGluZyBhbmQgcmVhdHRhY2hpbmcgaGFuZGxlcnNcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzY29ubmVjdEFsbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHVwVmlld0NhcnRCdXR0b24ob25DYXJ0T3Blbiwgc2VsZWN0b3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihkbU11dGF0aW9uSGFuZGxlcik7XG4gICAgICAgICAgICBvYnNlcnZlcnMucHVzaChvYnNlcnZlcik7XG4gICAgICAgICAgICBvYnNlcnZlci5vYnNlcnZlKHRhcmdldFBhcmVudCwge1xuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzdWJ0cmVlOiB0cnVlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5leHBvcnQgY29uc3Qgc2V0dXBDYXJ0T3Blbkxpc3RlbmVycyA9IChvbkNhcnRPcGVuKSA9PiB7XG4gICAgT2JqZWN0LnZhbHVlcyhQQUdFX1NFTEVDVE9SUy5WSUVXX0NBUlQpLmZvckVhY2goc2V0dXBWaWV3Q2FydEJ1dHRvbi5iaW5kKG51bGwsIG9uQ2FydE9wZW4pKTtcbiAgICBPYmplY3QudmFsdWVzKFBBR0VfU0VMRUNUT1JTLlNJREVfQ0FSVCkuZm9yRWFjaCgoc2VsZWN0b3IpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1c3RvbUVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY3VzdG9tRWxlbWVudC5vcGVuID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25zKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtdXRhdGlvbnMuZm9yRWFjaCgobXV0YXRpb24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lID09PSBcImNsYXNzXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXV0YXRpb24udGFyZ2V0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXV0YXRpb24udGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlb2YgbXV0YXRpb24udGFyZ2V0LmNsb3NlID09PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlYnVnTG9nKGBDbG9zaW5nIGRlZmF1bHQgU2lkZS1DYXJ0YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChfYiA9IChfYSA9IG11dGF0aW9uLnRhcmdldCkuY2xvc2UpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jYWxsKF9hKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUoY3VzdG9tRWxlbWVudCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlczogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZUZpbHRlcjogW1wiY2xhc3NcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZExpc3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3VidHJlZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBjdXN0b21FbGVtZW50Lm9wZW4gPSBmdW5jdGlvbiBkaXNvYmV5KCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjdXN0b21FbGVtZW50LmNsb3NlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21FbGVtZW50LmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWJ1Z0xvZyhgUHJldmVudGVkIGRlZmF1bHQgU2lkZS1DYXJ0IGZyb20gb3BlbmluZ2ApO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtbW0taWRlbnRpZmllclwiLCBcInNpZGUtY2FydFwiKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShgZGF0YS1lbGVtZW50LXN0eWxlc2AsIEpTT04uc3RyaW5naWZ5KFtcbiAgICAgICAgICAgICAgICAgICAgXCJkaXNwbGF5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwicG9zaXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2aXNpYmlsaXR5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwib3BhY2l0eVwiLFxuICAgICAgICAgICAgICAgICAgICBcInRvcFwiLFxuICAgICAgICAgICAgICAgICAgICBcImxlZnRcIixcbiAgICAgICAgICAgICAgICBdLnJlZHVjZSgoYWNjLCBjdXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGFjY1tjdXJyXSA9IGVsZW1lbnQuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShjdXJyKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICAgICAgICB9LCB7fSkpKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFwiZGlzcGxheVwiLCBcIm5vbmVcIiwgXCJpbXBvcnRhbnRcIik7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcInBvc2l0aW9uXCIsIFwiYWJzb2x1dGVcIiwgXCJpbXBvcnRhbnRcIik7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcInZpc2liaWxpdHlcIiwgXCJoaWRkZW5cIiwgXCJpbXBvcnRhbnRcIik7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcIm9wYWNpdHlcIiwgXCIwXCIsIFwiaW1wb3J0YW50XCIpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXCJ0b3BcIiwgXCIwXCIsIFwiaW1wb3J0YW50XCIpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXCJsZWZ0XCIsIFwiLTk5OTlweFwiLCBcImltcG9ydGFudFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgY29uc3Qgbm9ybWFsaXplZFBhdGhuYW1lID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLmVuZHNXaXRoKFwiL1wiKVxuICAgICAgICA/IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZVxuICAgICAgICA6IGAke3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZX0vYDtcbiAgICBpZiAobm9ybWFsaXplZFBhdGhuYW1lID09PSBcIi9jYXJ0L1wiKSB7XG4gICAgICAgIG9uQ2FydE9wZW4oKTtcbiAgICAgICAgT2JqZWN0LnZhbHVlcyhQQUdFX1NFTEVDVE9SUy5RVUFOVElUWV9JTlBVVCkuZm9yRWFjaCgoc2VsZWN0b3IpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtbW0taWRlbnRpZmllclwiLCBcInF1YW50aXR5LWlucHV0XCIpO1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFwiY3Vyc29yXCIsIFwicG9pbnRlclwiLCBcImltcG9ydGFudFwiKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWJ1Z0xvZyhgT3BlbmluZyBmcm9tIHF1YW50aXR5IGlucHV0YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNhcnRPcGVuKFwicXVhbnRpdHlfc2VsZWN0b3JcIik7XG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcHR1cmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXN0b21FbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGlzb2JleSA9IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVidWdMb2coYFByZXZlbnRlZCBRdWFudGl0eSBJbnB1dCBmcm9tIHVwZGF0aW5nYCk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXN0b21FbGVtZW50LmlucHV0IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tRWxlbWVudC5pbnB1dC5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tRWxlbWVudC5pbnB1dC5zZXRBdHRyaWJ1dGUoXCJkYXRhLW1tLWlkZW50aWZpZXJcIiwgXCJxdWFudGl0eS1pbnB1dC1pbnB1dFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUVsZW1lbnQuaW5wdXQuc3R5bGUuc2V0UHJvcGVydHkoXCJjdXJzb3JcIiwgXCJub25lXCIsIFwiaW1wb3J0YW50XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tRWxlbWVudC5pbnB1dC5zdHlsZS5zZXRQcm9wZXJ0eShcInBvaW50ZXItZXZlbnRzXCIsIFwibm9uZVwiLCBcImltcG9ydGFudFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUVsZW1lbnQuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBkaXNvYmV5LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FwdHVyZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tRWxlbWVudC5pbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNvYmV5KGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXB0dXJlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IChfYSA9IGN1c3RvbUVsZW1lbnQuaW5wdXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiKSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21FbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtbW0taWRlbnRpZmllci1pbmRleFwiLCBTdHJpbmcoaW5kZXgpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjdXN0b21FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b25cIikuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLW1tLWlkZW50aWZpZXJcIiwgXCJxdWFudGl0eS1pbnB1dC1idXR0b25cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b24uc3R5bGUuc2V0UHJvcGVydHkoXCJjdXJzb3JcIiwgXCJub25lXCIsIFwiaW1wb3J0YW50XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uLnN0eWxlLnNldFByb3BlcnR5KFwicG9pbnRlci1ldmVudHNcIiwgXCJub25lXCIsIFwiaW1wb3J0YW50XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkaXNvYmV5LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FwdHVyZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///28\n");

/***/ }),
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/utils/shopify/listeners.ts
var listeners = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/@kubric/sidecart-types/dist/index.js
var dist = __webpack_require__(11);

// EXTERNAL MODULE: ./src/utils/console.ts
var utils_console = __webpack_require__(2);

// EXTERNAL MODULE: ./src/utils/CFEvent.ts + 1 modules
var CFEvent = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/jschannel/src/jschannel.js
var jschannel = __webpack_require__(25);
var jschannel_default = /*#__PURE__*/__webpack_require__.n(jschannel);

// EXTERNAL MODULE: ./src/utils/Interceptor.ts
var Interceptor = __webpack_require__(18);

// EXTERNAL MODULE: ./src/utils/lodash.ts
var lodash = __webpack_require__(0);

// EXTERNAL MODULE: ./src/utils/shopify/apis.ts
var apis = __webpack_require__(8);

// EXTERNAL MODULE: ./src/utils/Product.ts
var Product = __webpack_require__(15);

// EXTERNAL MODULE: ./src/utils/checkout.ts
var checkout = __webpack_require__(26);

// EXTERNAL MODULE: ./src/utils/platform.ts
var platform = __webpack_require__(5);

// EXTERNAL MODULE: ./src/utils/deviceID.ts
var deviceID = __webpack_require__(9);

// CONCATENATED MODULE: ./src/features/v2widgets/utils/shopify.ts
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};

const getShop = () => {
    let store = window.__mmStore;
    if (!Object(lodash["k" /* isUndefined */])(window.Shopify)) {
        store = window.Shopify.shop;
    }
    if (Object(lodash["l" /* isValidString */])(store)) {
        return store.split(".")[0];
    }
    return null;
};
function convertToShopifyCart(updatedCart) {
    const { cart_level_discount_applications: cartLevelDiscounts } = updatedCart, restOfCart = __rest(updatedCart, ["cart_level_discount_applications"]);
    return Object.assign(Object.assign({}, restOfCart), { cart_level_discount_applications: cartLevelDiscounts.map(({ discount_application: discountApplication }) => (Object.assign({}, discountApplication))) });
}
const stringifyProperties = (properties, target) => Object(lodash["m" /* mapValues */])(properties, (value) => {
    if ((target === "cart" && Object(lodash["i" /* isPlainObject */])(value)) ||
        (target === "item" && !Object(lodash["l" /* isValidString */])(value))) {
        return JSON.stringify(value);
    }
    return value;
});
const stringifyCartProperties = (properties) => stringifyProperties(properties, "cart");
const stringifyItemProperties = (properties) => stringifyProperties(properties, "item");
const stringifyAddProperties = (add) => add.map((_a) => {
    var { properties = {} } = _a, rest = __rest(_a, ["properties"]);
    return (Object.assign(Object.assign({}, rest), { properties: stringifyItemProperties(properties) }));
});
const isCouponApplied = (cart, coupon) => {
    const { cart_level_discount_applications: cartDiscounts, items } = cart;
    const couponLower = coupon.toLowerCase();
    const cartLevelDiscount = cartDiscounts.find((discount) => discount.type === "discount_code" &&
        discount.title.toLowerCase() === couponLower);
    if (cartLevelDiscount) {
        return {
            isApplied: true,
            amount: cartLevelDiscount.total_allocated_amount,
        };
    }
    let totalLineItemDiscountAmount = 0;
    let isApplied = false;
    items.forEach((item) => {
        item.discounts.forEach((discount) => {
            if (discount.title.toLowerCase() === couponLower) {
                isApplied = true;
                totalLineItemDiscountAmount += discount.amount;
            }
        });
    });
    if (isApplied) {
        return {
            isApplied: true,
            amount: totalLineItemDiscountAmount,
        };
    }
    return {
        isApplied: false,
    };
};

// CONCATENATED MODULE: ./src/features/v2widgets/constants.ts
var SideCartStatus;
(function (SideCartStatus) {
    SideCartStatus["IDLE"] = "idle";
    SideCartStatus["ADDED"] = "added";
    SideCartStatus["READY"] = "ready";
    SideCartStatus["OPENING"] = "opening";
    SideCartStatus["OPENED"] = "opened";
    SideCartStatus["CLOSED"] = "closed";
    SideCartStatus["REMOVED"] = "removed";
    SideCartStatus["HELLO_FAILED"] = "hello_failed";
})(SideCartStatus || (SideCartStatus = {}));
const HIDE_CART_ZINDEX = "-2147483647";
const HIDE_CART_BG = "transparent";
const SHOW_CART_ZINDEX = "2147483647";
const SHOW_CART_BG = "rgba(0,0,0,.7)";

// CONCATENATED MODULE: ./src/features/v2widgets/sidecart/Launcher.ts

const LAUNCHER_ID = "mm_sidecart_v2_launcher";
const getLauncher = (config) => {
    const { bgColor, iconColor, position } = config;
    return `
<span id="${LAUNCHER_ID}" data-type="launcher" class="mm_launcher--container" style="display: none; width: fit-content; position: fixed; z-index: 2147483646; ${position === "bottomRight" ? "right: 20px" : "left: 20px"}; bottom: 20px;">
  <span data-type="icon-trigger" class="mm_launcher--icon-content" style="background-color: ${bgColor}; color: ${iconColor}; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; width: 60px; height: 60px; border-radius: 100%;">
    <span data-type="icon-trigger-svg" style="display: inline-flex; align-items: center; justify-content: center;">
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart">
        <circle cx="9" cy="21" r="1">
        </circle>
        <circle cx="20" cy="21" r="1">
        </circle>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6">
        </path>
      </svg>
    </span>
    <span data-type="icon-trigger-counter-bubble" style="opacity: 1;display: inline-flex;height: 28px;width: 28px;position: absolute;top: -17%;left: 50%;text-align: center;border: 2px solid currentcolor;background: inherit;border-radius: 100% 100% 0px;transform: translate(-50%, -50%) rotate(45deg);">
      <span data-type="icon-trigger-counter" style="display: inline-block;height: 100%;font-size: 12px;width: 100%;color: inherit;transform: rotate(-45deg);border-radius: 100%;">0</span>
    </span>
  </span>
</span>
`;
};
class Launcher_Launcher {
    constructor(config, clickHandler) {
        this.config = config;
        this.clickHandler = clickHandler;
        this.addLauncher();
    }
    addLauncher() {
        const dummy = document.createElement("div");
        dummy.innerHTML = getLauncher(this.config);
        const launcher = dummy.querySelector(`#${LAUNCHER_ID}`);
        document.body.appendChild(launcher);
        launcher.addEventListener("click", this.clickHandler.bind(this));
        this.launcher = launcher;
    }
    show(shouldShow = true) {
        const { launcher } = this;
        if (!Object(lodash["k" /* isUndefined */])(launcher)) {
            if (!shouldShow) {
                launcher.style.display = "none";
            }
            else {
                launcher.style.display = "flex";
            }
        }
    }
    showCountBubble(shouldShow = true) {
        const { launcher } = this;
        if (!Object(lodash["k" /* isUndefined */])(launcher)) {
            const bubble = launcher.querySelector('[data-type="icon-trigger-counter-bubble"]');
            if (!shouldShow) {
                bubble.style.display = "none";
            }
            else {
                bubble.style.display = "inline-flex";
            }
        }
    }
    updateCartItemCount(itemCount) {
        const { launcher } = this;
        if (!Object(lodash["k" /* isUndefined */])(launcher)) {
            const itemCountBubble = launcher.querySelector('[data-type="icon-trigger-counter"]');
            if (itemCount > 0) {
                itemCountBubble.innerHTML = `${itemCount}`;
                this.showCountBubble();
            }
            else {
                this.showCountBubble(false);
            }
        }
    }
}

// CONCATENATED MODULE: ./src/features/v2widgets/sidecart/CartStats.ts
const defaultStats = {
    lastEmptyTime: -1,
};
class CartStats {
    constructor() {
        this.storageKey = "mmsc/cartstats";
        const storedStats = localStorage.getItem(this.storageKey);
        this.stats = storedStats
            ? JSON.parse(storedStats)
            : {
                lastEmptyTime: -1,
            };
    }
    update(cart) {
        if (cart.items.length === 0) {
            this.stats.lastEmptyTime = Date.now();
            this.saveToLocalStorage();
        }
    }
    saveToLocalStorage() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.stats));
    }
    getStats() {
        return Object.assign(Object.assign({}, defaultStats), this.stats);
    }
}
const cartStats = new CartStats();

// EXTERNAL MODULE: ./src/utils/Cache.ts
var Cache = __webpack_require__(17);

// EXTERNAL MODULE: ./src/utils/constants.ts
var constants = __webpack_require__(6);

// EXTERNAL MODULE: ./src/utils/common.ts
var common = __webpack_require__(4);

// CONCATENATED MODULE: ./src/utils/Event.ts






const QUEUE_MAX = 20;
const QueueIdentifiers = {
    ACTIVE_QUEUE: "active_queue",
    FLUSH_QUEUE: "flush_queue",
};
class Event_Event {
    constructor({ id, appName, category, }) {
        this.eventQueue = new Cache["a" /* Cache */](true);
        this.queTimeout = -1;
        this.queWaitTime = 8 * 1000;
        this.retryQueTimeout = -1;
        this.maxRetries = 3;
        this.id = id;
        this.appName = appName;
        this.category = category;
    }
    init() {
        this.eventQueue.init(this.id);
        this.flushQueue();
    }
    flushQueue() {
        var _a, _b, _c;
        const previousQueue = this.eventQueue.get(QueueIdentifiers.FLUSH_QUEUE);
        if (!Object(lodash["e" /* isNull */])(previousQueue) && !Object(lodash["k" /* isUndefined */])(previousQueue)) {
            const now = new Date().getTime();
            if (now - previousQueue.queued > this.queWaitTime) {
                if (previousQueue.counter >= this.maxRetries) {
                    this.eventQueue.set(QueueIdentifiers.ACTIVE_QUEUE, [
                        ...((_a = this.eventQueue.get(QueueIdentifiers.ACTIVE_QUEUE)) !== null && _a !== void 0 ? _a : []),
                        ...previousQueue.events,
                    ]);
                    this.eventQueue.set(QueueIdentifiers.FLUSH_QUEUE, undefined);
                    this.flushQueue();
                    return;
                }
                this.eventQueue.set(QueueIdentifiers.FLUSH_QUEUE, Object.assign(Object.assign({}, previousQueue), { queued: new Date().getTime(), counter: previousQueue.counter + 1 }));
            }
            else {
                if (this.retryQueTimeout !== -1) {
                    return;
                }
                const nextTimerIn = this.queWaitTime -
                    (now - previousQueue.queued) +
                    1000;
                this.retryQueTimeout = window.setTimeout(() => {
                    this.retryQueTimeout = -1;
                    this.flushQueue();
                }, nextTimerIn);
                return;
            }
        }
        else {
            const events = (_b = this.eventQueue.get(QueueIdentifiers.ACTIVE_QUEUE)) !== null && _b !== void 0 ? _b : [];
            if (Array.isArray(events) && events.length > 0) {
                this.eventQueue.set(QueueIdentifiers.ACTIVE_QUEUE, []);
                this.eventQueue.set(QueueIdentifiers.FLUSH_QUEUE, {
                    events,
                    queued: new Date().getTime(),
                    counter: 1,
                });
            }
        }
        const events = (_c = this.eventQueue.get(QueueIdentifiers.FLUSH_QUEUE)) === null || _c === void 0 ? void 0 : _c.events;
        if (Array.isArray(events) && events.length > 0) {
            const reqBody = JSON.stringify(events);
            fetch(constants["a" /* EVENT_API_URL */], {
                method: "POST",
                body: reqBody,
            })
                .then(() => {
                this.eventQueue.set(QueueIdentifiers.FLUSH_QUEUE, undefined);
            })
                .catch(() => {
            });
        }
    }
    queueEvent(request) {
        var _a;
        const events = [
            ...((_a = this.eventQueue.get(QueueIdentifiers.ACTIVE_QUEUE)) !== null && _a !== void 0 ? _a : []),
            request,
        ];
        this.eventQueue.set(QueueIdentifiers.ACTIVE_QUEUE, events);
        if (this.queTimeout > 0) {
            window.clearTimeout(this.queTimeout);
            this.queTimeout = -1;
        }
        if (events.length >= QUEUE_MAX) {
            this.flushQueue();
        }
        else {
            this.queTimeout = window.setTimeout(() => {
                this.flushQueue();
            }, 1000);
        }
    }
    raiseEvent(eventData) {
        const { store } = Object(platform["a" /* getPlatformData */])();
        const { appName, category } = this;
        const url = window.location.href;
        const timeSinceEpoch = new Date().getTime() / 1000;
        const eventPayload = Object.assign({ app_name: appName, store_id: store, category, time: timeSinceEpoch, url, query: Object(common["e" /* getQueryObject */])() }, eventData);
        this.log(eventPayload);
        this.queueEvent(eventPayload);
    }
    log(payload) {
        utils_console["a" /* console */].debug(`Queuing event`, payload);
    }
}
const getEventInstance = (EventClass, globalKey) => {
    if (typeof window !== "undefined") {
        if (typeof window.mm === "undefined") {
            window.mm = {};
        }
        if (typeof window.mm.events === "undefined") {
            window.mm.events = {
                [globalKey]: new EventClass(),
            };
        }
        if (typeof window.mm.events[globalKey] === "undefined") {
            window.mm.events[globalKey] = new EventClass();
        }
        return window.mm.events[globalKey];
    }
    return new EventClass();
};

// CONCATENATED MODULE: ./src/features/v2widgets/utils/SidecartEvent.ts




var SideCartEventAction;
(function (SideCartEventAction) {
    SideCartEventAction["VIEW"] = "view";
    SideCartEventAction["OPEN"] = "open";
    SideCartEventAction["CLOSE"] = "close";
    SideCartEventAction["ADD_PRODUCT_RECOMMENDATION"] = "add_product_recommendation";
    SideCartEventAction["INCREASE_PRODUCT_QUANTITY"] = "increase_product_quantity";
    SideCartEventAction["CHOOSE_FREEBIE"] = "choose_freebie";
    SideCartEventAction["APPLY_COUPON"] = "apply_coupon";
    SideCartEventAction["CLICK_CHECKOUT"] = "click_checkout";
    SideCartEventAction["CONVERSION"] = "conversion";
})(SideCartEventAction || (SideCartEventAction = {}));
class SidecartEvent_SidecartEvent extends Event_Event {
    constructor() {
        super({
            id: "mm__sidecart_analytics",
            appName: "sidecart",
            category: "sidecart",
        });
    }
    view() {
        this.raiseEvent({
            action: SideCartEventAction.VIEW,
        });
    }
    open() {
        this.raiseEvent({
            action: SideCartEventAction.OPEN,
        });
    }
    close() {
        this.raiseEvent({
            action: SideCartEventAction.CLOSE,
        });
    }
    addProductFromRecommendation(productId) {
        this.raiseEvent({
            action: SideCartEventAction.ADD_PRODUCT_RECOMMENDATION,
            product_id: `${productId}`,
        });
    }
    addQuantity(productId) {
        this.raiseEvent({
            action: SideCartEventAction.INCREASE_PRODUCT_QUANTITY,
            product_id: `${productId}`,
        });
    }
    chooseFreebie(productId) {
        this.raiseEvent({
            action: SideCartEventAction.CHOOSE_FREEBIE,
            product_id: `${productId}`,
        });
    }
    applyCoupon(code, discount) {
        this.raiseEvent({
            action: SideCartEventAction.APPLY_COUPON,
            coupon_code: code,
            coupon_discount: discount,
        });
    }
    clickCheckout() {
        this.raiseEvent({
            action: SideCartEventAction.CLICK_CHECKOUT,
        });
    }
    convert() {
        this.raiseEvent({
            action: SideCartEventAction.CONVERSION,
        });
    }
    handleCartUpdate(payload, updatedCart) {
        const { intent, updateQuantity, add = [], discountCode } = payload;
        if ((add === null || add === void 0 ? void 0 : add.length) > 0) {
            let fn;
            if (intent === dist["UpdateIntent"].RECOMMENDATION_SELECTED ||
                intent === dist["UpdateIntent"].UPSELL_SELECTED) {
                fn = this.addProductFromRecommendation.bind(this);
            }
            else if (intent === dist["UpdateIntent"].BXGY_SELECTED) {
                fn = this.chooseFreebie.bind(this);
            }
            add.forEach(({ productId }) => fn === null || fn === void 0 ? void 0 : fn(productId));
        }
        else if (!Object(lodash["f" /* isNullOrUndefined */])(updateQuantity)) {
            const { type, productId } = updateQuantity;
            if (type === "increment") {
                this.addQuantity(productId);
            }
        }
        else if (Object(lodash["l" /* isValidString */])(discountCode)) {
            const { isApplied, amount } = isCouponApplied(updatedCart, discountCode);
            if (isApplied) {
                this.applyCoupon(discountCode, amount);
            }
        }
    }
}
const instance = getEventInstance(SidecartEvent_SidecartEvent, "sidecart");


// CONCATENATED MODULE: ./src/features/v2widgets/sidecart/SideCart.ts
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};















const IFRAME_ID = "mm_sidecart_v2";
class SideCart_SideCart {
    constructor() {
        this.channel = null;
        this.frameUrl = "";
        this.status = SideCartStatus.IDLE;
        this.iframe = this.setupFrame();
        this.cartFetchHandler = Object(lodash["b" /* debounce */])(this.onCartFetchIntercepted.bind(this), 500);
        this.cartUpdateHandler = Object(lodash["b" /* debounce */])(this.onCartUpdateIntercepted.bind(this), 500);
        this.cartChangeHandler = Object(lodash["b" /* debounce */])(this.onCartChangeIntercepted.bind(this), 500);
        this.cartClearHandler = Object(lodash["b" /* debounce */])(this.onCartClearIntercepted.bind(this), 500);
        this.itemAddHandler = Object(lodash["b" /* debounce */])(this.onItemAddIntercepted.bind(this), 500);
        this.setupInterception();
    }
    hideFrame(overrideFrame) {
        const frame = overrideFrame !== null && overrideFrame !== void 0 ? overrideFrame : this.iframe;
        if (frame) {
            frame.style.zIndex = HIDE_CART_ZINDEX;
            frame.style.backgroundColor = HIDE_CART_BG;
        }
    }
    showFrame(overrideFrame) {
        const frame = overrideFrame !== null && overrideFrame !== void 0 ? overrideFrame : this.iframe;
        if (frame) {
            frame.style.zIndex = SHOW_CART_ZINDEX;
            frame.style.backgroundColor = SHOW_CART_BG;
        }
    }
    setupFrame() {
        const shop = getShop();
        const { currency: { active_currency_code: currency }, } = Object(platform["a" /* getPlatformData */])();
        const domain = window.location.origin;
        this.frameUrl = `${{"USER_FEATURES_API":"https://mm.beta.getmason.io/api/features","APP_URL":"https://mm.beta.getmason.io/widgets/view","NODE_ENV":"staging"}.APP_URL}?storeName=${shop}&domain=${domain}&app=${dist["SIDECART_V2_APP"]}&version=${dist["SIDECART_V2_VERSION"]}&currency=${currency}`;
        const iframe = document.createElement("iframe");
        iframe.setAttribute("id", IFRAME_ID);
        iframe.src = this.frameUrl;
        iframe.style.position = "fixed";
        iframe.style.top = "0";
        iframe.style.right = "0";
        iframe.style.width = "100vw";
        iframe.style.height = "100%";
        iframe.style.border = "none";
        this.hideFrame(iframe);
        return iframe;
    }
    load() {
        if (!this.isFrameAdded()) {
            const { iframe } = this;
            document.body.appendChild(iframe);
            this.setStatus(SideCartStatus.ADDED);
            this.iframe = iframe;
            return new Promise((resolve, reject) => {
                iframe.addEventListener("load", () => {
                    Object(utils_console["b" /* debugLog */])("iframe load event received");
                    this.onFrameLoad(resolve, reject);
                });
                iframe.addEventListener("error", () => {
                    this.onFrameLoadErred();
                    reject();
                });
            });
        }
        return Promise.resolve();
    }
    isFrameAdded() {
        return !Object(lodash["e" /* isNull */])(this.iframe.parentNode);
    }
    isReady() {
        const { status } = this;
        return (status === SideCartStatus.READY ||
            status === SideCartStatus.CLOSED ||
            status === SideCartStatus.OPENED ||
            status === SideCartStatus.OPENING);
    }
    openCart(action, overrideCart) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            if (this.isReady()) {
                const isUserClickEvent = action === dist["CartEventAction"].LAUNCHER_CLICK ||
                    action === dist["CartEventAction"].OPEN_CART;
                const avoidCartUpdate = isUserClickEvent &&
                    this.status !== SideCartStatus.READY;
                this.setStatus(SideCartStatus.OPENING);
                this.showFrame();
                (_a = this.channel) === null || _a === void 0 ? void 0 : _a.call({
                    method: dist["ChannelMethod"].OPEN_CART,
                    params: {
                        loading: !avoidCartUpdate,
                    },
                    success: () => {
                        this.setStatus(SideCartStatus.OPENED);
                        if (isUserClickEvent) {
                            instance.open();
                        }
                        instance.view();
                    },
                });
                if (!avoidCartUpdate) {
                    this.sendUpdatedCart(action, overrideCart);
                }
            }
        });
    }
    closeCart() {
        var _a;
        if (this.isReady()) {
            Object(utils_console["b" /* debugLog */])("Closing cart");
            (_a = this.launcher) === null || _a === void 0 ? void 0 : _a.show(true);
            this.setStatus(SideCartStatus.CLOSED);
            this.hideFrame();
            instance.close();
        }
    }
    onFrameLoad(resolve, reject) {
        if (!this.iframe) {
            return;
        }
        Object(utils_console["b" /* debugLog */])("Channel to iframe built");
        this.channel = jschannel_default.a.build({
            window: this.iframe.contentWindow,
            origin: this.frameUrl,
            scope: dist["SIDECART_V2_APP"],
        });
        this.setupChannelEvents();
        const { currency: { active_currency_code: currencyCode }, store, } = Object(platform["a" /* getPlatformData */])();
        const storeData = {
            currencyCode,
            deviceId: Object(deviceID["a" /* getDeviceID */])(),
            path: window.location.pathname,
            store,
            shopUrl: window.location.href,
        };
        Object(utils_console["b" /* debugLog */])(`Listening for HELLO from iframe`);
        this.channel.bind(dist["ChannelMethod"].HELLO, (_, params) => {
            const { message, launcher } = params;
            Object(utils_console["b" /* debugLog */])(`HELLO received with message"${message}"`);
            if (message === dist["HELLO_MESSAGE"]) {
                this.setStatus(SideCartStatus.READY);
                Object(utils_console["b" /* debugLog */])(`Sidecart status set as READY`);
                if (!Object(lodash["k" /* isUndefined */])(launcher)) {
                    Object(utils_console["b" /* debugLog */])(`Setting up launcher with `, launcher);
                    this.setupLauncher(launcher);
                }
                resolve();
                return {
                    message: dist["ACK_HELLO_MESSAGE"],
                    storeData,
                };
            }
            this.setStatus(SideCartStatus.HELLO_FAILED);
            reject();
            return undefined;
        });
    }
    setStatus(status) {
        this.status = status;
        Object(utils_console["b" /* debugLog */])(`Setting status to ${status}`);
    }
    onFrameLoadErred() {
        var _a;
        if (!this.iframe) {
            return;
        }
        (_a = this.iframe.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(this.iframe);
        this.setStatus(SideCartStatus.REMOVED);
        Object(utils_console["b" /* debugLog */])("iframe removed");
    }
    fetchCartProducts(cart) {
        return __awaiter(this, void 0, void 0, function* () {
            const { items } = cart;
            const productPromises = {};
            if (items.length > 0) {
                items.reduce((acc, item) => {
                    acc[item.product_id] = Product["a" /* Product */].load(item.handle);
                    return acc;
                }, productPromises);
            }
            return Object(lodash["n" /* resolvePromiseMap */])(productPromises);
        });
    }
    fetchCart() {
        return __awaiter(this, void 0, void 0, function* () {
            const fetch = Object(Interceptor["c" /* getInterceptDisabledFetch */])();
            const response = yield fetch(apis["c" /* ajaxCartAPIs */].fetch, {
                method: "GET",
            });
            return response.json();
        });
    }
    getCartResponse(action, overrideCart) {
        return __awaiter(this, void 0, void 0, function* () {
            let finalCart = overrideCart;
            if (!finalCart) {
                finalCart = yield this.fetchCart();
            }
            let productMap = {};
            if (finalCart) {
                productMap = yield this.fetchCartProducts(finalCart);
            }
            return {
                action,
                cart: finalCart,
                products: productMap,
            };
        });
    }
    sendUpdatedCart(action, overrideCart) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getCartResponse(action, overrideCart);
            this.updateCartItemCount(response.cart);
            (_a = this.channel) === null || _a === void 0 ? void 0 : _a.call({
                method: dist["ChannelMethod"].CART,
                params: response,
                success: () => {
                    Object(utils_console["b" /* debugLog */])("Cart passed to frame", response);
                },
            });
            return response;
        });
    }
    updateCartItemCount(cart) {
        var _a;
        const { item_count: itemCount = 0 } = cart;
        const cartCountBubbles = document.querySelectorAll(".cart-count-bubble");
        if (cartCountBubbles.length > 0) {
            cartCountBubbles.forEach((countBubble) => {
                countBubble.innerHTML = `${itemCount}`;
            });
        }
        (_a = this.launcher) === null || _a === void 0 ? void 0 : _a.updateCartItemCount(itemCount);
    }
    onCartFetchIntercepted(payload) {
        const { method, path, response } = payload;
        if (method === "GET" && path === apis["c" /* ajaxCartAPIs */].fetch && response) {
            Object(utils_console["b" /* debugLog */])("Cart fetch detected");
            this.updateCartItemCount(response);
        }
        cartStats.update(response);
    }
    onItemAddIntercepted() {
        Object(utils_console["b" /* debugLog */])("Item addition to cart detected");
        this.openCart(dist["CartEventAction"].ADD_TRIGGER);
    }
    cartUpdated(action, cart) {
        cartStats.update(cart);
        const useCapturedCart = Array.isArray(cart.items) &&
            cart.items.every((item) => typeof (item === null || item === void 0 ? void 0 : item.quantity) === "number" && (item === null || item === void 0 ? void 0 : item.quantity) > 0);
        this.openCart(action, useCapturedCart ? cart : undefined);
    }
    onCartUpdateIntercepted(payload) {
        Object(utils_console["b" /* debugLog */])("Cart update detected", payload);
        const { response, request } = payload;
        const { updates } = request;
        if (!Object(lodash["f" /* isNullOrUndefined */])(updates)) {
            Object(utils_console["b" /* debugLog */])("Update call qualifies to open cart");
            this.cartUpdated(dist["CartEventAction"].UPDATE_TRIGGER, response);
        }
    }
    onCartChangeIntercepted(payload) {
        Object(utils_console["b" /* debugLog */])("Cart change detected", payload);
        const { response, request } = payload;
        const { quantity } = request;
        if (!Object(lodash["f" /* isNullOrUndefined */])(quantity)) {
            Object(utils_console["b" /* debugLog */])("Change call qualifies to open cart");
            this.cartUpdated(dist["CartEventAction"].CHANGE_TRIGGER, response);
        }
    }
    onCartClearIntercepted(payload) {
        Object(utils_console["b" /* debugLog */])("Cart clear detected", payload);
        const { response } = payload;
        this.cartUpdated(dist["CartEventAction"].CLEAR_CART, response);
    }
    setupInterception() {
        Object(utils_console["b" /* debugLog */])("Setting up interception");
        Interceptor["b" /* default */].listen(Interceptor["a" /* Event */].RESPONSE, {
            method: "GET",
            path: apis["c" /* ajaxCartAPIs */].fetch,
        }, this.cartFetchHandler.bind(this));
        Interceptor["b" /* default */].listen(Interceptor["a" /* Event */].RESPONSE, {
            path: [apis["c" /* ajaxCartAPIs */].add, apis["d" /* themeCartAPIs */].add],
            method: "POST",
        }, this.itemAddHandler.bind(this));
        Interceptor["b" /* default */].listen(Interceptor["a" /* Event */].RESPONSE, {
            path: [apis["c" /* ajaxCartAPIs */].update, apis["d" /* themeCartAPIs */].update],
            method: "POST",
        }, this.cartUpdateHandler.bind(this));
        Interceptor["b" /* default */].listen(Interceptor["a" /* Event */].RESPONSE, {
            path: [apis["c" /* ajaxCartAPIs */].change, apis["d" /* themeCartAPIs */].change],
            method: "POST",
        }, this.cartChangeHandler.bind(this));
        Interceptor["b" /* default */].listen(Interceptor["a" /* Event */].RESPONSE, {
            path: [apis["c" /* ajaxCartAPIs */].clear],
            method: "POST",
        }, this.cartClearHandler.bind(this));
    }
    updateCart(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const { add = [], avoidCartUpdateEvent = false, remove = [], updateQuantity, discountCode, cartProperties, itemProperties, } = payload;
            const fetch = Object(Interceptor["c" /* getInterceptDisabledFetch */])();
            let finalCart;
            let action;
            let changed = false;
            const callUpdateAPI = (updateAction, body) => __awaiter(this, void 0, void 0, function* () {
                const updatedCart = (yield fetch(apis["c" /* ajaxCartAPIs */].update, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(body),
                }).then((res) => res.json()));
                finalCart = convertToShopifyCart(updatedCart);
                action = updateAction;
                changed = true;
            });
            if (remove.length > 0) {
                const removeItemsBody = remove.reduce((acc, lineItemKey) => (Object.assign(Object.assign({}, acc), { [lineItemKey]: 0 })), {});
                yield callUpdateAPI(dist["CartEventAction"].REMOVE_ITEM, {
                    updates: removeItemsBody,
                });
            }
            if (add.length > 0) {
                yield fetch(apis["c" /* ajaxCartAPIs */].add, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        items: stringifyAddProperties(add),
                    }),
                });
                finalCart = yield this.fetchCart();
                action = dist["CartEventAction"].ADD_ITEM;
                changed = true;
            }
            if (!Object(lodash["k" /* isUndefined */])(updateQuantity)) {
                yield callUpdateAPI(dist["CartEventAction"].UPDATE_ITEM, {
                    updates: {
                        [updateQuantity.id]: updateQuantity.quantity,
                    },
                });
            }
            if (Object(lodash["j" /* isString */])(discountCode)) {
                yield fetch(`${apis["c" /* ajaxCartAPIs */].applyDiscountPrefix}${Object(lodash["l" /* isValidString */])(discountCode) ? discountCode : apis["b" /* INVALID_DISCOUNT_CODE */]}`, {
                    method: "GET",
                });
                finalCart = yield this.fetchCart();
                action = dist["CartEventAction"].UPDATE_DISCOUNT;
                changed = true;
            }
            instance.handleCartUpdate(payload, finalCart);
            if (Object(lodash["i" /* isPlainObject */])(cartProperties)) {
                yield callUpdateAPI(dist["CartEventAction"].UPDATE_CART_PROPERTIES, {
                    attributes: stringifyCartProperties(cartProperties),
                });
            }
            if (Object(lodash["i" /* isPlainObject */])(itemProperties)) {
                const updatePromises = Object.keys(itemProperties).map((lineKey) => {
                    const properties = itemProperties[lineKey];
                    return fetch(apis["c" /* ajaxCartAPIs */].change, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            id: lineKey,
                            properties: stringifyItemProperties(properties),
                        }),
                    });
                });
                yield Promise.all(updatePromises);
                finalCart = yield this.fetchCart();
                action = dist["CartEventAction"].UPDATE_ITEM_PROPERTIES;
                changed = true;
            }
            if (changed) {
                if (avoidCartUpdateEvent) {
                    return this.getCartResponse(action, finalCart);
                }
                return this.sendUpdatedCart(action, finalCart);
            }
            return undefined;
        });
    }
    setupLauncher(config) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.launcher) {
                this.launcher = new Launcher_Launcher(config, () => {
                    var _a;
                    (_a = this.launcher) === null || _a === void 0 ? void 0 : _a.show(false);
                    this.openCart(dist["CartEventAction"].LAUNCHER_CLICK);
                });
                const cart = yield this.fetchCart();
                this.launcher.updateCartItemCount(cart.item_count);
                this.launcher.show(true);
            }
        });
    }
    setupChannelEvents() {
        const { channel } = this;
        if (channel) {
            channel.bind(dist["ChannelMethod"].CLOSE_CART, this.closeCart.bind(this));
            channel.bind(dist["ChannelMethod"].UPDATE_CART, (transaction, payload) => __awaiter(this, void 0, void 0, function* () {
                transaction.delayReturn(true);
                const cartResponse = yield this.updateCart(payload);
                transaction.complete(cartResponse);
            }));
            channel.bind(dist["ChannelMethod"].CHECKOUT, (_t, payload) => __awaiter(this, void 0, void 0, function* () {
                Object(checkout["a" /* processCheckout */])(payload);
            }));
            channel.bind(dist["ChannelMethod"].GET_QUERY, () => {
                Object(utils_console["b" /* debugLog */])("GET_QUERY received");
                const queryParams = new URLSearchParams(window.location.search);
                return Array.from(queryParams.entries()).reduce((a, k) => {
                    return Object.assign(Object.assign({}, a), { [k[0]]: k[1] });
                }, {});
            });
            channel.bind(dist["ChannelMethod"].GET_PRODUCTS, (transaction, payload) => __awaiter(this, void 0, void 0, function* () {
                transaction.delayReturn(true);
                Object(utils_console["b" /* debugLog */])("GET_PRODUCTS received ", payload);
                const { products, available } = payload;
                const productObjects = yield Product["a" /* Product */].getProducts(products, available);
                Object(utils_console["b" /* debugLog */])("GET_PRODUCTS responded with ", productObjects);
                transaction.complete({
                    products: productObjects,
                });
            }));
            channel.bind(dist["ChannelMethod"].CART_STATS, () => {
                Object(utils_console["b" /* debugLog */])("CART_STATS received");
                const stats = cartStats.getStats();
                Object(utils_console["b" /* debugLog */])("Responding to CART_STATS ", stats);
                return stats;
            });
        }
    }
}
/* harmony default export */ var sidecart_SideCart = (SideCart_SideCart);

// CONCATENATED MODULE: ./src/features/v2widgets/sidecart/index.ts
var sidecart_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





(() => sidecart_awaiter(void 0, void 0, void 0, function* () {
    try {
        CFEvent["a" /* CFEvent */].init();
        const sideCart = new sidecart_SideCart();
        yield sideCart.load();
        Object(listeners["a" /* setupCartOpenListeners */])(() => {
            sideCart.openCart(dist["CartEventAction"].OPEN_CART);
        });
    }
    catch (ex) {
        console.error(ex);
        Object(utils_console["b" /* debugLog */])("Not setting up cart click listeners");
    }
}))();


/***/ })
/******/ ]);