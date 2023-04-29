import { LightningElement, wire } from 'lwc';

//getOpportunities é uma função criada a partir da importação de um método Apex usando a sintaxe @salesforce/apex.
//Essa sintaxe é usada em componentes LWC para importar métodos Apex diretamente no código JavaScript do componente.
//Nesse caso, o método getOpportunities() é definido no OpportunityController, e é exposto para o componente LWC usando o decorador @AuraEnabled(cacheable=true).
import getOpportunities from '@salesforce/apex/OpportunityController.getOpportunities';


export default class ThelastdanceQ2 extends LightningElement {
  opportunities = [];


//@wire é um decorador de conexão de dados (data connection decorator) que vai conectar-se a métodos Apex, funções do Lightning Web Component ou até mesmo às propriedades de um objeto JavaScript
//O componente OpportunityList usa o decorador @wire para se conectar ao método Apex getOpportunities definido no controlador OpportunityController  
    @wire(getOpportunities)
  
//wiredOpportunities({ error, data }) é uma função de retorno de chamada que é acionada automaticamente pelo LWC quando o método getOpportunities() retorna um resultado. 
//data: os dados retornados pelo método getOpportunities() são passados ​​para esse parâmetro.
//error: se houver algum erro durante a execução do método getOpportunities(), o erro é passado para este parâmetro.
//Se o valor de data não for nulo, o código dentro do bloco if é executado. Nesse caso, o resultado da consulta é atribuído à propriedade opportunities definida na classe OpportunityList. Isso atualiza o componente LWC e exibe os dados retornados na interface do usuário.
wiredOpportunities({ error, data }) {
    if (data) {
      this.opportunities = data;
    } else if (error) {
      console.error(error);
    }
  }
}
