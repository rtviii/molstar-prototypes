
import { PluginConfig } from 'molstar/lib/mol-plugin/config';
import { DefaultPluginUISpec, PluginUISpec } from 'molstar/lib/mol-plugin-ui/spec';
import { PluginSpec } from 'molstar/lib/mol-plugin/spec';
import { PluginBehavior } from 'molstar/lib/mol-plugin/behavior/behavior';


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
import { StructureComponentControls } from 'molstar/lib/mol-plugin-ui/structure/components';
import { StructureMeasurementsControls } from 'molstar/lib/mol-plugin-ui/structure/measurements';
import { StructureSourceControls } from 'molstar/lib/mol-plugin-ui/structure/source';
import { PluginUIComponent } from 'molstar/lib/mol-plugin-ui/base';
import { BuildSvg, Icon } from 'molstar/lib/mol-plugin-ui/controls/icons';

export class PDBeStructureTools extends PluginUIComponent {
    render() {
        return <>
            <div className='msp-section-header'><Icon svg={BuildSvg} />Structure Tools</div>
            <StructureSourceControls />
            {/* <StructureComponentControls /> */}
            {/* <StructureMeasurementsControls /> */}
        </>;
    }
}

export const MySpec: PluginUISpec = {
    ...DefaultPluginUISpec(),
    config: [
        [PluginConfig.Viewport.ShowControls, true],
        [PluginConfig.Viewport.ShowSettings, false],
    ],
    behaviors:[
    ],
    components:{

        controls:{
            // right:'none',
            // left:'none'
        },

        structureTools: PDBeStructureTools


            



    },
    actions:[

    ],
    

    layout:{
        initial:{
            isExpanded:true,
            controlsDisplay:'landscape',
        }
    },
    canvas3d:{
    },

}