
import ListContentShift from './module/shifts/containers/ListContentShift';
import ShiftDetail from './module/shifts/containers/ShiftDetail';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { GlobalStyle } from './stylesheets/GlobalStyle';

const App = () => {
  return (
  <Router>
      <Routes>
        <Route path="/" element={<ListContentShift />} />
        <Route path="/:shiftId" element={<ShiftDetail />} />
        <Route path="/:shiftId/:prof" element={<ShiftDetail />} /> // navigate to list of professional area
      </Routes>
    <GlobalStyle />
  </Router>
  );
}

export default App;
