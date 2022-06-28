import { addNewNoun, deleteNoun, getNoun, getNounWithID, updateNoun, addNewVerb, deleteVerb, getVerb, getVerbWithID, updateVerb,
         addNewAdjective, deleteAdjective, getAdjective, getAdjectiveWithID, updateAdjective, addNewAdverb, deleteAdverb, getAdverb, getAdverbWithID, updateAdverb,
         addNewConjunction, deleteConjunction, getConjunction, getConjunctionWithID, updateConjunction, addNewPronoun, getPronoun, getPronounWithID, updatePronoun, deletePronoun,
         addNewPreposition, deletePreposition, getPreposition, getPrepositionWithID, updatePreposition, addNewDeterminer, deleteDeterminer, getDeterminer, getDeterminerWithID, updateDeterminer,
         addNewExclamation, deleteExclamation, getExclamation, getExclamationWithID, updateExclamation, addNewSentence, deleteSentence, getSentence, getSentenceWithID, updateSentence,
         addNewType, deleteType, getType, getTypeWithID, updateType} from '../controllers/stcController.js';

const routes = (app) => {
   app.route('/cnoun')
     .get((req,res, next) => {
        next();
     }, getNoun)
     .post(addNewNoun);

   app.route('/cnoun/:cnounID')
      .get(getNounWithID)
      .put(updateNoun)
      .delete(deleteNoun);

   app.route('/cverb')
     .get((req,res, next) => {
         next();
     }, getVerb)
     .post(addNewVerb);

   app.route('/cverb/:cverbID')
     .get(getVerbWithID)
     .put(updateVerb)
     .delete(deleteVerb);

   app.route('/adverb')
     .get((req,res, next) => {
         next();
     }, getAdverb)
     .post(addNewAdverb);
   
   app.route('/adverb/:cadverbID')
     .get(getAdverbWithID)
     .put(updateAdverb)
     .delete(deleteAdverb);
     
   app.route('/adjective')
     .get((req,res, next) => {
         next();
     }, getAdjective)
     .post(addNewAdjective);

   app.route('/adjective/:cadjectiveID')
     .get(getAdjectiveWithID)
     .put(updateAdjective)
     .delete(deleteAdjective);

   app.route('/conjunction')
      .get((req,res, next) => {
         next();
      }, getConjunction)
      .post(addNewConjunction);
   
   app.route('/conjuction/:cconjunctionID')
      .get(getConjunctionWithID)
      .put(updateConjunction)
      .delete(deleteConjunction);
   
   app.route('/pronoun')
      .get((req,res, next) => {
         next();
      }, getPronoun)
      .post(addNewPronoun);

   app.route('/pronoun/:cpronounID')
      .get(getPronounWithID)
      .put(updatePronoun)
      .delete(deletePronoun);

   app.route('/preposition')
    .get((req,res, next) => {
      next();
    }, getPreposition)
    .post(addNewPreposition);

   app.route('/preposition/:cprepositionID')
    .get(getPrepositionWithID)
    .put(updatePreposition)
    .delete(deletePreposition);

   app.route('/determiner')
    .get((req,res, next) => {
      next();
    }, getDeterminer)
    .post(addNewDeterminer);

   app.route('/determiner/:cdeterminerID')
    .get(getDeterminerWithID)
    .put(updateDeterminer)
    .delete(deleteDeterminer);

   app.route('/exclamation')
    .get((req,res, next) => {
      next();
    }, getExclamation)
    .post(addNewExclamation);

   app.route('/exclamation/:cexlamationID')
    .get(getExclamationWithID)
    .put(updateExclamation)
    .delete(deleteExclamation);

  app.route('/sentence')
    .get((req,res, next) => {
      next();
    }, getSentence)
    .post(addNewSentence);

  app.route('/sentence/:csentenceID')
    .get(getSentenceWithID)
    .put(updateSentence)
    .delete(deleteSentence);
  
  app.route('/type')
    .get((req,res, next) => {
      next();
    }, getType)
    .post(addNewType);

  app.route('/type/:ctypeID')
    .get(getTypeWithID)
    .put(updateType)
    .delete(deleteType);
}
export default routes;