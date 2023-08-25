import {LOTTO_INFO} from "../../consts/Lotto.js";
import MoneyInputView from "../../@cli/@views/MoneyInputView.js";
import WinningNumberInputView from "../../@cli/@views/WinningNumberInputView.js";
import BonusNumberInputView from "../../@cli/@views/BonusNumberInputView.js";
import LottoFactory from "../LottoFactory/LottoFactory.js";
import LottoWinningCondition from "../LottoWinningCondition/LottoWinningCondition.js";
import LottoResultOutputView from "../../@cli/@views/LottoResultOutputView.js";
import LottoAmountOutputView from "../../@cli/@views/LottoAmountOutputView.js";
import ProfitRateOutputView from "../../@cli/@views/ProfitRateOutputView.js";
import LottoListOutputView from "../../@cli/@views/LottoListOutputView.js";

class LottoGame {
  async play () {
    const money = await MoneyInputView.readInput();
    const lottoAmount = money / LOTTO_INFO.PRICE;
    LottoAmountOutputView.render(lottoAmount);

    const createdLottoList = LottoFactory.createLottoList(lottoAmount);
    LottoListOutputView.render(createdLottoList);

    const winningNumbers = await WinningNumberInputView.readInput();
    const bonusNumber = await BonusNumberInputView.readInput();
    const lottoWinningCondition = new LottoWinningCondition(winningNumbers, bonusNumber);
    createdLottoList.setWinningRank(lottoWinningCondition.winningNumbers, lottoWinningCondition.bonusNumber);

    const lottoResultSummary = createdLottoList.getLottoResultSummary({order: 'DESC'});
    LottoResultOutputView.render(lottoResultSummary);

    const profitRate = createdLottoList.getProfitRate();
    ProfitRateOutputView.render(profitRate);
  }
}

export default LottoGame;