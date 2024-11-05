import { getContact } from "../../components/contact/contact";

import "./pageContact.css";

export function getPageContact()
{
    const contactMain = document.createElement("main");
    contactMain.className = "contact-main";

    contactMain.append(
        getContact(),
    );

    return contactMain;
}