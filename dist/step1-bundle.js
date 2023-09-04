/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/@cli/@views/InputViews/BonusNumberInputView/BonusNumberInputView.js":
/*!*********************************************************************************!*\
  !*** ./src/@cli/@views/InputViews/BonusNumberInputView/BonusNumberInputView.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util_Console_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../util/Console.js */ "./src/@cli/util/Console.js");
/* harmony import */ var _utils_validate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils/validate.js */ "./src/utils/validate.js");



class BonusNumberInputView {
    static async readInput() {
        while (true) {
            try {
                const value = await _util_Console_js__WEBPACK_IMPORTED_MODULE_0__["default"].readLine("\n> 보너스 번호를 입력해 주세요. ");
                BonusNumberInputView.#validateValue(value);
                return value;
            } catch (e) {
                _util_Console_js__WEBPACK_IMPORTED_MODULE_0__["default"].print(e.message);
            }
        }
    }

    static #validateValue(value) {
        if(!(0,_utils_validate_js__WEBPACK_IMPORTED_MODULE_1__.isNaturalNumber)(value))
            throw new Error("보너스 번호 입력은 자연수만 가능합니다.");
    };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BonusNumberInputView);

/***/ }),

/***/ "./src/@cli/@views/InputViews/MoneyInputView/MoneyInputView.js":
/*!*********************************************************************!*\
  !*** ./src/@cli/@views/InputViews/MoneyInputView/MoneyInputView.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util_Console_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../util/Console.js */ "./src/@cli/util/Console.js");
/* harmony import */ var _consts_Lotto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../consts/Lotto.js */ "./src/consts/Lotto.js");
/* harmony import */ var _utils_validate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils/validate.js */ "./src/utils/validate.js");




class MoneyInputView {
    static async readInput() {
        while (true){
            try {
                const value = await _util_Console_js__WEBPACK_IMPORTED_MODULE_0__["default"].readLine("> 구입금액을 입력해 주세요. ");
                MoneyInputView.#validateValue(value);
                return value;
            } catch (e) {
                _util_Console_js__WEBPACK_IMPORTED_MODULE_0__["default"].print(e.message);
            }
        }
    }

    static #validateValue(value) {
        if(!(0,_utils_validate_js__WEBPACK_IMPORTED_MODULE_2__.isValidNumberString)(value))
            throw new Error("입력은 숫자만 가능합니다.");
        if(!(0,_utils_validate_js__WEBPACK_IMPORTED_MODULE_2__.isNaturalNumber)(value))
            throw new Error("로또 구입 금액은 자연수여야 합니다.");
        if(!MoneyInputView.#isMultipleOfLottoPrice(Number(value)))
            throw new Error(`로또 구입 금액은 ${_consts_Lotto_js__WEBPACK_IMPORTED_MODULE_1__.LOTTO_INFO.PRICE}의 배수여야 합니다.`);
    };

    static #isMultipleOfLottoPrice(value) {
        return value % _consts_Lotto_js__WEBPACK_IMPORTED_MODULE_1__.LOTTO_INFO.PRICE === 0;
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MoneyInputView);

/***/ }),

/***/ "./src/@cli/@views/InputViews/ReplayInputView/ReplayInputView.js":
/*!***********************************************************************!*\
  !*** ./src/@cli/@views/InputViews/ReplayInputView/ReplayInputView.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util_Console_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../util/Console.js */ "./src/@cli/util/Console.js");


class ReplayInputView {
    static async readInput() {
        while (true) {
            try {
                const value = await _util_Console_js__WEBPACK_IMPORTED_MODULE_0__["default"].readLine("\n> 다시 시작하시겠습니까? (y/n) ");
                ReplayInputView.#validateValue(value);
                return value;
            } catch (e) {
                _util_Console_js__WEBPACK_IMPORTED_MODULE_0__["default"].print(e.message);
            }
        }
    }

    static #validateValue(value) {
       if(!ReplayInputView.#isYorN(value))
           throw new Error("y 또는 n을 입력해주세요.");
    };

    static #isYorN(value) {
        return value === "y" || value === "n";
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReplayInputView);

/***/ }),

/***/ "./src/@cli/@views/InputViews/WinningConditionInputView/WinningConditionInputView.js":
/*!*******************************************************************************************!*\
  !*** ./src/@cli/@views/InputViews/WinningConditionInputView/WinningConditionInputView.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util_Console_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../util/Console.js */ "./src/@cli/util/Console.js");
/* harmony import */ var _consts_Lotto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../consts/Lotto.js */ "./src/consts/Lotto.js");
/* harmony import */ var _BonusNumberInputView_BonusNumberInputView_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BonusNumberInputView/BonusNumberInputView.js */ "./src/@cli/@views/InputViews/BonusNumberInputView/BonusNumberInputView.js");
/* harmony import */ var _WinningNumberInputView_WinningNumberInputView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../WinningNumberInputView/WinningNumberInputView.js */ "./src/@cli/@views/InputViews/WinningNumberInputView/WinningNumberInputView.js");





class WinningConditionInputView {
    static async readInput() {
        while (true){
            try {
                const winningNumbersString = await _WinningNumberInputView_WinningNumberInputView_js__WEBPACK_IMPORTED_MODULE_3__["default"].readInput();
                const bonusNumberString = await _BonusNumberInputView_BonusNumberInputView_js__WEBPACK_IMPORTED_MODULE_2__["default"].readInput();
                WinningConditionInputView.#validateValue(winningNumbersString, bonusNumberString);
                return {winningNumbersString, bonusNumberString}
            } catch (e) {
                _util_Console_js__WEBPACK_IMPORTED_MODULE_0__["default"].print(e.message);
            }
        }
    }

    static #validateValue(winningNumbersString, bonusNumberString) {
        const winningNumbers = winningNumbersString.split(",").map((number) => Number(number));
        const bonusNumber = Number(bonusNumberString);
        if(!this.#isAllUniqueNumber([...winningNumbers, bonusNumber]))
            throw new Error("당첨 번호는 중복될 수 없습니다.");
        WinningConditionInputView.#validateWinningNumbers(winningNumbers);
        WinningConditionInputView.#validateBonusNumber(bonusNumber);
    }

    static #validateWinningNumbers(winningNumbers) {
        if(!this.#isAllValidLottoNumber(winningNumbers))
            throw new Error(`입력은 ${_consts_Lotto_js__WEBPACK_IMPORTED_MODULE_1__.LOTTO_INFO.NUMBER_MIN} ~ ${_consts_Lotto_js__WEBPACK_IMPORTED_MODULE_1__.LOTTO_INFO.NUMBER_MAX} 사이의 숫자여야 합니다.`);
    }

    static #validateBonusNumber(bonusNumber) {
        if(!this.#isValidateLottoNumber(bonusNumber))
            throw new Error(`입력은 ${_consts_Lotto_js__WEBPACK_IMPORTED_MODULE_1__.LOTTO_INFO.NUMBER_MIN} ~ ${_consts_Lotto_js__WEBPACK_IMPORTED_MODULE_1__.LOTTO_INFO.NUMBER_MAX} 사이의 숫자여야 합니다.`);
    }

    static #isAllValidLottoNumber (numbers) {
        return numbers.every((number) => this.#isValidateLottoNumber(number));
    }

    static #isValidateLottoNumber (number) {
        return Number(number) >= _consts_Lotto_js__WEBPACK_IMPORTED_MODULE_1__.LOTTO_INFO.NUMBER_MIN && Number(number) <= _consts_Lotto_js__WEBPACK_IMPORTED_MODULE_1__.LOTTO_INFO.NUMBER_MAX;
    }

    static #isAllUniqueNumber (numbers) {
        return numbers.length === new Set(numbers).size;
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WinningConditionInputView);

/***/ }),

/***/ "./src/@cli/@views/InputViews/WinningNumberInputView/WinningNumberInputView.js":
/*!*************************************************************************************!*\
  !*** ./src/@cli/@views/InputViews/WinningNumberInputView/WinningNumberInputView.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util_Console_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../util/Console.js */ "./src/@cli/util/Console.js");
/* harmony import */ var _consts_Lotto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../consts/Lotto.js */ "./src/consts/Lotto.js");
/* harmony import */ var _utils_validate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils/validate.js */ "./src/utils/validate.js");




class WinningNumberInputView {
    static async readInput() {
        while (true){
            try {
                const value = await _util_Console_js__WEBPACK_IMPORTED_MODULE_0__["default"].readLine("\n> 당첨 번호를 입력해 주세요. ");
                WinningNumberInputView.#validateValue(value);
                return value;
            } catch (e) {
                _util_Console_js__WEBPACK_IMPORTED_MODULE_0__["default"].print(e.message);
            }
        }
    }

