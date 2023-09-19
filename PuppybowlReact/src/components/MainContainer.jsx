import { Routes, Route } from "react-router-dom";
import { AllPlayers } from "./AllPlayers";
import { NewPlayerForm } from './NewPlayerForm'
import { SinglePlayer } from './SinglePlayer'

export function MainContainer() {
    return (
      <div id="main-section">
        <Routes>
          <Route path="/" element={<AllPlayers />} />
          <Route path="/singleplayerview/:id" element={<SinglePlayer /* PASS id in as props! *//>} />
          <Route path="/newplayerform/" element={<NewPlayerForm />} />
        </Routes>
      </div>
    );
  }