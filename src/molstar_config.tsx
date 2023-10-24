
import { PluginConfig } from 'molstar/lib/mol-plugin/config';
import { DefaultPluginUISpec, PluginUISpec } from 'molstar/lib/mol-plugin-ui/spec';
import { StructureComponentControls } from 'molstar/lib/mol-plugin-ui/structure/components';
import { StructureSourceControls } from 'molstar/lib/mol-plugin-ui/structure/source';
import { StructureQuickStylesControls } from 'molstar/lib/mol-plugin-ui/structure/quick-styles';
import { VolumeStreamingControls, VolumeSourceControls } from 'molstar/lib/mol-plugin-ui/structure/volume'
import { PluginUIComponent } from 'molstar/lib/mol-plugin-ui/base';
import { BuildSvg, Icon } from 'molstar/lib/mol-plugin-ui/controls/icons';


export class CustomStructureTools extends PluginUIComponent {
    render() {
        return <>
            <div className='msp-section-header'><Icon svg={BuildSvg} />Structure Tools</div>
            <StructureSourceControls />
            <StructureComponentControls />
            <VolumeStreamingControls />
            <VolumeSourceControls />
            <StructureQuickStylesControls />
        </>;
    }
}

export const MySpec: PluginUISpec = {
    ...DefaultPluginUISpec(),
    config: [
        [PluginConfig.VolumeStreaming.Enabled, true],
    ],
    components: {
        structureTools: CustomStructureTools,
        hideTaskOverlay: false,
        controls: { left: 'none',  top: 'none', bottom: 'none' },

        remoteState: 'none',
    },
    layout: {
        initial: {
            isExpanded: false,
            showControls: true,
        },
    },
}