import { StyleSheet } from 'react-native';

const scStyles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  containerYear: {
    width: '100%',
    flex: 1,
    // flexDirection: 'row',
    padding: 4,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  yearCalBtn: {
    width: '30%',
    height: 153,
    marginHorizontal: 6, // column gap
    marginBottom: 7, // row gap
  },
  monthContainer: {
    width: '100%',
    paddingTop: 10,
    flex: 1,
  },
  timerText: {
    fontSize: 48,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  calendarYear: {
    width: '100%',
    height: '100%',
    // borderWidth: 1,
    // borderColor: 'gray',
  },
  calendarMonth: {
    width: '100%',
  },
  mainScroll: {
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
    display: 'flex',
    flexDirection: 'row',
  },
  btn: {
    position: 'absolute',
    width: 35,
    height: 30,
    fontSize: 10,
    padding: 6,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    border: '1px solid #F3BF06',
    backgroundColor: '#FDC500',
    zIndex: 1000,
    top: 20,
    right: 70,
  },
  btnMonth: {
    // position: 'absolute',
    width: 35,
    height: 30,
    fontSize: 10,
    padding: 6,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    border: '1px solid #F3BF06',
    backgroundColor: '#FDC500',
    // zIndex: 1000,
    // top: 20,
    // right: 70,
  },
  btnTxt: {
    color: '#fff',
    // fontSize: 13,
    fontWeight: 'bold',
    // alignSelf: 'center',
  },
  monthScroll: {
    marginTop: 10,
    padding: 20,
    backgroundColor: '#fff',
    height: 'auto',
    overflow: 'scroll',
  },
  renderItem: {
    marginTop: 10,
  },
  topText: {
    color: '#24232A',
    fontSize: 20,
    fontWeight: '700',
    paddingBottom: 5,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  innerTopTxt: {
    fontSize: 14,
    fontWeight: '400',
    marginTop: 10,
    marginBottom: 5,
    paddingLeft: 10,
  },
  innerMainTxt: {
    fontSize: 11,
    fontWeight: '400',
    color: '#6D8499',
    paddingLeft: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#f2f2f2',
    marginTop: 5,
  },
  headerText: {
    fontSize: 15,
    color: 'black',
  },
  day: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});


export default scStyles;