export interface IAddUser {
    accountEnabled: boolean;
    displayName: string;
    mailNickname: string;
    givenName: string;
    surname: string;
    jobTitle: string;
    mail: string;
    mobilePhone: string;
    officeLocation?: any;
    userPrincipalName: string;
    extension_d59a6dfed76a4e5ebaa4ad42d4860e21_Scope: string;
    extension_d59a6dfed76a4e5ebaa4ad42d4860e21_IdentifiantDigital: string;
    passwordProfile: PasswordProfile;
    identities: Identity[];

}

export interface PasswordProfile {
    forceChangePasswordNextSignIn: boolean;
    password: string;
}

export interface Identity {
    signInType: string;
    issuer: string;
    issuerAssignedId: string;
}