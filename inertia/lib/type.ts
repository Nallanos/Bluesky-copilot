export type Account = {
    appPassword: string;
    user_id: number;
    bksySocial: string;
    did: string;
    id: string,
    bots: Bot[]
}

export type EventType = "Mention" | "Follow" | "Reply"


export type BotPayload = {
    handle: string;
    event: string;
    action: string
}

export type Bot = {
    accountId: string;
    action: string;
    event: string;
    id: number;
    message: null | string;
    waitTime: number
}