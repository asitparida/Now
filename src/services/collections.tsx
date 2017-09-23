import * as React from 'react';
import { OutlookMailItems, GoogleMailItems, SlackItems, GithubStats, CompanySlackItems } from './stubs';
import * as Models from './models';
export let GithubCardsCollection: Models.CardsHolder;
export let SlackCardsCollection: Models.CardsHolder;
export let OutlookCardsCollection: Models.CardsHolder;
export let GoogleMailCardsCollection: Models.CardsHolder;
export let CompanySlackCardsCollection: Models.CardsHolder;
const outlook = require('../../node_modules/simple-icons/icons/microsoftoutlook.svg');
const gmail = require('../../node_modules/simple-icons/icons/gmail.svg');
const slack = require('../../node_modules/simple-icons/icons/slack.svg');
const github = require('../../node_modules/simple-icons/icons/github.svg');

// https://pixabay.com/api/videos/?key=6526482-ec59b39ce04ede50e0ed84c36&image_type=photo&pretty=true&editors_choice=true

if (GithubStats.length > 0) {
    let cardCollection = new Models.CardsHolder();
    cardCollection.color = '#181717';
    cardCollection.backgroundColor = '#fcf3d0';
    cardCollection.items = GithubStats;
    cardCollection.title = 'github';
    cardCollection.type = Models.CardHolderType.GIT;
    let outlookUrl = 'url(' + github + ')';
    cardCollection.headerIcon = <div className="card-title-img" style={{ WebkitMaskImage: outlookUrl, backgroundColor: cardCollection.color }} />;
    GithubCardsCollection = cardCollection;
}
if (SlackItems.length > 0) {
    let cardCollection = new Models.CardsHolder();
    cardCollection.color = '#56B68B';
    cardCollection.backgroundColor = '#eef7f3';
    cardCollection.items = SlackItems;
    cardCollection.title = 'lean-case.slack.com';
    cardCollection.type = Models.CardHolderType.SLACK;
    let outlookUrl = 'url(' + slack + ')';
    cardCollection.headerIcon = <div className="card-title-img" style={{ WebkitMaskImage: outlookUrl, backgroundColor: cardCollection.color }} />;
    SlackCardsCollection = cardCollection;
}
if (CompanySlackItems.length > 0) {
    let cardCollection = new Models.CardsHolder();
    cardCollection.color = '#9b59b6';
    cardCollection.backgroundColor = '#f0e7f4';
    cardCollection.items = CompanySlackItems;
    cardCollection.title = 'company.slack.com';
    cardCollection.type = Models.CardHolderType.SLACK;
    let outlookUrl = 'url(' + slack + ')';
    cardCollection.headerIcon = <div className="card-title-img" style={{ WebkitMaskImage: outlookUrl, backgroundColor: cardCollection.color }} />;
    CompanySlackCardsCollection = cardCollection;
}
if (OutlookMailItems.length > 0) {
    let cardCollection = new Models.CardsHolder();
    cardCollection.color = '#0072C6';
    cardCollection.backgroundColor = '#e1f0fa';
    cardCollection.items = OutlookMailItems;
    cardCollection.title = 'Outlook';
    cardCollection.type = Models.CardHolderType.MAILBOX;
    let outlookUrl = 'url(' + outlook + ')';
    cardCollection.headerIcon = <div className="card-title-img" style={{ WebkitMaskImage: outlookUrl, backgroundColor: cardCollection.color }} />;
    OutlookCardsCollection = cardCollection;
}
if (GoogleMailItems.length > 0) {
    let cardCollection = new Models.CardsHolder();
    cardCollection = new Models.CardsHolder();
    cardCollection.color = '#D14836';
    cardCollection.backgroundColor = '#f8e6e3';
    cardCollection.items = GoogleMailItems;
    cardCollection.title = 'Google Mail';
    cardCollection.type = Models.CardHolderType.MAILBOX;
    let outlookUrl = 'url(' + gmail + ')';
    cardCollection.headerIcon = <div className="card-title-img" style={{ WebkitMaskImage: outlookUrl, backgroundColor: cardCollection.color }} />;
    GoogleMailCardsCollection = cardCollection;
}