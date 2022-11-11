
import "./App.css";
import { Link, Outlet, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <div className="layout">
      <header className="header">
        <nav>
          <ul>
          <li>
         <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link></li>
          </ul>
          
        </nav>
      </header>

      <main className="main">
        <Outlet />
      </main>
      <footer className="footer">
        <h4>This is footer</h4>
      </footer>
    </div>
  );
}

function Dashboard() {
  return <h1>this is a dashboard</h1>;
}

function About() {
  return <h1>This is about</h1>;
}

function Home() {
  return <h1>This is Home</h1>;
}

export default App;
