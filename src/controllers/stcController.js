import mongoose from 'mongoose';
import { NounSchema} from '../models/stcModel.js';
import { VerbSchema} from '../models/stcVerb.js';
import { AdverbSchema} from '../models/stcAdverb.js';
import { AdjectiveSchema} from '../models/stcAdjective.js';
import { ConjuctionSchema} from '../models/stcConjuction.js';
import { PrepositionSchema} from '../models/stcPreposition.js';
import { PronounSchema} from '../models/stcPronoun.js';
import { DeterminerSchema} from '../models/stcDeterminer.js';
import { ExclamationSchema} from '../models/stcExclamation.js';
import { SentenceSchema} from '../models/stcSentence.js';
import { TypesSchema} from '../models/stcTypes.js';

const cNoun = mongoose.model('cNoun', NounSchema);
const cVerb = mongoose.model('cVerb', VerbSchema);
const cAdverb = mongoose.model('cAdverb', AdverbSchema);
const cAdjective = mongoose.model('cAdjective', AdjectiveSchema);
const cConjunction = mongoose.model('cConjunction', ConjuctionSchema);
const cPreposition = mongoose.model('cPreposition', PrepositionSchema);
const cPronoun = mongoose.model('cPronoun', PronounSchema);
const cDeterminer = mongoose.model('cDeterminer', DeterminerSchema);
const cExclamation = mongoose.model('cExclamation', ExclamationSchema);
const cSentence = mongoose.model('cSentence', SentenceSchema);
const cTypes = mongoose.model('cTypes', TypesSchema);


