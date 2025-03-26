import { MissionUtils } from "@woowacourse/mission-utils";
import { RANDOM } from "../constants/variables";

export function generateRandomNumber() {
    return MissionUtils.Random.pickNumberInRange(RANDOM.RANGE.MIN, RANDOM.RANGE.MAX);
}