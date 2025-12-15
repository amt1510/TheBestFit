// types.ts (or in HomeScreen)
export type OnboardingData = {
  weight?: number;
  height?: number;
  shoulders?: number;
  chest?: number;
  waist?: number;
  gender?: 'male' | 'female';
  photoUri?: string;
};
