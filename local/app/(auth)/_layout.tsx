import { LanguageProvider } from '@/context/LanguageContext';
import { Redirect, Stack } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";

export default function AuthRoutesLayout() {
  const { isSignedIn } = useAuth();

  if (isSignedIn) return <Redirect href={"/"} />;

  return ( <LanguageProvider><Stack screenOptions={{ headerShown: false }} /></LanguageProvider> );
}
