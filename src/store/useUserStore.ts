import {create} from 'zustand'

type User = {
  id: number,
  username: string,
  email: string,
  is_active: boolean,
  is_admin: boolean
}

type UserProfile = {
  first_name: string,
  last_name: string,
  phone_number: number,
  company_name: string
}

type UserPreferences = {
// Preferences here when created
}

type StoreStateAndActions = {
  user: User | null,
  userProfile: UserProfile | null,
  userPreferences: UserPreferences | null
  setUser: (userData: User, userProfileData: UserProfile, userPreferencesData: UserPreferences) => void,
  logout: () => void,
}

const useUserStore = create<StoreStateAndActions>((set) => ({
  user: null,
  userProfile: null,
  userPreferences: null,
  setUser: (userData: User, userProfileData: UserProfile, userPreferencesData: UserPreferences) => {
    set({
      user: userData,
      userProfile: userProfileData,
      userPreferences: userPreferencesData
    })
  },
  logout: () => {
    set({
      user: null,
      userProfile: null,
      userPreferences: null
    })
  }
}))

export default useUserStore