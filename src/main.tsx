// import { MolStarWrapper } from "./molstar_wrapper";
import { MolStarWrapper } from "./molstar_wrapper";
import { createRoot } from 'react-dom/client';
import './main.css';

const App = () => {
  return (
    <div className="container">

        <MolStarWrapper/>
      <header className="header">Header</header>
      <div className="content">
        <aside className="left-tab">Left Tab</aside>
        <main className="main-content">Main Content</main>
        <div id="molstar-slot"> </div>
      </div>
    </div>
  );

}
const container = document.getElementById('root');
const root = createRoot(container!);

// const mstar_slot = document.getElementById('molstar-slot');
// const mstar_root = createRoot(mstar_slot!);
// createMolstarPlugin(mstar_root)
root.render(<App />);

// const mstar_Component = document.getElementById("molstar-slot")
// console.log(mstar_Component);
// createMolstarPlugin(mstar_root!)