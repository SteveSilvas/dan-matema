export interface ISendMailResult{
    success: boolean;
    message: string;
}

export interface IMailSendMailData{
    fromName: string;
    fromEmail: string;
    message: string;
}