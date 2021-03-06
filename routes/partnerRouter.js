const express = require('express');
const partnerRouter = express.Router();

//root
partnerRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end(`Will send all the partners to you.`);
    })
    .post((req, res) => {
        res.end(`Will add the partners: ${req.body.name} with description: ${req.body.description}`);
    })

    .put((req, res) => {
        res.statusCode = 403;
        res.end('PUT operation not suported on /partners');
    })
    .delete((req, res) => {
        res.end('Deleting all partners');
    });

partnerRouter.route('/:partnerId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader = ('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end(`Will send details of the partner: ${req.params.partnerId} to you!`);
    })
    .post((req, res) => {
        res.statusCode = 403;
        res.end(`POST operation is not supported on /partners/${req.params.partnerId}`);
    })
    .put((req, res) => {
        res.write(`Updating the partner: ${req.params.partnerId}`);
        res.end(`Updated partner: ${req.params.partnerId} for partner name: ${req.body.name} and description of ${req.body.description}`);
    })
    .delete((req, res) => {
        res.end(`Deleting partner: ${req.params.partnerId}`);
    });

module.exports = partnerRouter;

