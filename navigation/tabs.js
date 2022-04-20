import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home, Portfolio, Market, Profile } from "../screens";
import { COLORS } from "../constants";
import TabIcon from "./TabIcon";
import { icons } from "../constants";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: COLORS.primary,
          borderTopColor: "transparent",
          height: 140,
        },
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={icons.home} label="Home" focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Portfolio"
        component={Portfolio}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              icon={icons.briefcase}
              label="Portfolio"
              focused={focused}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Trade"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              isTrade={true}
              icon={icons.trade}
              label="Trade"
              focused={focused}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Market"
        component={Market}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={icons.market} label="Market" focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={icons.profile} label="Profile" focused={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
