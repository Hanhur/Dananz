import { getTeamsMain } from "../../components/teams/teamsMain/teamsMain";
import "./pageTeams.css";

export function getPageTeamsMain()
{
    const teamsMain = document.createElement("main");
    teamsMain.className = "teams-main";

    teamsMain.append(
        getTeamsMain()
    );

    return teamsMain;
}