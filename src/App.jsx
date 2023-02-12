
import './App.css';
import {Routes,Route, useNavigate} from 'react-router-dom';

import Header from './Header';
import Login from './components/Login';
import Register from './components/Register';
import Questions from './components/Questions';
import Answers from './components/Answers';
import AddQuestionForm from './components/AddQuestionForm';
import EditQuestionForm from './components/EditQuestionForm';
import AddAnswerForm from './components/AddAnswerForm';
import EditAnswerForm from './components/EditAnswerForm';
import Users from './components/Users';
import Footer from './Footer';


import { useEffect } from 'react';

function App() {

  const navigateTo = useNavigate();

  useEffect(() => {
    navigateTo('/questions');
  },[])

  return (
    <>
      <div id="page-container">
        <div id="content-wrap">
          <Header />
          <Routes>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>

            <Route path='/questions' element={<Questions />}></Route>
            <Route path='/addquestion' element={<AddQuestionForm />}></Route>
            <Route path='/editquestion/:questionid' element={<EditQuestionForm />}></Route>

            <Route path='/answers' >
              <Route path=':questionid' element={<Answers />} />
            </Route>

            <Route path='/addanswer' >
              <Route path=':questionid' element={<AddAnswerForm />} />
            </Route>
            <Route path='/editanswer' >
              <Route path=':answerid' element={<EditAnswerForm />} />
            </Route>

            <Route path='/users' element={<Users />}></Route>
        
            <Route path='/*' element={<h1>404 Page not Found</h1>}></Route>
          </Routes>
        </div>
          <Footer />
      </div>
    </>
  );
}

export default App;
