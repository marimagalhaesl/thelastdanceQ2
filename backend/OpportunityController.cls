public with sharing class OpportunityController {
  
    //->@AuraEnabled(cacheable=true) é usada para habilitar o cache de resultados na camada do servidor.
    //Isso permite que os resultados da consulta sejam armazenados em cache para que possam ser reutilizados se o mesmo método for chamado novamente com os mesmos parâmetros.
    //Isso melhora o desempenho e reduz o número de chamadas ao servidor.
    @AuraEnabled(cacheable=true)
    
    //O método getOpportunities() é definido como um método @AuraEnabled para permitir que ele seja acessado a partir de um componente Aura ou LWC.
    public static List<Opportunity> getOpportunities() {
      return [
        SELECT ID, Name, Amount, StageName, CreatedDate
        FROM Opportunity
        WHERE StageName = 'Negotiation/Review'
        ORDER BY CreatedDate DESC
        LIMIT 5
      ];
    }
  } 
