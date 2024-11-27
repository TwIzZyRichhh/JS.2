function collectNames() {
      const numParticipants = parseInt(document.getElementById('numParticipants').value);

      if (isNaN(numParticipants) || numParticipants < 1) {
        alert('Please enter a valid number of participants.');
        return;
      }

      let participants = [];
      for (let i = 0; i < numParticipants; i++) {
        let name = prompt(`Enter the name of participant ${i + 1}:`);
        if (name) {
          participants.push(name.trim());
        }
      }

      // Sort participants alphabetically
      participants.sort();

      // Display the names in an ordered list
      const participantsList = document.getElementById('participants-list');
      participantsList.innerHTML = ''; // Clear the list before populating
      participants.forEach((name) => {
        const li = document.createElement('li');
        li.textContent = name;
        participantsList.appendChild(li);
      });
    }