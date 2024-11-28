function rollDice() {
      return Math.floor(Math.random() * 6) + 1; // Returns a number between 1 and 6
    }

    // Main program to roll dice until 6 is rolled
    function rollDiceUntilSix() {
      const resultsList = document.getElementById("results"); // Get the unordered list element
      resultsList.innerHTML = ""; // Clear any previous results

      let roll;
      do {
        roll = rollDice(); // Roll the dice
        const li = document.createElement("li"); // Create a new list item
        li.textContent = `Rolled: ${roll}`; // Set the text content of the list item
        resultsList.appendChild(li); // Append the list item to the unordered list
      } while (roll !== 6); // Continue rolling until a 6 is rolled


      const li = document.createElement("li");
      li.textContent = "You rolled a 6! Stopping the rolls.";
      resultsList.appendChild(li);
    }