export interface User{
    user_id: string;
    userName: string;
    email: string;
    password: string;
}

export interface loginUserDetails{
    user_id: string,
    userName: string,
    email: string,
    isWelcomed: boolean,
}