export const addNewNoun = (req,res) => {
    let newNoun = new cNoun(req.body);

    newNoun.save((err, cnoun) => {
        if(err) {
            res.send(err);
        }
        res.json(cnoun);
    });
}
export const getNoun = (req,res) => {
    cNoun.find({}, (err, cnoun) => {
        if(err) {
            res.send(err);
        }
        res.json(cnoun);
    });
}
export const getNounWithID = (req,res) => {
    cNoun.findById(req.params.cnounID, (err, cnoun) => {
        if(err) {
            res.send(err);
        }
        res.json(cnoun);
    });
}
export const updateNoun = (req,res) => {
    cNoun.findOneAndUpdate({ _id: req.params.cnounID}, req.body, { new: true, useFindAndModify: false}, (err, cnoun) => {
        if(err) {
            res.send(err);
        }
        res.json(cnoun);
    });
}
export const deleteNoun = (req,res) => {
    cNoun.deleteOne({ _id: req.params.cnounID}, (err, cnoun) => {
        if(err) {
            res.send(err);
        }
        res.json({message: 'succefully deleted noun!'});
    });
}
export const addNewVerb = (req,res) => {
    let newVerb = new cVerb(req.body);

    newVerb.save((err, cverb) => {
        if(err) {
            res.send(err);
        }
        res.json(cverb);
    });
}
export const getVerb = (req,res) => {
    cVerb.find({},(err, cverb) => {
        if(err) {
            res.send(err);
        }
        res.json(cverb);
    });
}
export const getVerbWithID = (req,res) => {
    cVerb.findById(req.params.cverbID, (err, cverb) => {
        if(err) {
            res.send(err);
        }
        res.json(cverb);
    });
}
export const updateVerb = (req,res) => {
    cVerb.findOneAndUpdate({ _id: req.params.cverbID}, req.body, { new: true, useFindAndModify: false}, (err, cverb) => {
        if(err) {
            res.send(err);
        }
        res.json(cverb);
    });
}
export const deleteVerb = (req,res) => {
    cVerb.deleteOne({ _id: req.params.cverbID}, (err, cverb) => {
        if(err) {
            res.send(err);
        }
        res.json({message: 'successfully deleted verb!'});
    });
}
export const addNewAdjective = (req,res) => {
    let newAdjective = new cAdjective(req.body);

    newAdjective.save((err, cadjective) => {
        if(err) {
            res.send(err);
        }
        res.json(cadjective);
    });
}
export const getAdjective = (req,res) => {
    cAdjective.find({}, (err, cadjective) => {
        if(err) {
            res.send(err);
        }
        res.json(cadjective);
    });
}
export const getAdjectiveWithID = (req,res) => {
    cAdjective.findById(req.params.cadjectiveID, (err, cadjective) => {
        if(err) {
            res.send(err);
        }
        res.json(cadjective);
    });
}
export const updateAdjective = (req,res) => {
    cAdjective.findOneAndUpdate({ _id: req.params.cadjectiveID}, req.body, { new: true, useFindAndModify: false}, (err, cadjective) => {
        if(err) {
            res.send(err);
        }
        res.json(cadjective);
    });
}
export const deleteAdjective = (req,res) => {
    cAdjective.deleteOne({ _id: req.params.cadjectiveID}, (err, cadjective) => {
        if(err) {
            res.send(err);
        }
        res.json({message: 'successfully deleted adjective!'});
    });
}
export const addNewAdverb = (req,res) => {
    let newAdverb = new cAdverb(req.body);
    newAdverb.save((err, cadverb) => {
        if(err) {
            res.send(err);
        }
        res.json(cadverb);
    });
}
export const getAdverb = (req,res) => {
    cAdverb.find({}, (err, cadverb) => {
        if(err) {
            res.send(err);
        }
        res.json(cadverb);
    });
}
export const getAdverbWithID = (req,res) => {
    cAdverb.findById(req.params.cadverbID, (err, cadverb) => {
        if(err) {
            res.send(err);
        }
        res.json(cadverb);
    });
}
export const updateAdverb = (req,res) => {
    cAdverb.findOneAndUpdate({ _id: req.params.cadverbID}, req.body, { new: true, useFindAndModify: false}, (err, cadverb) => {
        if(err) {
            res.send(err);
        }
        res.json(cadverb);
    });
}
export const deleteAdverb = (req,res) => {
    cAdverb.deleteOne({ _id: req.params.cadverbID}, (err, cadverb) => {
        if(err) {
            res.send(err);
        }
        res.json({message: 'successfully deleted adverb!'});
    });
}
export const addNewConjunction = (req,res) => {
    let newConjuction = new cConjunction(req.body);

    newConjuction.save((err, cconjunction) => {
        if(err) {
            res.send(err);
        }
        res.json(cconjunction);
    });
}
export const getConjunction = (req,res) => {
    cConjunction.find({}, (err, cconjunction) => {
        if(err) {
            res.send(err);
        }
        res.json(cconjunction);
    });
}
export const getConjunctionWithID = (req,res) => {
    cConjunction.findById(req.params.cconjunctionID, (err, cconjunction) => {
        if(err) {
            res.send(err);
        }
        res.json(cconjunction);
    });
}
export const updateConjunction = (req,res) => {
    cConjunction.findOneAndUpdate({ _id: req.params.cconjunctionID}, req.body, {new: true, useFindAndModify: false}, (err, cconjunction) => {
        if(err) {
            res.send(err);
        }
        res.json(cconjunction);
    });
}
export const deleteConjunction = (req,res) => {
    cConjunction.deleteOne({ _id: req.params.cconjunctionID}, (err, cconjunction) => {
        if(err) {
            res.send(err);
        }
        res.json({message: 'successfully deleted conjunction!'});
    });
}
export const addNewPreposition = (req,res) => {
    let newPreposition = new cPreposition(req.body);

    newPreposition.save((err, cpreposition) => {
        if(err) {
            res.send(err);
        }
        res.json(cpreposition);
    });
}
export const getPreposition = (req,res) => {
    cPreposition.find({}, (err, cpreposition) => {
        if(err) {
            res.send(err);
        }
        res.json(cpreposition);
    });
}
export const getPrepositionWithID = (req,res) => {
    cPreposition.findById(req.params.cprepositionID, (err, cpreposition) => {
        if(err) {
            res.send(err);
        }
        res.json(cpreposition);
    });
}
export const updatePreposition = (req,res) => {
    cPreposition.findOneAndUpdate({ _id: req.params.cprepositionID}, req.body, {new: true, useFindAndModify: false}, (err, cpreposition) => {
        if(err) {
            res.send(err);
        }
        res.json(cpreposition);
    });
}
export const deletePreposition = (req,res) => {
    cPreposition.deleteOne({ _id: req.params.cprepositionID}, (err, cpreposition) => {
        if(err) {
            res.send(err);
        }
        res.json({message: 'successfully deleted preposition!'});
    });
}
export const addNewPronoun = (req,res) => {
    let newPronoun = new cPronoun(req.body);

    newPronoun.save((err, cpronoun) => {
        if(err) {
            res.send(err);
        }
        res.json(cpronoun);
    });
}
export const getPronoun = (req,res) => {
    cPronoun.find({}, (err, cpronoun) => {
        if(err) {
            res.send(err);
        }
        res.json(cpronoun);
    });
}
export const getPronounWithID = (req,res) => {
    cPronoun.findById(req.params.cpronounID, (err, cpronoun) => {
        if(err) {
            res.send(err);
        }
        res.json(cpronoun);
    });
}
export const updatePronoun = (req,res) => {
    cPronoun.findOneAndUpdate({ _id: req.params.cpronounID}, req.body, {new: true, useFindAndModify: false}, (err, cpronoun) => {
        if(err) {
            res.send(err);
        }
        res.json(cpronoun);
    });
}
export const deletePronoun = (req,res) => {
    cPronoun.deleteOne({ _id: req.params.cpronounID}, (err, cpronoun) => {
        if(err) {
            res.send(err);
        }
        res.json({message: 'successfully deleted pronoun!'});
    });
}
export const addNewDeterminer = (req,res) => {
    let newDeterminer = new cDeterminer(req.body);

    newDeterminer.save((err, cdeterminer) => {
        if(err) {
            res.send(err);
        }
        res.json(cdeterminer);
    });
}
export const getDeterminer = (req,res) => {
    cDeterminer.find({}, (err, cdeterminer) => {
        if(err) {
            res.send(err);
        }
        res.json(cdeterminer);
    });
}
export const getDeterminerWithID = (req,res) => {
    cDeterminer.findById(req.params.cdeterminerID, (err, cdeterminer) => {
        if(err) {
            res.send(err);
        }
        res.json(cdeterminer);
    });
}
export const updateDeterminer = (req,res) => {
    cDeterminer.findOneAndUpdate({ _id: req.params.cdeterminerID}, req.body, {new: true, useFindAndModify: false}, (err, cdeterminer) => {
        if(err) {
            res.send(err);
        }
        res.json(cdeterminer);
    });
}
export const deleteDeterminer = (req,res) => {
    cDeterminer.deleteOne({ _id: req.params.cdeterminerID}, (err, cdeterminer) => {
        if(err) {
            res.send(err);
        }
        res.json({message: 'successfully deleted determiner!'});
    });
}
export const addNewExclamation = (req,res) => {
    let newExclamation = new cExclamation(req.body);

    newExclamation.save((err, cexclamation) => {
        if(err) {
            res.send(err);
        }
        res.json(cexclamation);
    });
}
export const getExclamation = (req,res) => {
    cExclamation.find({}, (err, cexclamation) => {
        if(err) {
            res.send(err);
        }
        res.json(cexclamation);
    });
}
export const getExclamationWithID = (req,res) => {
    cExclamation.findById(req.params.cexclamationID, (err, cexclamation) => {
        if(err) {
            res.send(err);
        }
        res.json(cexclamation);
    });
}
export const updateExclamation = (req,res) => {
    cExclamation.findOneAndUpdate({ _id: req.params.cexclamationID}, req.body, {new: true, useFindAndModify: false}, (err, cexclamation) => {
        if(err) {
            res.send(err);
        }
        res.json(cexclamation);
    });
}
export const deleteExclamation = (req,res) => {
    cExclamation.deleteOne({ _id: req.params.cexclamationID}, (err, cexclamation) => {
        if(err) {
            res.send(err);
        }
        res.json({message: 'successfully deleted Exclamation!'});
    });
}
export const addNewSentence = (req,res) => {
    let newSentence = new cSentence(req.body);
    newSentence.save((err, csentence) => {
        if(err) {
            res.send(err);
        }
        res.json(csentence);
    });
}
export const getSentence = (req,res) => {
    cSentence.find({}, (err, csentence) => {
        if(err) {
            res.send(err);
        }
        res.json(csentence);
    });
}
export const getSentenceWithID = (req,res) => {
    cSentence.findById(req.params.csentenceID, (err, csentence) => {
        if(err) {
            res.send(err);
        }
        res.json(csentence);
    });
}
export const updateSentence = (req,res) => {
    cSentence.findOneAndUpdate({ _id: req.params.csentenceID}, req.body, {new: true, useFindAndModify: false}, (err, csentence) => {
        if(err) {
            res.send(err);
        }
        res.json(csentence);
    });
}
export const deleteSentence = (req,res) => {
    cSentence.deleteOne({ _id: req.params.csentenceID}, (err, csentence) => {
        if(err) {
            res.send(err);
        }
        res.json({message: 'successfully deleted sentence!'});
    });
}
export const addNewType = (req,res) => {
    let newType = new cTypes(req.body);
    newType.save((err, ctype) => {
        if(err) {
            res.send(err);
        }
        res.json(ctype);
    });
}
export const getType = (req,res) => {
    cTypes.find({}, (err, ctype) => {
        if(err) {
            res.send(err);
        }
        res.json(ctype);
    });
}
export const getTypeWithID = (req,res) => {
    cTypes.findById(req.params.ctypeID, (err, ctype) => {
        if(err) {
            res.send(err);
        }
        res.json(ctype);
    });
}
export const updateType = (req,res) => {
    cTypes.findOneAndUpdate({ _id: req.params.ctypeID}, req.body, {new: true, useFindAndModify: false}, (err, ctype) => {
        if(err) {
            res.send(err);
        }
        res.json(ctype);
    });
}
export const deleteType = (req,res) => {
    cTypes.deleteOne({ _id: req.params.ctypeID}, (err, ctype) => {
        if(err) {
            res.send(err);
        }
        res.json({message: 'successfully deleted type!'});
    });
}