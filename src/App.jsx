
import './App.css';
import {Routes,Route} from 'react-router-dom';

import Header from './Header';
import Login from './components/Login';
import Register from './components/Register';
import Questions from './components/Questions';
import Answers from './components/Answers';
import AddQuestionForm from './components/AddQuestionForm';
import AddAnswerForm from './components/AddAnswerForm';
import Footer from './Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/questions' element={<Questions />}></Route>
        <Route path='/answers/:id' element={<Answers />}></Route>
        <Route path='/addquestion' element={<AddQuestionForm />}></Route>
        <Route path='/addanswer' element={<AddAnswerForm />}></Route>
        <Route path='/*' element={<h1>404 Page not Found</h1>}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
