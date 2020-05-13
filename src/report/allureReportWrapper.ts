import {
    AllureInterface,
    AllureStep,
    AllureTest,
    ContentType,
    ExecutableItemWrapper,
    GlobalInfoWriter,
    isPromise,
    LabelName,
    Severity
} from 'allure2-js-commons';

require('mocha-allure2-reporter');
declare let allure: AllureInterface;

export function feature(name: string): void {
    allure.feature(name);
}

export function story(name: string): void {
    allure.story(name);
}

export function attachJson(name: string, content: string) {
    allure.attachment(name, content, ContentType.JSON)
}