import { MissionUtils } from "@woowacourse/mission-utils";
import { generateRandomNumber } from "./utils/random";
import determineWinners from "./utils/determineWinners";
import inputCarNames from "./user/inputCarNames";
import inputTryCount from "./user/inputTryCount";
import { MESSAGES } from "./constants/messages";

class App {
  async run() {
    await this.startGame();
  }

  async startGame() {
    const carNames = await inputCarNames();
    const tryCount = await inputTryCount();

    const carStatues = carNames.map((name) => ({ name, progress: "" }));
    MissionUtils.Console.print(MESSAGES.GAME_RESULT);

    for (let i = 0; i < tryCount; i++) {
      this.playRound(carStatues);
      this.printRoundResult(carStatues);
    }

    const winners = determineWinners(carStatues);
    MissionUtils.Console.print(`최종 우승자 : ${winners.join(", ")}`);
  }

  playRound(carStatues) {
    carStatues.forEach((car) => {
      if (generateRandomNumber() >= 4) {
        car.progress += "-";
      }
    });
  }

  printRoundResult(carStatues) {
    carStatues.forEach(({ name, progress }) => {
      MissionUtils.Console.print(`${name} : ${progress}`);
    });
    MissionUtils.Console.print("");
  }
}

export default App;
