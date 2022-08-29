import { Route, Routes } from "react-router"
import Actions from "./components/Actions"
import Code from "./components/Code"
import CreateIssue from "./components/CreateIssue"
import Nav from "./components/Nav"
import Projects from "./components/Projects"
import PullRequest from "./components/PullRequest"
import Security from "./components/Security"
import Header from "./Header"
import Issue from "./pages/Issue"

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Routes>
        <Route path="/" element={<Issue />} />
        <Route path="/issue" element={<Issue />} />
        <Route path="/new" element={<CreateIssue />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/pulls" element={<PullRequest />} />
        <Route path="/code" element={<Code />} />
        <Route path="/security" element={<Security />} />
        <Route path="/actions" element={<Actions />} />
      </Routes>
    </>
  )
}

export default App
