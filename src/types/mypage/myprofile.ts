export interface MyProfileDataType {
  readonly userId: number
  readonly localLogin: boolean
  readonly email: string
  readonly nickName: string
  readonly region: string | null
  readonly profileImage: string | null
  readonly intro: string | null
}
