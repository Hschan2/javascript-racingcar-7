import { isValidName, isValidTryCount } from "../src/valid/validation";

describe('isValidName', () => {
    it('자동차 이름이 5자를 초과한 경우', () => {
        expect(() => isValidName(['LongCarName'])).toThrow('[ERROR] 이름은 5자 이하만 가능합니다.');
    });

    it('자동차 이름이 5자 이하인 경우', () => {
        expect(() => isValidName(['Car1', 'Car2'])).not.toThrow();
    });
});

describe('isValidTryCount', () => {
    it('시도 숫자가 숫자 형식이 아닌 경우', () => {
        expect(() => isValidTryCount('not-a-number')).toThrow('[ERROR] 숫자만 입력할 수 있습니다.');
    });

    it('시도 숫자가 숫자 형식인 경우', () => {
        expect(() => isValidTryCount('5')).not.toThrow();
    });
});