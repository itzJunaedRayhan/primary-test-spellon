const crm = document.getElementById("crm");
const resident = document.getElementById("resident");
const community = document.getElementById("community");
const communication = document.getElementById("communication");
const payment = document.getElementById("payment");
const maintenance = document.getElementById("maintenance");
const report = document.getElementById("report");
const innerDiv = document.querySelector("#innerDiv p");


const text = {
    crmText : "Vitae tortor consequat lacinia nunc sodales potenti cras loi suspendisse tempor liberomu risus nibh eget platea justo",
    residentText : "curabitur vitae nunc sed velit dignissim sodales ut eu sem integer vitae justo eget magna fermentum iaculis eu non",
    communityText : "diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor at auctor",
    communicationText : "nunc id cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a",
    paymentText : "at urna condimentum mattis pellentesque id nibh tortor id aliquet lectus proin nibh nisl condimentum id",
    maintenanceText : "pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas sed tempus",
    reportText : "massa ultricies mi quis hendrerit dolor magna eget est lorem ipsum dolor sit amet consectetur adipiscing elit"
}

crm.addEventListener("click", () => innerDiv.innerText = text.crmText);
resident.addEventListener("click", () => innerDiv.innerText = text.residentText);
community.addEventListener("click", () => innerDiv.innerText = text.communityText);
communication.addEventListener("click", () => innerDiv.innerText = text.communicationText);
payment.addEventListener("click", () => innerDiv.innerText = text.paymentText);
maintenance.addEventListener("click", () => innerDiv.innerText = text.maintenanceText);
report.addEventListener("click", () => innerDiv.innerText = text.reportText);