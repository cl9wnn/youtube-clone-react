import './App.css'
import SideBar from "./components/SideBar/SideBar.tsx";
import Header from "./components/Header/Header.tsx";
import MainComponent from "./components/MainComponent/MainComponent.tsx";
import {useState} from "react";
import TagSelector from "./components/TagSelector/TagSelector.tsx";

export default function App() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
      <>
          <Header isOpen = {isOpen} setSidebarOpen={setIsOpen}/>
          <TagSelector isOpen = {isOpen}/>
          <SideBar isOpen = {isOpen}  />
          <MainComponent isOpen={isOpen}/>
      </>
  )
}

