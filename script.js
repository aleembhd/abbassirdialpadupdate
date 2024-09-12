const students = [
    
  { rollNumber: '22WJ1A04K3', name: 'MOTHI ABHIRAM', parentPhone: '9701016317', studentPhone: '9963813930' },
  { rollNumber: '22WJ1A04K4', name: 'MOTTE PUJITHA', parentPhone: '9573527903', studentPhone: '9347790933' },
  { rollNumber: '22WJ1A04K5', name: 'MOTTE SATHWIKA', parentPhone: '9948385577', studentPhone: '8500520577' },
  { rollNumber: '22WJ1A04K6', name: 'MUDDASANI MANISHA', parentPhone: '9110364970', studentPhone: '8639654060' },
  { rollNumber: '22WJ1A04K7', name: 'MUDIGONDA SINDHUJA', parentPhone: '9603134441', studentPhone: '9032480948' },
  { rollNumber: '22WJ1A04K8', name: 'MUDRABOINA LAXMI PRASANNA', parentPhone: '9959057116', studentPhone: '8019853915' },
  { rollNumber: '22WJ1A04K9', name: 'MUKESH REDDY GUNDA', parentPhone: '9014476299', studentPhone: '6304421697' },
  { rollNumber: '22WJ1A04L0', name: 'MULAMALLA SATHWIK REDDY', parentPhone: '9100334104', studentPhone: '9948240153' },
  { rollNumber: '22WJ1A04L1', name: 'MUMMADI SRINIDHI', parentPhone: '9848455517', studentPhone: '9848315517' },
  { rollNumber: '22WJ1A04L2', name: 'N SREE BHAVANI', parentPhone: '8978117975', studentPhone: '7093477790' },
  { rollNumber: '22WJ1A04L3', name: 'NADIMINTI PRASANTH REDDY', parentPhone: '6281416184', studentPhone: '6304800846' },
  { rollNumber: '22WJ1A04L4', name: 'NALLAGASU SREEJA', parentPhone: '9963708077', studentPhone: '9490021318' },
  { rollNumber: '22WJ1A04L5', name: 'NALLANA ADITYA', parentPhone: '9618455065', studentPhone: '8130527665' },
  { rollNumber: '22WJ1A04L6', name: 'NAMINDLA CHANDINI', parentPhone: '7997563407', studentPhone: '9640350697' },
  { rollNumber: '22WJ1A04L7', name: 'NANDAGIRI VENKATA RAVIKIRAN', parentPhone: '9765444061', studentPhone: '9689326604' },
  { rollNumber: '22WJ1A04L8', name: 'NAREDLA SRAVANKUMAR', parentPhone: '9989910353', studentPhone: '8106970384' },
  { rollNumber: '22WJ1A04L9', name: 'NARIVEDDI ASHISH', parentPhone: '9059557878', studentPhone: '9182211334' },
  { rollNumber: '22WJ1A04M0', name: 'NARVA DHEERAJ GOUD', parentPhone: '9440486513', studentPhone: '7794825107' },
  { rollNumber: '22WJ1A04M1', name: 'NEELAM SRAVANTHI', parentPhone: '9490030191', studentPhone: '9440974047' },
  { rollNumber: '22WJ1A04M2', name: 'NENAVATH AMRUTHA', parentPhone: '9381138715', studentPhone: '9182643072' },
  { rollNumber: '22WJ1A04M3', name: 'NENAVATH SURESH', parentPhone: '8309038134', studentPhone: '6305540422' },
  { rollNumber: '22WJ1A04M4', name: 'NENAVATH TEJA', parentPhone: '9866893791', studentPhone: '9391180262' },
  { rollNumber: '22WJ1A04M5', name: 'NOMULA MAHENDAR', parentPhone: '8790278781', studentPhone: '9550447878' },
  { rollNumber: '22WJ1A04M6', name: 'NOMULA MAYURI', parentPhone: '8919275997', studentPhone: '8919275997' },
  { rollNumber: '22WJ1A04M7', name: 'OLEPU SAIKUMAR', parentPhone: '9030427020', studentPhone: '8639670488' },
  { rollNumber: '22WJ1A04M8', name: 'ORSU NAVEEN', parentPhone: '7730011441', studentPhone: '9515540214' },
  { rollNumber: '22WJ1A04M9', name: 'P R S SANTOSH NAIDU', parentPhone: '9866221031', studentPhone: '7075351027' },
  { rollNumber: '22WJ1A04N0', name: 'P VENKATESHWAR REDDY', parentPhone: '6301840695', studentPhone: '7989517258' },
  { rollNumber: '22WJ1A04N1', name: 'PADALA SAI PRATHYUSHA', parentPhone: '8801270620', studentPhone: '6303111711' },
  { rollNumber: '22WJ1A04N2', name: 'PADAMATI ANUSH REDDY', parentPhone: '9492627481', studentPhone: '6281917597' },
  { rollNumber: '22WJ1A04N3', name: 'PAGIDIMARRI NAVEEN', parentPhone: '9701771652', studentPhone: '8184940014' },
  { rollNumber: '22WJ1A04N4', name: 'PAGIDIPALLI DURGA RAO', parentPhone: '7286907163', studentPhone: '6309857063' },
  { rollNumber: '22WJ1A04N5', name: 'PALLA SAI TEJA', parentPhone: '9948978270', studentPhone: '9948215498' },
  { rollNumber: '22WJ1A04N6', name: 'PARMESHWAR UPADHYAY', parentPhone: '9553605992', studentPhone: '9618032802' },
  { rollNumber: '22WJ1A04N7', name: 'PATEL UDAY KIRAN REDDY', parentPhone: '9908394331', studentPhone: '6301974834' },
  { rollNumber: '22WJ1A04N8', name: 'PATHURI SANTHOSH REDDY', parentPhone: '9963785449', studentPhone: '7569429156' },
  { rollNumber: '22WJ1A04N9', name: 'PENTAPATI HEMANTH KUMAR', parentPhone: '8125263555', studentPhone: '9246063555' },
  { rollNumber: '22WJ1A04P0', name: 'PINNAM HARSHAVARDHAN', parentPhone: '8978365784', studentPhone: '6305006860' },
  { rollNumber: '22WJ1A04P1', name: 'PIPPIRI SHIVAPRASAD', parentPhone: '9553010238', studentPhone: '9848465719' },
  { rollNumber: '22WJ1A04P2', name: 'POLISHETTY SAI KIRAN', parentPhone: '9705088261', studentPhone: '7207533072' },
  { rollNumber: '22WJ1A04P3', name: 'POLWAR OM KRISHNA TEJA', parentPhone: '9010140200', studentPhone: '6303699441' },
  { rollNumber: '22WJ1A04P4', name: 'PONNAGANDLA ROHINI', parentPhone: '9948612497', studentPhone: '6305866029' },
  { rollNumber: '22WJ1A04P5', name: 'POREDDY AVINASH REDDY', parentPhone: '9949201506', studentPhone: '6302173378' },
  { rollNumber: '22WJ1A04P6', name: 'POTHAGANI KAMALAKAR', parentPhone: '9347097547', studentPhone: '9652480489' },
  { rollNumber: '22WJ1A04P7', name: 'POTHURAJU RAJU', parentPhone: '8790479209', studentPhone: '9121972693' },
  { rollNumber: '22WJ1A04P8', name: 'PUCHAKAYALA SRI CHARAN REDDY', parentPhone: '8465954914', studentPhone: '7671953387' },
  { rollNumber: '22WJ1A04P9', name: 'PULI ARUN', parentPhone: '9440838392', studentPhone: '6302171165' },
  { rollNumber: '22WJ1A04Q1', name: 'PULI SUPRIYA', parentPhone: '7675848260', studentPhone: '9391540262' },
  { rollNumber: '22WJ1A04Q2', name: 'PULLAKANDAM LAXMI VENKATA NARASIMHA SWAMY', parentPhone: '9441271382', studentPhone: '6304621330' },
  { rollNumber: '22WJ1A04Q3', name: 'PURAM RAKESH', parentPhone: '9014065565', studentPhone: '8639867875' },
  { rollNumber: '22WJ1A04Q4', name: 'PUSULURI MEGHANA', parentPhone: '8121389339', studentPhone: '7013401081' },
  { rollNumber: '22WJ1A04Q5', name: 'R ANAND', parentPhone: '7075255280', studentPhone: '9390916046' },
  { rollNumber: '22WJ1A04Q6', name: 'RAGAPURAM PRANAB SAI', parentPhone: '8497919111', studentPhone: '7680067675' },
  { rollNumber: '22WJ1A04Q7', name: 'RAMINENI YASWITHA', parentPhone: '7036332286', studentPhone: '7815956124' },
  { rollNumber: '22WJ1A04Q8', name: 'RANABOTHU NITHIN REDDY', parentPhone: '9989900516', studentPhone: '7075201361' },
  { rollNumber: '22WJ1A04Q9', name: 'RANERU NARESH', parentPhone: '9963269357', studentPhone: '9573461594' },
  { rollNumber: '22WJ1A04R0', name: 'RANGAPPA SAI KIRAN', parentPhone: '7036898066', studentPhone: '9398601171' },
  { rollNumber: '22WJ1A04R1', name: 'RANGAREDDY LAXMI PRASANNA', parentPhone: '9949207419', studentPhone: '9866986521' },
  { rollNumber: '22WJ1A04R2', name: 'RANKIREDDY OM SAI VARSHITHA', parentPhone: '9295003580', studentPhone: '9014697651' },
  { rollNumber: '22WJ1A04R3', name: 'RAO VIJAY RAO', parentPhone: '9848912071', studentPhone: '7386880115' },
  { rollNumber: '22WJ1A04R4', name: 'RENUKUNTA NIKHITHA', parentPhone: '9951390080', studentPhone: '7661987725' },
  { rollNumber: '22WJ1A04R5', name: 'RESHMA', parentPhone: '9959291693', studentPhone: '9041909235' },
  { rollNumber: '22WJ1A04R6', name: 'S KRISHNA TEJA', parentPhone: '9652050917', studentPhone: '9553477673' },
  { rollNumber: '23WJ5A0422', name: 'R BOJA RAJU', parentPhone: '9182571047', studentPhone: '9346241543' },
  { rollNumber: '23WJ5A0423', name: 'RENA SUKANYA', parentPhone: '9347342845', studentPhone: '9347342845' },
  { rollNumber: '23WJ5A0424', name: 'SAKINALA KRISHNAGEETHIKA', parentPhone: '9948676602', studentPhone: '9059442608' },
  { rollNumber: '23WJ5A0425', name: 'SATLA GANESH', parentPhone: '9391407627', studentPhone: '8985880785' },
  { rollNumber: '23WJ5A0426', name: 'SHIVVA VINOD KUMAR', parentPhone: '9550148890', studentPhone: '7288803087' },
   ];
   
   let messageLogs = [];
   
   // Firebase configuration
   const firebaseConfig = {
  apiKey: "AIzaSyClSmunlhHoKCk9rXvuC7QETpl0RlRBCXI",
  authDomain: "abbas-sir-ece4.firebaseapp.com",
  databaseURL: "https://abbas-sir-ece4-default-rtdb.firebaseio.com",
  projectId: "abbas-sir-ece4",
  storageBucket: "abbas-sir-ece4.appspot.com",
  messagingSenderId: "219773727362",
  appId: "1:219773727362:web:9396a19e23c292f47fba9b"
};

   
   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   
   // Get a reference to the database service
   const database = firebase.database();
   
   // Replace localStorageDatabase with firebaseDatabase
   const firebaseDatabase = {
     saveMessage: function (log) {
       return database.ref('messageLogs').push(log);
     },
     getAllMessages: function () {
       return database.ref('messageLogs').once('value')
         .then(snapshot => {
           const messages = [];
           snapshot.forEach(childSnapshot => {
             messages.push(childSnapshot.val());
           });
           return messages;
         });
     },
     cleanupOldMessages: function () {
       const oneMonthAgo = new Date();
       oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
       
       return database.ref('messageLogs').once('value')
         .then(snapshot => {
           const updates = {};
           snapshot.forEach(childSnapshot => {
             const message = childSnapshot.val();
             if (new Date(message.timestamp) <= oneMonthAgo) {
               updates[childSnapshot.key] = null;
             }
           });
           return database.ref('messageLogs').update(updates);
         });
     },
     clearAllLogs: function () {
       return database.ref('messageLogs').remove();
     }
   };
   
   document.addEventListener('DOMContentLoaded', function () {
     fetchMessagesFromServer();
     periodicCleanup();
     setupEventListeners();
   });
   
   function fetchMessagesFromServer() {
     firebaseDatabase.getAllMessages()
       .then(messages => {
         messageLogs = messages;
         updateMessageLogs();
       })
       .catch(error => console.error('Error fetching messages:', error));
   }
   
   function periodicCleanup() {
     firebaseDatabase.cleanupOldMessages()
       .then(() => console.log('Old messages cleaned up'))
       .catch(error => console.error('Error cleaning up messages:', error));
   }
   
   function setupEventListeners() {
     const searchBtn = document.getElementById('searchBtn');
     if (searchBtn) searchBtn.addEventListener('click', toggleSearch);
   
     const whatsappParentBtn = document.getElementById('whatsappParentBtn');
     if (whatsappParentBtn) {
       whatsappParentBtn.addEventListener('click', toggleWhatsAppParent);
     }
   
     const sendCustomMessageBtn = document.getElementById('sendCustomMessageBtn');
     if (sendCustomMessageBtn) {
       sendCustomMessageBtn.addEventListener('click', sendCustomWhatsAppMessage);
     }
   
     const printBtn = document.getElementById('printBtn');
     if (printBtn) printBtn.addEventListener('click', openPrintModal);
   
     const closeModalBtn = document.getElementById('closeModal');
     if (closeModalBtn) closeModalBtn.addEventListener('click', closePrintModal);
   
     const printPreviewBtn = document.getElementById('printPreviewBtn');
     if (printPreviewBtn) printPreviewBtn.addEventListener('click', showPrintPreview);
   
     const clearLogsBtn = document.getElementById('clearLogsBtn');
     if (clearLogsBtn) clearLogsBtn.addEventListener('click', clearAllLogs);
   
     // Initialize date inputs with current date range
     const today = new Date();
     const oneMonthAgo = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
   
     const startDateInput = document.getElementById('startDate');
     const endDateInput = document.getElementById('endDate');
     if (startDateInput) startDateInput.value = oneMonthAgo.toISOString().split('T')[0];
     if (endDateInput) endDateInput.value = today.toISOString().split('T')[0];
   
     const exportLogsBtn = document.getElementById('exportLogsBtn');
     if (exportLogsBtn) exportLogsBtn.addEventListener('click', exportMessageLogs);
   
     const studentsBtn = document.getElementById('studentsBtn');
     if (studentsBtn) studentsBtn.addEventListener('click', openStudentsPage);
   
     // Add event listener for the new print button
     const newPrintBtn = document.getElementById('newPrintBtn');
     if (newPrintBtn) newPrintBtn.addEventListener('click', openPrintModal);
   
     const allParentsBtn = document.getElementById('allParentsBtn');
     if (allParentsBtn) allParentsBtn.addEventListener('click', toggleBulkMessageForm);
   
     const bulkMessageContent = document.getElementById('bulkMessageContent');
     if (bulkMessageContent) {
       bulkMessageContent.addEventListener('input', saveBulkMessage);
       loadBulkMessage(); // Load the saved message when the page loads
     }
  
     const dialNumberBtn = document.getElementById('dialNumberBtn');
     if (dialNumberBtn) dialNumberBtn.addEventListener('click', openDialPad);
   }
   
   function toggleSearch() {
     const profileCard = document.getElementById('profileCard');
     if (profileCard.style.display === 'none') {
       searchStudent();
     } else {
       profileCard.style.display = 'none';
     }
   }
   
   function toggleWhatsAppParent() {
     const customMessageArea = document.getElementById('customMessageArea');
     if (customMessageArea.style.display === 'none' || customMessageArea.style.display === '') {
       customMessageArea.style.display = 'block';
     } else {
       customMessageArea.style.display = 'none';
     }
   }
   
   function searchStudent() {
     const rollNumber = document.getElementById('rollNumber').value.toUpperCase();
     const student = students.find(s => s.rollNumber.toUpperCase().endsWith(rollNumber));
     const profileCard = document.getElementById('profileCard');
   
     // Hide the profile card first
     profileCard.style.display = 'none';
   
     if (student) {
       document.getElementById('studentName').textContent = student.name;
       document.getElementById('studentRoll').textContent = student.rollNumber;
       document.getElementById('parentName').textContent = student.parentName || 'Not available';
       document.getElementById('parentPhone').textContent = student.parentPhone;
       document.getElementById('studentPhone').textContent = student.studentPhone || 'Not available';
   
       profileCard.style.display = 'block';
       profileCard.classList.add('fade-in');
     } else {
       alert('Student not found. Please check the roll number and try again.');
     }
   }
   
   function toggleBulkMessageForm() {
     const bulkMessageForm = document.getElementById('bulkMessageForm');
     if (bulkMessageForm.style.display === 'none' || bulkMessageForm.style.display === '') {
       bulkMessageForm.style.display = 'block';
       bulkMessageForm.classList.add('fade-in');
       document.getElementById('bulkMessageContent').value = ''; // Clear previous message
     } else {
       bulkMessageForm.style.display = 'none';
     }
   }
   
   function toggleCRProfiles() {
     const crProfiles = document.getElementById('crProfiles');
     if (crProfiles.style.display === 'none') {
       showCRProfiles();
       crProfiles.style.display = 'block';
       crProfiles.classList.add('fade-in');
     } else {
       crProfiles.style.display = 'none';
     }
   }
   
   function showCRProfiles() {
     const crProfiles = document.getElementById('crProfiles');
     crProfiles.innerHTML = ''; // Clear existing profiles
   
     const crs = [
     { name: 'SRI CHARAN REDDY', rollNumber: '22WJ1A04P8', email: '22WJ1A04P8@gniindia.org', photo: 'https://i.ibb.co/6XNHkhv/image.png' },
    { name: 'ADITYA', rollNumber: '22WJ1A04L5', email: '22WJ1A04L5@gniindia.org', photo: 'https://i.ibb.co/6XNHkhv/image.png' },
    { name: 'PRATHYUSHA', rollNumber: '22WJ1A04N1', email: '22WJ1A04N1@gniindia.org', photo: 'https://i.ibb.co/6XNHkhv/image.png' },
    { name: ' MEGHANA', rollNumber: '22WJ1A04Q4', email: '22WJ1A04Q4@gniindia.org', photo: 'https://i.ibb.co/6XNHkhv/image.png' },
     ];
   
     crs.forEach(cr => {
       const profileCard = document.createElement('div');
       profileCard.className = 'profile-card cr-card';
       profileCard.innerHTML = `
         <div class="cr-info">
           <h3>${cr.name}</h3>
           <p><strong>Roll Number:</strong> ${cr.rollNumber}</p>
           <p><strong>Email:</strong> ${cr.email}</p>
           <button onclick="callCR('${cr.rollNumber}')">Call</button>
           <button onclick="whatsappCR('${cr.rollNumber}')">WhatsApp</button>
         </div>
       `;
       crProfiles.appendChild(profileCard);
     });
   }
   
   function openPrintModal() {
     document.getElementById('printModal').style.display = 'block';
   }
   
   function closePrintModal() {
     document.getElementById('printModal').style.display = 'none';
   }
   
   function filterData() {
    return firebase.database().ref('messageLogs').once('value')
      .then(snapshot => {
        const messages = [];
        snapshot.forEach(childSnapshot => {
          const message = childSnapshot.val();
          // Include all existing messages
          messages.push(message);
          
          // Specifically include dialpad logs for students from 22WJ1A0465 to 21WJ1A04K1
          if (message.platform === 'Phone' && 
              message.studentRoll && 
              (message.studentRoll >= '22WJ1A0465' && message.studentRoll <= '21WJ1A04K1')) {
            messages.push(message);
          }
        });
        return messages;
      });
  }
   
   function generatePrintableTable(data) {
    let tableHtml = `
      <div style="text-align: center; margin-bottom: 20px;">
        <p>Message Logs Report</p>
      </div>
      <table border="1">
        <thead>
          <tr>
            <th>Date</th>
            <th>Sender</th>
            <th>Recipient</th>
            <th>Student Name</th>
            <th>Roll Number</th>
            <th>Parent Name</th>
            <th style="width: 25%;">Message</th>
            <th>Status</th>
            <th>Platform</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
    `;
  
    let currentDate = '';
    data.forEach(log => {
      const date = new Date(log.timestamp);
      const dateString = date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
      const highlightClass = dateString !== currentDate ? 'highlight' : '';
      currentDate = dateString;
  
      tableHtml += `
        <tr class="${highlightClass}">
          <td>${dateString}</td>
          <td>${log.sender || 'N/A'}</td>
          <td>${log.recipient || 'N/A'}</td>
          <td>${log.studentName || 'N/A'}</td>
          <td>${log.studentRoll || 'N/A'}</td>
          <td>${log.parentName || 'N/A'}</td>
          <td style="width: 25%;">${log.message || 'N/A'}</td>
          <td>${log.status || 'N/A'}</td>
          <td>${log.platform || 'N/A'}</td>
          <td>${log.duration || 'N/A'}</td>
        </tr>
      `;
    });
  
    tableHtml += `
        </tbody>
      </table>
      <div style="text-align: center; margin-top: 20px;">
        <!-- <p>© 2024 Croxton Technologies. All rights reserved.</p> -->
      </div>
    `;
  
    return tableHtml;
  }
   
   function showPrintPreview() {
     filterData().then(filteredData => {
       const printContent = generatePrintableTable(filteredData);
       const startDate = new Date(document.getElementById('startDate').value).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
       const endDate = new Date(document.getElementById('endDate').value).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
  
       // Open a new window for the print preview
       const printWindow = window.open('', '_blank');
       printWindow.document.write(`
         <html>
           <head>
             <title>Message Logs ${startDate} to ${endDate}</title>
             <style>
               body {
                 font-family: Arial, sans-serif;
                 margin: 0;
                 padding: 20px;
               }
               .header, .footer {
                 text-align: center;
                 margin-bottom: 20px;
               }
               table {
                 width: 100%;
                 border-collapse: collapse;
                 margin-bottom: 20px;
               }
               th, td {
                 border: 1px solid #ddd;
                 padding: 8px;
                 text-align: left;
                 font-size: 12px;
               }
               th {
                 background-color: #f2f2f2;
                 font-weight: bold;
               }
               .highlight {
                 background-color: #ffffd0;
               }
               td:nth-child(7) {
                 width: 25%;
                 word-break: break-word;
               }
               @media print {
                 @page {
                   size: A4 landscape;
                   margin: 10mm;
                 }
                 body {
                   padding: 0;
                 }
                 .no-print {
                   display: none;
                 }
               }
             </style>
           </head>
           <body>
             <div class="header">
             
               <p>Date Range: ${startDate} to ${endDate}</p>
             </div>
             ${printContent}
             <div class="footer">
               <p>© 2024 Croxton Technologies Hyderabad India. All rights reserved.</p>
             </div>
             <div class="no-print" style="text-align: center; margin-top: 20px;">
               <button onclick="window.print()" style="background-color: #4CAF50; color: white; padding: 10px 20px; border: none; border-radius: 5px; font-size: 16px; margin: 5px; cursor: pointer;">Print</button>
               <!--  <button onclick="savePDF()" style="background-color: #2196F3; color: white; padding: 10px 20px; border: none; border-radius: 5px; font-size: 16px; margin: 5px; cursor: pointer;">Save as PDF</button> -->
             </div>
             <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>
             <script>
               function savePDF() {
                 const element = document.body;
                 const opt = {
                   margin:       10,
                   filename:     'Message_Logs_${startDate}_to_${endDate}.pdf',
                   image:        { type: 'jpeg', quality: 0.98 },
                   html2canvas:  { scale: 2, useCORS: true },
                   jsPDF:        { unit: 'mm', format: 'a4', orientation: 'landscape' },
                   pagebreak:    { mode: ['avoid-all', 'css', 'legacy'] }
                 };
                 html2pdf().from(element).set(opt).save();
               }
               window.onload = function() {
                 // Automatically open print dialog when the page loads
                 window.print();
               }
             </script>
           </body>
         </html>
       `);
       printWindow.document.close();
  
       // Hide the modal
       document.getElementById('printModal').style.display = 'none';
     });
   }
   
   function updateMessageLogs() {
     const logsContainer = document.getElementById('messageLogs');
     logsContainer.innerHTML = '';
   
     // Only show the most recent message
     if (messageLogs.length > 0) {
       const mostRecentLog = messageLogs[messageLogs.length - 1];
       const logEntry = document.createElement('p');
       const timestamp = new Date(mostRecentLog.timestamp);
       const formattedDate = `${timestamp.toLocaleDateString()} ${timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
       logEntry.textContent = `${formattedDate} - To: ${mostRecentLog.recipient} - Student: ${mostRecentLog.studentName || 'N/A'} (${mostRecentLog.studentRoll || 'N/A'}) - Parent: ${mostRecentLog.parentName || 'N/A'} - Status: ${mostRecentLog.status} - Platform: ${mostRecentLog.platform || 'SMS'} - Duration: ${mostRecentLog.duration || 'N/A'}`;
       logEntry.classList.add('fade-in');
       logsContainer.appendChild(logEntry);
     }
   
     // Add a message indicating there are more logs if applicable
     if (messageLogs.length > 1) {
       const moreLogsMessage = document.createElement('p');
       moreLogsMessage.textContent = `... and ${messageLogs.length - 1} more messages`;
       moreLogsMessage.style.fontStyle = 'italic';
       moreLogsMessage.style.color = '#666';
       logsContainer.appendChild(moreLogsMessage);
     }
   }
   
   function clearAllLogs() {
     if (confirm("Are you sure you want to clear all message logs? This action cannot be undone.")) {
       firebaseDatabase.clearAllLogs()
         .then(() => {
           messageLogs = [];
           updateMessageLogs();
           alert("All message logs have been cleared.");
         })
         .catch(error => {
           console.error('Error clearing logs:', error);
           alert("An error occurred while clearing logs. Please try again.");
         });
     }
   }
   
   function callParent() {
     const parentPhone = document.getElementById('parentPhone').textContent;
     const studentName = document.getElementById('studentName').textContent;
     const studentRoll = document.getElementById('studentRoll').textContent;
     const parentName = document.getElementById('parentName').textContent;
     
     if (parentPhone) {
       const startTime = new Date();
       window.location.href = `tel:${parentPhone}`;
       
       // Create and show popup after 10 seconds
       setTimeout(() => {
         const popup = document.createElement('div');
         popup.style.position = 'fixed';
         popup.style.left = '50%';
         popup.style.top = '50%';
         popup.style.transform = 'translate(-50%, -50%)';
         popup.style.backgroundColor = '#ffffff';
         popup.style.padding = '30px';
         popup.style.borderRadius = '10px';
         popup.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
         popup.style.zIndex = '1000';
         popup.style.fontFamily = 'Arial, sans-serif';
         popup.style.textAlign = 'center';
         popup.innerHTML = `
           <h3 style="margin-top: 0; color: #333;">Call Status</h3>
           <p style="margin-bottom: 20px; color: #666;">Was the call answered?</p>
           <button id="yesBtn" style="background-color: #4CAF50; color: white; border: none; padding: 10px 20px; margin: 0 10px; cursor: pointer; border-radius: 5px;">Yes</button>
           <button id="noBtn" style="background-color: #f44336; color: white; border: none; padding: 10px 20px; margin: 0 10px; cursor: pointer; border-radius: 5px;">No</button>
         `; 
         document.body.appendChild(popup);
   
         document.getElementById('yesBtn').addEventListener('click', () => handleCallResponse(true));
         document.getElementById('noBtn').addEventListener('click', () => handleCallResponse(false));
   
         function handleCallResponse(wasAnswered) {
           const endTime = new Date();
           const duration = Math.round((endTime - startTime) / 1000); // Duration in seconds
           
           // Log the call
           const log = {
             sender: 'Dr Abbas Ahmad',
             recipient: parentPhone,
             studentName: studentName,
             studentRoll: studentRoll,
             parentName: parentName,
             message: `Phone call to parent - ${wasAnswered ? 'Answered' : 'Not Answered'}`,
             timestamp: new Date().toISOString(),
             status: wasAnswered ? 'answered' : 'not answered',
             platform: 'Phone',
             duration: wasAnswered ? `${duration} seconds` : 'N/A'
           };
           firebaseDatabase.saveMessage(log)
             .then(() => fetchMessagesFromServer())
             .catch(error => console.error('Error saving message:', error));
           document.body.removeChild(popup);
         }
       }, 10000);
     } else {
       alert('Parent phone number not available.');
     }
   }
   
   function callStudent() {
     const studentPhone = document.getElementById('studentPhone').textContent;
     
     if (studentPhone && studentPhone !== 'Not available') {
       window.location.href = `tel:${studentPhone}`;
     } else {
       alert('Student phone number not available.');
     }
   }
   
   function whatsappParent() {
     const customMessageArea = document.getElementById('customMessageArea');
     customMessageArea.style.display = 'block';
     const sendCustomMessageBtn = document.getElementById('sendCustomMessageBtn');
     sendCustomMessageBtn.onclick = sendCustomWhatsAppMessage;
   }
   
   function whatsappStudent() {
     const studentPhone = document.getElementById('studentPhone').textContent;
     const studentName = document.getElementById('studentName').textContent;
     const studentRoll = document.getElementById('studentRoll').textContent;
     const parentName = document.getElementById('parentName').textContent;
     
     if (studentPhone && studentPhone !== 'Not available') {
       const formattedPhone = `+91${studentPhone.replace(/\D/g, '')}`;
       const message = encodeURIComponent('Hello, this is a message from your faculty.');
       window.open(`https://wa.me/${formattedPhone}?text=${message}`, '_blank');
       
       // Log the WhatsApp message
       const log = {
         sender: 'Dr Abbas Ahmad',
         recipient: formattedPhone,
         studentName: studentName,
         studentRoll: studentRoll,
         parentName: parentName,
         message: 'WhatsApp message sent to student',
         timestamp: new Date().toISOString(),
         status: 'sent',
         platform: 'WhatsApp'
       };
       firebaseDatabase.saveMessage(log)
         .then(() => fetchMessagesFromServer())
         .catch(error => console.error('Error saving message:', error));
     } else {
       alert('Student phone number not available.');
     }
   }
   
   function sendCustomWhatsAppMessage() {
     const parentPhone = document.getElementById('parentPhone').textContent;
     const studentName = document.getElementById('studentName').textContent;
     const studentRoll = document.getElementById('studentRoll').textContent;
     const parentName = document.getElementById('parentName').textContent;
     const customMessage = document.getElementById('customMessageContent').value;
     
     if (parentPhone && customMessage.trim() !== '') {
       const message = encodeURIComponent(customMessage);
       window.open(`https://wa.me/${parentPhone}?text=${message}`, '_blank');
       
       // Log the custom WhatsApp message
       const log = {
         sender: 'Dr Abbas Ahmad',
         recipient: parentPhone,
         studentName: studentName,
         studentRoll: studentRoll,
         parentName: parentName,
         message: customMessage,
         timestamp: new Date().toISOString(),
         status: 'sent',
         platform: 'WhatsApp'
       };
       firebaseDatabase.saveMessage(log)
         .then(() => fetchMessagesFromServer())
         .catch(error => console.error('Error saving message:', error));
       
       // Clear and hide the custom message area
       document.getElementById('customMessageContent').value = '';
       document.getElementById('customMessageArea').style.display = 'none';
     } else {
       alert('Please enter a message and ensure parent phone number is available.');
     }
   }
   
   function exportMessageLogs() {
     firebaseDatabase.getAllMessages()
       .then(messages => {
         const today = new Date();
         const dateString = today.toISOString().split('T')[0];
         const csvContent = "data:text/csv;charset=utf-8,"
           + "Timestamp,Sender,Recipient,Student Name,Roll Number,Parent Name,Message,Status,Platform,Duration\n"
           + messages.map(e => {
             return `${e.timestamp},${e.sender},${e.recipient},${e.studentName || ''},${e.studentRoll || ''},${e.parentName || ''},${e.message},${e.status},${e.platform || 'SMS'},${e.duration || 'N/A'}`;
           }).join("\n");
   
         const encodedUri = encodeURI(csvContent);
         const link = document.createElement("a");
         link.setAttribute("href", encodedUri);
         link.setAttribute("download", `message_logs_${dateString}.csv`);
         document.body.appendChild(link);
         link.click();
       })
       .catch(error => console.error('Error exporting logs:', error));
   }
   
   function callCR(rollNumber) {
     const cr = students.find(s => s.rollNumber === rollNumber);
     if (cr && cr.studentPhone) {
       window.location.href = `tel:${cr.studentPhone}`;
     } else {
       alert('Phone number not available for this CR.');
     }
   }
   
   function whatsappCR(rollNumber) {
     const cr = students.find(s => s.rollNumber === rollNumber);
     if (cr && cr.studentPhone) {
       const message = encodeURIComponent('Hello CR, this is a message from your faculty.');
       window.open(`https://wa.me/${cr.studentPhone}?text=${message}`, '_blank');
     } else {
       alert('WhatsApp number not available for this CR.');
     }
   }
   
   function openStudentsPage() {
     window.open('students.html', '_blank');
   }
   
   function sendBulkWhatsAppMessage(parentPhones, message) {
     const encodedMessage = encodeURIComponent(message);
     const whatsappUrl = `https://wa.me/?text=${encodedMessage}&phone=${parentPhones.join(',')}`;
     window.open(whatsappUrl, '_blank');
   }
   
   function sendBulkSMSMessage(parentPhones, message) {
     const smsUrl = `sms:?body=${encodeURIComponent(message)}&phone=${parentPhones.join(',')}`;
     window.location.href = smsUrl;
   }
   
   function sendBulkMessage(group) {
     const messageTextArea = document.getElementById('bulkMessageContent');
     const message = messageTextArea.value;
     if (message.trim() === '') {
       alert('Please enter a message.');
       return;
     }
   
     let parentPhones = students.map(student => student.parentPhone);
     let startIndex, endIndex;
   
     switch (group) {
       case 'first':
         startIndex = 0;
         endIndex = 25;
         break;
       case 'second':
         startIndex = 25;
         endIndex = 50;
         break;
       case 'third':
         startIndex = 50;
         endIndex = parentPhones.length;
         break;
     }
   
     parentPhones = parentPhones.slice(startIndex, endIndex);
     const phoneNumbers = parentPhones.join(',');
   
     // Open SMS app with pre-filled message for bulk sending
     window.location.href = `sms:${phoneNumbers}?body=${encodeURIComponent(message)}`;
   
     // Log the bulk message to Firebase
     const bulkLog = {
       sender: 'Dr Abbas Ahmad',
       recipients: parentPhones,
       message: message,
       timestamp: new Date().toISOString(),
       status: 'sent',
       platform: 'SMS (Bulk)',
       group: group
     };
   
     // Save bulk message log
     firebaseDatabase.saveMessage(bulkLog)
       .then(() => console.log('Bulk message logged successfully'))
       .catch(error => console.error('Error saving bulk message:', error));
   
     // Log individual messages
     parentPhones.forEach(phone => {
       const student = students.find(s => s.parentPhone === phone);
       const log = {
         sender: 'Dr Abbas Ahmad',
         recipient: phone,
         studentName: student ? student.name : 'N/A',
         studentRoll: student ? student.rollNumber : 'N/A',
         parentName: student ? student.parentName : 'N/A',
         message: message,
         timestamp: new Date().toISOString(),
         status: 'sent',
         platform: 'SMS',
         bulkGroup: group
       };
       firebaseDatabase.saveMessage(log)
         .then(() => console.log('Individual message logged successfully'))
         .catch(error => console.error('Error saving individual message:', error));
     });
   
     // Fetch updated messages
     fetchMessagesFromServer();
   
     alert(`Bulk message sent to ${group} group (${parentPhones.length} recipients)`);
   }
   
   // Add this function to save the message to local storage
   function saveBulkMessage() {
     const message = document.getElementById('bulkMessageContent').value;
     localStorage.setItem('bulkMessage', message);
   }
  
   // Add this function to load the message from local storage
   function loadBulkMessage() {
     const message = localStorage.getItem('bulkMessage') || '';
     document.getElementById('bulkMessageContent').value = message;
   }
  
   function openDialPad(event) {
     // Get the parent profile card of the clicked button
     const profileCard = event.target.closest('.profile-card');
    
     // Extract information from this specific card
     const studentPhone = profileCard.querySelector('#studentPhone').textContent;
     const studentName = profileCard.querySelector('#studentName').textContent;
     const studentRoll = profileCard.querySelector('#studentRoll').textContent;
     const parentName = profileCard.querySelector('#parentName').textContent;
  
     localStorage.setItem('dialpadInfo', JSON.stringify({
       phone: studentPhone,
       studentName: studentName,
       studentRoll: studentRoll,
       parentName: parentName
     }));
  
     window.location.href = 'dialpad.html';
   }
  
   // Add this function to add sample data (for testing purposes)
   // document.addEventListener('DOMContentLoaded', addSampleData);
