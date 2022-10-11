// import Counter from './counter/Counter';
import DropDown from './dropdown/Dropdown';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        marginTop: '30px',
        // justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <DropDown />
      {/* <Counter initialValue={10} /> */}
    </div>
  );
};
