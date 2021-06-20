export type TUser = {
  username: string,
  id: string,
  // eslint-disable-next-line camelcase
  anonymous_id: string,
  avatar: string,
  usertype?: 'Anonymous' | 'Real' | undefined,
}
