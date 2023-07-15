import AV from "/src/pages/project_page/AutoVehicleSim/av_vid.mp4"
import FT from "/src/pages/project_page/Flamethrower/flamethrower.mp4"
import ELB from "/src/pages/project_page/ElectricLongboard/e-board.mp4"
import LT from "/src/pages/project_page/LaserTracker/laser-tracker_demo2.mp4"
import SMC from "/src/pages/project_page/Solar-Mechanical Charger/smchgr.mp4"
import VR from "/src/pages/project_page/VanderbiltRobotics/telerun.mp4"

const VidHub = new Map();
VidHub.set('auto-vehicle-sim', AV); 
VidHub.set('flame-thrower', FT); 
VidHub.set('e-longboard', ELB);
VidHub.set('laser-tracker', LT); 
VidHub.set('solar-mechanical-charger', SMC);
VidHub.set('vandy-robotics', VR); 



export default VidHub; 