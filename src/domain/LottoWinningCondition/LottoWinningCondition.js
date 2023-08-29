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

export default LottoWinningCondition;