    static #validateValue(value) {
        if(!(0,_utils_validate_js__WEBPACK_IMPORTED_MODULE_2__.isValidNumberListString)(value))
            throw new Error("입력은 숫자와 쉼표만으로 이루어져야 합니다.");
        if(!WinningNumberInputView.#isAllNaturalNumber(value))
            throw new Error("쉼표로 구분된 각각의 숫자는 자연수만 가능합니다.");
        if(!WinningNumberInputView.#isSameToLottoSize(value))
            throw new Error(`입력된 숫자의 개수는 ${_consts_Lotto_js__WEBPACK_IMPORTED_MODULE_1__.LOTTO_INFO.SIZE}개여야 합니다.`);
    };

    static #isAllNaturalNumber(value) {
        return value.split(",").every(_utils_validate_js__WEBPACK_IMPORTED_MODULE_2__.isNaturalNumber);
    }

    static #isSameToLottoSize(value) {
        return value.split(",").length === _consts_Lotto_js__WEBPACK_IMPORTED_MODULE_1__.LOTTO_INFO.SIZE;
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WinningNumberInputView);

/***/ }),

/***/ "./src/@cli/@views/OutputViews/LottoAmountOutputView.js":
/*!**************************************************************!*\
  !*** ./src/@cli/@views/OutputViews/LottoAmountOutputView.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util_Console_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/Console.js */ "./src/@cli/util/Console.js");


class LottoAmountOutputView {
    static render(lottoAmount){
        _util_Console_js__WEBPACK_IMPORTED_MODULE_0__["default"].print(`${lottoAmount}개를 구매했습니다.`)
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LottoAmountOutputView);

/***/ }),

/***/ "./src/@cli/@views/OutputViews/LottoListOutputView.js":
/*!************************************************************!*\
  !*** ./src/@cli/@views/OutputViews/LottoListOutputView.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util_Console_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/Console.js */ "./src/@cli/util/Console.js");


class LottoListOutputView {
    static render (lottoList) {
        lottoList.forEach((lotto) => _util_Console_js__WEBPACK_IMPORTED_MODULE_0__["default"].print(lotto.getSortedLottoNumbers()));
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LottoListOutputView);

/***/ }),

/***/ "./src/@cli/@views/OutputViews/LottoResultOutputView.js":
/*!**************************************************************!*\
  !*** ./src/@cli/@views/OutputViews/LottoResultOutputView.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util_Console_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/Console.js */ "./src/@cli/util/Console.js");
/* harmony import */ var _consts_Lotto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../consts/Lotto.js */ "./src/consts/Lotto.js");



class LottoResultOutputView {
    static render(lottoResultSummary){
        _util_Console_js__WEBPACK_IMPORTED_MODULE_0__["default"].print(`\n당첨 통계`);
        _util_Console_js__WEBPACK_IMPORTED_MODULE_0__["default"].print(`--------------------`);
        lottoResultSummary.forEach((lottoResult) => {
            if(lottoResult.bonus) {
                _util_Console_js__WEBPACK_IMPORTED_MODULE_0__["default"].print(`${lottoResult.match}개 일치, 보너스 볼 일치 (${_consts_Lotto_js__WEBPACK_IMPORTED_MODULE_1__.LOTTO_INFO.PRIZE[lottoResult.rank].toLocaleString()}원) - ${lottoResult.count}개`);
            } else {
                _util_Console_js__WEBPACK_IMPORTED_MODULE_0__["default"].print(`${lottoResult.match}개 일치 (${_consts_Lotto_js__WEBPACK_IMPORTED_MODULE_1__.LOTTO_INFO.PRIZE[lottoResult.rank].toLocaleString()}원) - ${lottoResult.count}개`);
            }
        });
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LottoResultOutputView);

/***/ }),

/***/ "./src/@cli/@views/OutputViews/ProfitRateOutputView.js":
/*!*************************************************************!*\
  !*** ./src/@cli/@views/OutputViews/ProfitRateOutputView.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util_Console_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/Console.js */ "./src/@cli/util/Console.js");


class ProfitRateOutputView {
    static render(profitRate){
        _util_Console_js__WEBPACK_IMPORTED_MODULE_0__["default"].print(`총 수익률은 ${profitRate}%입니다.`);
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfitRateOutputView);

/***/ }),

/***/ "./src/@cli/LottoGameInCli.js":
/*!************************************!*\
  !*** ./src/@cli/LottoGameInCli.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _views_InputViews_MoneyInputView_MoneyInputView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./@views/InputViews/MoneyInputView/MoneyInputView.js */ "./src/@cli/@views/InputViews/MoneyInputView/MoneyInputView.js");
/* harmony import */ var _views_OutputViews_LottoAmountOutputView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./@views/OutputViews/LottoAmountOutputView.js */ "./src/@cli/@views/OutputViews/LottoAmountOutputView.js");
/* harmony import */ var _consts_Lotto_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../consts/Lotto.js */ "./src/consts/Lotto.js");
/* harmony import */ var _domain_LottoFactory_LottoFactory_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../domain/LottoFactory/LottoFactory.js */ "./src/domain/LottoFactory/LottoFactory.js");
/* harmony import */ var _views_OutputViews_LottoListOutputView_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./@views/OutputViews/LottoListOutputView.js */ "./src/@cli/@views/OutputViews/LottoListOutputView.js");
/* harmony import */ var _views_InputViews_WinningConditionInputView_WinningConditionInputView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./@views/InputViews/WinningConditionInputView/WinningConditionInputView.js */ "./src/@cli/@views/InputViews/WinningConditionInputView/WinningConditionInputView.js");
/* harmony import */ var _domain_LottoWinningCondition_LottoWinningCondition_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../domain/LottoWinningCondition/LottoWinningCondition.js */ "./src/domain/LottoWinningCondition/LottoWinningCondition.js");
/* harmony import */ var _domain_LottoResultReport_LottoResultReport_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../domain/LottoResultReport/LottoResultReport.js */ "./src/domain/LottoResultReport/LottoResultReport.js");
/* harmony import */ var _views_OutputViews_LottoResultOutputView_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./@views/OutputViews/LottoResultOutputView.js */ "./src/@cli/@views/OutputViews/LottoResultOutputView.js");
/* harmony import */ var _views_OutputViews_ProfitRateOutputView_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./@views/OutputViews/ProfitRateOutputView.js */ "./src/@cli/@views/OutputViews/ProfitRateOutputView.js");
/* harmony import */ var _views_InputViews_ReplayInputView_ReplayInputView_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./@views/InputViews/ReplayInputView/ReplayInputView.js */ "./src/@cli/@views/InputViews/ReplayInputView/ReplayInputView.js");













class LottoGameInCli {
    async play () {
        const money = await _views_InputViews_MoneyInputView_MoneyInputView_js__WEBPACK_IMPORTED_MODULE_0__["default"].readInput();
        const lottoAmount = money / _consts_Lotto_js__WEBPACK_IMPORTED_MODULE_2__.LOTTO_INFO.PRICE;
        _views_OutputViews_LottoAmountOutputView_js__WEBPACK_IMPORTED_MODULE_1__["default"].render(lottoAmount);

        const lottoList = _domain_LottoFactory_LottoFactory_js__WEBPACK_IMPORTED_MODULE_3__["default"].createLottoList(lottoAmount);
        _views_OutputViews_LottoListOutputView_js__WEBPACK_IMPORTED_MODULE_4__["default"].render(lottoList);

        const {winningNumbersString,bonusNumberString} = await _views_InputViews_WinningConditionInputView_WinningConditionInputView_js__WEBPACK_IMPORTED_MODULE_5__["default"].readInput();
        const lottoWinningCondition = new _domain_LottoWinningCondition_LottoWinningCondition_js__WEBPACK_IMPORTED_MODULE_6__["default"](winningNumbersString, bonusNumberString);

        lottoList.forEach((lotto) => lotto.setWinningRank(lottoWinningCondition.winningNumbers, lottoWinningCondition.bonusNumber));

        const lottoResultReport = new _domain_LottoResultReport_LottoResultReport_js__WEBPACK_IMPORTED_MODULE_7__["default"](lottoList);
        _views_OutputViews_LottoResultOutputView_js__WEBPACK_IMPORTED_MODULE_8__["default"].render(lottoResultReport.getLottoResultSummary({order:'DESC'}));
        _views_OutputViews_ProfitRateOutputView_js__WEBPACK_IMPORTED_MODULE_9__["default"].render(lottoResultReport.getProfitRate());

        const answer = await _views_InputViews_ReplayInputView_ReplayInputView_js__WEBPACK_IMPORTED_MODULE_10__["default"].readInput();
        if (answer === 'y') {
            await this.play();
        }
        process.exit(0);
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LottoGameInCli);

/***/ }),

/***/ "./src/@cli/util/Console.js":
/*!**********************************!*\
  !*** ./src/@cli/util/Console.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var node_readline_promises__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node:readline/promises */ "node:readline/promises");
