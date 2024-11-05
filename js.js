
document.addEventListener('DOMContentLoaded', function() {
  
    const form = document.forms['MyForm'];
    
   
    form.addEventListener('submit', function(event) {
        
        event.preventDefault();
        
        // Perform validation
        if (validateForm()) {
        
            console.log('Form is valid. Submitting...');
            
        }
    });

    function validateForm() {
        let isValid = true;
        const errorDiv = document.querySelector('.error');
        errorDiv.innerHTML = ''; 


        const fname = form['fname'].value.trim();
        if (!/^[A-Za-z\s]+$/.test(fname)) {
            addError('First Name should only contain letters and spaces.');
            isValid = false;
        }

  
        const lname = form['lname'].value.trim();
        if (!/^[A-Za-z\s]+$/.test(lname)) {
            addError('Last Name should only contain letters and spaces.');
            isValid = false;
        }

        const pnumber = form['pnumber'].value.trim();
        if (!/^\+?63[0-9]{10}$/.test(pnumber)) {
            addError('Please enter a valid Philippine phone number (e.g., +639123456789 or 09123456789).');
            isValid = false;
        }


        const email = form['email'].value.trim();
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            addError('Please enter a valid email address.');
            isValid = false;
        }


        const address = form['address'].value.trim();
        if (address === '') {
            addError('Address is required.');
            isValid = false;
        }

        
        const city = form['city'].value.trim();
        if (!/^[A-Za-z\s]+$/.test(city)) {
            addError('City should only contain letters and spaces.');
            isValid = false;
        }


        const zipcode = form['zipcode'].value.trim();
        if (!/^\d+$/.test(zipcode)) {
            addError('Zip Code should only contain numbers.');
            isValid = false;
        }

        //Card Info
        const ncard = form['ncard'].value.trim();
        if (!/^[A-Za-z\s]+$/.test(ncard)) {
            addError('Name on Card should only contain letters and spaces.');
            isValid = false;
        }

       
        const nbcard = form['nbcard'].value.replace(/[\s-]/g, '');
        if (!/^\d{16}$/.test(nbcard)) {
            addError('Credit Card Number should be 16 digits.');
            isValid = false;
        }


        const cvv = form['CW'].value.trim();
        if (!/^\d{3,4}$/.test(cvv)) {
            addError('CVV should be 3 or 4 digits.');
            isValid = false;
        }

        return isValid;
    }

    function addError(message) {
        const errorDiv = document.querySelector('.error');
        const errorP = document.createElement('p');
        errorP.textContent = message;
        errorDiv.appendChild(errorP);
    }
});