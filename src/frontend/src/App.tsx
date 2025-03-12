import './App.css'
import SideBar from "./components/SideBar.tsx";
import Header from "./components/Header.tsx";
import MainComponent from "./components/MainComponent.tsx";
import {useState} from "react";

export default function App() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
      <>
          <SideBar isOpen = {isOpen} setSidebarOpen={setIsOpen} />
          <Header isOpen = {isOpen}/>
          <MainComponent isOpen={isOpen}/>
      </>
  )
}

