import { Page } from "@playwright/test";

export class MainPage  {
    readonly welcomeText = this.page.getByTestId('message');

    constructor(readonly page: Page) { }

}