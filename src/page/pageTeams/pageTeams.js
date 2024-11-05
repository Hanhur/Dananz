import { getTeamsMain } from "../../components/teams/teamsMain/teamsMain";
import { getTeamsDesigner } from "../../components/teams/teamsDesigner/teamsDesigner";
import "./pageTeams.css";

export function getPageTeamsMain()
{
    const teamsMain = document.createElement("main");
    teamsMain.className = "teams-main";

    teamsMain.append(
        getTeamsMain(),
        getTeamsDesigner()
    );

    return teamsMain;
}