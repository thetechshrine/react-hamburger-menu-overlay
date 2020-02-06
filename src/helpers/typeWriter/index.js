import './style.css';

export default class TypeWriter {
  constructor(element, words, wait = 3000) {
    this.element = element;
    this.words = words;
    this.text = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullText = this.words[current];
    // Check deleting state
    if (this.isDeleting) {
      // Remove character
      this.text = fullText.substring(0, this.text.length - 1);
    } else {
      // Add character
      this.text = fullText.substring(0, this.text.length + 1);
    }

    // Insert text to element
    this.element.innerHTML = `<span class="typing-text">${this.text}</span>`

    // Initial type speed
    let typeSpeed = 300;
    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    // Complete word
    if (!this.isDeleting && this.text === fullText) {
      // Make a pause at end
      typeSpeed = this.wait;
      // Set deleting to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.text === '') {
      this.isDeleting = false;
      // Move to the next word
      this.wordIndex++
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}