/* harmony import */ var node_readline_promises__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_readline_promises__WEBPACK_IMPORTED_MODULE_0__);


const rl = (0,node_readline_promises__WEBPACK_IMPORTED_MODULE_0__.createInterface)({
    input: process.stdin,
    output: process.stdout,
});

const Console = {
    async readLine(question) {
        return await rl.question(question);
    },
    print(...message) {
        console.log(...message);
    },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Console);

/***/ }),

/***/ "./src/consts/Lotto.js":
/*!*****************************!*\
  !*** ./src/consts/Lotto.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LOTTO_INFO: () => (/* binding */ LOTTO_INFO)
/* harmony export */ });
const LOTTO_INFO = Object.freeze({
    SIZE: 6,
    NUMBER_MIN: 1,
    NUMBER_MAX: 45,
    PRICE: 1_000,
    WINNING_CONDITION: [
        {MATCH: 6, BONUS: false, RANK: 1},
        {MATCH: 5, BONUS: true, RANK: 2},
        {MATCH: 5, BONUS: false, RANK: 3},
        {MATCH: 4, BONUS: false, RANK: 4},
        {MATCH: 3, BONUS: false, RANK: 5},
    ],
    PRIZE: Object.freeze({
        1 : 2_000_000_000,
        2 : 30_000_000,
        3 : 1_500_000,
        4 : 50_000,
        5 : 5_000,
    })
});

/***/ }),

/***/ "./src/domain/LottoFactory/LottoFactory.js":
/*!*************************************************!*\
  !*** ./src/domain/LottoFactory/LottoFactory.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _consts_Lotto_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../consts/Lotto.js */ "./src/consts/Lotto.js");
/* harmony import */ var _Lotto_Lotto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Lotto/Lotto.js */ "./src/domain/Lotto/Lotto.js");
/* harmony import */ var _utils_random_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/random.js */ "./src/utils/random.js");




//랜덤한 로또 생성을 담당하는 객체 (모든 요소가 랜덤하기 때문에 테스트할 필요는 없어보임)
class LottoFactory {
    static #createRandomLottoNumbers() {
        const lottoNumbers = [];
        while (lottoNumbers.length < _consts_Lotto_js__WEBPACK_IMPORTED_MODULE_0__.LOTTO_INFO.SIZE) {
            const randomNumber = LottoFactory.#getRandomLottoNumber();
            if (!lottoNumbers.includes(randomNumber)) {
                lottoNumbers.push(randomNumber);
            }
        }
        return lottoNumbers;
    }

    static #getRandomLottoNumber() {
        return (0,_utils_random_js__WEBPACK_IMPORTED_MODULE_2__.getRandomNumber)(_consts_Lotto_js__WEBPACK_IMPORTED_MODULE_0__.LOTTO_INFO.NUMBER_MIN, _consts_Lotto_js__WEBPACK_IMPORTED_MODULE_0__.LOTTO_INFO.NUMBER_MAX);
    }

    static createLottoList(lottoCount) {
        return Array.from({length: lottoCount}, () => new _Lotto_Lotto_js__WEBPACK_IMPORTED_MODULE_1__.Lotto(LottoFactory.#createRandomLottoNumbers()));
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LottoFactory);

/***/ }),

/***/ "./src/domain/LottoResultReport/LottoResultReport.js":
/*!***********************************************************!*\
  !*** ./src/domain/LottoResultReport/LottoResultReport.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _consts_Lotto_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../consts/Lotto.js */ "./src/consts/Lotto.js");


class LottoResultReport {
    #lottoResultSummary;
    #profitRate;
    constructor(lottoList) {
        this.#lottoResultSummary = _consts_Lotto_js__WEBPACK_IMPORTED_MODULE_0__.LOTTO_INFO.WINNING_CONDITION.map(CONDITION => ({
            match: CONDITION.MATCH,
            bonus: CONDITION.BONUS,
            rank: CONDITION.RANK,
            count: this.#getWinningRankCount(lottoList, CONDITION.RANK),
        }))
        this.#profitRate = this.#calculateProfitRate(lottoList);
    }

    #getWinningRankCount(lottoList, winningRank) {
        return lottoList.filter(lotto => lotto.winningRank === winningRank).length;
    }

    #calculateProfitRate(lottoList) {
        const totalInput = lottoList.length * _consts_Lotto_js__WEBPACK_IMPORTED_MODULE_0__.LOTTO_INFO.PRICE;
        const totalPrize = lottoList.reduce((acc, lotto) => acc + (lotto.winningRank && _consts_Lotto_js__WEBPACK_IMPORTED_MODULE_0__.LOTTO_INFO.PRIZE[lotto.winningRank]), 0)
        return totalPrize / totalInput * 100;
    }

    getLottoResultSummary({order}={order: 'ASC'}) {
        return order === 'DESC' ? this.#lottoResultSummary.reverse() : this.#lottoResultSummary;
    }

    getProfitRate() {
        return this.#profitRate;
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LottoResultReport);

/***/ }),

/***/ "./src/domain/LottoWinningCondition/LottoWinningCondition.js":
/*!*******************************************************************!*\
  !*** ./src/domain/LottoWinningCondition/LottoWinningCondition.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class LottoWinningCondition {
    #winningNumbers;
    #bonusNumber;

    constructor(winningNumbersString, bonusNumberString) {
        const winningNumbers = winningNumbersString.split(",").map((number) => Number(number));
        const bonusNumber = Number(bonusNumberString);

        this.#winningNumbers = winningNumbers;
        this.#bonusNumber = bonusNumber;
    }

    get winningNumbers() {
        return this.#winningNumbers;
    }

    get bonusNumber() {
        return this.#bonusNumber;
    }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LottoWinningCondition);

/***/ }),

/***/ "./src/domain/Lotto/Lotto.js":
/*!***********************************!*\
  !*** ./src/domain/Lotto/Lotto.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Lotto: () => (/* binding */ Lotto)
/* harmony export */ });
/* harmony import */ var _consts_Lotto_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../consts/Lotto.js */ "./src/consts/Lotto.js");


class Lotto {
    #lottoNumbers
    #winningRank

    constructor(lottoNumbers) {
        this.#lottoNumbers = lottoNumbers;
    }

    get lottoNumbers() {
        return this.#lottoNumbers;
    }

    getSortedLottoNumbers() {
        return this.#lottoNumbers.sort((a, b) => a - b);
    }

    get winningRank() {
        return this.#winningRank;
    }

    #matchedWinningNumberSize(winningNumbers) {
        return winningNumbers.filter(number => this.lottoNumbers.includes(number)).length;
    }

    #matchBonusNumber(bonusNumber) {
        return this.lottoNumbers.includes(bonusNumber);
    }

    setWinningRank(winningNumbers, bonusNumber) {
        const winningNumberMatchSize = this.#matchedWinningNumberSize(winningNumbers);
        const bonusNumberMatch = this.#matchBonusNumber(bonusNumber);

        const winningCondition = _consts_Lotto_js__WEBPACK_IMPORTED_MODULE_0__.LOTTO_INFO.WINNING_CONDITION.find((CONDITION) =>
            (CONDITION.MATCH === winningNumberMatchSize && CONDITION.BONUS === bonusNumberMatch)
        )

        if(winningCondition) {
            this.#winningRank = winningCondition.RANK;
            return;
        }
        this.#winningRank = 0;

    }
}

/***/ }),

/***/ "./src/utils/random.js":
/*!*****************************!*\
  !*** ./src/utils/random.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRandomNumber: () => (/* binding */ getRandomNumber)
/* harmony export */ });
const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/***/ }),

/***/ "./src/utils/validate.js":
/*!*******************************!*\
  !*** ./src/utils/validate.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isNaturalNumber: () => (/* binding */ isNaturalNumber),
/* harmony export */   isValidNumberListString: () => (/* binding */ isValidNumberListString),
/* harmony export */   isValidNumberString: () => (/* binding */ isValidNumberString)
/* harmony export */ });
const isNaturalNumber = (number) => {
    return Number.isInteger(Number(number)) && Number(number) > 0;
}

const isValidNumberString = (numberString) => {
    const pattern = /^[0-9]+$/;
    return pattern.test(numberString);
}

const isValidNumberListString = (numberListString) => {
    const pattern  = /^[0-9,]+$/;
    return pattern.test(numberListString);
}

/***/ }),

/***/ "node:readline/promises":
/*!*****************************************!*\
  !*** external "node:readline/promises" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("node:readline/promises");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./src/step1-index.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cli_LottoGameInCli_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./@cli/LottoGameInCli.js */ "./src/@cli/LottoGameInCli.js");


