import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    backgroundContainer: {
        flex: 1,
      },
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      },
      searchContainer: {
        width: "100%",
        flex: 1,
      },
      searchHeader: {
        width: "100%",
        justifyContent: "center",
        alignItems: 'center',
        flex: 1,
      },
      searchText: {
        fontFamily: 'PatrickHand-Regular',
        textAlign: 'center',
        marginBottom: 20,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
      },
      scrollContainer: {
        flex: 3,
      },
      scroll: {
        width: "100%",
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
      },
      inputView: {
        width: "80%",
        backgroundColor: "white",
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
      },
      inputText: {
        height: 50,
        color: "black"
      },
      headerText: {
        height: 20,
        fontWeight: 'bold',
      },
      item: {
        flex: 1,
        flexDirection: 'row',
        marginRight: 15,
        marginTop: 12,
      },
      recipeImage: {
        height: 165,
        width: 165,
        padding: 5
      },
      recipeName:{
        textAlign: "center",
        backgroundColor: 'rgba(52, 52, 52, 0.7)',
        width: 165,
        justifyContent: "center",
        color: "white",
        fontSize: 14,
        position: "absolute",
        bottom: 0,
        paddingBottom: 2,
        paddingTop: 2
      },
});
