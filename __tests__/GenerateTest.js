import determineWinners from "../src/utils/determineWinners";
import { generateRandomNumber } from "../src/utils/random";

describe('generateRandomNumber', () => {
    it('랜덤 숫자 범위가 0 ~ 9까지인 경우', () => {
        const number = generateRandomNumber();
        expect(number).toBeGreaterThanOrEqual(0); // 예시 범위 1 이상
        expect(number).toBeLessThanOrEqual(9); // 예시 범위 9 이하
    });
});

describe('determineWinners', () => {
    it('가장 진행 길이가 많은 사람이 우승인 경우', () => {
        const carStatuses = [
            { name: 'Car1', progress: '---' },
            { name: 'Car2', progress: '----' },
            { name: 'Car3', progress: '---' },
        ];
        const winners = determineWinners(carStatuses);
        expect(winners).toEqual(['Car2']);
    });
});