const lottoGameInCli = new _cli_LottoGameInCli_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
lottoGameInCli.play();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0EsaUNBQWlDLHdEQUFVO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDN0NPO0FBQ1A7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDWkE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOc0Q7QUFDdEQ7QUFDQSwyQkFBMkIsOERBQWM7QUFDekMsc0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sb3R0by8uL3NyYy9AY2xpL0B2aWV3cy9JbnB1dFZpZXdzL0JvbnVzTnVtYmVySW5wdXRWaWV3L0JvbnVzTnVtYmVySW5wdXRWaWV3LmpzIiwid2VicGFjazovL2xvdHRvLy4vc3JjL0BjbGkvQHZpZXdzL0lucHV0Vmlld3MvTW9uZXlJbnB1dFZpZXcvTW9uZXlJbnB1dFZpZXcuanMiLCJ3ZWJwYWNrOi8vbG90dG8vLi9zcmMvQGNsaS9Admlld3MvSW5wdXRWaWV3cy9SZXBsYXlJbnB1dFZpZXcvUmVwbGF5SW5wdXRWaWV3LmpzIiwid2VicGFjazovL2xvdHRvLy4vc3JjL0BjbGkvQHZpZXdzL0lucHV0Vmlld3MvV2lubmluZ0NvbmRpdGlvbklucHV0Vmlldy9XaW5uaW5nQ29uZGl0aW9uSW5wdXRWaWV3LmpzIiwid2VicGFjazovL2xvdHRvLy4vc3JjL0BjbGkvQHZpZXdzL0lucHV0Vmlld3MvV2lubmluZ051bWJlcklucHV0Vmlldy9XaW5uaW5nTnVtYmVySW5wdXRWaWV3LmpzIiwid2VicGFjazovL2xvdHRvLy4vc3JjL0BjbGkvQHZpZXdzL091dHB1dFZpZXdzL0xvdHRvQW1vdW50T3V0cHV0Vmlldy5qcyIsIndlYnBhY2s6Ly9sb3R0by8uL3NyYy9AY2xpL0B2aWV3cy9PdXRwdXRWaWV3cy9Mb3R0b0xpc3RPdXRwdXRWaWV3LmpzIiwid2VicGFjazovL2xvdHRvLy4vc3JjL0BjbGkvQHZpZXdzL091dHB1dFZpZXdzL0xvdHRvUmVzdWx0T3V0cHV0Vmlldy5qcyIsIndlYnBhY2s6Ly9sb3R0by8uL3NyYy9AY2xpL0B2aWV3cy9PdXRwdXRWaWV3cy9Qcm9maXRSYXRlT3V0cHV0Vmlldy5qcyIsIndlYnBhY2s6Ly9sb3R0by8uL3NyYy9AY2xpL0xvdHRvR2FtZUluQ2xpLmpzIiwid2VicGFjazovL2xvdHRvLy4vc3JjL0BjbGkvdXRpbC9Db25zb2xlLmpzIiwid2VicGFjazovL2xvdHRvLy4vc3JjL2NvbnN0cy9Mb3R0by5qcyIsIndlYnBhY2s6Ly9sb3R0by8uL3NyYy9kb21haW4vTG90dG9GYWN0b3J5L0xvdHRvRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9sb3R0by8uL3NyYy9kb21haW4vTG90dG9SZXN1bHRSZXBvcnQvTG90dG9SZXN1bHRSZXBvcnQuanMiLCJ3ZWJwYWNrOi8vbG90dG8vLi9zcmMvZG9tYWluL0xvdHRvV2lubmluZ0NvbmRpdGlvbi9Mb3R0b1dpbm5pbmdDb25kaXRpb24uanMiLCJ3ZWJwYWNrOi8vbG90dG8vLi9zcmMvZG9tYWluL0xvdHRvL0xvdHRvLmpzIiwid2VicGFjazovL2xvdHRvLy4vc3JjL3V0aWxzL3JhbmRvbS5qcyIsIndlYnBhY2s6Ly9sb3R0by8uL3NyYy91dGlscy92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly9sb3R0by9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwibm9kZTpyZWFkbGluZS9wcm9taXNlc1wiIiwid2VicGFjazovL2xvdHRvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xvdHRvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2xvdHRvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9sb3R0by93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2xvdHRvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbG90dG8vLi9zcmMvc3RlcDEtaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbnNvbGUgZnJvbSBcIi4uLy4uLy4uL3V0aWwvQ29uc29sZS5qc1wiO1xyXG5pbXBvcnQge2lzTmF0dXJhbE51bWJlcn0gZnJvbSBcIi4uLy4uLy4uLy4uL3V0aWxzL3ZhbGlkYXRlLmpzXCI7XHJcblxyXG5jbGFzcyBCb251c051bWJlcklucHV0VmlldyB7XHJcbiAgICBzdGF0aWMgYXN5bmMgcmVhZElucHV0KCkge1xyXG4gICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGF3YWl0IENvbnNvbGUucmVhZExpbmUoXCJcXG4+IOuztOuEiOyKpCDrsojtmLjrpbwg7J6F66Cl7ZW0IOyjvOyEuOyalC4gXCIpO1xyXG4gICAgICAgICAgICAgICAgQm9udXNOdW1iZXJJbnB1dFZpZXcuI3ZhbGlkYXRlVmFsdWUodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBDb25zb2xlLnByaW50KGUubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljICN2YWxpZGF0ZVZhbHVlKHZhbHVlKSB7XHJcbiAgICAgICAgaWYoIWlzTmF0dXJhbE51bWJlcih2YWx1ZSkpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIuuztOuEiOyKpCDrsojtmLgg7J6F66Cl7J2AIOyekOyXsOyImOunjCDqsIDriqXtlanri4jri6QuXCIpO1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQm9udXNOdW1iZXJJbnB1dFZpZXc7IiwiaW1wb3J0IENvbnNvbGUgZnJvbSBcIi4uLy4uLy4uL3V0aWwvQ29uc29sZS5qc1wiO1xyXG5pbXBvcnQge0xPVFRPX0lORk99IGZyb20gXCIuLi8uLi8uLi8uLi9jb25zdHMvTG90dG8uanNcIjtcclxuaW1wb3J0IHtpc05hdHVyYWxOdW1iZXIsIGlzVmFsaWROdW1iZXJTdHJpbmd9IGZyb20gXCIuLi8uLi8uLi8uLi91dGlscy92YWxpZGF0ZS5qc1wiO1xyXG5cclxuY2xhc3MgTW9uZXlJbnB1dFZpZXcge1xyXG4gICAgc3RhdGljIGFzeW5jIHJlYWRJbnB1dCgpIHtcclxuICAgICAgICB3aGlsZSAodHJ1ZSl7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGF3YWl0IENvbnNvbGUucmVhZExpbmUoXCI+IOq1rOyeheq4iOyVoeydhCDsnoXroKXtlbQg7KO87IS47JqULiBcIik7XHJcbiAgICAgICAgICAgICAgICBNb25leUlucHV0Vmlldy4jdmFsaWRhdGVWYWx1ZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIENvbnNvbGUucHJpbnQoZS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgI3ZhbGlkYXRlVmFsdWUodmFsdWUpIHtcclxuICAgICAgICBpZighaXNWYWxpZE51bWJlclN0cmluZyh2YWx1ZSkpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIuyeheugpeydgCDsiKvsnpDrp4wg6rCA64ql7ZWp64uI64ukLlwiKTtcclxuICAgICAgICBpZighaXNOYXR1cmFsTnVtYmVyKHZhbHVlKSlcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwi66Gc65iQIOq1rOyehSDquIjslaHsnYAg7J6Q7Jew7IiY7Jes7JW8IO2VqeuLiOuLpC5cIik7XHJcbiAgICAgICAgaWYoIU1vbmV5SW5wdXRWaWV3LiNpc011bHRpcGxlT2ZMb3R0b1ByaWNlKE51bWJlcih2YWx1ZSkpKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYOuhnOuYkCDqtazsnoUg6riI7JWh7J2AICR7TE9UVE9fSU5GTy5QUklDRX3snZgg67Cw7IiY7Jes7JW8IO2VqeuLiOuLpC5gKTtcclxuICAgIH07XHJcblxyXG4gICAgc3RhdGljICNpc011bHRpcGxlT2ZMb3R0b1ByaWNlKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlICUgTE9UVE9fSU5GTy5QUklDRSA9PT0gMDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9uZXlJbnB1dFZpZXc7IiwiaW1wb3J0IENvbnNvbGUgZnJvbSBcIi4uLy4uLy4uL3V0aWwvQ29uc29sZS5qc1wiO1xyXG5cclxuY2xhc3MgUmVwbGF5SW5wdXRWaWV3IHtcclxuICAgIHN0YXRpYyBhc3luYyByZWFkSW5wdXQoKSB7XHJcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gYXdhaXQgQ29uc29sZS5yZWFkTGluZShcIlxcbj4g64uk7IucIOyLnOyeke2VmOyLnOqyoOyKteuLiOq5jD8gKHkvbikgXCIpO1xyXG4gICAgICAgICAgICAgICAgUmVwbGF5SW5wdXRWaWV3LiN2YWxpZGF0ZVZhbHVlKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgQ29uc29sZS5wcmludChlLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyAjdmFsaWRhdGVWYWx1ZSh2YWx1ZSkge1xyXG4gICAgICAgaWYoIVJlcGxheUlucHV0Vmlldy4jaXNZb3JOKHZhbHVlKSlcclxuICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ5IOuYkOuKlCBu7J2EIOyeheugpe2VtOyjvOyEuOyalC5cIik7XHJcbiAgICB9O1xyXG5cclxuICAgIHN0YXRpYyAjaXNZb3JOKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlID09PSBcInlcIiB8fCB2YWx1ZSA9PT0gXCJuXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlcGxheUlucHV0VmlldzsiLCJpbXBvcnQgQ29uc29sZSBmcm9tIFwiLi4vLi4vLi4vdXRpbC9Db25zb2xlLmpzXCI7XHJcbmltcG9ydCB7TE9UVE9fSU5GT30gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbnN0cy9Mb3R0by5qc1wiO1xyXG5pbXBvcnQgQm9udXNOdW1iZXJJbnB1dFZpZXcgZnJvbSBcIi4uL0JvbnVzTnVtYmVySW5wdXRWaWV3L0JvbnVzTnVtYmVySW5wdXRWaWV3LmpzXCI7XHJcbmltcG9ydCBXaW5uaW5nTnVtYmVySW5wdXRWaWV3IGZyb20gXCIuLi9XaW5uaW5nTnVtYmVySW5wdXRWaWV3L1dpbm5pbmdOdW1iZXJJbnB1dFZpZXcuanNcIjtcclxuXHJcbmNsYXNzIFdpbm5pbmdDb25kaXRpb25JbnB1dFZpZXcge1xyXG4gICAgc3RhdGljIGFzeW5jIHJlYWRJbnB1dCgpIHtcclxuICAgICAgICB3aGlsZSAodHJ1ZSl7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB3aW5uaW5nTnVtYmVyc1N0cmluZyA9IGF3YWl0IFdpbm5pbmdOdW1iZXJJbnB1dFZpZXcucmVhZElucHV0KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBib251c051bWJlclN0cmluZyA9IGF3YWl0IEJvbnVzTnVtYmVySW5wdXRWaWV3LnJlYWRJbnB1dCgpO1xyXG4gICAgICAgICAgICAgICAgV2lubmluZ0NvbmRpdGlvbklucHV0Vmlldy4jdmFsaWRhdGVWYWx1ZSh3aW5uaW5nTnVtYmVyc1N0cmluZywgYm9udXNOdW1iZXJTdHJpbmcpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHt3aW5uaW5nTnVtYmVyc1N0cmluZywgYm9udXNOdW1iZXJTdHJpbmd9XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIENvbnNvbGUucHJpbnQoZS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgI3ZhbGlkYXRlVmFsdWUod2lubmluZ051bWJlcnNTdHJpbmcsIGJvbnVzTnVtYmVyU3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3Qgd2lubmluZ051bWJlcnMgPSB3aW5uaW5nTnVtYmVyc1N0cmluZy5zcGxpdChcIixcIikubWFwKChudW1iZXIpID0+IE51bWJlcihudW1iZXIpKTtcclxuICAgICAgICBjb25zdCBib251c051bWJlciA9IE51bWJlcihib251c051bWJlclN0cmluZyk7XHJcbiAgICAgICAgaWYoIXRoaXMuI2lzQWxsVW5pcXVlTnVtYmVyKFsuLi53aW5uaW5nTnVtYmVycywgYm9udXNOdW1iZXJdKSlcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwi64u57LKoIOuyiO2YuOuKlCDspJHrs7XrkKAg7IiYIOyXhuyKteuLiOuLpC5cIik7XHJcbiAgICAgICAgV2lubmluZ0NvbmRpdGlvbklucHV0Vmlldy4jdmFsaWRhdGVXaW5uaW5nTnVtYmVycyh3aW5uaW5nTnVtYmVycyk7XHJcbiAgICAgICAgV2lubmluZ0NvbmRpdGlvbklucHV0Vmlldy4jdmFsaWRhdGVCb251c051bWJlcihib251c051bWJlcik7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljICN2YWxpZGF0ZVdpbm5pbmdOdW1iZXJzKHdpbm5pbmdOdW1iZXJzKSB7XHJcbiAgICAgICAgaWYoIXRoaXMuI2lzQWxsVmFsaWRMb3R0b051bWJlcih3aW5uaW5nTnVtYmVycykpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihg7J6F66Cl7J2AICR7TE9UVE9fSU5GTy5OVU1CRVJfTUlOfSB+ICR7TE9UVE9fSU5GTy5OVU1CRVJfTUFYfSDsgqzsnbTsnZgg7Iir7J6Q7Jes7JW8IO2VqeuLiOuLpC5gKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgI3ZhbGlkYXRlQm9udXNOdW1iZXIoYm9udXNOdW1iZXIpIHtcclxuICAgICAgICBpZighdGhpcy4jaXNWYWxpZGF0ZUxvdHRvTnVtYmVyKGJvbnVzTnVtYmVyKSlcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGDsnoXroKXsnYAgJHtMT1RUT19JTkZPLk5VTUJFUl9NSU59IH4gJHtMT1RUT19JTkZPLk5VTUJFUl9NQVh9IOyCrOydtOydmCDsiKvsnpDsl6zslbwg7ZWp64uI64ukLmApO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyAjaXNBbGxWYWxpZExvdHRvTnVtYmVyIChudW1iZXJzKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bWJlcnMuZXZlcnkoKG51bWJlcikgPT4gdGhpcy4jaXNWYWxpZGF0ZUxvdHRvTnVtYmVyKG51bWJlcikpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyAjaXNWYWxpZGF0ZUxvdHRvTnVtYmVyIChudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gTnVtYmVyKG51bWJlcikgPj0gTE9UVE9fSU5GTy5OVU1CRVJfTUlOICYmIE51bWJlcihudW1iZXIpIDw9IExPVFRPX0lORk8uTlVNQkVSX01BWDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgI2lzQWxsVW5pcXVlTnVtYmVyIChudW1iZXJzKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bWJlcnMubGVuZ3RoID09PSBuZXcgU2V0KG51bWJlcnMpLnNpemU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdpbm5pbmdDb25kaXRpb25JbnB1dFZpZXc7IiwiaW1wb3J0IENvbnNvbGUgZnJvbSBcIi4uLy4uLy4uL3V0aWwvQ29uc29sZS5qc1wiO1xyXG5pbXBvcnQge0xPVFRPX0lORk99IGZyb20gXCIuLi8uLi8uLi8uLi9jb25zdHMvTG90dG8uanNcIjtcclxuaW1wb3J0IHtpc05hdHVyYWxOdW1iZXIsIGlzVmFsaWROdW1iZXJMaXN0U3RyaW5nfSBmcm9tIFwiLi4vLi4vLi4vLi4vdXRpbHMvdmFsaWRhdGUuanNcIjtcclxuXHJcbmNsYXNzIFdpbm5pbmdOdW1iZXJJbnB1dFZpZXcge1xyXG4gICAgc3RhdGljIGFzeW5jIHJlYWRJbnB1dCgpIHtcclxuICAgICAgICB3aGlsZSAodHJ1ZSl7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGF3YWl0IENvbnNvbGUucmVhZExpbmUoXCJcXG4+IOuLueyyqCDrsojtmLjrpbwg7J6F66Cl7ZW0IOyjvOyEuOyalC4gXCIpO1xyXG4gICAgICAgICAgICAgICAgV2lubmluZ051bWJlcklucHV0Vmlldy4jdmFsaWRhdGVWYWx1ZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIENvbnNvbGUucHJpbnQoZS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgI3ZhbGlkYXRlVmFsdWUodmFsdWUpIHtcclxuICAgICAgICBpZighaXNWYWxpZE51bWJlckxpc3RTdHJpbmcodmFsdWUpKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCLsnoXroKXsnYAg7Iir7J6Q7JmAIOyJvO2RnOunjOycvOuhnCDsnbTro6jslrTsoLjslbwg7ZWp64uI64ukLlwiKTtcclxuICAgICAgICBpZighV2lubmluZ051bWJlcklucHV0Vmlldy4jaXNBbGxOYXR1cmFsTnVtYmVyKHZhbHVlKSlcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwi7Im87ZGc66GcIOq1rOu2hOuQnCDqsIHqsIHsnZgg7Iir7J6Q64qUIOyekOyXsOyImOunjCDqsIDriqXtlanri4jri6QuXCIpO1xyXG4gICAgICAgIGlmKCFXaW5uaW5nTnVtYmVySW5wdXRWaWV3LiNpc1NhbWVUb0xvdHRvU2l6ZSh2YWx1ZSkpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihg7J6F66Cl65CcIOyIq+yekOydmCDqsJzsiJjripQgJHtMT1RUT19JTkZPLlNJWkV96rCc7Jes7JW8IO2VqeuLiOuLpC5gKTtcclxuICAgIH07XHJcblxyXG4gICAgc3RhdGljICNpc0FsbE5hdHVyYWxOdW1iZXIodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUuc3BsaXQoXCIsXCIpLmV2ZXJ5KGlzTmF0dXJhbE51bWJlcik7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljICNpc1NhbWVUb0xvdHRvU2l6ZSh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZS5zcGxpdChcIixcIikubGVuZ3RoID09PSBMT1RUT19JTkZPLlNJWkU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdpbm5pbmdOdW1iZXJJbnB1dFZpZXc7IiwiaW1wb3J0IENvbnNvbGUgZnJvbSBcIi4uLy4uL3V0aWwvQ29uc29sZS5qc1wiO1xyXG5cclxuY2xhc3MgTG90dG9BbW91bnRPdXRwdXRWaWV3IHtcclxuICAgIHN0YXRpYyByZW5kZXIobG90dG9BbW91bnQpe1xyXG4gICAgICAgIENvbnNvbGUucHJpbnQoYCR7bG90dG9BbW91bnR96rCc66W8IOq1rOunpO2WiOyKteuLiOuLpC5gKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb3R0b0Ftb3VudE91dHB1dFZpZXc7IiwiaW1wb3J0IENvbnNvbGUgZnJvbSBcIi4uLy4uL3V0aWwvQ29uc29sZS5qc1wiO1xyXG5cclxuY2xhc3MgTG90dG9MaXN0T3V0cHV0VmlldyB7XHJcbiAgICBzdGF0aWMgcmVuZGVyIChsb3R0b0xpc3QpIHtcclxuICAgICAgICBsb3R0b0xpc3QuZm9yRWFjaCgobG90dG8pID0+IENvbnNvbGUucHJpbnQobG90dG8uZ2V0U29ydGVkTG90dG9OdW1iZXJzKCkpKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG90dG9MaXN0T3V0cHV0VmlldzsiLCJpbXBvcnQgQ29uc29sZSBmcm9tIFwiLi4vLi4vdXRpbC9Db25zb2xlLmpzXCI7XHJcbmltcG9ydCB7TE9UVE9fSU5GT30gZnJvbSBcIi4uLy4uLy4uL2NvbnN0cy9Mb3R0by5qc1wiO1xyXG5cclxuY2xhc3MgTG90dG9SZXN1bHRPdXRwdXRWaWV3IHtcclxuICAgIHN0YXRpYyByZW5kZXIobG90dG9SZXN1bHRTdW1tYXJ5KXtcclxuICAgICAgICBDb25zb2xlLnByaW50KGBcXG7ri7nssqgg7Ya16rOEYCk7XHJcbiAgICAgICAgQ29uc29sZS5wcmludChgLS0tLS0tLS0tLS0tLS0tLS0tLS1gKTtcclxuICAgICAgICBsb3R0b1Jlc3VsdFN1bW1hcnkuZm9yRWFjaCgobG90dG9SZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgaWYobG90dG9SZXN1bHQuYm9udXMpIHtcclxuICAgICAgICAgICAgICAgIENvbnNvbGUucHJpbnQoYCR7bG90dG9SZXN1bHQubWF0Y2h96rCcIOydvOy5mCwg67O064SI7IqkIOuzvCDsnbzsuZggKCR7TE9UVE9fSU5GTy5QUklaRVtsb3R0b1Jlc3VsdC5yYW5rXS50b0xvY2FsZVN0cmluZygpfeybkCkgLSAke2xvdHRvUmVzdWx0LmNvdW50feqwnGApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgQ29uc29sZS5wcmludChgJHtsb3R0b1Jlc3VsdC5tYXRjaH3qsJwg7J287LmYICgke0xPVFRPX0lORk8uUFJJWkVbbG90dG9SZXN1bHQucmFua10udG9Mb2NhbGVTdHJpbmcoKX3sm5ApIC0gJHtsb3R0b1Jlc3VsdC5jb3VudH3qsJxgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb3R0b1Jlc3VsdE91dHB1dFZpZXc7IiwiaW1wb3J0IENvbnNvbGUgZnJvbSBcIi4uLy4uL3V0aWwvQ29uc29sZS5qc1wiO1xyXG5cclxuY2xhc3MgUHJvZml0UmF0ZU91dHB1dFZpZXcge1xyXG4gICAgc3RhdGljIHJlbmRlcihwcm9maXRSYXRlKXtcclxuICAgICAgICBDb25zb2xlLnByaW50KGDstJ0g7IiY7J2166Wg7J2AICR7cHJvZml0UmF0ZX0l7J6F64uI64ukLmApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9maXRSYXRlT3V0cHV0VmlldzsiLCJpbXBvcnQgTW9uZXlJbnB1dFZpZXcgZnJvbSBcIi4vQHZpZXdzL0lucHV0Vmlld3MvTW9uZXlJbnB1dFZpZXcvTW9uZXlJbnB1dFZpZXcuanNcIjtcclxuaW1wb3J0IExvdHRvQW1vdW50T3V0cHV0VmlldyBmcm9tIFwiLi9Admlld3MvT3V0cHV0Vmlld3MvTG90dG9BbW91bnRPdXRwdXRWaWV3LmpzXCI7XHJcbmltcG9ydCB7TE9UVE9fSU5GT30gZnJvbSBcIi4uL2NvbnN0cy9Mb3R0by5qc1wiO1xyXG5pbXBvcnQgTG90dG9GYWN0b3J5IGZyb20gXCIuLi9kb21haW4vTG90dG9GYWN0b3J5L0xvdHRvRmFjdG9yeS5qc1wiO1xyXG5pbXBvcnQgTG90dG9MaXN0T3V0cHV0VmlldyBmcm9tIFwiLi9Admlld3MvT3V0cHV0Vmlld3MvTG90dG9MaXN0T3V0cHV0Vmlldy5qc1wiO1xyXG5pbXBvcnQgV2lubmluZ0NvbmRpdGlvbklucHV0VmlldyBmcm9tIFwiLi9Admlld3MvSW5wdXRWaWV3cy9XaW5uaW5nQ29uZGl0aW9uSW5wdXRWaWV3L1dpbm5pbmdDb25kaXRpb25JbnB1dFZpZXcuanNcIjtcclxuaW1wb3J0IExvdHRvV2lubmluZ0NvbmRpdGlvbiBmcm9tIFwiLi4vZG9tYWluL0xvdHRvV2lubmluZ0NvbmRpdGlvbi9Mb3R0b1dpbm5pbmdDb25kaXRpb24uanNcIjtcclxuaW1wb3J0IExvdHRvUmVzdWx0UmVwb3J0IGZyb20gXCIuLi9kb21haW4vTG90dG9SZXN1bHRSZXBvcnQvTG90dG9SZXN1bHRSZXBvcnQuanNcIjtcclxuaW1wb3J0IExvdHRvUmVzdWx0T3V0cHV0VmlldyBmcm9tIFwiLi9Admlld3MvT3V0cHV0Vmlld3MvTG90dG9SZXN1bHRPdXRwdXRWaWV3LmpzXCI7XHJcbmltcG9ydCBQcm9maXRSYXRlT3V0cHV0VmlldyBmcm9tIFwiLi9Admlld3MvT3V0cHV0Vmlld3MvUHJvZml0UmF0ZU91dHB1dFZpZXcuanNcIjtcclxuaW1wb3J0IFJlcGxheUlucHV0VmlldyBmcm9tIFwiLi9Admlld3MvSW5wdXRWaWV3cy9SZXBsYXlJbnB1dFZpZXcvUmVwbGF5SW5wdXRWaWV3LmpzXCI7XHJcblxyXG5cclxuY2xhc3MgTG90dG9HYW1lSW5DbGkge1xyXG4gICAgYXN5bmMgcGxheSAoKSB7XHJcbiAgICAgICAgY29uc3QgbW9uZXkgPSBhd2FpdCBNb25leUlucHV0Vmlldy5yZWFkSW5wdXQoKTtcclxuICAgICAgICBjb25zdCBsb3R0b0Ftb3VudCA9IG1vbmV5IC8gTE9UVE9fSU5GTy5QUklDRTtcclxuICAgICAgICBMb3R0b0Ftb3VudE91dHB1dFZpZXcucmVuZGVyKGxvdHRvQW1vdW50KTtcclxuXHJcbiAgICAgICAgY29uc3QgbG90dG9MaXN0ID0gTG90dG9GYWN0b3J5LmNyZWF0ZUxvdHRvTGlzdChsb3R0b0Ftb3VudCk7XHJcbiAgICAgICAgTG90dG9MaXN0T3V0cHV0Vmlldy5yZW5kZXIobG90dG9MaXN0KTtcclxuXHJcbiAgICAgICAgY29uc3Qge3dpbm5pbmdOdW1iZXJzU3RyaW5nLGJvbnVzTnVtYmVyU3RyaW5nfSA9IGF3YWl0IFdpbm5pbmdDb25kaXRpb25JbnB1dFZpZXcucmVhZElucHV0KCk7XHJcbiAgICAgICAgY29uc3QgbG90dG9XaW5uaW5nQ29uZGl0aW9uID0gbmV3IExvdHRvV2lubmluZ0NvbmRpdGlvbih3aW5uaW5nTnVtYmVyc1N0cmluZywgYm9udXNOdW1iZXJTdHJpbmcpO1xyXG5cclxuICAgICAgICBsb3R0b0xpc3QuZm9yRWFjaCgobG90dG8pID0+IGxvdHRvLnNldFdpbm5pbmdSYW5rKGxvdHRvV2lubmluZ0NvbmRpdGlvbi53aW5uaW5nTnVtYmVycywgbG90dG9XaW5uaW5nQ29uZGl0aW9uLmJvbnVzTnVtYmVyKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGxvdHRvUmVzdWx0UmVwb3J0ID0gbmV3IExvdHRvUmVzdWx0UmVwb3J0KGxvdHRvTGlzdCk7XHJcbiAgICAgICAgTG90dG9SZXN1bHRPdXRwdXRWaWV3LnJlbmRlcihsb3R0b1Jlc3VsdFJlcG9ydC5nZXRMb3R0b1Jlc3VsdFN1bW1hcnkoe29yZGVyOidERVNDJ30pKTtcclxuICAgICAgICBQcm9maXRSYXRlT3V0cHV0Vmlldy5yZW5kZXIobG90dG9SZXN1bHRSZXBvcnQuZ2V0UHJvZml0UmF0ZSgpKTtcclxuXHJcbiAgICAgICAgY29uc3QgYW5zd2VyID0gYXdhaXQgUmVwbGF5SW5wdXRWaWV3LnJlYWRJbnB1dCgpO1xyXG4gICAgICAgIGlmIChhbnN3ZXIgPT09ICd5Jykge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsYXkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJvY2Vzcy5leGl0KDApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb3R0b0dhbWVJbkNsaTsiLCJpbXBvcnQgeyBjcmVhdGVJbnRlcmZhY2UgfSBmcm9tICdub2RlOnJlYWRsaW5lL3Byb21pc2VzJztcclxuXHJcbmNvbnN0IHJsID0gY3JlYXRlSW50ZXJmYWNlKHtcclxuICAgIGlucHV0OiBwcm9jZXNzLnN0ZGluLFxyXG4gICAgb3V0cHV0OiBwcm9jZXNzLnN0ZG91dCxcclxufSk7XHJcblxyXG5jb25zdCBDb25zb2xlID0ge1xyXG4gICAgYXN5bmMgcmVhZExpbmUocXVlc3Rpb24pIHtcclxuICAgICAgICByZXR1cm4gYXdhaXQgcmwucXVlc3Rpb24ocXVlc3Rpb24pO1xyXG4gICAgfSxcclxuICAgIHByaW50KC4uLm1lc3NhZ2UpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyguLi5tZXNzYWdlKTtcclxuICAgIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb25zb2xlOyIsImV4cG9ydCBjb25zdCBMT1RUT19JTkZPID0gT2JqZWN0LmZyZWV6ZSh7XHJcbiAgICBTSVpFOiA2LFxyXG4gICAgTlVNQkVSX01JTjogMSxcclxuICAgIE5VTUJFUl9NQVg6IDQ1LFxyXG4gICAgUFJJQ0U6IDFfMDAwLFxyXG4gICAgV0lOTklOR19DT05ESVRJT046IFtcclxuICAgICAgICB7TUFUQ0g6IDYsIEJPTlVTOiBmYWxzZSwgUkFOSzogMX0sXHJcbiAgICAgICAge01BVENIOiA1LCBCT05VUzogdHJ1ZSwgUkFOSzogMn0sXHJcbiAgICAgICAge01BVENIOiA1LCBCT05VUzogZmFsc2UsIFJBTks6IDN9LFxyXG4gICAgICAgIHtNQVRDSDogNCwgQk9OVVM6IGZhbHNlLCBSQU5LOiA0fSxcclxuICAgICAgICB7TUFUQ0g6IDMsIEJPTlVTOiBmYWxzZSwgUkFOSzogNX0sXHJcbiAgICBdLFxyXG4gICAgUFJJWkU6IE9iamVjdC5mcmVlemUoe1xyXG4gICAgICAgIDEgOiAyXzAwMF8wMDBfMDAwLFxyXG4gICAgICAgIDIgOiAzMF8wMDBfMDAwLFxyXG4gICAgICAgIDMgOiAxXzUwMF8wMDAsXHJcbiAgICAgICAgNCA6IDUwXzAwMCxcclxuICAgICAgICA1IDogNV8wMDAsXHJcbiAgICB9KVxyXG59KTsiLCJpbXBvcnQge0xPVFRPX0lORk99IGZyb20gXCIuLi8uLi9jb25zdHMvTG90dG8uanNcIjtcclxuaW1wb3J0IHtMb3R0b30gZnJvbSBcIi4uL0xvdHRvL0xvdHRvLmpzXCI7XHJcbmltcG9ydCB7Z2V0UmFuZG9tTnVtYmVyfSBmcm9tIFwiLi4vLi4vdXRpbHMvcmFuZG9tLmpzXCI7XHJcblxyXG4vL+uenOuNpO2VnCDroZzrmJAg7IOd7ISx7J2EIOuLtOuLue2VmOuKlCDqsJ3ssrQgKOuqqOuToCDsmpTshozqsIAg656c642k7ZWY6riwIOuVjOusuOyXkCDthYzsiqTtirjtlaAg7ZWE7JqU64qUIOyXhuyWtOuztOyehClcclxuY2xhc3MgTG90dG9GYWN0b3J5IHtcclxuICAgIHN0YXRpYyAjY3JlYXRlUmFuZG9tTG90dG9OdW1iZXJzKCkge1xyXG4gICAgICAgIGNvbnN0IGxvdHRvTnVtYmVycyA9IFtdO1xyXG4gICAgICAgIHdoaWxlIChsb3R0b051bWJlcnMubGVuZ3RoIDwgTE9UVE9fSU5GTy5TSVpFKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJhbmRvbU51bWJlciA9IExvdHRvRmFjdG9yeS4jZ2V0UmFuZG9tTG90dG9OdW1iZXIoKTtcclxuICAgICAgICAgICAgaWYgKCFsb3R0b051bWJlcnMuaW5jbHVkZXMocmFuZG9tTnVtYmVyKSkge1xyXG4gICAgICAgICAgICAgICAgbG90dG9OdW1iZXJzLnB1c2gocmFuZG9tTnVtYmVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbG90dG9OdW1iZXJzO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyAjZ2V0UmFuZG9tTG90dG9OdW1iZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIGdldFJhbmRvbU51bWJlcihMT1RUT19JTkZPLk5VTUJFUl9NSU4sIExPVFRPX0lORk8uTlVNQkVSX01BWCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyZWF0ZUxvdHRvTGlzdChsb3R0b0NvdW50KSB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oe2xlbmd0aDogbG90dG9Db3VudH0sICgpID0+IG5ldyBMb3R0byhMb3R0b0ZhY3RvcnkuI2NyZWF0ZVJhbmRvbUxvdHRvTnVtYmVycygpKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvdHRvRmFjdG9yeTsiLCJpbXBvcnQgeyBMT1RUT19JTkZPIH0gZnJvbSBcIi4uLy4uL2NvbnN0cy9Mb3R0by5qc1wiO1xyXG5cclxuY2xhc3MgTG90dG9SZXN1bHRSZXBvcnQge1xyXG4gICAgI2xvdHRvUmVzdWx0U3VtbWFyeTtcclxuICAgICNwcm9maXRSYXRlO1xyXG4gICAgY29uc3RydWN0b3IobG90dG9MaXN0KSB7XHJcbiAgICAgICAgdGhpcy4jbG90dG9SZXN1bHRTdW1tYXJ5ID0gTE9UVE9fSU5GTy5XSU5OSU5HX0NPTkRJVElPTi5tYXAoQ09ORElUSU9OID0+ICh7XHJcbiAgICAgICAgICAgIG1hdGNoOiBDT05ESVRJT04uTUFUQ0gsXHJcbiAgICAgICAgICAgIGJvbnVzOiBDT05ESVRJT04uQk9OVVMsXHJcbiAgICAgICAgICAgIHJhbms6IENPTkRJVElPTi5SQU5LLFxyXG4gICAgICAgICAgICBjb3VudDogdGhpcy4jZ2V0V2lubmluZ1JhbmtDb3VudChsb3R0b0xpc3QsIENPTkRJVElPTi5SQU5LKSxcclxuICAgICAgICB9KSlcclxuICAgICAgICB0aGlzLiNwcm9maXRSYXRlID0gdGhpcy4jY2FsY3VsYXRlUHJvZml0UmF0ZShsb3R0b0xpc3QpO1xyXG4gICAgfVxyXG5cclxuICAgICNnZXRXaW5uaW5nUmFua0NvdW50KGxvdHRvTGlzdCwgd2lubmluZ1JhbmspIHtcclxuICAgICAgICByZXR1cm4gbG90dG9MaXN0LmZpbHRlcihsb3R0byA9PiBsb3R0by53aW5uaW5nUmFuayA9PT0gd2lubmluZ1JhbmspLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICAjY2FsY3VsYXRlUHJvZml0UmF0ZShsb3R0b0xpc3QpIHtcclxuICAgICAgICBjb25zdCB0b3RhbElucHV0ID0gbG90dG9MaXN0Lmxlbmd0aCAqIExPVFRPX0lORk8uUFJJQ0U7XHJcbiAgICAgICAgY29uc3QgdG90YWxQcml6ZSA9IGxvdHRvTGlzdC5yZWR1Y2UoKGFjYywgbG90dG8pID0+IGFjYyArIChsb3R0by53aW5uaW5nUmFuayAmJiBMT1RUT19JTkZPLlBSSVpFW2xvdHRvLndpbm5pbmdSYW5rXSksIDApXHJcbiAgICAgICAgcmV0dXJuIHRvdGFsUHJpemUgLyB0b3RhbElucHV0ICogMTAwO1xyXG4gICAgfVxyXG5cclxuICAgIGdldExvdHRvUmVzdWx0U3VtbWFyeSh7b3JkZXJ9PXtvcmRlcjogJ0FTQyd9KSB7XHJcbiAgICAgICAgcmV0dXJuIG9yZGVyID09PSAnREVTQycgPyB0aGlzLiNsb3R0b1Jlc3VsdFN1bW1hcnkucmV2ZXJzZSgpIDogdGhpcy4jbG90dG9SZXN1bHRTdW1tYXJ5O1xyXG4gICAgfVxyXG5cclxuICAgIGdldFByb2ZpdFJhdGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuI3Byb2ZpdFJhdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvdHRvUmVzdWx0UmVwb3J0OyIsImNsYXNzIExvdHRvV2lubmluZ0NvbmRpdGlvbiB7XHJcbiAgICAjd2lubmluZ051bWJlcnM7XHJcbiAgICAjYm9udXNOdW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3Iod2lubmluZ051bWJlcnNTdHJpbmcsIGJvbnVzTnVtYmVyU3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3Qgd2lubmluZ051bWJlcnMgPSB3aW5uaW5nTnVtYmVyc1N0cmluZy5zcGxpdChcIixcIikubWFwKChudW1iZXIpID0+IE51bWJlcihudW1iZXIpKTtcclxuICAgICAgICBjb25zdCBib251c051bWJlciA9IE51bWJlcihib251c051bWJlclN0cmluZyk7XHJcblxyXG4gICAgICAgIHRoaXMuI3dpbm5pbmdOdW1iZXJzID0gd2lubmluZ051bWJlcnM7XHJcbiAgICAgICAgdGhpcy4jYm9udXNOdW1iZXIgPSBib251c051bWJlcjtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgd2lubmluZ051bWJlcnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuI3dpbm5pbmdOdW1iZXJzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBib251c051bWJlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4jYm9udXNOdW1iZXI7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb3R0b1dpbm5pbmdDb25kaXRpb247IiwiaW1wb3J0IHtMT1RUT19JTkZPfSBmcm9tIFwiLi4vLi4vY29uc3RzL0xvdHRvLmpzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTG90dG8ge1xyXG4gICAgI2xvdHRvTnVtYmVyc1xyXG4gICAgI3dpbm5pbmdSYW5rXHJcblxyXG4gICAgY29uc3RydWN0b3IobG90dG9OdW1iZXJzKSB7XHJcbiAgICAgICAgdGhpcy4jbG90dG9OdW1iZXJzID0gbG90dG9OdW1iZXJzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBsb3R0b051bWJlcnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuI2xvdHRvTnVtYmVycztcclxuICAgIH1cclxuXHJcbiAgICBnZXRTb3J0ZWRMb3R0b051bWJlcnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuI2xvdHRvTnVtYmVycy5zb3J0KChhLCBiKSA9PiBhIC0gYik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHdpbm5pbmdSYW5rKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiN3aW5uaW5nUmFuaztcclxuICAgIH1cclxuXHJcbiAgICAjbWF0Y2hlZFdpbm5pbmdOdW1iZXJTaXplKHdpbm5pbmdOdW1iZXJzKSB7XHJcbiAgICAgICAgcmV0dXJuIHdpbm5pbmdOdW1iZXJzLmZpbHRlcihudW1iZXIgPT4gdGhpcy5sb3R0b051bWJlcnMuaW5jbHVkZXMobnVtYmVyKSkubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgICNtYXRjaEJvbnVzTnVtYmVyKGJvbnVzTnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubG90dG9OdW1iZXJzLmluY2x1ZGVzKGJvbnVzTnVtYmVyKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRXaW5uaW5nUmFuayh3aW5uaW5nTnVtYmVycywgYm9udXNOdW1iZXIpIHtcclxuICAgICAgICBjb25zdCB3aW5uaW5nTnVtYmVyTWF0Y2hTaXplID0gdGhpcy4jbWF0Y2hlZFdpbm5pbmdOdW1iZXJTaXplKHdpbm5pbmdOdW1iZXJzKTtcclxuICAgICAgICBjb25zdCBib251c051bWJlck1hdGNoID0gdGhpcy4jbWF0Y2hCb251c051bWJlcihib251c051bWJlcik7XHJcblxyXG4gICAgICAgIGNvbnN0IHdpbm5pbmdDb25kaXRpb24gPSBMT1RUT19JTkZPLldJTk5JTkdfQ09ORElUSU9OLmZpbmQoKENPTkRJVElPTikgPT5cclxuICAgICAgICAgICAgKENPTkRJVElPTi5NQVRDSCA9PT0gd2lubmluZ051bWJlck1hdGNoU2l6ZSAmJiBDT05ESVRJT04uQk9OVVMgPT09IGJvbnVzTnVtYmVyTWF0Y2gpXHJcbiAgICAgICAgKVxyXG5cclxuICAgICAgICBpZih3aW5uaW5nQ29uZGl0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuI3dpbm5pbmdSYW5rID0gd2lubmluZ0NvbmRpdGlvbi5SQU5LO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuI3dpbm5pbmdSYW5rID0gMDtcclxuXHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY29uc3QgZ2V0UmFuZG9tTnVtYmVyID0gKG1pbiwgbWF4KSA9PiB7XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcclxufSIsImV4cG9ydCBjb25zdCBpc05hdHVyYWxOdW1iZXIgPSAobnVtYmVyKSA9PiB7XHJcbiAgICByZXR1cm4gTnVtYmVyLmlzSW50ZWdlcihOdW1iZXIobnVtYmVyKSkgJiYgTnVtYmVyKG51bWJlcikgPiAwO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaXNWYWxpZE51bWJlclN0cmluZyA9IChudW1iZXJTdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IHBhdHRlcm4gPSAvXlswLTldKyQvO1xyXG4gICAgcmV0dXJuIHBhdHRlcm4udGVzdChudW1iZXJTdHJpbmcpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaXNWYWxpZE51bWJlckxpc3RTdHJpbmcgPSAobnVtYmVyTGlzdFN0cmluZykgPT4ge1xyXG4gICAgY29uc3QgcGF0dGVybiAgPSAvXlswLTksXSskLztcclxuICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobnVtYmVyTGlzdFN0cmluZyk7XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub2RlOnJlYWRsaW5lL3Byb21pc2VzXCIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgTG90dG9HYW1lSW5DbGkgZnJvbSAnLi9AY2xpL0xvdHRvR2FtZUluQ2xpLmpzJztcclxuXHJcbmNvbnN0IGxvdHRvR2FtZUluQ2xpID0gbmV3IExvdHRvR2FtZUluQ2xpKCk7XHJcbmxvdHRvR2FtZUluQ2xpLnBsYXkoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=