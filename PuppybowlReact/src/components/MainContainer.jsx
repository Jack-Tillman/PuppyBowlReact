import { Routes, Route } from "react-router-dom";
import { AllPlayers } from "./AllPlayers";
import { NewPlayerForm } from './NewPlayerForm'
import { SinglePlayer } from './SinglePlayer'
// import {useParams, useNavigate} from 'react-router-dom';

export function MainContainer() {

    return (
      <div id="main-section">
        <Routes>
          <Route path="/" element={<AllPlayers />} />
          <Route path="/singleplayer/:id" element={<SinglePlayer />} />
          <Route path="/newplayerform/" element={<NewPlayerForm />} />
        </Routes>
      </div>
    );
  }