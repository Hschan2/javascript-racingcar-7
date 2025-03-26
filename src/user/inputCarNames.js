import { MissionUtils } from "@woowacourse/mission-utils";
import { isValidName } from "../valid/validation";
import { INPUT } from "../constants/inputs";

export default async function inputCarNames() {
    const carNames = await MissionUtils.Console.readLineAsync(INPUT.CAR_NAME);
    const separateCarName = carNames.split(",");
    isValidName(separateCarName);
    return separateCarName;
}