import { DbItem, CartItem } from './db-types'

export interface LoadType {
    boots: DbItem[] | any[];
    loading: boolean;
}
export interface StateType {
    boots: DbItem[] | any[];
    loading: boolean;
    error: boolean;
    cart: CartItem[] | any[];
}

//TL -> TypeList
export enum TL {
    BOOTS_LOADED = 'BOOTS_LOADED',
    BOOTS_REQUESTED = 'BOOTS_REQUESTED',
    CHANGE_CART = 'CHANGE_CART',
    CHECK_SIZE = 'CHECK_SIZE',
    DELETE_FROM_CART = 'DELETE_FROM_CART',
    BROWSE_PICS = 'BROWSE_PICS',
    EMPTY_CART = 'EMPTY_CART',
}

export interface PicsType {
    picsSlider: boolean;
    picId: number
}
export interface BrowsePicsActionType {
    type: TL.BROWSE_PICS;
    id: number
}

//AT->ActionType
export interface BootsLoadedAT {
    type: TL.BOOTS_LOADED;
    payload: DbItem[];
}
export interface BootsRequestedAT {
    type: TL.BOOTS_REQUESTED;
}
export interface ChangeCartAT {
    type: TL.CHANGE_CART;
    id: number;
    idSize: number;
    actualRest: number;
    cartButton: boolean;
    number: number
}
export interface CheckSizeAT {
    type: TL.CHECK_SIZE;
    size: number;
    itemId: number;
}
export interface DeleteFromCartAT {
    type: TL.DELETE_FROM_CART;
    idSize: number;
}
export interface EmptyCartAT {
    type: TL.EMPTY_CART;
}

export type ActionsType = BootsLoadedAT | BootsRequestedAT | ChangeCartAT
    | ChangeCartAT | CheckSizeAT | DeleteFromCartAT | EmptyCartAT
