
<div align ="center">

# Team Bits N' Bytes
Electronic Medical Record Manager

</div>

Project Idea: Using polygon we have shifted the centralized database of any hospital/heath organization onto a decentralized platform where the patient's health records will be safe i.e
If any hospital makes a change in any patient's electronic health record it will be recorded by the blockchain. We take look at a specific scenario where a person patient of hospital “A” is met with an accident and is taken to hospital “B” for emergency treatment, hospital “B” would require the health record of the patient, if we were to take this scenario in a normal centralized database it would require the actual file transfer from the database of “A” to “B” which takes time but in the case of blockchain we only need to change the ownership/view permission of the health record saving precious moments.

Progress So Far: We have implemented three different logins (Owner, Hospitals, Patient) according to who has logged in to the web application the navigation bar changes dynamically, 

Owner: has the privilege to add hospitals so the navigation bar shows the home, hospitals, and add hospital tabs. The hospitals tab takes us to a page where the owner can see different hospitals in the form of cards. Each card shows information stored on the blockchain therefore as the owner clicks on add hospital tab and fills in the necessary information the data is updated on the blockchain via the smart contract and the cards are dynamically updated to show the previous and newly added hospital.

Hospitals: navigation bar shows the home, Patients, and add patient tab , has the same functionality as the owner i.e Patients tab navigates to a simplified view of each patient of the logged-in hospital in a card form, as the patients are added the cards are dynamically changed to show the previous and newly added patients. Each card has a transfer button that enables the hospital to share the health record of a patient with other hospitals added to the contract.

Patients: The navigation bar shows the tab EHR which gives a simplified view of the health record


<div align ="center">

# Contract address on polygon testnet

</div>

![Screenshot](https://user-images.githubusercontent.com/78133084/193438423-011a55b3-b48f-4386-b6f1-dd2d5e545280.png)

<div align ="center">

# Migration on polygon tesnet using truffle

</div>

![Screenshot](https://user-images.githubusercontent.com/78133084/193438462-b668c47d-ebff-455f-a064-910257d13695.png)



