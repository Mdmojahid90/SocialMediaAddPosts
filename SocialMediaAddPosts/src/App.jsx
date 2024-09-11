import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import PostList from "./components/PostList";
import CreatePost from "./components/CreatePost";
import PostDataProvider from "./components/store/post-list-data";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostDataProvider>
      <div className="containerparent">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div>
          <Header />
          {selectedTab === "Home" ? <PostList /> : <CreatePost />}
          <Footer />
        </div>
      </div>
    </PostDataProvider>
  );
}

export default App;
