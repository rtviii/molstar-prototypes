
import { PluginConfig } from 'molstar/lib/mol-plugin/config';
import { DefaultPluginUISpec, PluginUISpec } from 'molstar/lib/mol-plugin-ui/spec';
import { StructureComponentControls } from 'molstar/lib/mol-plugin-ui/structure/components';
import { StructureMeasurementsControls } from 'molstar/lib/mol-plugin-ui/structure/measurements';
import { StructureSourceControls } from 'molstar/lib/mol-plugin-ui/structure/source';
import { ToggleSelectionModeButton,StructureSelectionActionsControls,StructureSelectionStatsControls } from 'molstar/lib/mol-plugin-ui/structure/selection';
import { PluginSpec } from 'molstar/lib/mol-plugin/spec';
import { PluginBehavior } from 'molstar/lib/mol-plugin/behavior/behavior';
import {StructureQuickStylesControls} from 'molstar/lib/mol-plugin-ui/structure/quick-styles';
import {VolumeStreamingControls} from 'molstar/lib/mol-plugin-ui/structure/volume'
import {GenericEntryListControls} from 'molstar/lib/mol-plugin-ui/structure/generic'
import { PluginUIComponent } from 'molstar/lib/mol-plugin-ui/base';
import { BuildSvg, Icon } from 'molstar/lib/mol-plugin-ui/controls/icons';


export class CustomStructureTools extends PluginUIComponent {
    render() {
        return <>
            <div className='msp-section-header'><Icon svg={BuildSvg} />Structure Tools</div>
            <StructureSourceControls />
            <StructureComponentControls /> 
             <StructureMeasurementsControls/>
             <VolumeStreamingControls/>
             <StructureQuickStylesControls/>
             <GenericEntryListControls/>
        </>;
    }
}
// export const DefaultPluginSpec = (): PluginSpec => ({
//     actions: [
//         PluginSpec.Action(StateActions.Structure.EnableStructureCustomProps)
//     ],
//     behaviors: [
//         PluginSpec.Behavior(PluginBehaviors.Representation.HighlightLoci),
//         PluginSpec.Behavior(PluginBehaviors.Representation.SelectLoci),
//         PluginSpec.Behavior(PluginBehaviors.Representation.FocusLoci),
//         PluginSpec.Behavior(PluginBehaviors.Camera.FocusLoci),
//         PluginSpec.Behavior(PluginBehaviors.Camera.CameraAxisHelper),
//         PluginSpec.Behavior(PluginBehaviors.CustomProps.StructureInfo),
//         PluginSpec.Behavior(PluginBehaviors.CustomProps.AccessibleSurfaceArea),
//         PluginSpec.Behavior(PDBeSIFTSMapping, {autoAttach: true, showTooltip: true}),
//         PluginSpec.Behavior(PluginBehaviors.CustomProps.Interactions),
//         PluginSpec.Behavior(PluginBehaviors.CustomProps.SecondaryStructure),
//         PluginSpec.Behavior(PluginBehaviors.CustomProps.ValenceModel),
//         PluginSpec.Behavior(PluginBehaviors.CustomProps.CrossLinkRestraint),
//     ],
//     // animations: [],
//     config: [
//         [PluginConfig.VolumeStreaming.DefaultServer, 'https://www.ebi.ac.uk/pdbe/volume-server']
//     ]
// });

export const MySpec: PluginUISpec = {
    ...DefaultPluginUISpec(),
    config: [
        [PluginConfig.Viewport.ShowControls, true],
        [PluginConfig.Viewport.ShowSettings, false],
        [PluginConfig.VolumeStreaming.Enabled, true],
    ],
    // behaviors:[
    // ],
    components:{

        controls:{
        },

        structureTools: CustomStructureTools


            



    },
    

    layout:{
        initial:{
            isExpanded:true,
            controlsDisplay:'landscape',
        }
    },

}