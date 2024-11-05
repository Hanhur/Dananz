import { getContact } from "../../components/contact/contact";
import { getLocation } from "../../components/location/location";
import "./pageContact.css";

export function getPageContact()
{
    const contactMain = document.createElement("main");
    contactMain.className = "contact-main";

    contactMain.append(
        getContact(),
        getLocation()
    );

    return contactMain;
}