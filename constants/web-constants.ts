export const Constants = {
    BASE_URL: 'https://www.saucedemo.com/',
    USERNAME: 'standard_user',
    PASSWORD: 'secret_sauce',
    WRONG_USERNAME: 'abc',
    WRONG_PASSWORD: '123'
} as const;

export const Timeouts = {
    SHORT: 5000,
    MEDIUM: 10000,
    LONG: 30000,
} as const;