const text = "DenuZzz";
   const typingText = document.getElementById("typing-text");
   let index = 0;

   function type() {
       if (index < text.length) {
           typingText.textContent += text.charAt(index);
           index++;
           setTimeout(type, 150); // Adjust typing speed here
       }
   }

   type();
