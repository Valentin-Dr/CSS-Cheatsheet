// == Import
import Header from 'src/components/Header';
import ChromeReq from 'src/components/ChromeReq';
import First from 'src/components/First';
import Second from 'src/components/Second';
import Third from 'src/components/Third';
import { Routes, Route } from 'react-router-dom';
import './styles.scss';

// == Composant
export default function App() {
  const isChromium = window.chrome;
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<First />}
        />
        <Route
          path="/Wavy"
          element={<Second />}
        />
        <Route
          path="/Neon_input"
          element={isChromium ? <Third /> : <ChromeReq />}
        />
      </Routes>
      {/* <First /> */}
    </>
  );
}
// const App = () => (
//   <>
//     <Header />
//     <Routes>
//       <Route
//         path="/"
//         element={<First />}
//       />
//       <Route
//         path="/Wavy"
//         element={<Second />}
//       />
//       <Route
//         path="Neon_input"
//         element={<Third />}
//       />
//     </Routes>
//     {/* <First /> */}
//   </>
// );

// == Export
// export default App;
