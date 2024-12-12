```javascript
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const DATA = Array.from({ length: 10000 }, (_, i) => ({ id: i, title: `Item ${i}` }));

const MyComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleItems, setVisibleItems] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 20; // Adjust as needed

  useEffect(() => {
    // Simulate an asynchronous operation
    setTimeout(() => {
      setData(DATA);
      setVisibleItems(DATA.slice(itemOffset, itemOffset + itemsPerPage));
      setLoading(false);
    }, 1000);
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text>{item.title}</Text>
    </View>
  );

  const handleViewabilityChange = ({ viewableItems }) => {
    setVisibleItems(viewableItems.map(item => item.item));
  }; 

  const loadMoreItems = () => {
    setItemOffset(itemOffset + itemsPerPage);
    setVisibleItems([...visibleItems, ...DATA.slice(itemOffset + itemsPerPage, itemOffset + 2 * itemsPerPage)])
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={visibleItems}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      onViewableItemsChanged={handleViewabilityChange}
      onEndReached={loadMoreItems}
      onEndReachedThreshold={0.5} // Adjust as needed
      initialNumToRender={itemsPerPage}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MyComponent;
```