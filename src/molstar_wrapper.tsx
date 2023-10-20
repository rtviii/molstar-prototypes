import { useEffect, createRef } from "react";
import { PluginUIContext } from "molstar/lib/mol-plugin-ui/context";
import "molstar/lib/mol-plugin-ui/skin/light.scss";
import { DefaultPluginSpec, PluginSpec } from 'molstar/lib/mol-plugin/spec';
import { PluginContext } from 'molstar/lib/mol-plugin/context';
import { PluginLayoutControlsDisplay } from 'molstar/lib/mol-plugin/layout';
import { createPluginUI } from 'molstar/lib/mol-plugin-ui/index';
import { MySpec } from "./molstar_config";


declare global {
  interface Window {
    molstar?: PluginUIContext;
  }
}


export async function createPlugin(parent: HTMLElement) {
    const plugin = await createPluginUI(parent, MySpec);
    const data = await plugin.builders.data.download({ url: "https://files.rcsb.org/download/3j7z.pdb" }, { state: { isGhost: false } });
    const trajectory = await plugin.builders.structure.parseTrajectory(data, 'pdb');
    await plugin.builders.structure.hierarchy.applyPreset(trajectory, 'default');
    return plugin;
}
export function MolStarWrapper() {
  const parent = createRef<HTMLDivElement>();

  useEffect(() => {
    async function init() {
        window.molstar = await createPluginUI(parent.current as HTMLDivElement);

        const data = await window.molstar.builders.data.download(
          { url: "https://files.rcsb.org/download/3j7z.cif" }, /* replace with your URL */
          { state: { isGhost: true } }
        );
        const trajectory =
          await window.molstar.builders.structure.parseTrajectory(data, "pdb");
        await window.molstar.builders.structure.hierarchy.applyPreset(
          trajectory,
          "default"
        );
    }
    init();
    return () => {
      window.molstar?.dispose();
      window.molstar = undefined;
    };
  }, []);

  return <div ref={parent} style={{ width: 640, height: 480 }}/>;
}