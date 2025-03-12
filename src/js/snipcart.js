/**
 * Charge et initialise Snipcart
 */
export function loadSnipcart() {
  // Configuration de Snipcart via l'objet global window.SnipcartSettings
  window.SnipcartSettings = {
    publicApiKey: "MTYzYzM2ODMtZWFlYy00MGJiLThkMDAtM2QzN2YwMGVkYzFiNjM2OTQ0MzAxMDE5OTU2NjQ0",
    loadStrategy: "on-user-interaction",
    modalStyle: "side",
    currency: "eur"
  };

  // Charger le script Snipcart avec la méthode recommandée
  const script = document.createElement('script');
  script.src = 'https://cdn.snipcart.com/themes/v3.2.2/default/snipcart.js';
  script.async = true;
  document.body.appendChild(script);

  // Ajouter les styles de Snipcart
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://cdn.snipcart.com/themes/v3.2.2/default/snipcart.css';
  document.head.appendChild(link);

  // Ajouter la div Snipcart
  if (!document.getElementById('snipcart')) {
    const snipcartDiv = document.createElement('div');
    snipcartDiv.hidden = true;
    snipcartDiv.id = 'snipcart';
    document.body.appendChild(snipcartDiv);
    
    console.log('Snipcart initialized with window.SnipcartSettings');
  }
} 