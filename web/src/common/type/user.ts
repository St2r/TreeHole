export type TUser = {
  userAnonymousId?: string | undefined,
  userRealId?: string | undefined,
  username: string,
  usertype?: 'Anonymous' | 'Real' | undefined,
}
