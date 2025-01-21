export function lenghfWords (text:string, wordLimit:number) {
    const words = text.split(" ");
     if (words.length <= wordLimit) return text;
      return words.slice(0, wordLimit).join(" ") + "..."; 
  }