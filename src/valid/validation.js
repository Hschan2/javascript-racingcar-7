import { ERRORS } from "../constants/errors";

export function isValidName(names) {
    names.forEach((carName) => {
        if (carName.length > 5) {
            throw new Error(ERRORS.NAME_LENGTH);
        }
    })
}

export function isValidTryCount(count) {
    if (isNaN(Number(count))) {
        throw new Error(ERRORS.NOT_A_NUMBER);
    }
}