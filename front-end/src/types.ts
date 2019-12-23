import { Dispatch, SetStateAction } from 'react';

export interface UserDetailsContextType {
    id?: number | null,
    picture?: string | null,
    username?: string | null,
    setUserDetailsContextState: Dispatch<SetStateAction<UserDetailsContextType>>;
}

export enum Role {
    ANOONYMOUS = 'anonymous',
    ADMIN = 'admin',
    PROPOSAL_BOT = 'proposal_bot',
    USER = 'user',
}

// these are enforced by Hasura
export interface HasuraClaimPayload {
    'x-hasura-allowed-roles': Array<Role>
    'x-hasura-default-role': Role
    'x-hasura-user-email': string
    'x-hasura-user-id': string
}

export interface JWTPayploadType {
    exp: number
    sub: string
    name: string
    iat: string
    'https://hasura.io/jwt/claims': HasuraClaimPayload
}

export interface NotificationContextType {
    deQueueNotification: (id: number) => void;
    notificationsQueue: Map<number, NotificationType>
    queueNotification: (notification: NotificationType) => void;
}

export enum NotificationStatus {
    SUCCESS,
    ERROR,
    WARNING
}

export interface NotificationType {
    header: string
    message: string
    status: NotificationStatus
}

export interface ModalType {
    content?: string,
    title?: string
}

export interface ModalContextType {
    dismissModal: () => void,
    modal: ModalType,
    setModal: (modal: ModalType) => void;
}