/**
 * Charge et initialise Snipcart
 */
export function loadSnipcart() {
  // Ajouter les styles de Snipcart
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://cdn.snipcart.com/themes/v3.2.2/default/snipcart.css';
  document.head.appendChild(link);

  // Ajouter le script de Snipcart
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://cdn.snipcart.com/themes/v3.2.2/default/snipcart.js';
  document.body.appendChild(script);

  // Ajouter la div de Snipcart
  if (!document.getElementById('snipcart')) {
    const snipcartDiv = document.createElement('div');
    snipcartDiv.hidden = true;
    snipcartDiv.id = 'snipcart';
    
    // Clé API publique Snipcart
    snipcartDiv.setAttribute('data-api-key', 'MTYzYzM2ODMtZWFlYy00MGJiLThkMDAtM2QzN2YwMGVkYzFiNjM2OTQ0MzAxMDE5OTU2NjQ0');
    
    // Configuration pour afficher en mode pleine page
    snipcartDiv.setAttribute('data-config-modal-style', 'fullscreen');
    
    // Pour le mode test/développement
    snipcartDiv.setAttribute('data-config-environment', 'development');
    
    // Permettre de voir l'ajout au panier en direct
    snipcartDiv.setAttribute('data-config-live-update', 'true');
    
    document.body.appendChild(snipcartDiv);
  }
} 