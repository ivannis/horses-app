export type HorseProfile = {
  favouriteFood: string
  physical: {
    height: number
    weight: number
  }
}

export type Horse = {
  id: string
  name: string
  profile: HorseProfile
}
