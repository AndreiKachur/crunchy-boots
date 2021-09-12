
export interface RegisterType {
    userId: string;
    newbie?: boolean;
    loading: boolean
}

//TL -> TypeList
export enum TL {
    FIRST_TIME = 'FIRST_TIME',
    USER_ID = 'USER_ID',
    LOGIN_REQUESTED = 'LOGIN_REQUESTED'
}


//AT->ActionType
export interface BootsRequestedAT {
    type: TL.LOGIN_REQUESTED;
}
export interface FirstTimeAT {
    type: TL.FIRST_TIME;
    payload: boolean;
}
export interface UserIdAT {
    type: TL.USER_ID;
    payload: string;
}

export type ActionsType = FirstTimeAT | BootsRequestedAT | UserIdAT
