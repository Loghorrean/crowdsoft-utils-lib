import { Money } from "../Money";

export const sumMoney = (money: Money, ...another: Money[]): Money => {
    return another.reduce((previous, current) => {
        if (previous.currencyCode !== current.currencyCode) {
            throw new Error("Cannot sum different currency codes");
        }
        return { amount: previous.amount + current.amount, currencyCode: previous.currencyCode };
    }, money);
}