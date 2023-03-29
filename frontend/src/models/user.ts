export interface User {
    _id: string;
    username: string;
    password: string;
    settings: Settings;
    __v: number;
}

export interface Settings {
    general: boolean;
    business: boolean;
    entertainment: boolean;
    health: boolean;
    science: boolean;
    sports: boolean;
    technology: boolean;
    _id: string;
}
