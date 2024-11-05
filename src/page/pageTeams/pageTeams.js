import { getTeamsMain } from "../../components/teams/teamsMain/teamsMain";
import { getTeamsDesigner } from "../../components/teams/teamsDesigner/teamsDesigner";
import { getAboutService } from '../../components/about/aboutService/aboutService';
import "./pageTeams.css";

export function getPageTeamsMain()
{
    const teamsMain = document.createElement("main");
    teamsMain.className = "teams-main";

    teamsMain.append(
        getTeamsMain(),
        getTeamsDesigner(),
        getAboutService()
    );

    return teamsMain;
}