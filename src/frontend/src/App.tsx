import './App.css'
import SideBar from "./components/SideBar.tsx";
import Header from "./components/Header.tsx";
import MainComponent from "./components/MainComponent.tsx";

export default function App() {
  return (
      <>
          <Header/>
          <SideBar/>
          <MainComponent/>
      </>
  )
}

