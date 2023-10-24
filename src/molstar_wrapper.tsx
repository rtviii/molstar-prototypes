import { useEffect, createRef } from "react";
import { PluginUIContext } from "molstar/lib/mol-plugin-ui/context";
import './molstar.css'
import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import { Plugin } from 'molstar/lib/mol-plugin-ui/plugin';
import "molstar/lib/mol-plugin-ui/skin/light.scss";
import { createPluginUI } from 'molstar/lib/mol-plugin-ui/index';
import { MySpec } from "./molstar_config";
import { PluginContext } from "molstar/lib/mol-plugin/context";
import { DefaultPluginUISpec, PluginUISpec } from "molstar/lib/mol-plugin-ui/spec";


declare global {
  interface Window {
    molstar?: PluginUIContext;
  }
}

export function MolStarWrapper() {
  const parent = createRef<HTMLDivElement>();
  useEffect(() => {
    async function init() {
              window.molstar = await createPluginUI(parent.current as HTMLDivElement, MySpec);
        const data           = await window.molstar.builders.data.download( { url: "https://files.rcsb.org/download/1lol.pdb" }, { state: { isGhost: true } } );
        const trajectory     = await window.molstar.builders.structure.parseTrajectory(data, "pdb");
        await window.molstar.builders.structure.hierarchy.applyPreset( trajectory, "default" );
    }

    init();
    return () => {
      window.molstar?.dispose();
      window.molstar = undefined;
    };
  }, []);

  return <div id='molstar-wrapper' ref={parent} />;
}

// export async function createPluginUI(target: HTMLElement, spec?: PluginUISpec, options?: { onBeforeUIRender?: (ctx: PluginUIContext) => (Promise<void> | void) }) {
//     const ctx = new PluginUIContext(spec || DefaultPluginUISpec());
//     await ctx.init();

//     if (options?.onBeforeUIRender) {
//         await options.onBeforeUIRender(ctx);
//     }

//     createRoot(target).render(createElement(Plugin, { plugin: ctx }));

//     try {
//         await ctx.canvas3dInitialized;
//     } catch {
//         // Error reported in UI/console elsewhere.
//     }
//     return ctx;
// }

// export async function createMolstarPlugin(parent: HTMLElement) {
//     const plugin     = await createPluginUI(parent, MySpec);

//     console.log("Glot plugin",plugin);
    
//     const data       = await plugin.builders.data.download({ url: "https://files.rcsb.org/download/3j7z.pdb" }, { state: { isGhost: false } });
//     const trajectory = await plugin.builders.structure.parseTrajectory(data, 'pdb');
//     await plugin.builders.structure.hierarchy.applyPreset(trajectory, 'default');
//     return plugin;
// }

// export async function init() {
//     const plugin = new PluginContext(MySpec);
//     await plugin.init();
//     console.log(plugin)

//     const canvas:HTMLCanvasElement = document.getElementById('molstar-canvas');
//     const parent:HTMLDivElement    = document.getElementById('molstar-parent');

//     if (!plugin.initViewer(canvas, parent)) {
//         console.error('Failed to init Mol*')
//         return;
//     }

//     const data       = await plugin.builders.data.download({ url: "https://files.rcsb.org/download/3j7z.pdb" });
//     const trajectory = await plugin.builders.structure.parseTrajectory(data, 'pdb');

//     await plugin.builders.structure.hierarchy.applyPreset(trajectory, 'default');
// }

// export function MolStarWrapper() {
//   const parent = createRef<HTMLDivElement>();

//   useEffect(() => {
//     async function init() {
//         window.molstar = await createPluginUI(parent.current as HTMLDivElement, MySpec);
//         const data = await window.molstar.builders.data.download(
//           { url: "https://files.rcsb.org/download/3j7z.pdb" }, /* replace with your URL */
//           // { state: { isGhost: true } }
//         );
//         const trajectory = await window.molstar.builders.structure.parseTrajectory(data, "pdb");
//         await window.molstar.builders.structure.hierarchy.applyPreset( trajectory, "default" );
//     }
//     init();
//     return () => {
//       window.molstar?.dispose();
//       window.molstar = undefined;
//     };
//   }, []);

//   return <div ref={parent} style={{ width: 200, height: 200 }}/>;
// }