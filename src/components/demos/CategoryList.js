/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Style from '../../styles/Style';
import FocusableHighlight from '../focusable/FocusableHighlight';
import ScrollViewDemo from './ScrollViewDemo';
import FlatListDemo from './FlatListDemo';
import SectionListDemo from './SectionListDemo';

const TAB_SCROLLVIEW = 'scroll';
const TAB_FLATLIST = 'flatlist';
const TAB_SECTIONLIST = 'ClassList';

const tabs = [
  {
    type: TAB_FLATLIST,
    text: 'ClassList',
  },
];

const CategoryList = ({route}) => {
  const {className} = route.params;
  console.log('🚀 ~ CategoryGrid ~ className:', className.class);
  const [selectedTab, setSelectedTab] = useState(TAB_FLATLIST);

  function isSelected(tab) {
    return selectedTab === tab;
  }

  function showTabs() {
    return tabs.map((tab, key) => {
      return (
        <FocusableHighlight
          onFocus={() => {}}
          onPress={() => setSelectedTab(tab.type)}
          style={[styles.tab, selectedTab === tab.type && styles.tabSelected]}
          underlayColor={Style.buttonFocusedColor}
          nativeID={'tab_' + tab.type}
          key={key}>
          <Text style={styles.tabText}>{tab.text}</Text>
        </FocusableHighlight>
      );
    });
  }

  return (
    <View style={Style.styles.right}>
      <View style={Style.styles.header}>
        <Text style={[Style.styles.headerText, {marginTop: 40}]}>
          {'Scroll Demo'}
        </Text>
        <View style={styles.tabs}>{showTabs()}</View>
      </View>
      {isSelected(TAB_FLATLIST) && <FlatListDemo />}
      {/* {isSelected(TAB_SECTIONLIST) && <SectionListDemo />} */}
    </View>
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  tabs: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tab: {
    width: Style.px(200),
    height: Style.px(100),
    margin: Style.px(10),
    backgroundColor: Style.buttonUnfocusedColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabSelected: {
    borderWidth: Style.px(10),
    borderColor: '#628fbd',
  },
  tabText: {
    fontSize: Style.px(20),
  },
});
