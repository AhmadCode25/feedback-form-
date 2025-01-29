// Process form data here (e.g., send to server or save locally)
console.log('Form submitted with data:', data);

// Send data to dental sheet
sendToDentalSheet(data);

alert('Form submitted successfully!');
this.reset();

function populateSelectOptions(selectId, options) {
    const select = document.getElementById(selectId);
    select.innerHTML = '';
    options.split('\n').forEach(option => {
        const opt = document.createElement('option');
        opt.value = option.trim();
        opt.textContent = option.trim();
        select.appendChild(opt);
    });
}

function generateUniqueId() {
    const date = new Date();
    const year = date.getFullYear();
    const sequenceNumber = localStorage.getItem('sequenceNumber') || 0;
    const newSequenceNumber = parseInt(sequenceNumber) + 1;
    localStorage.setItem('sequenceNumber', newSequenceNumber);
    return `${year}${String(newSequenceNumber).padStart(6, '0')}`;
}

function sendToDentalSheet(data) {
    // Simulate sending data to dental sheet
    let dentalSheetData = JSON.parse(localStorage.getItem('dentalSheetData')) || [];
    dentalSheetData.push(data);
    localStorage.setItem('dentalSheetData', JSON.stringify(dentalSheetData));
    console.log('Data sent to dental sheet:', data);
}