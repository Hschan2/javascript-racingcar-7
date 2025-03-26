import { MissionUtils } from "@woowacourse/mission-utils";
import { isValidTryCount } from "../valid/validation";
import { INPUT } from "../constants/inputs";

export default async function inputTryCount() {
    const tryCount = await MissionUtils.Console.readLineAsync(INPUT.TRY_COUNT);
    isValidTryCount(tryCount);
    return Number(tryCount);
}