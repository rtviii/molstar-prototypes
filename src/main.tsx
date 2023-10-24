// import { MolStarWrapper } from "./molstar_wrapper";
import { MolStarWrapper } from "./molstar_wrapper";
import { createRoot } from 'react-dom/client';
import './main.css';

const App = () => {
  return (
    <div className="container">
      <header className="header">Header</header>
      <div className="content">
        <aside className="left-tab">Left Tab</aside>
        <main className="main-content">
          <MolStarWrapper />
        </main>
      </div>
    </div>
  );

}
const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);