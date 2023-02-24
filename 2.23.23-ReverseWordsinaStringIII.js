// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

const reverseWords = (s) => {
    // Split the string into words
    const words = s.split(' ');

    // Reverse the word
    const reversedWords = words.map((word) => {
        return word.split('').reverse().join('');
    });
    // Join reversed words back into a sentence
    const reversedSentence = reversedWords.join('');

    return reversedSentence;
}
