let pronoun = ['the', 'our', 'he', 'she', 'it', 'him', 'yes', 'with me'];
let adj = ['great', 'big', 'Tall', 'big', 'golden', 'new', 'cultured', 'innocent', 'fresh'];
let noun = ['jogger', 'racoon', 'anillo', 'Carlos', 'amor', 'ratón', 'teléfono', 'comunicación', 'mantel'];
let domainNames = [];
for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      let domainName = `${pronoun[i]}${adj[j]}${noun[k]}.com`;
      domainNames.push(domainName);
    }
  }
}
let domainList = document.getElementById('domainList');
domainNames.forEach(function(name) {
  let listItem = document.createElement('li');
  listItem.textContent = name;
  domainList.appendChild(listItem);
});