function collectDogNames() {
      let dogNames = [];

      // Collect six dog names
      for (let i = 0; i < 6; i++) {
        let name = prompt(`Enter the name of dog ${i + 1}:`);
        if (name) {
          dogNames.push(name.trim());
        }
      }

      // Sort the names in reverse alphabetical order
      dogNames.sort().reverse();

      // Display the names in an unordered list
      const dogList = document.getElementById('dog-list');
      dogList.innerHTML = ''; // Clear the list before populating
      dogNames.forEach((name) => {
        const li = document.createElement('li');
        li.textContent = name;
        dogList.appendChild(li);
      });
    }