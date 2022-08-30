import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "@screens/Home";
import { GLOBAL_OPTIONS } from "./props";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <>
      <Navigator>
        <Screen name="Home" component={Home} options={GLOBAL_OPTIONS} />
      </Navigator>
    </>
  );
}
