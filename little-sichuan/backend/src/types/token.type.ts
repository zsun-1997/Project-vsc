/**
 * If you use JWT tokens, this can be used to strong type the token during decoding
 */
export default interface Token {
    id: string;
    iat: number;
    exp: number;
}
